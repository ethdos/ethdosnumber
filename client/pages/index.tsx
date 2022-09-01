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
      <div className="min-h-screen h-full bg-[url('/gradient.jpeg')] bg-no-repeat bg-auto">
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
                      sinkAddress={rawAddress || ""}
                      degree={degree.toString() || ""}
                    />
                  </Tilt>
                </div>

                <div className="lg:pt-4">
                  <h2 className="text-3xl font-bold sm:text-4xl text-black">
                    ETHdos Numbers
                  </h2>

                  <p className="mt-4 text-gray-600">
                    😎 ETHdos is a first-of-its-kind social experiment
                    leveraging unique composability properties of recursive
                    SNARKs.
                  </p>

                  <p className="mt-4 text-gray-600">
                    👀 Much like Erdos numbers &amp; Bacon numbers, ETHdos
                    numbers measure your degrees of seperation from{" "}
                    {ORIGIN_NAME}. The lower your number, the closer you are to{" "}
                    {ORIGIN_NAME}!
                  </p>

                  <p className="mt-4 text-gray-600">
                    🤫 Zero-knowledge proofs hide the intermediate path between
                    you and {ORIGIN_NAME}, not only from others but also from
                    you yourself!
                  </p>

                  <div>
                    <Link href="/blog" passHref>
                      <a target="_blank">
                        <div className="inline-flex items-center px-8 py-3 mt-8 text-white bg-indigo-600 border border-indigo-600 rounded hover:bg-transparent hover:text-indigo-600 active:text-indigo-500 focus:outline-none focus:ring hover:cursor-pointer">
                          <span className="text-sm font-medium">
                            ↗ Read more about ETHdos
                          </span>
                        </div>
                      </a>
                    </Link>
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
