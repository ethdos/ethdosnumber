import classes from "./ProposalVoteHeadline.module.css";
import { Trans } from "@lingui/macro";
import { Proposal, ProposalState, Vote } from "../../../../wrappers/nounsDao";
import ShortAddress from "../../../ShortAddress";
import { buildEtherscanAddressLink } from "../../../../utils/etherscan";
import React from "react";
import ReactTooltip from "react-tooltip";

interface ProposalVoteHeadlineProps {
  proposal: Proposal;
  supportDetailed: Vote | undefined;
  voter: string | undefined;
}

const ProposalVoteHeadline: React.FC<ProposalVoteHeadlineProps> = (props) => {
  const { proposal, supportDetailed, voter } = props;

  if (supportDetailed === undefined) {
    if (
      proposal.status === ProposalState.PENDING ||
      proposal.status === ProposalState.ACTIVE
    ) {
      return <>Waiting for</>;
    }
    return <>Absent for</>;
  }

  const voterComponent = (
    <>
      <ReactTooltip
        id={"view-on-etherscan-tooltip"}
        effect={"solid"}
        className={classes.delegateHover}
        getContent={(dataTip) => {
          return <div>{dataTip}</div>;
        }}
      />
      <span
        className={classes.voterLink}
        data-tip={`View on Etherscan`}
        data-for="view-on-etherscan-tooltip"
        onClick={(e) => {
          // This is so that we don't navigate to the prop page on click the address
          e.stopPropagation();
          window.open(buildEtherscanAddressLink(voter ?? ""), "_blank");
        }}
      >
        <ShortAddress address={voter ?? ""} />
      </span>
    </>
  );

  switch (supportDetailed) {
    case Vote.FOR:
      return <>{voterComponent} voted for</>;
    case Vote.ABSTAIN:
      return <>{voterComponent} abstained on</>;
    default:
      return <>{voterComponent} voted against</>;
  }
};

export default ProposalVoteHeadline;
