import React from "react";
import { Alert, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ProposalStatus from "../ProposalStatus";
import classes from "./ProposalHeader.module.css";
import navBarButtonClasses from "../NavBarButton/NavBarButton.module.css";
import {
  Proposal,
  useHasVotedOnProposal,
  useProposalVote,
} from "../../wrappers/nounsDao";
import clsx from "clsx";
import { isMobileScreen } from "../../utils/isMobile";
import { useUserVotesAsOfBlock } from "../../wrappers/nounToken";
import { useBlockTimestamp } from "../../hooks/useBlockTimestamp";
import { Trans } from "@lingui/macro";
import { i18n } from "@lingui/core";
import { buildEtherscanAddressLink } from "../../utils/etherscan";
import { transactionLink } from "../ProposalContent";
import ShortAddress from "../ShortAddress";
import { useActiveLocale } from "../../hooks/useActivateLocale";
import { Locales } from "../../i18n/locales";
import HoverCard from "../HoverCard";
import ByLineHoverCard from "../ByLineHoverCard";

interface ProposalHeaderProps {
  proposal: Proposal;
  isActiveForVoting?: boolean;
  isWalletConnected: boolean;
  submitButtonClickHandler: () => void;
}

const getTranslatedVoteCopyFromString = (proposalVote: string) => {
  if (proposalVote === "For") {
    return (
      <>
        You voted <strong>For</strong> this proposal
      </>
    );
  }
  if (proposalVote === "Against") {
    return (
      <>
        You voted <strong>Against</strong> this proposal
      </>
    );
  }
  return (
    <>
      You <strong>Abstained</strong> from this proposal
    </>
  );
};

const ProposalHeader: React.FC<ProposalHeaderProps> = (props) => {
  const {
    proposal,
    isActiveForVoting,
    isWalletConnected,
    submitButtonClickHandler,
  } = props;

  const isMobile = isMobileScreen();
  const availableVotes = useUserVotesAsOfBlock(proposal?.createdBlock) ?? 0;
  const hasVoted = useHasVotedOnProposal(proposal?.id);
  const proposalVote = useProposalVote(proposal?.id);
  const proposalCreationTimestamp = useBlockTimestamp(proposal?.createdBlock);
  const disableVoteButton = !isWalletConnected || !availableVotes || hasVoted;
  const activeLocale = useActiveLocale();

  const voteButton = (
    <>
      {isWalletConnected ? (
        <>
          {!availableVotes && (
            <div className={classes.noVotesText}>
              <>You have no votes.</>
            </div>
          )}
        </>
      ) : (
        <div className={classes.connectWalletText}>
          <>Connect a wallet to vote.</>
        </div>
      )}
      <Button
        className={
          disableVoteButton ? classes.submitBtnDisabled : classes.submitBtn
        }
        disabled={disableVoteButton}
        onClick={submitButtonClickHandler}
      >
        <>Submit vote</>
      </Button>
    </>
  );

  const proposer = (
    <a
      href={buildEtherscanAddressLink(proposal.proposer || "")}
      target="_blank"
      rel="noreferrer"
      className={classes.proposerLinkJp}
    >
      <ShortAddress address={proposal.proposer || ""} avatar={false} />
    </a>
  );

  const proposedAtTransactionHash = (
    <>
      at{" "}
      <span className={classes.propTransactionHash}>
        {transactionLink(proposal.transactionHash)}
      </span>
    </>
  );

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <div className="d-flex justify-content-start align-items-start">
          <Link to={"/vote"}>
            <button
              className={clsx(
                classes.backButton,
                navBarButtonClasses.whiteInfo
              )}
            >
              ←
            </button>
          </Link>
          <div className={classes.headerRow}>
            <span>
              <div className="d-flex">
                <div>
                  <>Proposal {i18n.number(parseInt(proposal.id || "0"))}</>
                </div>
                <div>
                  <ProposalStatus
                    status={proposal?.status}
                    className={classes.proposalStatus}
                  />
                </div>
              </div>
            </span>
            <div className={classes.proposalTitleWrapper}>
              <div className={classes.proposalTitle}>
                <h1>{proposal.title} </h1>
              </div>
            </div>
          </div>
        </div>
        {!isMobile && (
          <div className="d-flex justify-content-end align-items-end">
            {isActiveForVoting && voteButton}
          </div>
        )}
      </div>

      <div className={classes.byLineWrapper}>
        {activeLocale === Locales.ja_JP ? (
          <HoverCard
            hoverCardContent={(tip: string) => (
              <ByLineHoverCard proposerAddress={tip} />
            )}
            tip={proposal && proposal.proposer ? proposal.proposer : ""}
            id="byLineHoverCard"
          >
            <div className={classes.proposalByLineWrapperJp}>
              <>
                <span className={classes.proposedByJp}>Proposed by: </span>
                <span className={classes.proposerJp}>{proposer}</span>
                <span className={classes.propTransactionWrapperJp}>
                  {proposedAtTransactionHash}
                </span>
              </>
            </div>
          </HoverCard>
        ) : (
          <>
            <h3>Proposed by</h3>

            <div className={classes.byLineContentWrapper}>
              <HoverCard
                hoverCardContent={(tip: string) => (
                  <ByLineHoverCard proposerAddress={tip} />
                )}
                tip={proposal && proposal.proposer ? proposal.proposer : ""}
                id="byLineHoverCard"
              >
                <h3>
                  {proposer}
                  <span className={classes.propTransactionWrapper}>
                    {proposedAtTransactionHash}
                  </span>
                </h3>
              </HoverCard>
            </div>
          </>
        )}
      </div>

      {isMobile && (
        <div className={classes.mobileSubmitProposalButton}>
          {isActiveForVoting && voteButton}
        </div>
      )}

      {proposal && isActiveForVoting && hasVoted && (
        <Alert variant="success" className={classes.voterIneligibleAlert}>
          {getTranslatedVoteCopyFromString(proposalVote)}
        </Alert>
      )}

      {proposal &&
        isActiveForVoting &&
        proposalCreationTimestamp &&
        !!availableVotes &&
        !hasVoted && (
          <Alert variant="success" className={classes.voterIneligibleAlert}>
            <>
              Only Nouns you owned or were delegated to you before{" "}
              {i18n.date(new Date(proposalCreationTimestamp * 1000), {
                dateStyle: "long",
                timeStyle: "long",
              })}{" "}
              are eligible to vote.
            </>
          </Alert>
        )}
    </>
  );
};

export default ProposalHeader;
