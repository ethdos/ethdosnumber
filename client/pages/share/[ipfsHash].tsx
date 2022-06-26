import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import { useEnsAddress, useSignMessage } from "wagmi";
import Head from "next/head";
import { useEffect, useState } from "react";
import { getAddress } from "ethers/lib/utils";

import { Stepper, Title, Button } from "../../components/Base";

const Share: NextPage = () => {
  const router = useRouter();
  const { ipfsHash } = router.query;

  const [proof, setProof] = useState(null);

  useEffect(() => {
    async function getHash() {
      const resp = await fetch(`/api/getproof/${ipfsHash}`);
      const respData = JSON.parse(await resp.json());

      if (!resp.ok) {
        return;
      }

      setProof(respData.proof);
    }

    if (ipfsHash) {
      getHash();
    }
  }, [ipfsHash]);

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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
