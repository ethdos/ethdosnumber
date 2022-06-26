import { useEffect, useState } from "react";

import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useEnsName, useEnsAddress, useSignMessage } from "wagmi";
import { getAddress } from "ethers/lib/utils";
import { generateProofInputs, postData } from "../../lib/generateProof";
import { Stepper, Title, Button } from "../../components/Base";
import LoadingText from "../../components/LoadingText";
import InfoRow from "../../components/InfoRow";

enum Stage {
  LOADING = "Loading proof from IPFS...",
  INVALID = "Invalid IPFS hash :(",
  PASTEPROOF = "Paste in your proof...",
  ADDRESS = "Choose an address or ENS name to send to...",
  GENERATING = "Generating...",
  FINISHED = "Finished!",
}

const backendUrl = "https://backend.stealthdrop.xyz/";
// http://localhost:3001/"; // http://45.76.66.251/

const Send: NextPage = () => {
  const router = useRouter();
  const { ipfsHash } = router.query;

  const [originalProof, setOriginalProof] = useState(null);
  const [validOriginalProof, setValidOriginalProof] = useState(false);
  const [originalPublicSignals, setOriginalPublicSignals] = useState(null);

  const [proof, setProof] = useState(null);
  const [publicSignals, setPublicSignals] = useState(null);
  const [proofStatus, setProofStatus] = useState("GENERATE");

  const [stage, setStage] = useState<Stage>(Stage.LOADING);
  const [sourceAddress, setSourceAddress] = useState<string>(
    "0x7162C2F74a1b968aa33E3DCFd15366264E9eC53c"
  );
  const [sinkAddress, setSinkAddress] = useState<string>("");

  const generateZKProof = async () => {
    setProofStatus("Assembling proof");
    const inputs = generateProofInputs(
      originalProof,
      sinkAddress,
      signer.data,
      signMessage
    );
    console.log("inputs", inputs);
    console.log("stringify'd inputs", JSON.stringify(inputs));
    if (!inputs) return;

    // send api post request to generate proof
    const returnData = await postData(backendUrl + "generate_proof", inputs);
    if (!returnData.ok) {
      alert("Error generating proof, please try again later");
      return;
    }
    const returnJSON = await returnData.json();
    setProofStatus(returnJSON && returnJSON["id"] ? "Computing" : "Error");
    const processId = returnJSON["id"];
    console.log("processId", processId);

    const intervalId = setInterval(async () => {
      const res = await postData(backendUrl + "result", { id: processId });
      if (res.status === 200) {
        const json = await res.json();
        if (!json) {
          console.log("error", res);
          clearInterval(intervalId);
          setProofStatus("ERROR: SERVER LOAD HIGH, RETRY LATER!");
        } else {
          setProof(json);
          clearInterval(intervalId);
          setProofStatus("Generated!");
        }
      } else if (res.status === 400) {
        setProofStatus("Loading");
      } else {
        console.log("error", res);
        clearInterval(intervalId);
        setProofStatus("ERROR: SERVER LOAD HIGH, RETRY LATER!");
      }
    }, 10000);
  };

  const updateOriginalProof = (data: any) => {
    setOriginalProof(data.proof);
    setOriginalPublicSignals(data.publicSignals);
    setSourceAddress(
      "0x" + BigInt(data.publicSignals.slice(-1)[0]).toString(16)
    );
  };

  useEffect(() => {
    async function getHash() {
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

  const { data, isError, isLoading } = useEnsAddress({
    name: sinkAddress,
  });
  const ensValid = !!data && !isError && !isLoading;
  try {
    var rawValid = !!getAddress(sinkAddress);
  } catch (error) {
    var rawValid = false;
  }
  const validAddress = ensValid || rawValid;
  const correctAddr = !!rawValid ? rawValid : data;
  const signMessage = (correctAddr + "").toLowerCase();
  const signer = useSignMessage({
    message: signMessage,
  });
  if (stage == Stage.ADDRESS && signer.isSuccess) {
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
              {stage === Stage.LOADING && <Title>{`Loading...`}</Title>}
              {stage === Stage.INVALID && (
                <Title>{`Invalid IPFS hash :(`}</Title>
              )}
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
                      } catch {
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
              {stage === Stage.ADDRESS && (
                <>
                  <InfoRow
                    name="Originator"
                    content={
                      "0x" + BigInt(originalPublicSignals![2]).toString(16)
                    }
                  />
                  <InfoRow
                    name="Your distance"
                    content={originalPublicSignals![1]}
                  />
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
                                {chain.name === "Ethereum" &&
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

              {stage === Stage.GENERATING && (
                <>
                  <LoadingText currentStage={proofStatus} />
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
