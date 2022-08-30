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
  useEnsName,
  chain,
  usePrepareContractWrite,
  useAccount,
} from "wagmi";
import { ethers } from "ethers";
import Iconoir from "iconoir/icons/atom.svg";
import Tilt from "react-parallax-tilt";
import NFTSvg from "../nftTemplate";
import Header from "../components/header";
import ReactModal from "react-modal";

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
  const [inspectModalOpen, setInspectModalOpen] = useState<boolean>(false);

  const [verifyStatus, setVerifyStatus] = useState<string>("Check ZK proof");
  const rawAddress =
    pubInputs && pubInputs.length > 3
      ? ethers.utils.getAddress("0x" + BigInt(pubInputs![3]).toString(16))
      : undefined;
  const degree =
    pubInputs && pubInputs.length > 1
      ? parseInt(pubInputs[1]).toString()
      : undefined;
  const { data: ensData } = useEnsName({
    address: rawAddress,
    chainId: chain.mainnet.id,
  });
  const cleanAddress = ensData
    ? ensData
    : rawAddress
    ? rawAddress.slice(0, 4) + "..." + rawAddress.slice(-4)
    : undefined;

  useEffect(() => {
    async function getHash() {
      const resp = await fetch(`/api/getproof/${ipfsHash}`);
      const respData = await resp.json();

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

  const verifyProofInBrowser = async () => {
    setVerifyStatus("Verifying proof...");
    try {
      const proofVerified = await checkProof(proof, pubInputs);
      if (proofVerified) {
        setVerifyStatus("✅ ZK proof verified!");
      } else {
        setVerifyStatus("❌ Verification failed!");
      }
    } catch (e) {
      console.log("verification error", e);
      setVerifyStatus("❌ Verification failed!");
    }
  };

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

  const { connector: activeConnector, isConnected } = useAccount();
  const {
    connect,
    connectors,
    error,
    isLoading: isConnectLoading,
    pendingConnector,
  } = useConnect();

  //snarkjs.groth16ExportSolidityCallData(proof, pubInputs);

  const { config } = usePrepareContractWrite({
    addressOrName: "0x2A0F14D7E66F1b7eFe53777C3655df66790eD795",
    contractInterface: mintAbi,
    functionName: "mint",
    args: solidityData,
  });
  const { data, isLoading, isSuccess, isError, write } =
    useContractWrite(config);

  console.log("proof", proof);
  console.log("pubInputs", pubInputs);
  console.log("solidityData", solidityData);
  console.log("isConnected", isConnected);
  console.log("data", data);
  console.log("isError", isError);
  console.log("isLoading", isLoading);
  console.log("write", write);
  console.log("lol");
  console.log("ensData", ensData);

  const getFriendShipDist = (degree: string) => {
    const degreeNum = parseInt(degree);
    const friends = Array(degreeNum).fill("a friend");
    const friendsString = friends.join(" of ");
    return friendsString;
  };

  const sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  return (
    <>
      <div className="min-h-screen h-full bg-[url('/gradient.jpeg')] bg-no-repeat bg-auto">
        <Head>
          <title>ETHdos</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Space+Mono"
          />
          <script src="/snarkjs.min.js"></script>
        </Head>
        <Header isConnected={isConnected} />

        <div className="container mt-3 m-auto align-center place-content-center justify-items-center place-self-center place-items-center">
          <section>
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 justify-center align-center">
              <div className="grid grid-cols-1 gap-72 lg:gap-16 lg:grid-cols-2">
                <div className="relative h-64 rounded-lg sm:h-80 lg:h-full lg:order-last mb-1">
                  <Tilt
                    className="tilt-img"
                    tiltMaxAngleX={7}
                    tiltMaxAngleY={15}
                    perspective={800}
                    scale={1}
                    transitionSpeed={2000}
                    gyroscope={true}
                  >
                    <NFTSvg
                      originAddress={
                        "0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045"
                      }
                      sinkAddress={rawAddress || ""}
                      degree={degree || ""}
                    />
                  </Tilt>
                </div>

                <div className="lg:pt-4">
                  <h2 className="text-3xl font-bold sm:text-4xl text-black">
                    ETHdos Number {degree}
                  </h2>

                  <p className="mt-4 text-gray-600">
                    👀 {cleanAddress} has a zero-knowledge proof showing that
                    they are {getFriendShipDist(degree || "0") + " "}
                    (degree {degree}) of Vitalik.
                  </p>

                  <p className="mt-4 text-gray-600">
                    🤫 However, the ZK proof does not reveal the intermediate
                    path between Vitalik and {cleanAddress}, not even to{" "}
                    {cleanAddress} or Vitalik themselves!
                  </p>

                  <div>
                    <button
                      className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                      onClick={() => {
                        if (verifyStatus === "Check ZK proof") {
                          verifyProofInBrowser();
                        }
                      }}
                    >
                      <span className="text-sm font-medium">
                        {verifyStatus}
                      </span>
                    </button>
                    <button
                      className="text-sm font-medium ml-8 hover:text-gray-500/75 text-black"
                      onClick={() => setInspectModalOpen(true)}
                    >
                      ↗ Inspect ZK proof
                    </button>
                    <ReactModal
                      isOpen={inspectModalOpen}
                      ariaHideApp={false}
                      onRequestClose={(e) => setInspectModalOpen(false)}
                    >
                      <button
                        className="mb-4 text-sm font-medium border-black-600 justify-right mr-0 ml-auto block align-right text-black hover:text-gray-500/75"
                        onClick={() => setInspectModalOpen(false)}
                      >
                        Close
                      </button>
                      <div className="text-sm font-medium space-y-4">
                        This data is enough to verify your claim without the
                        verifier learning any other information about your
                        claim:
                        <pre className="mt-4">
                          {JSON.stringify(proof, null, 2)}
                        </pre>
                      </div>
                    </ReactModal>
                  </div>

                  <div tabIndex={0} className="collapse mt-5">
                    <input type="checkbox" />
                    <div className="collapse-title font-medium mt-2 p-0 text-gray-600 hover:text-gray-500/75">
                      ↓ Are you {cleanAddress}?
                    </div>
                    <div className="collapse-content p-0">
                      <div className="grid grid-cols-1 space-y-4">
                        <a href={"/send/" + ipfsHash}>
                          <div className="min-h-76 inline-flex items-center px-6 py-4 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring">
                            <span className="text-sm font-medium text-center">
                              Expand the graph
                            </span>
                          </div>
                        </a>

                        {!isConnected && (
                          <div>
                            <ConnectButton.Custom>
                              {({
                                account,
                                chain,
                                openAccountModal,
                                openChainModal,
                                openConnectModal,
                                authenticationStatus,
                                mounted,
                              }) => {
                                // Note: If your app doesn't use authentication, you
                                // can remove all 'authenticationStatus' checks
                                const ready =
                                  mounted && authenticationStatus !== "loading";
                                const connected =
                                  ready &&
                                  account &&
                                  chain &&
                                  (!authenticationStatus ||
                                    authenticationStatus === "authenticated");

                                return (
                                  <div
                                    {...(!ready && {
                                      "aria-hidden": true,
                                      style: {
                                        opacity: 0,
                                        pointerEvents: "none",
                                        userSelect: "none",
                                      },
                                    })}
                                  >
                                    {(() => {
                                      if (!connected) {
                                        return (
                                          <button
                                            onClick={openConnectModal}
                                            type="button"
                                            className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                                          >
                                            <span className="text-sm font-medium">
                                              Connect wallet &amp; mint NFT
                                            </span>
                                          </button>
                                        );
                                      }

                                      if (chain.unsupported) {
                                        return (
                                          <button
                                            onClick={openChainModal}
                                            type="button"
                                            className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                                          >
                                            <span className="text-sm font-medium">
                                              Wrong network
                                            </span>
                                          </button>
                                        );
                                      }

                                      return (
                                        <div
                                          style={{ display: "flex", gap: 12 }}
                                        >
                                          <button
                                            onClick={openChainModal}
                                            style={{
                                              display: "flex",
                                              alignItems: "center",
                                            }}
                                            type="button"
                                          >
                                            {chain.hasIcon && (
                                              <div
                                                style={{
                                                  background:
                                                    chain.iconBackground,
                                                  width: 12,
                                                  height: 12,
                                                  borderRadius: 999,
                                                  overflow: "hidden",
                                                  marginRight: 4,
                                                }}
                                              >
                                                {chain.iconUrl && (
                                                  <img
                                                    alt={
                                                      chain.name ?? "Chain icon"
                                                    }
                                                    src={chain.iconUrl}
                                                    style={{
                                                      width: 12,
                                                      height: 12,
                                                    }}
                                                  />
                                                )}
                                              </div>
                                            )}
                                            {chain.name}
                                          </button>

                                          <button
                                            onClick={openAccountModal}
                                            type="button"
                                          >
                                            {account.displayName}
                                            {account.displayBalance
                                              ? ` (${account.displayBalance})`
                                              : ""}
                                          </button>
                                        </div>
                                      );
                                    })()}
                                  </div>
                                );
                              }}
                            </ConnectButton.Custom>
                          </div>
                        )}

                        {isConnected && (
                          <button
                            className="d-block ml-0 mr-auto"
                            onClick={async () => {
                              if (isError) {
                                console.log("errored loading");
                              }
                              while (isLoading) {
                                await sleep(500);
                              }
                              write!();
                            }}
                          >
                            <div className="min-h-76 inline-flex items-center px-6 py-4 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring">
                              <span className="text-sm font-medium">
                                Mint NFT
                              </span>
                            </div>
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Share;
