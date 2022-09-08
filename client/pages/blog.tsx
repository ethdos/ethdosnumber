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
          <title>ETHdos - Deep Dive</title>
          <meta name="title" content="ETHdos - Deep Dive" />
          <meta
            name="description"
            content="ETHdos is a social experiment leveraging unique composability properties of recursive SNARKs to measure your degrees of separation from Vitalik without revealing social graphs!"
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://ethdos.xyz/" />
          <meta property="og:title" content="ETHdos - Deep Dive" />
          <meta
            property="og:description"
            content="ETHdos is a social experiment leveraging unique composability properties of recursive SNARKs to measure your degrees of separation from Vitalik without revealing social graphs!"
          />
          <meta property="og:image" content="https://ethdos.xyz/cover.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://ethdos.xyz/" />
          <meta property="twitter:title" content="ETHdos - Deep Dive" />
          <meta
            property="twitter:description"
            content="ETHdos is a social experiment leveraging unique composability properties of recursive SNARKs to measure your degrees of separation from Vitalik without revealing social graphs!"
          />
          <meta
            property="twitter:image"
            content="https://ethdos.xyz/cover.png"
          />
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
                  <h3 className="text-md font-bold sm:text-md text-black mt-4 italic mb-4">
                    Note: This is currently a draft. Please check back later for
                    more information!
                  </h3>

                  <div className="grid text-black">
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
                        Recursive ZK-SNARKs are fundamentally cool technology.
                        This summer, we built out a version of SNARK recursion
                        using the groth16 proving system (blog post on 0xPARC
                        blog with more details coming soon!). The usual use
                        cases of Recursive ZK-SNARKs, however, almost entirely
                        ignore the fresh new ZK properties of being able to do
                        recursion, and instead, mostly use SNARKs for their
                        succinctness properties.
                      </div>
                      <div>
                        There&rsquo;s something fundamentally cool that seems to
                        have been overlooked about recursive SNARKs, and
                        it&rsquo;s not succinctness (or even compression as
                        I&rsquo;ve been calling it, for the lack of a better
                        word). ETHdos is our first attempt at using this cool
                        new property to instrument a social experiment! So,
                        first, let&rsquo;s talk about this property:
                      </div>
                      <div>
                        <strong>Composability</strong>
                      </div>
                      <div>
                        <strong>
                          In one sentence: a prover can now prove assertions
                          about facts they do not fully know themselves.
                        </strong>
                      </div>
                      <div>
                        What does this mean? In ETHdos, I can prove I am degree
                        4 from Vitalik by showing that someone who is friends
                        with me is degree 3. I can prove there exists a valid
                        path of friends from Vitalik to me, while not knowing
                        anything about the path myself.
                      </div>
                      <div>
                        This is something new entirely. Not only are ZK proofs
                        hiding information from external verifiers, but also
                        from the person making the proof!
                      </div>
                      <div>
                        We&rsquo;ll talk more about this property and share more
                        detailed thoughts on it at a later time in a blog post
                        on the 0xPARC blog!
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
