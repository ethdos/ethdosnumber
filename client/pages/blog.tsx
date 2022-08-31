import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { StepperHover, Button, Title } from "../components/Base";
import Header from "./components/header";
import Tilt from "react-parallax-tilt";
import NFTSvg from "./nftTemplate";
import {
  ORIGIN_ADDRESS,
  ORIGIN_NAME,
  RANDOM_ADDRESSES,
} from "../lib/generateProof";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const [degree, setDegree] = useState(0);
  const [rawAddress, setRawAddress] = useState(
    "0xF05b5f04B7a77Ca549C0dE06beaF257f40C66FDB"
  );

  useEffect(() => {
    const id = setInterval(() => {
      setRawAddress((oldRawAddr) => {
        const index = RANDOM_ADDRESSES.indexOf(oldRawAddr);
        const nextIndex = (index + 1) % RANDOM_ADDRESSES.length;
        return RANDOM_ADDRESSES[nextIndex];
      });
      setDegree((oldDegree) => Math.floor(Math.random() * 15) + 1);
    }, 1000);

    return () => {
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <div className="min-h-screen h-full bg-[url('/gradient.jpeg')] bg-no-repeat bg-cover">
        <Head>
          <title>ETHdos</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Space+Mono"
          />
        </Head>
        <Header isConnected={false} />
        <div className="container mt-3 m-auto align-center place-content-center justify-items-center place-self-center place-items-center">
          <section>
            <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 justify-center align-center">
              <div className="grid grid-cols-1 prose max-w-prose m-auto">
                <div className="lg:pt-4">
                  <h2 className="text-3xl font-bold sm:text-4xl text-black">
                    ETHdos Numbers: Deep Dive
                  </h2>
                  <h3 className="text-md font-bold sm:text-md text-black mt-4 italic mb-4">
                    By{" "}
                    <a
                      href="https://github.com/Adhyyan1252"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-gray-500/75"
                    >
                      Adhyyan
                    </a>
                    ,{" "}
                    <a
                      href="https://twitter.com/nibnalin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-gray-500/75"
                    >
                      Nalin
                    </a>
                    ,{" "}
                    <a
                      href="https://twitter.com/sampriti0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-gray-500/75"
                    >
                      Sampriti
                    </a>{" "}
                    and{" "}
                    <a
                      href="https://twitter.com/viv_boop"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:text-gray-500/75"
                    >
                      Vivek
                    </a>
                  </h3>

                  <div className="grid">
                    <div className="mb-8">
                      <strong>What?</strong>
                      <div>
                        Presenting ETHdos numbers: measuring degrees of
                        separation of people (akin to Bacon/Erdos numbers) while
                        hiding individual friendships entirely. This is the
                        first of its kind social experiment using the
                        composability of recursive zk snarks.
                      </div>
                    </div>

                    <div className="mb-8">
                      <strong>How?</strong>
                      <div>
                        ETHdos begins at a central person, lets say its
                        “Vitalik”. Theyll start by sending proofs of friendship
                        in the form of ZK SNARKs to their closest ones, and
                        their friends will be able to continue the chain from
                        there. Eventually, you’ll be able to prove that you are
                        connected to Vitalik with N degrees of seperation BUT
                        you will not be able to determinate the path of people
                        to him, nor will anyone else in the world. This creates
                        a fun social experiment which allows famous
                        personalities to reveal very limited information about
                        their social graphs, while others can prove their
                        connections reputably and can even mint NFTs on-chain to
                        brag about their proximity!
                      </div>
                      <div>
                        This project uses
                        <a href="https://z.cash/technology/zksnarks/">
                          {" "}
                          recursive zk-snarks{" "}
                        </a>
                        to make composable proofs between different people.
                        Using these proofs, you are able to generate the
                        equivalent of Erdos/Bacon numbers but for peoples social
                        graph.
                        <br />
                        <br />
                        ZK SNARKs allow you to generate succinct proofs of
                        knowledge that do not leak anything about the inputs to
                        these proofs while proving assertions about these
                        inputs. Recursive ZK SNARKs allow you to take this a
                        step further and abuse the succinctness properties of
                        SNARKs to create infinite chains of proofs that can be
                        composably used with other private data (even from other
                        parties) to generate larger proofs.
                        <br />
                        <br />
                        We realized that this is a really interesting primitive
                        to base social experiments on. For instance, recursive
                        ZK SNARKs could allow you to play the game of
                        telephone/secret whispers in a decentralised
                        environment. Building on this idea further, we came up
                        with the idea of encoding the concept of degrees of
                        seperation using a decentralised PKI such as Ethereum.
                        While theoretically interesting, getting this idea to
                        production involved a lot of practical work and hacky
                        solutions. Going from beefy 256gb RAM servers to writing
                        25 million constraint SNARK circuits, we ended up
                        exploring our understanding of everything from math to
                        devops. Ultimately, we are able to demonstrate an
                        exciting new idea and hope this will lead to other more
                        interesting ones.
                        <br />
                        <br />
                        Users can also post these proofs on chain to mint NFTs
                        claiming that they are degree-k close to Vitalik. Who
                        wouldnt want an NFT saying that you are almost besties
                        with Vitalik? :P
                        <br />
                        <br />
                        This allows for a fun social experiment where users
                        would try to have the lowest degree of separation by
                        talking to their friends!
                        <br />
                        <br />
                        For more, check out our github:
                        <a href="https://github.com/nalinbhardwaj/ethdosnumber">
                          {" "}
                          github.com/nalinbhardwaj/ethdosnumber
                        </a>
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
export default Home;
