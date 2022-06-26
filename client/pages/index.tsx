import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { StepperHover, Button, Title } from "../components/Base";

const Home: NextPage = () => {
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
            <Title>FAQ</Title>

            <div className="grid">
              <div className="mb-8">
                <strong>What is this site?</strong>
                <div>
                  <a href="https://ethdos.xyz">ETHdos </a>
                  is an analogue to the Bacon Number for Ethereum.
                  broadcast messages anonymously on Twitter. Using recursive
                  zk-SNARKS, find the degrees of separation between Vitalik and you
                  through your friends without leaking any information.
                  <br />
                  <em>Not even to the site admins.</em>
                </div>
              </div>

              <div className="mb-8">
                <strong>How to use?</strong>
                <div>
                  <Link href="/send/paste">
                    <StepperHover>ETHdos number</StepperHover>
                  </Link>
                  <br/>
                  <Link href="/share/QmZwz1zBDWSpU5vEJhanb2LixjxVaL4snXDVnFrX55ntgR">
                    <Button>Example Proof</Button>
                  </Link>
                </div>
              </div>

              <div className="mb-8">
                <strong>How does it work?</strong>
                <div>
                This project uses
                <a href="https://z.cash/technology/zksnarks/">
                  {" "}recursive zk-snarks{" "}</a>
                to make composable proofs between different people. Vitalik is degree 0
                and he can use cryptography-magic to send signatures to his 
                close friends which allow them to prove that they are degree 1
                away from Vitalik. 
                <br/><br/>
                Those degree-1 friends can send cryptographic proofs to their friends
                and they can claim that they are degree-2 and so on. The craziest thing
                is that since each propagation happens through zk, the path from
                degree-0 to degree-k is hidden. This allows for a fun collector game
                without having privacy concerns.
                <br/><br/>
                Users can also post these proves on chain to mint NFTs claiming that
                they are degree-k close to Vitalik. Who wouldn't want an NFT saying that
                you are almost besties with Vitalik :P
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
export default Home;
