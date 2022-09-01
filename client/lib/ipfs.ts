import { create } from "ipfs-http-client";

const infuraProjectId = "27gFFJHH3Wao71b1vrxtGiaNVS9";
const infuraProjectSecret = "715e7c280a49ce2792d95571758c8c85";
const infuraBase = "https://exgrasia.infura-ipfs.io/ipfs/";

const auth =
  "Basic " +
  Buffer.from(infuraProjectId + ":" + infuraProjectSecret).toString("base64");

function createIpfs() {
  const ipfs = create({
    url: "https://ipfs.infura.io:5001",
    headers: {
      authorization: auth,
    },
  });
  return ipfs;
}

export async function postToIpfs(message: string) {
  const ipfs = createIpfs();

  // TODO: pin?
  const { cid } = await ipfs.add(message);
  return cid;
}

export async function readFromIpfs(cid: string) {
  const ipfs = infuraBase + cid;
  const response = await (await fetch(ipfs)).json();
  return response;
}
