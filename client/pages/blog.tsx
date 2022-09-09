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
import { TwitterShareButton } from "react-twitter-embed";

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

                  <div className="grid text-black">
                    <div className="mb-8">
                      <div>
                        Presenting ETHdos numbers: measuring degrees of
                        separation of people (akin to Bacon/Erdos numbers) while
                        hiding individual friendships entirely. This is the
                        first of its kind social experiment using the
                        composability of recursive zk snarks.
                      </div>
                    </div>

                    <div className="mb-8">
                      <div>
                        Recursive ZK-SNARKs are fundamentally cool technology.
                        This summer, we built out a version of SNARK recursion
                        using the groth16 proving system (blog post on{" "}
                        <a
                          href="https://0xparc.org/blog"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-gray-500/75"
                        >
                          0xPARC blog
                        </a>{" "}
                        with more details coming soon!). With this, we started
                        exploring use cases for recursive SNARKs. Quickly, we
                        realised most usual use cases of Recursive ZK-SNARKs
                        almost entirely ignore the ZK properties of being able
                        to do recursion, mostly using SNARKs for their
                        succinctness properties.
                      </div>
                      <div>
                        There&rsquo;s something fundamentally cool that seems to
                        have been overlooked about recursive SNARKs, and
                        it&rsquo;s not succinctness (or even compression as
                        I&rsquo;ve been calling it). ETHdos is our first attempt
                        at exploring this cool new property to instrument a
                        social experiment! So, first, let&rsquo;s talk about
                        this property:
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="mb-4">
                        <strong>Composability</strong>
                      </div>
                      <div className="mb-4">
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
                      <div>
                        For now, let&rsquo;s dig deeper on how ETHdos works
                        end-to-end:
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="mb-4">
                        <strong>Motivation and user flow</strong>
                      </div>
                      <div>
                        The ability to hide social graphs while simultaneously
                        selectively sharing properties of it is inherently
                        interesting experimental grounds, and our intention is
                        for ETHdos to serve as a fun proof of concept social
                        experiment to popularize this new idea.
                      </div>
                      <div>Here&rsquo;s a demo video:</div>
                      <div>TODO</div>
                      <div>The user flow looks like:</div>
                      <ul className="list-disc list-inside">
                        <li>
                          A user starts by receiving an ETHdos page URL from a
                          friend.
                        </li>
                        <li>
                          They can mint a soul bound NFT of their degrees of
                          seperation, or just share their ETHdos page URL on
                          socials.
                        </li>
                        <li>
                          They add friends by signing an authenticating message
                          and share it directly with their friend.
                        </li>
                      </ul>
                      <div>
                        You can look at an example proof (for my degrees of
                        separation){" "}
                        <a
                          href="https://ethdos.xyz/share/QmU1wcTanvkXg4J7t7YhbVZbghudVJ2muoW66pyQQLSjJ8"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-gray-500/75"
                        >
                          here
                        </a>
                        . Vitalik started off the graph recently by adding a few
                        of his friends as degree 1, and since then the graph has
                        spread around naturally! If dont have a number yet, but
                        are looking to get one, maybe you should ask your
                        friends?{" "}
                        <div className="mt-4 mb-4 align-center text-center items-center self-center m-auto">
                          <TwitterShareButton
                            url={`https://ethdos.xyz/`}
                            options={{
                              size: "large",
                              text: `Anyone have a ETHdos number they can extend out to me?`,
                              margin: "auto",
                            }}
                          />
                        </div>
                      </div>
                      <div>
                        As a disclaimer, note that ETHdos is only meant to be a
                        fun social experiment and a proof of concept for
                        what&rsquo;s possible.{" "}
                        <strong>
                          None of our code is audited or recommended for
                          production use without serious considerations.
                        </strong>{" "}
                        At the very least, the circuits require a trusted setup
                        ceremony, proper auditing (if not formal verification)
                        and significant optimisations before <em>production</em>{" "}
                        use.
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="mb-4">
                        <strong>Design</strong>
                      </div>
                      <div>
                        <video controls autoPlay>
                          <source
                            src="/blog/spreading-graph.mov"
                            type="video/mp4"
                          />
                        </video>
                      </div>
                      <div className="mb-2">
                        <em>
                          This is what the process of the spreading of the
                          ETHdos graph looks like at a high level
                        </em>
                      </div>
                      <div>
                        With this high level design in mind, let&rsquo;s dig
                        deeper on the ZK circuit&rsquo;s design:
                      </div>
                      <div>
                        First, let&rsquo;s introduce some terminology:
                        We&rsquo;ll call Vitalik (the starting node) the origin
                        node and introduce the concept of source and sink nodes:
                        A source node creates a ZK proof for a sink node which
                        the sink node can then use to prove their degrees of
                        separation from the origin. For example, in the video
                        above, nibnalin.eth is a sink node, charlie.eth is a
                        source node and vitalik.eth is the origin node.
                      </div>
                      <div>
                        To create a proof of degrees of separation of the sink
                        node, the source node initiates computation by signing a
                        message and running proof generation in the ZK circuit.
                        The circuit checks the following:
                      </div>
                      <div>
                        <img
                          className="mt-4 mb-4"
                          src="/blog/snark-peel.png"
                          alt="Circuit checks"
                        />
                      </div>
                      <div>Now, let&rsquo;s expand on each of these:</div>
                      <div className="mb-4 mt-4">
                        <strong>ECDSA signature verification</strong>
                      </div>
                      <div>
                        The circuit first verifies that the sink is indeed a
                        friend of the source by requiring the source to sign the
                        message “ETHdos friend: &lt;sink&rsquo;s address&gt;”.
                        To ensure the correctness of the message being signed,
                        using the input signal sink address, the circuit
                        recreates the message that should have been signed by
                        source pub key to authenticate them as a friend. This
                        involves{" "}
                        <a
                          href="https://github.com/nalinbhardwaj/circom-pairing/blob/ethdos/circuits/ethdos/utils.circom#L5"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-gray-500/75"
                        >
                          some complicated string mangling
                        </a>{" "}
                        to exactly match the format wallets sign messages in.
                      </div>
                      <div className="mb-4 mt-4">
                        <strong>Verify source&rsquo;s degree</strong>
                      </div>
                      <div>
                        Next, we verify that the source address is indeed the
                        claimed degree away. This is where we use SNARK
                        recursion: We verify the ZK proof of the source&rsquo;s
                        degree inside this next SNARK.
                      </div>
                      <div>
                        Finally, once we are sure of source&rsquo;s degree, we
                        verify that the sink is claiming source&rsquo;s degree +
                        1 as their own degree correctly.
                      </div>
                      <div>
                        Note that the base case for the recursion needs some
                        special handling: If you are Vitalik making a proof for
                        someone else, there is no “inner proof”, we replace it
                        with a dummy (wrong) proof. So, in reality, we add a
                        special case allowing anyone to become degree 1 as long
                        as the ECDSA signature from the source verifies, and the
                        source matches the origin address.
                      </div>
                      <div className="mb-4 mt-4">
                        <strong>Remote SNARK prover</strong>
                      </div>
                      <div>
                        The largest groth16/snarkjs circuits we&rsquo;ve been
                        able to fit on client-side provers are about 10x
                        smaller, so unfortunately, generating proofs on-device
                        for this behemoth 31 million constraint circuit is very
                        infeasible :( So we set up our old trusty zk-node-server
                        (notes about it{" "}
                        <a
                          href="https://github.com/stealthdrop/stealthdrop#bringing-it-together"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-gray-500/75"
                        >
                          here
                        </a>
                        ) with rapidsnark and Circom&rsquo;s C++ witness
                        generators. End-to-end proof generation takes about 5
                        minutes, and is dominated by witness generation (which
                        is mostly single threaded) so one avenue of interest for
                        future groth16 recursion based projects might be to look
                        into making Circom&rsquo;s C++ witness generator highly
                        parallelised for future. After playing around with a
                        number of different params, we also discovered a couple
                        other practical optimisations if you&rsquo;re trying to
                        speed up proof generation for large Circom circuits:
                      </div>
                      <ul className="list-disc list-inside">
                        <li>
                          Use Circom&rsquo;s{" "}
                          <a
                            href="https://github.com/iden3/circom/blob/master/RELEASES.md#august-26-2022-circom-208"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-gray-500/75"
                          >
                            newly released
                            <code>parallel</code>tag
                          </a>{" "}
                          to parallelise witness generation wherever possible.
                        </li>
                        <li>
                          If you&rsquo;re hosting your remote SNARK prover on
                          AWS, check out the{" "}
                          <a
                            href="https://aws.amazon.com/ec2/instance-types/z1d/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline hover:text-gray-500/75"
                          >
                            z1d line of machines
                          </a>
                          . We A/B tested a few different options and found
                          these to be the most suitable for our use case:
                          powerful single-threaded performance for witness
                          generation and a large number of cores for
                          multithreaded proof generations.
                        </li>
                        <li>
                          Lastly, use the NVME of your machine for storing the
                          zkey, r1cs and other generation for significantly
                          faster data loading (which matters a lot when
                          we&rsquo;re loading 10GB zkeys!). Remember it deletes
                          data on machine restarts though!
                        </li>
                      </ul>
                    </div>
                    <div className="mb-8">
                      <div className="mb-4">
                        <strong>On-chain contract</strong>
                      </div>
                      <div>
                        Our on-chain contract is a relatively straightforward
                        ERC721 contract modified to disable transfers and make
                        the tokens{" "}
                        <a
                          href="https://vitalik.ca/general/2022/01/26/soulbound.html"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-gray-500/75"
                        >
                          soulbound
                        </a>
                        .
                      </div>
                      <div>
                        Of course, for maximal decentralisation, we&rsquo;ve
                        made our NFT art fully on-chain by encoding the token
                        image in our contract! To do so, we forked Uniswap V3
                        Positions NFT and adapted the cards to our use case. It
                        was really fun to be able to play with art in Solidity,
                        a language definitely not intended to support such use
                        cases.😉
                      </div>
                    </div>
                    <div className="mb-8">
                      <div className="mb-4">
                        <strong>The journey</strong>
                      </div>
                      <div>
                        As a fun aside, our journey of putting together ETHdos
                        has been really fun. Many of us high-school friends, we
                        originally came together earlier this summer to build
                        _something_ fun for ETH NYC. Having played around with
                        recursive SNARKs recently, we were thinking about cool
                        applications we could build with this new primitive. And
                        sitting on the East River coast in New York at 11PM,
                        this idea came around. From there, all it took were two
                        all nighter sprints to build out this tech over the
                        weekend, only to end it with one of the funniest stories
                        of miscommunication, oversleeping, and rushing through
                        town in Ubers and subways! Ultimately, though, we won
                        ETH NYC and had a really fun time doing so. Perhaps
                        we&rsquo;ll save our bollywood story to describe
                        in-person some other time. :)
                      </div>
                      <div>
                        Since the ETH NYC weekend, we&rsquo;ve cleaned up a lot
                        of our frontend and general jank, and it has been quite
                        funny to be able to go from using Vitalik as a meme
                        example in our hackathon demos to having him actually be
                        the origin node for our release now.
                      </div>
                      <div>
                        ETHdos is only possible thanks to a ton of support from
                        a number of awesome folks: Yi Sun, Jonathan Wang,
                        Vincent (circom-pairing team), gubsheep, Vitalik
                        Buterin, DC Posch, Lakshman Sankar, Ying Tong and
                        everyone else in the{" "}
                        <a
                          href="https://0xparc.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-gray-500/75"
                        >
                          0xPARC community
                        </a>
                        ! Thanks also to Uniswap (whose{" "}
                        <a
                          href="https://github.com/Uniswap/v3-periphery/blob/main/contracts/libraries/NFTSVG.sol"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-gray-500/75"
                        >
                          NFT art contract
                        </a>{" "}
                        we forked) and to{" "}
                        <a
                          href="https://iconoir.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="underline hover:text-gray-500/75"
                        >
                          Iconoir
                        </a>{" "}
                        (whose atom icon we use as our logo).
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
