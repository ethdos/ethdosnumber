import { ConnectButton } from "@rainbow-me/rainbowkit";
import { InjectedConnector } from "wagmi/connectors/injected";
import type { NextPage } from "next";
import {
  useAccount,
  useConnect,
  useDisconnect,
  useEnsAddress,
  useSignMessage,
} from "wagmi";
import Head from "next/head";
import { useState } from "react";
import { getAddress } from "ethers/lib/utils";
import { sign } from "crypto";
import { generateProofInputs, postData } from "../../lib/generateProof";
import { Stepper, Title, Button } from "../../components/Base";

const backendUrl = "https://backend.stealthdrop.xyz/";
// http://localhost:3001/"; // http://45.76.66.251/

const Send: NextPage = () => {
  const [friendAddr, setFriendAddr] = useState<string>("");
  const [originalProof, setOriginalProof] = useState<string>("");
  const [proof, setProof] = useState<string | undefined>();
  const [proofStatus, setProofStatus] = useState("GENERATE");
  const { data, isError, isLoading } = useEnsAddress({
    name: friendAddr,
  });
  const ensValid = !!data && !isError && !isLoading;
  try {
    var rawValid = !!getAddress(friendAddr);
  } catch (error) {
    var rawValid = false;
  }
  const isValid = ensValid || rawValid;
  const correctAddr = !!rawValid ? rawValid : data;

  const canSign = isValid;
  const isOriginator = canSign && !proof;

  const signMessage = (correctAddr + "").toLowerCase();

  const signer = useSignMessage({
    message: signMessage,
  });

const generateZKProof = async () => {
  setProofStatus("ASSEMBLING");
  const originalProofJson = JSON.parse(originalProof);
  const inputs = await generateProofInputs(
    originalProofJson,
    friendAddr,
    signer.data,
    signMessage,
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
  setProofStatus(returnJSON && returnJSON["id"] ? "LOADING" : "ERROR!");
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
        setProofStatus("GENERATED");
      }
    } else if (res.status === 400) {
      setProofStatus("LOADING");
    } else {
      console.log("error", res);
      clearInterval(intervalId);
      setProofStatus("ERROR: SERVER LOAD HIGH, RETRY LATER!");
    }
  }, 10000);
};

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
                  value={originalProof}
                  onChange={(e) => setOriginalProof(e.target.value)}
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
              <Button disabled={isValid} onClick={generateZKProof}>{proofStatus}</Button>
              <Button>Mint NFT</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Send;
