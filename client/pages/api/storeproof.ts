import type { NextApiRequest, NextApiResponse } from "next";
import { postToIpfs } from "../../lib/ipfs";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let body = req.body;
  if (typeof req.body === "string") {
    body = JSON.parse(body);
  }
  console.log(`Received request: ${JSON.stringify(body)}`);
  const proof = body.proof;
  const pubInputs: string[] = body.pubInputs;

  try {
    const cid = await postToIpfs(
      JSON.stringify({
        proof: proof,
        pubInputs: pubInputs,
      })
    );
    console.log(`Posted to ipfs: ${cid.toString()}`);
    res.status(200).json({ ipfsHash: cid.toString() });
  } catch (e: any) {
    console.error(e);
    res.status(500).json({ error: e.message });
  }
}
