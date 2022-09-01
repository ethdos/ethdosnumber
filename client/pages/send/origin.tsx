import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import Head from "next/head";
import { useEffect, useState } from "react";

import { Stepper, Title, Button } from "../../components/Base";
import InfoRow from "../../components/InfoRow";
import Slideover from "../../components/Slideover";
import {
  checkProof,
  fetchSolidityData,
  generateProofInputs,
  postData,
  ORIGIN_ADDRESS,
} from "../../lib/generateProof";
import {
  useProvider,
  useContractWrite,
  useConnect,
  useContractRead,
  useEnsName,
  chain,
  usePrepareContractWrite,
  useAccount,
  useEnsAddress,
  useSignMessage,
} from "wagmi";
import { ethers } from "ethers";
import Iconoir from "iconoir/icons/atom.svg";
import Tilt from "react-parallax-tilt";
import NFTSvg from "../nftTemplate";
import Header from "../components/header";
import Image from "next/image";

// const snarkjs = require("snarkjs");

enum Stage {
  FINISHED,
  CONNECTED_WALLET,
  ENTERED_ADDRESS,
  SIGNED_MESSAGE,
  GENERATING_PROOF,
  DONE,
  ERROR,
}

const Share: NextPage = () => {
  const backendUrl = "https://backend.ethdos.xyz/";

  const [stage, setStage] = useState<any>(Stage.FINISHED);
  const [originalPubInputs, setOriginalPubInputs] = useState<any>(null);

  const [verifyStatus, setVerifyStatus] = useState<string>("Verify proof");
  const rawAddress =
    originalPubInputs && originalPubInputs.length > 3
      ? ethers.utils.getAddress(
          "0x" + BigInt(originalPubInputs![3]).toString(16)
        )
      : undefined;
  const degree =
    originalPubInputs && originalPubInputs.length > 1
      ? parseInt(originalPubInputs[1]).toString()
      : undefined;
  const [friendInput, setFriendInput] = useState<string>("");
  const [parsedFriendInput, setParsedFriendInput] = useState<string>("");
  const [parseError, setParseError] = useState<string>("");
  const [sinkIpfsHash, setSinkIpfsHash] = useState<string>("");
  const ensReverseAddr = useEnsAddress({
    name: friendInput,
    chainId: 1,
  });
  const signatureMessage =
    "ETHdos friend: " + (parsedFriendInput + "").toLowerCase();
  const signer = useSignMessage();
  const parsedFriendInputNormalised = parsedFriendInput
    ? ethers.utils.getAddress(parsedFriendInput)
    : "";
  const { data: ensFriendData } = useEnsName({
    address: parsedFriendInputNormalised,
    chainId: chain.mainnet.id,
  });
  const cleanFriendAddress = ensFriendData
    ? ensFriendData
    : parsedFriendInputNormalised
    ? parsedFriendInputNormalised.slice(0, 4) +
      "..." +
      parsedFriendInputNormalised.slice(-4)
    : undefined;

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

  const parseAddressOrENS = async () => {
    while (ensReverseAddr.isLoading) {
      await sleep(500);
    }
    console.log("not loading");
    if (ensReverseAddr.data) {
      setParseError("");
      setParsedFriendInput(ensReverseAddr.data);
      const ensSignatureMessage =
        "ETHdos friend: " + ensReverseAddr.data.toLowerCase();
      return ensSignatureMessage;
    } else if (ethers.utils.isAddress(friendInput)) {
      setParseError("");
      setParsedFriendInput(ethers.utils.getAddress(friendInput).toLowerCase());
      const normalSignatureMessage =
        "ETHdos friend: " + ethers.utils.getAddress(friendInput).toLowerCase();
      return normalSignatureMessage;
    } else {
      setParseError("Invalid address or ENS name");
      setParsedFriendInput("");
      return "";
    }
  };

  const sleep = (milliseconds: number) => {
    return new Promise((resolve) => setTimeout(resolve, milliseconds));
  };

  const generateZKProof = async () => {
    if (parseError != "") {
      return;
    }
    const signatureMessage =
      "ETHdos friend: " + (parsedFriendInput + "").toLowerCase();
    const inputs = generateProofInputs(
      undefined,
      undefined,
      parsedFriendInput,
      signer.data,
      signatureMessage
    );
    console.log("inputs", inputs);
    if (!inputs) return;

    // send api post request to generate proof
    const returnData = await postData(backendUrl + "generate_proof", inputs);
    console.log("setting Stage to generating");
    setStage(Stage.GENERATING_PROOF);
    if (!returnData.ok) {
      setStage(Stage.ERROR);
      return;
    }
    const returnJSON = await returnData.json();
    if (!(returnJSON && returnJSON["id"])) {
      setStage(Stage.ERROR);
      return;
    }

    const processId = returnJSON["id"];
    console.log("processId", processId);
    const intervalId = setInterval(async () => {
      const res = await postData(backendUrl + "result", { id: processId });
      if (res.status === 200) {
        const json = await res.json();
        console.log("json", json);
        if (!json || "result" in json) {
          if (
            json["result"].includes("failed") &&
            json["result"].includes("ERROR")
          ) {
            console.log("error", res);
            clearInterval(intervalId);
            setStage(Stage.ERROR);
          }
        } else {
          clearInterval(intervalId);
          const resp = await fetch("/api/storeproof", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              proof: json.proof,
              pubInputs: json.pubInputs,
            }),
          });
          const respData = await resp.json();
          setSinkIpfsHash(respData["ipfsHash"]);
          setStage(Stage.DONE);
        }
      } else {
        console.log("error", res);
        clearInterval(intervalId);
        setStage(Stage.ERROR);
      }
    }, 10000);
  };

  const {
    connector: activeConnector,
    isConnected,
    address: walletConnectedAddress,
  } = useAccount();
  console.log("activeConnector", activeConnector);
  const {
    connect,
    connectors,
    error,
    isLoading: isConnectLoading,
    pendingConnector,
  } = useConnect({ connector: activeConnector });

  //snarkjs.groth16ExportSolidityCallData(proof, pubInputs);

  useEffect(() => {
    console.log("isConnected", isConnected);
    if (isConnected && stage < Stage.CONNECTED_WALLET) {
      setStage(Stage.CONNECTED_WALLET);
    }
  }, [isConnected, stage]);

  console.log("pubInputs", originalPubInputs);
  console.log("isConnected", isConnected);
  console.log("lol");
  console.log("ensData", cleanFriendAddress);

  const getFriendShipDist = (degree: string) => {
    const degreeNum = parseInt(degree);
    const friends = Array(degreeNum).fill("a friend");
    const friendsString = friends.join(" of ");
    return friendsString;
  };

  useEffect(() => {
    if (signer.data) {
      console.log("setting stage to SIGNED_MESSAGE");
      if (stage < Stage.SIGNED_MESSAGE) setStage(Stage.SIGNED_MESSAGE);
    }
  }, [signer]);

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
          {/* <script src="snarkjs.min.js"></script> */}
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
                      originAddress={ORIGIN_ADDRESS}
                      sinkAddress={rawAddress || ORIGIN_ADDRESS}
                      degree={degree || "0"}
                    />
                  </Tilt>
                </div>

                {stage == Stage.FINISHED && (
                  <div className="lg:pt-4">
                    <h2 className="text-3xl font-bold sm:text-4xl text-black">
                      Start the ETHdos graph
                    </h2>

                    <p className="mt-4 text-gray-600">
                      🧙‍♂️ You have been granted infinite power to steward the
                      ETHdos graph. Use your power to build the graph wisely.
                    </p>

                    <p className="mt-4 text-gray-600">
                      👯 Invite a friend to be the first link in the chain,
                      assigning them degree {parseInt(degree || "0") + 1}.
                    </p>

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
                                        Connect wallet to begin
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
                                  <div style={{ display: "flex", gap: 12 }}>
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
                                            background: chain.iconBackground,
                                            width: 12,
                                            height: 12,
                                            borderRadius: 999,
                                            overflow: "hidden",
                                            marginRight: 4,
                                          }}
                                        >
                                          {chain.iconUrl && (
                                            <Image
                                              alt={chain.name ?? "Chain icon"}
                                              src={chain.iconUrl}
                                              style={{ width: 12, height: 12 }}
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
                    {error && <div>{error.message}</div>}
                  </div>
                )}
                {stage == Stage.CONNECTED_WALLET && (
                  <div className="lg:pt-4">
                    <h2 className="text-3xl font-bold sm:text-4xl text-black">
                      Start the ETHdos graph
                    </h2>

                    <p className="mt-4 text-gray-600">
                      🧙‍♂️ You have been granted infinite power to steward the
                      ETHdos graph. Use your power to build the graph wisely.
                    </p>

                    <p className="mt-4 text-gray-600">
                      👯 Invite a friend to be the first link in the chain,
                      assigning them degree {parseInt(degree || "0") + 1}.
                    </p>

                    <div>
                      <div className="mt-4 form-control w-full">
                        <label className="label">
                          <span className="label-text text-gray-600">
                            Enter your friend&rsquo;s address or ENS name:
                          </span>
                        </label>
                        <input
                          type="text"
                          placeholder="Type here"
                          className="input input-bordered w-full max-w-xs bg-[#F7F5F2] text-gray-500"
                          value={friendInput}
                          onChange={(e) => {
                            setFriendInput(e.target.value);
                          }}
                        />
                        <label className="label">
                          <span className="label-text-alt text-red-600">
                            {parseError}
                          </span>
                        </label>
                      </div>
                    </div>
                    <div>
                      <button
                        className="inline-flex items-center px-8 py-3 mt-4 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                        onClick={async () => {
                          const proceed = await parseAddressOrENS();
                          if (proceed === "") {
                            return;
                          }
                          signer.signMessage({ message: proceed });
                        }}
                      >
                        <span className="text-sm font-medium">
                          Authenticate friendship
                        </span>
                      </button>
                    </div>
                  </div>
                )}
                {(stage == Stage.SIGNED_MESSAGE ||
                  stage == Stage.GENERATING_PROOF) && (
                  <div className="lg:pt-4">
                    <h2 className="text-3xl font-bold sm:text-4xl text-black">
                      Start the ETHdos graph
                    </h2>

                    <p className="mt-4 text-gray-600">
                      🧙‍♂️ You have been granted infinite power to steward the
                      ETHdos graph. You have now chosen to extend this chain by
                      inviting {cleanFriendAddress}, assigning them degree{" "}
                      {parseInt(degree || "0") + 1}.
                    </p>

                    <p className="mt-4 text-gray-600">
                      🎰 Kick off the proof generation on the remote SNARK
                      proving server when you are ready. Generation will take a
                      while (upto 20 minutes). Leave the tab open in the
                      background in the meantime.
                    </p>

                    <div>
                      <button
                        className="inline-flex items-center px-8 py-3 mt-4 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                        onClick={() => {
                          generateZKProof();
                        }}
                      >
                        <span className="text-sm font-medium">
                          {stage == Stage.GENERATING_PROOF
                            ? "Generating ZK proof..."
                            : "Generate ZK proof"}
                        </span>
                      </button>
                    </div>
                  </div>
                )}
                {stage == Stage.DONE && (
                  <div className="lg:pt-4">
                    <h2 className="text-3xl font-bold sm:text-4xl text-black">
                      ETHdos graph expanded
                    </h2>

                    <p className="mt-4 text-gray-600">
                      ⛓️ The proof generation is complete. {cleanFriendAddress}{" "}
                      has been assigned degree {parseInt(degree || "0") + 1}.
                      Checkout their ETHdos number page and share it with them:
                    </p>

                    <div>
                      <button
                        className="inline-flex items-center px-8 py-3 mt-4 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring"
                        onClick={() => {
                          window.open(
                            "https://ethdos.xyz/share/" + sinkIpfsHash,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }}
                      >
                        <span className="text-sm font-medium">
                          ↗ Checkout their ETHdos page and share it with them
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
              {isConnected && walletConnectedAddress !== ORIGIN_ADDRESS && (
                <span className="text-sm font-medium text-center text-red-600">
                  Connected account does not match proof address
                </span>
              )}
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default Share;
