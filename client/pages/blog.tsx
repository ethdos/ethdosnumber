import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { StepperHover, Button, Title, Subtitle } from "../components/Base";

const Blog: NextPage = () => {
  return (
    <>
      <div className="scroll-smooth">
        <Head>
          <title>ETHdos</title>
          <link rel="icon" href="/public/favicon.ico" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Space+Mono" />
          {/* <script src="/public/snarkjs.min.js"></script> */}
        </Head>

        <div className="flex h-full justify-center bg-heyanonred text-white">
          <div className="items-center justify-center self-center prose max-w-prose">
            <Title>ETHDos Deep Dive</Title>
            <Subtitle>By Adhyyan, Nalin, Vivek and Sampriti</Subtitle>

            <div className="grid">
              <div className="mb-8">
                <strong>What?</strong>
                <div>
                  Presenting ETHdos numbers: measuring degrees of separation of people (akin to Bacon/Erdos numbers) while hiding individual friendships entirely. This is the first of its kind social experiment using the composability of recursive zk snarks.
                </div>
              </div>

              <div className="mb-8">
                <strong>How?</strong>
                <div>
                  ETHdos begins at a central person, lets say its “Vitalik”. Theyll start by sending proofs of friendship in the form of ZK SNARKs to their closest ones, and their friends will be able to continue the chain from there. Eventually, you’ll be able to prove that you are connected to Vitalik with N degrees of seperation BUT you will not be able to determinate the path of people to him, nor will anyone else in the world. This creates a fun social experiment which allows famous personalities to reveal very limited information about their social graphs, while others can prove their connections reputably and can even mint NFTs on-chain to brag about their proximity!
                </div>
                <div>
                This project uses
                <a href="https://z.cash/technology/zksnarks/">
                  {" "}recursive zk-snarks{" "}</a>
                  to make composable proofs between different people. Using these proofs, you are able to generate the equivalent of Erdos/Bacon numbers but for peoples social graph.
                <br/><br/>
                ZK SNARKs allow you to generate succinct proofs of knowledge that do not leak anything about the inputs to these proofs while proving assertions about these inputs. Recursive ZK SNARKs allow you to take this a step further and abuse the succinctness properties of SNARKs to create infinite chains of proofs that can be composably used with other private data (even from other parties) to generate larger proofs.
                <br/><br/>
                We realized that this is a really interesting primitive to base social experiments on. For instance, recursive ZK SNARKs could allow you to play the game of telephone/secret whispers in a decentralised environment. Building on this idea further, we came up with the idea of encoding the concept of degrees of seperation using a decentralised PKI such as Ethereum. While theoretically interesting, getting this idea to production involved a lot of practical work and hacky solutions. Going from beefy 256gb RAM servers to writing 25 million constraint SNARK circuits, we ended up exploring our understanding of everything from math to devops. Ultimately, we are able to demonstrate an exciting new idea and hope this will lead to other more interesting ones.
                <br/><br/>
                Users can also post these proofs on chain to mint NFTs claiming that
                they are degree-k close to Vitalik. Who wouldnt want an NFT saying that
                you are almost besties with Vitalik? :P
                <br/><br/>
                This allows for a fun social experiment where users would try to
                have the lowest degree of separation by talking to their friends!
                <br/><br/>
                For more, check out our github:
                <a href="https://github.com/nalinbhardwaj/ethdosnumber">{" "}github.com/nalinbhardwaj/ethdosnumber</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Blog;
