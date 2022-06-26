import type { NextPage } from "next";
import Head from "next/head";
import { Title } from "../components/Base";

const Home: NextPage = () => {
  return (
    <>
      <div className="scroll-smooth">
        <Head>
          <title>ETHdos</title>
          <link rel="icon" href="/public/favicon.ico" />
          <script async src="snarkjs.min.js"></script>
        </Head>

        <div className="flex h-full justify-center bg-heyanonred text-white">
          <div className="items-center justify-center self-center prose max-w-prose">
            <Title>FAQ</Title>

            <div className="grid">
              <div className="mb-8">
                <strong>What is this site?</strong>
                <div>
                  <a href="https://heyanon.xyz">heyanon </a>
                  is a way for people who did cool stuff on Ethereum to
                  broadcast messages anonymously on Twitter. Historic moment
                  feeds are curated by the
                  <a href="https://twitter.com/heyanonxyz"> @heyanonxyz </a>
                  account, such as the{" "}
                  <a href="https://twitter.com/DAOHackGossip">DAO hack</a>
                  feed. Anyone whose participation in the moment can be verified
                  on-chain can post to the feed. The magic is that you don’t
                  need to reveal your address when you do.
                  <br />
                  <em>Not even to the site admins.</em>
                </div>
              </div>

              <div className="mb-8">
                <strong>How does it work?</strong>
                <div>
                  When you send a message with heyanon, you generate a
                  <a href="https://en.wikipedia.org/wiki/Zero-knowledge_proof">
                    {" "}
                    zero-knowledge proof{" "}
                  </a>
                  that you were involved with a certain event on-chain. This
                  proof hides all information about your address. The proof is
                  all that is sent to the{" "}
                  <a href="https://heyanon.xyz">heyanon</a> backend for
                  verification. Upon verification, the proof is posted to
                  <a href="https://ipfs.io/">ipfs</a>
                  and your message is sent via the specified event feed bot. The
                  message has with it a verify link twitter readers can use to
                  the proof located on ipfs themselves. For more, check out our
                  github (TODO: add github).
                </div>
              </div>

              <div className="mb-8">
                <strong>How can you contribute or follow along?</strong>
                <div>
                  Follow{" "}
                  <a href="https://twitter.com/heyanonxyz">@heyanonxyz</a> for
                  updates and new message feeds. Join our{" "}
                  <a href="https://discord.gg/4J3XzZJf">discord</a> for misc.
                  discussion.
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
