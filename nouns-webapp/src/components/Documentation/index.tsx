import Section from "../../layout/Section";
import { Col } from "react-bootstrap";
import classes from "./Documentation.module.css";
import Accordion from "react-bootstrap/Accordion";
import Link from "../Link";
import { Trans } from "@lingui/macro";

const Documentation = () => {
  const cryptopunksLink = (
    <Link
      text={<>Cryptopunks</>}
      url="https://www.larvalabs.com/cryptopunks"
      leavesPage={true}
    />
  );
  const playgroundLink = (
    <Link text={<>Playground</>} url="/playground" leavesPage={false} />
  );
  const publicDomainLink = (
    <Link
      text={<>public domain</>}
      url="https://creativecommons.org/publicdomain/zero/1.0/"
      leavesPage={true}
    />
  );
  const compoundGovLink = (
    <Link
      text={<>Compound Governance</>}
      url="https://compound.finance/governance"
      leavesPage={true}
    />
  );
  return (
    <Section fullWidth={false}>
      <Col lg={{ span: 10, offset: 1 }}>
        <div className={classes.headerWrapper}>
          <h1>
            <>WTF?</>
          </h1>
          <p className={classes.aboutText}>
            <>
              Nouns are an experimental attempt to improve the formation of
              on-chain avatar communities. While projects such as{" "}
              {cryptopunksLink} have attempted to bootstrap digital community
              and identity, Nouns attempt to bootstrap identity, community,
              governance, and a treasury that can be used by the community.
            </>
          </p>
          <p className={classes.aboutText} style={{ paddingBottom: "4rem" }}>
            <>
              Learn more below, or start creating Nouns off-chain using the{" "}
              {playgroundLink}.
            </>
          </p>
        </div>
        <Accordion flush>
          <Accordion.Item eventKey="0" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <>Summary</>
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <>Nouns artwork is in the {publicDomainLink}.</>
                </li>
                <li>
                  <>
                    One Noun is trustlessly auctioned every 24 hours, forever.
                  </>
                </li>
                <li>
                  <>
                    100% of Noun auction proceeds are trustlessly sent to the
                    treasury.
                  </>
                </li>
                <li>
                  <>Settlement of one auction kicks off the next.</>
                </li>
                <li>
                  <>All Nouns are members of Nouns DAO.</>
                </li>
                <li>
                  <>Nouns DAO uses a fork of {compoundGovLink}.</>
                </li>
                <li>
                  <>One Noun is equal to one vote.</>
                </li>
                <li>
                  <>
                    The treasury is controlled exclusively by Nouns via
                    governance.
                  </>
                </li>
                <li>
                  <>
                    Artwork is generative and stored directly on-chain (not
                    IPFS).
                  </>
                </li>
                <li>
                  <>
                    No explicit rules exist for attribute scarcity; all Nouns
                    are equally rare.
                  </>
                </li>
                <li>
                  <>
                    Nounders receive rewards in the form of Nouns (10% of supply
                    for first 5 years).
                  </>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <>Daily Auctions</>
            </Accordion.Header>
            <Accordion.Body>
              <p className={classes.aboutText}>
                <>
                  The Nouns Auction Contract will act as a self-sufficient Noun
                  generation and distribution mechanism, auctioning one Noun
                  every 24 hours, forever. 100% of auction proceeds (ETH) are
                  automatically deposited in the Nouns DAO treasury, where they
                  are governed by Noun owners.
                </>
              </p>

              <p className={classes.aboutText}>
                <>
                  Each time an auction is settled, the settlement transaction
                  will also cause a new Noun to be minted and a new 24 hour
                  auction to begin.{" "}
                </>
              </p>
              <p>
                <>
                  While settlement is most heavily incentivized for the winning
                  bidder, it can be triggered by anyone, allowing the system to
                  trustlessly auction Nouns as long as Ethereum is operational
                  and there are interested bidders.
                </>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <>Nouns DAO</>
            </Accordion.Header>
            <Accordion.Body>
              <>
                Nouns DAO utilizes a fork of {compoundGovLink} and is the main
                governing body of the Nouns ecosystem. The Nouns DAO treasury
                receives 100% of ETH proceeds from daily Noun auctions. Each
                Noun is an irrevocable member of Nouns DAO and entitled to one
                vote in all governance matters. Noun votes are non-transferable
                (if you sell your Noun the vote goes with it) but delegatable,
                which means you can assign your vote to someone else as long as
                you own your Noun.
              </>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <>Governance ‘Slow Start’</>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <>
                  The proposal veto right was initially envisioned as a
                  temporary solution to the problem of ‘51% attacks’ on the
                  Nouns DAO treasury. While Nounders initially believed that a
                  healthy distribution of Nouns would be sufficient protection
                  for the DAO, a more complete understanding of the incentives
                  and risks has led to general consensus within the Nounders,
                  the Nouns Foundation, and the wider community that a more
                  robust game-theoretic solution should be implemented before
                  the right is removed.
                </>
              </p>
              <p>
                <>
                  The Nouns community has undertaken a preliminary exploration
                  of proposal veto alternatives (‘rage quit’ etc.), but it is
                  now clear that this is a difficult problem that will require
                  significantly more research, development and testing before a
                  satisfactory solution can be implemented.
                </>
              </p>
              <p>
                <>
                  Consequently, the Nouns Foundation anticipates being the
                  steward of the veto power until Nouns DAO is ready to
                  implement an alternative, and therefore wishes to clarify the
                  conditions under which it would exercise this power.
                </>
              </p>
              <p>
                <>
                  The Nouns Foundation considers the veto an emergency power
                  that should not be exercised in the normal course of business.
                  The Nouns Foundation will veto proposals that introduce
                  non-trivial legal or existential risks to the Nouns DAO or the
                  Nouns Foundation, including (but not necessarily limited to)
                  proposals that:
                </>
              </p>
              <ul>
                <li>unequally withdraw the treasury for personal gain</li>
                <li>
                  bribe voters to facilitate withdraws of the treasury for
                  personal gain
                </li>
                <li>
                  attempt to alter Noun auction cadence for the purpose of
                  maintaining or acquiring a voting majority
                </li>
                <li>
                  make upgrades to critical smart contracts without undergoing
                  an audit
                </li>
              </ul>
              <p>
                <>
                  There are unfortunately no algorithmic solutions for making
                  these determinations in advance (if there were, the veto would
                  not be required), and proposals must be considered on a case
                  by case basis.
                </>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <>Noun Traits</>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <>
                  Nouns are generated randomly based Ethereum block hashes.
                  There are no 'if' statements or other rules governing Noun
                  trait scarcity, which makes all Nouns equally rare. As of this
                  writing, Nouns are made up of:
                </>
              </p>
              <ul>
                <li>
                  <>backgrounds (2) </>
                </li>
                <li>
                  <>bodies (30)</>
                </li>
                <li>
                  <>accessories (140) </>
                </li>
                <li>
                  <>heads (242) </>
                </li>
                <li>
                  <>glasses (23)</>
                </li>
              </ul>
              <>
                You can experiment with off-chain Noun generation at the{" "}
                {playgroundLink}.
              </>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <>On-Chain Artwork</>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <>
                  Nouns are stored directly on Ethereum and do not utilize
                  pointers to other networks such as IPFS. This is possible
                  because Noun parts are compressed and stored on-chain using a
                  custom run-length encoding (RLE), which is a form of lossless
                  compression.
                </>
              </p>

              <p>
                <>
                  The compressed parts are efficiently converted into a single
                  base64 encoded SVG image on-chain. To accomplish this, each
                  part is decoded into an intermediate format before being
                  converted into a series of SVG rects using batched, on-chain
                  string concatenation. Once the entire SVG has been generated,
                  it is base64 encoded.
                </>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="6" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <>Noun Seeder Contract</>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <>
                  The Noun Seeder contract is used to determine Noun traits
                  during the minting process. The seeder contract can be
                  replaced to allow for future trait generation algorithm
                  upgrades. Additionally, it can be locked by the Nouns DAO to
                  prevent any future updates. Currently, Noun traits are
                  determined using pseudo-random number generation:
                </>
              </p>
              <code>
                keccak256(abi.encodePacked(blockhash(block.number - 1), nounId))
              </code>
              <br />
              <br />
              <p>
                <>
                  Trait generation is not truly random. Traits can be predicted
                  when minting a Noun on the pending block.
                </>
              </p>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="7" className={classes.accordionItem}>
            <Accordion.Header className={classes.accordionHeader}>
              <>Nounder's Reward</>
            </Accordion.Header>
            <Accordion.Body>
              <p>
                <>
                  'Nounders' are the group of ten builders that initiated Nouns.
                  Here are the Nounders:
                </>
              </p>
              <ul>
                <li>
                  <Link
                    text="@cryptoseneca"
                    url="https://twitter.com/cryptoseneca"
                    leavesPage={true}
                  />
                </li>
                <li>
                  <Link
                    text="@gremplin"
                    url="https://twitter.com/gremplin"
                    leavesPage={true}
                  />
                </li>
                <li>
                  <Link
                    text="@punk4156"
                    url="https://twitter.com/punk4156"
                    leavesPage={true}
                  />
                </li>
                <li>
                  <Link
                    text="@eboyarts"
                    url="https://twitter.com/eBoyArts"
                    leavesPage={true}
                  />
                </li>
                <li>
                  <Link
                    text="@punk4464"
                    url="https://twitter.com/punk4464"
                    leavesPage={true}
                  />
                </li>
                <li>solimander</li>
                <li>
                  <Link
                    text="@dhof"
                    url="https://twitter.com/dhof"
                    leavesPage={true}
                  />
                </li>
                <li>
                  <Link
                    text="@devcarrot"
                    url="https://twitter.com/carrot_init"
                    leavesPage={true}
                  />
                </li>
                <li>
                  <Link
                    text="@TimpersHD"
                    url="https://twitter.com/TimpersHD"
                    leavesPage={true}
                  />
                </li>
                <li>
                  <Link
                    text="@lastpunk9999"
                    url="https://twitter.com/lastpunk9999"
                    leavesPage={true}
                  />
                </li>
              </ul>
              <p>
                <>
                  Because 100% of Noun auction proceeds are sent to Nouns DAO,
                  Nounders have chosen to compensate themselves with Nouns.
                  Every 10th Noun for the first 5 years of the project (Noun ids
                  #0, #10, #20, #30 and so on) will be automatically sent to the
                  Nounder's multisig to be vested and shared among the founding
                  members of the project.
                </>
              </p>
              <p>
                <>
                  Nounder distributions don't interfere with the cadence of 24
                  hour auctions. Nouns are sent directly to the Nounder's
                  Multisig, and auctions continue on schedule with the next
                  available Noun ID.
                </>
              </p>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Section>
  );
};
export default Documentation;
