import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
const DynamicReactJson = dynamic(import("react-json-view"), { ssr: false });

import Head from "next/head";
import { useEffect, useState } from "react";

import { Stepper, Title, Button } from "../../components/Base";
import InfoRow from "../../components/InfoRow";
import Slideover from "../../components/Slideover";
import { checkProof } from "../../lib/generateProof";

enum Stage {
  LOADING = "Loading proof from IPFS...",
  INVALID = "Invalid IPFS hash :(",
  FINISHED = "Proof information",
}

const Share: NextPage = () => {
  const router = useRouter();
  const { ipfsHash } = router.query;

  const [stage, setStage] = useState(Stage.LOADING);
  const [proof, setProof] = useState(null);
  const [pubInputs, setPubInputs] = useState(null);

  const [slideoverOpen, setSlideoverOpen] = useState<boolean>(false);
  const [slideoverContent, setSlideoverContent] = useState<any | null>(null);
  const [slideoverTitle, setSlideoverTitle] = useState<string>("");
  const [verifyStatus, setVerifyStatus] = useState<string>("Verify proof");

  useEffect(() => {
    async function getHash() {
      const resp = await fetch(`/api/getproof/${ipfsHash}`);
      const respData = JSON.parse(await resp.json());

      if (!resp.ok) {
        setStage(Stage.INVALID);
        return;
      }

      setProof(respData.proof);
      setPubInputs(respData.pubInputs);
      setStage(Stage.FINISHED);
    }

    if (ipfsHash) {
      getHash();
    }
  }, [ipfsHash]);

  const openSlideOver = (slideoverContent: any, title: string) => {
    setSlideoverTitle(title);
    setSlideoverContent(slideoverContent);
    setSlideoverOpen(true);
  };

  // const verifyProofInBrowser = async () => {
  //   setVerifyStatus("Verifying...");
  //   try {
  //     const proofVerified = await checkProof(proof, pubInputs);
  //     if (proofVerified) {
  //       setVerifyStatus("Verified ✅");
  //     } else {
  //       setVerifyStatus("Proof is not valid");
  //     }
  //   } catch {
  //     setVerifyStatus("Proof is not valid");
  //   }
  // };

  return (
    <>
      <div className="h-screen">
        <Head>
          <title>ETHdos</title>
          <link rel="icon" href="/favicon.ico" />
          <script async src="snarkjs.min.js"></script>
        </Head>

        <Slideover
          open={slideoverOpen}
          setOpen={setSlideoverOpen}
          title={slideoverTitle}
        >
          {slideoverContent && (
            <DynamicReactJson
              src={slideoverContent}
              name={null}
              indentWidth={2}
              displayDataTypes={false}
            />
          )}
        </Slideover>

        <div className="flex h-full items-center justify-center text-white">
          <div className="w-1/2">
            <Stepper>ETHdos number</Stepper>

            <div className="my-5">
              {stage === Stage.LOADING && <Title>{stage}</Title>}
              {stage === Stage.INVALID && <Title>{stage}</Title>}
              {stage === Stage.FINISHED && (
                <>
                  <Title>{stage}</Title>
                  <InfoRow
                    name="Originator"
                    content={"0x" + BigInt(pubInputs![2]).toString(16)}
                  />
                  <InfoRow
                    name="Your distance"
                    content={parseInt(pubInputs![1]).toString()}
                  />
                  <InfoRow
                    name="Share with others"
                    content={
                      <a href={`http://ethdos.xyz/send/${ipfsHash}`}>
                        ethdos.xyz/send/{ipfsHash}
                      </a>
                    }
                  />
                  <InfoRow
                    name="ZK Proof"
                    content={
                      <span
                        onClick={() => openSlideOver(proof, "ZK Proof")}
                        className="hover:cursor-pointer hover:text-terminal-green"
                      >
                        Click to view
                      </span>
                    }
                  />
                </>
              )}
            </div>
            <div className="py-2">
              {stage === Stage.FINISHED && (
                <Button className="mr-5">Mint NFT</Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;
