import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import Head from "next/head";
import { useEffect, useState } from "react";

import { Stepper, Title, Button } from "../../components/Base";
import InfoRow from "../../components/InfoRow";
import Slideover from "../../components/Slideover";
import { checkProof, fetchSolidityData } from "../../lib/generateProof";
import {
  useProvider,
  useContractWrite,
  useConnect,
  useContractRead,
} from "wagmi";
import { ethers } from "ethers";
import Iconoir from "iconoir/icons/atom.svg";
import Tilt from "react-parallax-tilt";

// const snarkjs = require("snarkjs");

enum Stage {
  LOADING = "Loading proof from IPFS...",
  INVALID = "Invalid IPFS hash :(",
  FINISHED = "Proof information",
}

const Share: NextPage = () => {
  const router = useRouter();
  const { ipfsHash } = router.query;

  const [stage, setStage] = useState<any>(Stage.LOADING);
  const [proof, setProof] = useState<any>(null);
  const [pubInputs, setPubInputs] = useState<any>(null);

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

  const mintAbi = [
    {
      inputs: [
        {
          internalType: "uint256[2]",
          name: "a",
          type: "uint256[2]",
        },
        {
          internalType: "uint256[2][2]",
          name: "b",
          type: "uint256[2][2]",
        },
        {
          internalType: "uint256[2]",
          name: "c",
          type: "uint256[2]",
        },
        {
          internalType: "uint256[4]",
          name: "signals",
          type: "uint256[4]",
        },
      ],
      name: "mint",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
    },
  ];

  const provider = useProvider();
  console.log("provider", provider);

  // const solidityData = mintNftHelper(proof, pubInputs);
  const solidityData =
    proof && pubInputs ? fetchSolidityData(proof, pubInputs) : [];

  const { isConnected } = useConnect();

  //snarkjs.groth16ExportSolidityCallData(proof, pubInputs);
  const { data, isError, isLoading, write } = useContractWrite(
    {
      addressOrName: "0x2A0F14D7E66F1b7eFe53777C3655df66790eD795",
      contractInterface: mintAbi,
    },
    "mint",
    {
      args: solidityData,
    }
  );

  console.log("proof", proof);
  console.log("pubInputs", pubInputs);
  console.log("solidityData", solidityData);
  console.log("isConnected", isConnected);
  console.log("data", data);
  console.log("isError", isError);
  console.log("isLoading", isLoading);
  console.log("write", write);
  console.log("lol");

  return (
    <>
      <div className="h-screen bg-[url('/gradient.jpeg')] bg-repeat-y">
        <Head>
          <title>ETHdos</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Space+Mono"
          />
          {/* <script src="snarkjs.min.js"></script> */}
        </Head>
        <header>
          <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex-1 md:flex md:items-center md:gap-12">
                <a
                  className="block text-black hover:text-gray-500/75 mt-5"
                  href="/"
                >
                  <span className="sr-only">Home</span>
                  <svg
                    width="48"
                    stroke-width="1.5"
                    height="48"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.40434 13.6099C3.51517 13.1448 3 12.5924 3 12C3 10.3431 7.02944 9 12 9C16.9706 9 21 10.3431 21 12C21 12.7144 20.2508 13.3705 19 13.8858"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12 11.01L12.01 10.9989"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M16.8827 6C16.878 4.97702 16.6199 4.25309 16.0856 3.98084C14.6093 3.22864 11.5832 6.20912 9.32664 10.6379C7.07005 15.0667 6.43747 19.2668 7.91374 20.019C8.44117 20.2877 9.16642 20.08 9.98372 19.5"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9.60092 4.25164C8.94056 3.86579 8.35719 3.75489 7.91369 3.98086C6.43742 4.73306 7.06999 8.93309 9.32658 13.3619C11.5832 17.7907 14.6092 20.7712 16.0855 20.019C17.3977 19.3504 17.0438 15.9577 15.3641 12.1016"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>

              <div className="md:flex md:items-center md:gap-12 mt-5">
                <nav
                  className="hidden md:block"
                  aria-labelledby="header-navigation"
                >
                  <ul className="flex items-center gap-10 text-sm">
                    <li>
                      <a
                        className="text-black transition hover:text-gray-500/75 mt-5"
                        href="/"
                      >
                        CODE
                      </a>
                    </li>

                    <li>
                      <a
                        className="text-black transition hover:text-gray-500/75 mt-5"
                        href="/"
                      >
                        ABOUT
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </header>

        <div className="container mt-3 mb-2 pb-1">
          <section>
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2">
                <div className="relative h-64 rounded-lg sm:h-80 lg:h-full lg:order-last">
                  <Tilt
                    className="tilt-img"
                    tiltMaxAngleX={7}
                    tiltMaxAngleY={15}
                    perspective={800}
                    scale={1}
                    transitionSpeed={2000}
                    gyroscope={true}
                  >
                    <img
                      className="absolute inset-y-0 right-20"
                      src="/test.svg"
                    />
                  </Tilt>
                </div>

                <div className="lg:pt-12">
                  <h2 className="text-3xl font-bold sm:text-4xl text-black">
                    ETHdos Number 4
                  </h2>

                  <p className="mt-4 text-gray-600">
                    👀 nibnalin.eth has a zero-knowledge proof showing that they
                    are a friend of a friend of a friend of a friend (degree 4)
                    of Vitalik.
                  </p>

                  <p className="mt-4 text-gray-600">
                    🤫 However, the ZK proof does not reveal the intermediate
                    path between Vitalik and nibnalin.eth, not even to
                    nibnalin.eth or Vitalik themselves!
                  </p>

                  <div>
                    <a
                      className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                      href="/get-started"
                    >
                      <span className="text-sm font-medium">
                        Check ZK proof
                      </span>
                    </a>
                    <a
                      className="text-sm font-medium ml-8 hover:text-gray-500/75 text-black"
                      href="/get-started"
                    >
                      ↗ Inspect ZK proof
                    </a>
                  </div>

                  <div tabIndex={0} className="collapse mt-5">
                    <div className="collapse-title font-medium mt-2 p-0 text-gray-600 hover:text-gray-500/75">
                      ↓ Are you nibnalin.eth?
                    </div>
                    <div className="collapse-content">
                      <a
                        className="inline-flex items-center px-8 py-3 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                        href="/get-started"
                      >
                        <span className="text-sm font-medium">
                          Expand the graph
                        </span>
                      </a>
                      <a
                        className="ml-8 inline-flex items-center px-8 py-3 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                        href="/get-started"
                      >
                        <span className="text-sm font-medium">
                          Connect wallet &amp; mint NFT
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* <div className="flex h-full items-center justify-center text-white">
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
                      <a href={`http://ethdos.xyz/share/${ipfsHash}`}>
                        ethdos.xyz/share/{ipfsHash}
                      </a>
                    }
                  />
                </>
              )}
            </div>
            <div className="py-2">
              {stage === Stage.FINISHED && (
                <>
                  <ConnectButton />
                  <br />
                  <Button onClick={() => write()} className="mr-5">
                    Mint NFT
                  </Button>
                </>
              )}
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Share;
