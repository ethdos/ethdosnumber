import { Trans } from "@lingui/macro";
import React from "react";
import { Proposal, ProposalState } from "../../wrappers/nounsDao";

interface ProposalStatusCopyProps {
  proposal: Proposal;
}

const ProposalStatusCopy: React.FC<ProposalStatusCopyProps> = (props) => {
  const { proposal } = props;
  switch (proposal.status) {
    case ProposalState.PENDING:
      return <>Pending</>;
    case ProposalState.ACTIVE:
      return <>Active</>;
    case ProposalState.SUCCEEDED:
      return <>Succeeded</>;
    case ProposalState.EXECUTED:
      return <>Executed</>;
    case ProposalState.DEFEATED:
      return <>Defeated</>;
    case ProposalState.QUEUED:
      return <>Queued</>;
    case ProposalState.CANCELLED:
      return <>Canceled</>;
    case ProposalState.VETOED:
      return <>Vetoed</>;
    case ProposalState.EXPIRED:
      return <>Expired</>;
    default:
      return <>Undetermined</>;
  }
};

export default ProposalStatusCopy;
