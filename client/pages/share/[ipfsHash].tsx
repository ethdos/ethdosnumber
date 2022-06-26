import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import { useRouter } from "next/router";

import Head from "next/head";
import { useEffect, useState } from "react";

import { Stepper, Title, Button } from "../../components/Base";
import InfoRow from "../../components/InfoRow";
import Slideover from "../../components/Slideover";
import { checkProof, fetchSolidityData } from "../../lib/generateProof";
import { useProvider, useContractWrite, useConnect, useContractRead } from "wagmi";
import { ethers } from "ethers";

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
      // const resp = await fetch(`/api/getproof/${ipfsHash}`);
      const respData = {"proof": {"pi_a": ["9163931239158236559929252072050702414821247788467913252518040146199775106157", "9645438455954535995973877152036686481676448736347953811429470348048996196296", "1"], "pi_b": [["8354781104335953642593417576951392587630432889655776180187360605970595009841", "11475360675470552444489290379976712350047522826541757762500093494041837589782"], ["9998471956447751815747605383512198282053763674038573195883746491058748087628", "13449844122872339986429005058721124041043660172450189940978613324787279984994"], ["1", "0"]], "pi_c": ["11355137855592861713975988355781915240019038506556978586064285040623187152764", "14967633781419664150915401403725470940164810932833605345390663314340578436824", "1"], "protocol": "groth16"}, "pubInputs": ["7138597452374049843442357986628673314690363139209617000292486089713270058062", "2", "449116070504281332671503011463517494968310008447", "1372195430083199122347297720738491162005206364123"]}

      // if (!resp.ok) {
      //   setStage(Stage.INVALID);
      //   return;
      // }

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
      "inputs": [
        {
          "internalType": "uint256[2]",
          "name": "a",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[2][2]",
          "name": "b",
          "type": "uint256[2][2]"
        },
        {
          "internalType": "uint256[2]",
          "name": "c",
          "type": "uint256[2]"
        },
        {
          "internalType": "uint256[4]",
          "name": "signals",
          "type": "uint256[4]"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ];

  const provider = useProvider();
  console.log("provider", provider);

  // const solidityData = mintNftHelper(proof, pubInputs);
  const solidityData = proof && pubInputs ? fetchSolidityData(proof, pubInputs) : [];

  const { isConnected } = useConnect();
  
  //snarkjs.groth16ExportSolidityCallData(proof, pubInputs);
  const { data, isError, isLoading, write } = useContractWrite(
    {
      addressOrName: '0x2A0F14D7E66F1b7eFe53777C3655df66790eD795',
      contractInterface: mintAbi,
    },
    'mint',
    {
      args: solidityData
    }
  );

  console.log("proof", proof);
  console.log("pubInputs", pubInputs);
  console.log('solidityData', solidityData);
  console.log('isConnected', isConnected);
  console.log('data', data);
  console.log('isError', isError);
  console.log('isLoading', isLoading);
  console.log('write', write);
  console.log('lol');

  return (
    <>
      <div className="h-screen">
        <Head>
          <title>ETHdos</title>
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Space+Mono" />
          {/* <script src="snarkjs.min.js"></script> */}
        </Head>

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
                <Button onClick={() => write()} className="mr-5">Mint NFT</Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Share;