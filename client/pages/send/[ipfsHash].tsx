import { useEffect, useState } from "react";

import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEnsAddress, useSignMessage } from "wagmi";
import { getAddress } from "ethers/lib/utils";
import {
  generateProofInputs,
  hexStringTobigInt,
  postData,
} from "../../lib/generateProof";
import { Stepper, Title, Button } from "../../components/Base";
import LoadingText from "../../components/LoadingText";
import InfoRow from "../../components/InfoRow";

enum Stage {
  LOADING = "Loading...",
  INVALID = "Invalid IPFS hash :(",
  PASTEPROOF = "Paste in your proof...",
  ADDRESS = "Choose an address or ENS name to send to...",
  ORIGIN = "You are the origin! Choose an address or ENS name to send to...",
  GENERATING = "Generating...",
  ERROR = "Error on server, retry later :(",
  FINISHED = "Finished!",
}

const backendUrl = "https://backend.ethdos.xyz/";

const Send: NextPage = () => {
  const router = useRouter();
  const { ipfsHash } = router.query;
  const [stage, setStage] = useState<Stage>(Stage.LOADING);

  const [originalProof, setOriginalProof] = useState(null);
  const [validOriginalProof, setValidOriginalProof] = useState(false);
  const [originalPubInputs, setOriginalPubInputs] = useState<null | string[]>(
    null
  );
  const [originator, setOriginator] = useState<string>("");
  const [degree, setDegree] = useState<number>(0);

  const [proof, setProof] = useState(null);
  const [pubInputs, setPubInputs] = useState(null);

  const [sourceAddress, setSourceAddress] = useState<string>("");
  const [sinkAddress, setSinkAddress] = useState<string>("");

  const [sinkIpfsHash, setSinkIpfsHash] = useState<string>("");

  const { data, isError, isLoading } = useEnsAddress({
    name: sinkAddress,
  });
  const ensValid = !!data && !isError && !isLoading;
  try {
    var rawValid: string | undefined = getAddress(sinkAddress);
  } catch (error) {
    var rawValid: string | undefined = undefined;
  }
  const validAddress = ensValid || rawValid;
  const correctAddr = !!rawValid ? rawValid : data;
  const signMessage = (correctAddr + "").toLowerCase();
  const signer = useSignMessage({
    message: signMessage,
  });

  // generate ZK proof given original proof and sink address
  const generateZKProof = async () => {
    const inputs = generateProofInputs(
      originalProof,
      originalPubInputs,
      correctAddr,
      signer.data,
      signMessage
    );
    console.log("inputs", inputs);
    if (!inputs) return;

    // send api post request to generate proof
    const returnData = await postData(backendUrl + "generate_proof", inputs);
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
          setProof(json.proof);
          setPubInputs(json.pubInputs);
          clearInterval(intervalId);
          const resp = await fetch("/api/storeproof", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              proof,
              pubInputs,
            }),
          });
          const respData = await resp.json();
          setSinkIpfsHash(respData["ipfsHash"]);
          setStage(Stage.FINISHED);
        }
      } else {
        console.log("error", res);
        clearInterval(intervalId);
        setStage(Stage.ERROR);
      }
    }, 10000);
  };

  const updateOriginalProof = (data: any) => {
    setOriginalProof(data.proof);
    setOriginalPubInputs(data.pubInputs);
    setOriginator("0x" + BigInt(data.pubInputs![2]).toString(16));
    setDegree(parseInt(data.pubInputs![1]));
    setSourceAddress("0x" + BigInt(data.pubInputs.slice(-1)[0]).toString(16));
  };

  useEffect(() => {
    async function getHash() {
      if (ipfsHash === "origin") {
        setStage(Stage.ORIGIN);
        return;
      }

      if (ipfsHash === "paste") {
        setStage(Stage.PASTEPROOF);
        return;
      }

      const resp = await fetch(`/api/getproof/${ipfsHash}`);
      if (!resp.ok) {
        setStage(Stage.INVALID);
        return;
      }
      const respData = JSON.parse(await resp.json());
      updateOriginalProof(respData);
      setStage(Stage.ADDRESS);
    }

    if (ipfsHash) {
      getHash();
    }
  }, [ipfsHash]);

  if ((stage == Stage.ADDRESS || stage === Stage.ORIGIN) && signer.isSuccess) {
    setStage(Stage.GENERATING);
    generateZKProof();
  }

  return (
    <>
      <div className="h-screen">
        <Head>
          <title>ETHdos</title>
          <link rel="icon" href="/favicon.ico" />
          <script async src="snarkjs.min.js"></script>
        </Head>

        <div className="flex h-full items-center justify-center text-white">
          <div className="w-1/2">
            <Stepper>ETHdos number</Stepper>

            <div className="my-5">
              {stage === Stage.LOADING && <Title>{stage}</Title>}
              {stage === Stage.INVALID && <Title>{stage}</Title>}
              {stage === Stage.PASTEPROOF && (
                <>
                  <textarea
                    rows={10}
                    name="proof"
                    id="proof"
                    className="block w-full resize-none rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm	p-5"
                    placeholder={stage}
                    onChange={(e) => {
                      try {
                        const pasteProof = JSON.parse(e.target.value);
                        updateOriginalProof(pasteProof);
                        setValidOriginalProof(true);
                      } catch (error) {
                        console.log(error);
                        setValidOriginalProof(false);
                      }
                    }}
                  />
                  <Button
                    disabled={!validOriginalProof}
                    onClick={() => setStage(Stage.ADDRESS)}
                    className="disabled:opacity-50 mt-5"
                  >
                    Submit
                  </Button>
                </>
              )}
              {stage === Stage.ORIGIN && (
                <>
                  <textarea
                    rows={1}
                    name="originaddress"
                    id="originaddress"
                    className="block w-full resize-none rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm	p-5 mt-5"
                    placeholder={stage}
                    value={sinkAddress}
                    onChange={(e) => setSinkAddress(e.target.value)}
                  />

                  <ConnectButton.Custom>
                    {({
                      account,
                      chain,
                      openAccountModal,
                      openChainModal,
                      openConnectModal,
                      mounted,
                    }) => {
                      return (
                        <div
                          {...(!mounted && {
                            "aria-hidden": true,
                            style: {
                              opacity: 0,
                              pointerEvents: "none",
                              userSelect: "none",
                            },
                          })}
                        >
                          {(() => {
                            if (!mounted || !account || !chain) {
                              return (
                                <Button
                                  onClick={openConnectModal}
                                  type="button"
                                  className="mt-5"
                                >
                                  Choose address to originate from
                                </Button>
                              );
                            }

                            if (chain.unsupported) {
                              return (
                                <button onClick={openChainModal} type="button">
                                  Wrong network, try again
                                </button>
                              );
                            }

                            return (
                              <div>
                                {chain.name === "Ethereum" ? (
                                  <>
                                    <Button
                                      onClick={openAccountModal}
                                      type="button"
                                      className="mt-5 mr-5"
                                    >
                                      Change origin address
                                    </Button>
                                    <Button
                                      disabled={!validAddress}
                                      onClick={() => {
                                        setOriginalPubInputs([
                                          "0",
                                          "0",
                                          hexStringTobigInt(
                                            account.address
                                          ).toString(),
                                          hexStringTobigInt(
                                            account.address
                                          ).toString(),
                                        ]);
                                        signer.signMessage();
                                      }}
                                      className="disabled:opacity-50 mt-5"
                                    >
                                      {validAddress
                                        ? `Sign address & generate proof!`
                                        : "Enter a valid address..."}
                                    </Button>
                                  </>
                                ) : (
                                  <Button
                                    onClick={openAccountModal}
                                    type="button"
                                    className="mt-5"
                                  >
                                    Change chain to Ethereum
                                  </Button>
                                )}
                              </div>
                            );
                          })()}
                        </div>
                      );
                    }}
                  </ConnectButton.Custom>
                </>
              )}
              {stage === Stage.ADDRESS && (
                <>
                  <InfoRow name="Originator" content={originator} />
                  <InfoRow name="Your distance" content={degree.toString()} />
                  <textarea
                    rows={1}
                    name="address"
                    id="address"
                    className="block w-full resize-none rounded-md border-gray-300 text-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm	p-5 mt-5"
                    placeholder={stage}
                    value={sinkAddress}
                    onChange={(e) => setSinkAddress(e.target.value)}
                  />

                  <ConnectButton.Custom>
                    {({
                      account,
                      chain,
                      openAccountModal,
                      openChainModal,
                      openConnectModal,
                      mounted,
                    }) => {
                      return (
                        <div
                          {...(!mounted && {
                            "aria-hidden": true,
                            style: {
                              opacity: 0,
                              pointerEvents: "none",
                              userSelect: "none",
                            },
                          })}
                        >
                          {(() => {
                            if (!mounted || !account || !chain) {
                              return (
                                <Button
                                  onClick={openConnectModal}
                                  type="button"
                                  className="mt-5"
                                >
                                  Connect {`${sourceAddress}`}
                                </Button>
                              );
                            }

                            if (chain.unsupported) {
                              return (
                                <button onClick={openChainModal} type="button">
                                  Wrong network, try again
                                </button>
                              );
                            }

                            return (
                              <div>
                                {chain.name === "Ethereum" ? (
                                  account.address.toLowerCase() ===
                                  sourceAddress ? (
                                    <Button
                                      disabled={!validAddress}
                                      onClick={() => signer.signMessage()}
                                      className="disabled:opacity-50 mt-5"
                                    >
                                      {validAddress
                                        ? "Sign address & generate proof!"
                                        : "Enter a valid address..."}
                                    </Button>
                                  ) : (
                                    <Button
                                      onClick={openAccountModal}
                                      type="button"
                                      className="mt-5"
                                    >
                                      Change address to {sourceAddress}
                                    </Button>
                                  )
                                ) : (
                                  <Button
                                    onClick={openAccountModal}
                                    type="button"
                                    className="mt-5"
                                  >
                                    Change chain to Ethereum
                                  </Button>
                                )}
                              </div>
                            );
                          })()}
                        </div>
                      );
                    }}
                  </ConnectButton.Custom>
                </>
              )}

              {stage === Stage.GENERATING && <LoadingText />}
              {stage === Stage.ERROR && <Title>{stage}</Title>}
              {stage === Stage.FINISHED && (
                <>
                  <Title>{stage}</Title>
                  <InfoRow name="Originator" content={originator} />
                  <InfoRow
                    name="Distance of your receipient"
                    content={(degree + 1).toString()}
                  />
                  <InfoRow
                    name="Link"
                    content={
                      <a href={`http://ethdos.xyz/share/${sinkIpfsHash}`}>
                        http://ethdos.xyz/share/{sinkIpfsHash}
                      </a>
                    }
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Send;
