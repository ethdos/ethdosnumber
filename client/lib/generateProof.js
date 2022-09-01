/* global BigInt */
import { mimcHash } from "./mimc";
import bigInt from "big-integer";
import { ethers } from "ethers";

const fromHexString = (hexString) =>
  new Uint8Array(hexString.match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));

const intToHex = (intString) => ethers.BigNumber.from(intString).toHexString();

export const hexStringTobigInt = (hexString) => {
  return Uint8Array_to_bigint(fromHexString(hexString));
};

export async function postData(url = "", data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: [["Content-Type", "application/json"]],
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response; // parses JSON response into native JavaScript objects
}

// bigendian
function bigint_to_Uint8Array(x) {
  var ret = new Uint8Array(64);
  for (var idx = 63; idx >= 0; idx--) {
    ret[idx] = Number(x % 256n);
    x = x / 256n;
  }
  return ret;
}

// bigendian
function Uint8Array_to_bigint(x) {
  var ret = 0n;
  for (var idx = 0; idx < x.length; idx++) {
    ret = ret * 256n;
    ret = ret + BigInt(x[idx]);
  }
  return ret;
}

function bigint_to_tuple(x) {
  // 2 ** 86
  x = BigInt(x);
  let mod = 77371252455336267181195264n;
  let ret = [0n, 0n, 0n];

  var x_temp = x;
  for (var idx = 0; idx < 3; idx++) {
    ret[idx] = x_temp % mod;
    x_temp = x_temp / mod;
  }
  return ret;
}

function bigint_to_array(n, k, x) {
  let mod = 1n;
  for (var idx = 0; idx < n; idx++) {
    mod = mod * 2n;
  }

  let ret = [];
  var x_temp = x;
  for (var idx = 0; idx < k; idx++) {
    ret.push(x_temp % mod);
    x_temp = x_temp / mod;
  }
  return ret;
}

const getPublicKey = (signatureString, signText) => {
  const msgHash = ethers.utils.hashMessage(signText);
  const publicKey = ethers.utils.recoverPublicKey(
    msgHash,
    ethers.utils.arrayify(signatureString)
  );
  return publicKey;
};

function parsePubkey(pk) {
  const sliced_pk = pk.slice(4);
  const pk_x_hex = sliced_pk.slice(0, 64);
  const pk_y_hex = sliced_pk.slice(64, 128);
  const pk_x_bigint = hexStringTobigInt(pk_x_hex);
  const pk_y_bigint = hexStringTobigInt(pk_y_hex);
  const pk_x_arr = bigint_to_array(64, 4, pk_x_bigint);
  const pk_y_arr = bigint_to_array(64, 4, pk_y_bigint);
  console.log("pk stuff", pk, pk_x_arr, pk_y_arr);
  return [pk_x_arr, pk_y_arr];
}

function parseSignature(sig) {
  console.log("sig", sig);
  const r_hex = sig.slice(2, 66);
  const s_hex = sig.slice(66, 66 + 64);
  // console.log("sig stuff", sig_arr.length, sig_arr);
  var r_bigint = hexStringTobigInt(r_hex);
  var s_bigint = hexStringTobigInt(s_hex);
  var r_array = bigint_to_array(64, 4, r_bigint);
  var s_array = bigint_to_array(64, 4, s_bigint);
  console.log("s_bigint", s_bigint);
  return [r_array, s_array];
}

export function generateProofInputs(
  originProofJson,
  originPubInputs,
  friendAddress,
  signatueString,
  signText
) {
  console.log("originProofJson", originProofJson);
  const [r_array, s_array] = parseSignature(signatueString);
  const proverPubkey = getPublicKey(signatueString, signText);
  const [pubkey_x, pubkey_y] = parsePubkey(proverPubkey);

  const friendAddressBigInt = hexStringTobigInt(friendAddress);
  const input = {
    r: r_array.map((x) => x.toString()),
    s: s_array.map((x) => x.toString()),
    sourcePubkey: [
      pubkey_x.map((x) => x.toString()),
      pubkey_y.map((x) => x.toString()),
    ],
    sinkAddress: friendAddressBigInt.toString(),
    proof: originProofJson,
    pubInputs: originPubInputs,
  };
  console.log(input);
  return input;
}

export const getVerificationKey = async () => {
  return await fetch("/verification_key.json").then(function (res) {
    return res.json();
  });
};

export const checkProof = async function (proof, publicSignals) {
  const vKey = await getVerificationKey();
  console.log("vKey", vKey);

  if (
    publicSignals[0] !==
    "11642711455315657037619325453283726029571464969592491499732195523426936339829"
  ) {
    return false;
  }
  if (
    ethers.utils.getAddress(
      ethers.BigNumber.from(publicSignals[2]).toHexString()
    ) !== ORIGIN_ADDRESS
  ) {
    return false;
  }

  const res = await snarkjs.groth16.verify(vKey, publicSignals, proof);
  return res;
};

// export const mintNftHelper = async (proof, pubInputs) => {
//   const data = await require(snarkjs).groth16ExportSolidityCallData(proof, pubInputs);
//   return data;
// }

export const fetchSolidityData = (proof, pub) => {
  const x = [
    [intToHex(proof.pi_a[0]), intToHex(proof.pi_a[1])],
    [
      [intToHex(proof.pi_b[0][1]), intToHex(proof.pi_b[0][0])],
      [intToHex(proof.pi_b[1][1]), intToHex(proof.pi_b[1][0])],
    ],
    [intToHex(proof.pi_c[0]), intToHex(proof.pi_c[1])],
    pub.map((x) => intToHex(x)),
  ];
  return x;
};

export const ORIGIN_ADDRESS = "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045";
export const ORIGIN_NAME = "Vitalik";
export const CONTRACT_ADDRESS = "0xf101Ae7617Cd4AD110ff2e531CBAf6163108d737";
export const RANDOM_ADDRESSES = [
  "0xF05b5f04B7a77Ca549C0dE06beaF257f40C66FDB",
  "0xBb483e8976CD690aC5f1E82bCC1f3a32012CcC97",
  "0xA812c854be9e3558B4F5FDcC83Eb3c9F53c27b23",
  "0xDf47405E903f58F6FaddEcD10da36aa8712E6239",
  "0xB6510c1b362728b334AA92e64DFcAb4f3e04054b",
  "0x24469D4771A7F0607184DCcba118468ddaba5354",
  "0x5820092954D52dbD82b4cE5fA87B1AE87951290d",
  "0x22d913d8A3920EC9349d174b815Ff39Aee78Ba42",
  "0x35881E8C23fABDf1C52B9fd4d7f84fE6118C916B",
  "0x9a57D792CC04a7bCEB5D1f8b1B7AF5F8e5695E54",
  "0x4eaB0fA55a6c71c0c23BD0E67C06682b4Ce78A7f",
  "0x58e50c14a4c3018f6053A8731bCCEA72Fd9c0c96",
];
