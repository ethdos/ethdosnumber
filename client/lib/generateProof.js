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
  return input;
}

export const getVerificationKey = async () => {
  return await fetch("./verification_key.json").then(function (res) {
    return res.json();
  });
};

export const checkProof = async function (proof, publicSignals) {
  const vKey = await getVerificationKey();

  const res = await snarkjs.groth16.verify(vKey, publicSignals, proof);
  return res;
};
