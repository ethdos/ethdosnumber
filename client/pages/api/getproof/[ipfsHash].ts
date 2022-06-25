import type { NextApiRequest, NextApiResponse } from "next";

import { readFromIpfs } from "../../../lib/ipfs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { ipfsHash } = req.query;
  console.log(`Received request: ${JSON.stringify(ipfsHash)}`);
  try {
    const data = await readFromIpfs(ipfsHash.toString());
    console.log(`Got data from ipfs: ${data}`);
    res.status(200).json(data);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
}
