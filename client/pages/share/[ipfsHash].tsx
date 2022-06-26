import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { useEnsAddress, useSignMessage } from "wagmi";
import Head from "next/head";
import { useState } from "react";
import { getAddress } from "ethers/lib/utils";
import { sign } from "crypto";

import { Stepper, Title, Button } from "../../components/Base";

const Share: NextPage = () => {
  const [friendAddr, setFriendAddr] = useState<string>("");
  const [proof, setProof] = useState("");
  const { data, isError, isLoading } = useEnsAddress({
    name: friendAddr,
  });
  const ensValid = !!data && !isError && !isLoading;
  try {
    var rawAddress : string | undefined = getAddress(friendAddr);
  } catch (error) {
    var rawAddress : string | undefined = undefined;
  }
  const isValid = ensValid || rawAddress;
  const correctAddr = !!rawAddress ? rawAddress : data;

  const canSign = isValid;
  const isOriginator = canSign && !proof;

  const signMessage = (correctAddr + "").toLowerCase();

  const signer = useSignMessage({
    message: signMessage,
  });

  return (
    <>
      <div className="h-screen">
        <Head>
          <title>ETHdos</title>
          <link rel="icon" href="/favicon.ico" />
          <script async src="snarkjs.min.js"></script>
        </Head>

        <div className="flex h-full items-center justify-center text-white">
          <div className="prose max-w-prose">
            <div className="flex justify-between">
              <Stepper>ZK Proof Generation</Stepper>
            </div>

            <Title> ETHdos number </Title>

            <div className="my-5">
              <ConnectButton />
              <div className="">
                <textarea
                  rows={4}
                  name="comment"
                  id="comment"
                  className="block w-full resize-none rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm	p-5"
                  placeholder={"Enter tweet..."}
                  value={proof}
                  onChange={(e) => setProof(e.target.value)}
                />
              </div>
              <input
                type="text"
                placeholder="0xADDRESS"
                value={friendAddr}
                onChange={(e) => setFriendAddr(e.target.value)}
              />
              <text>{isValid ? "Valid address" : "Invalid Address"}</text>
              <Button disabled={!canSign} onClick={() => signer.signMessage()}>
                Sign Message
              </Button>
              <text>Sign Data: {signer.data}</text>
              <Button>Generate Proof</Button>
              <Button>Mint NFT</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
