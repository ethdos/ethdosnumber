import classes from "./ProposalStatus.module.css";
import { ProposalState } from "../../wrappers/nounsDao";
import React from "react";
import clsx from "clsx";
import { Trans } from "@lingui/macro";

const statusVariant = (status: ProposalState | undefined) => {
  switch (status) {
    case ProposalState.PENDING:
    case ProposalState.ACTIVE:
      return classes.primary;
    case ProposalState.SUCCEEDED:
    case ProposalState.EXECUTED:
      return classes.success;
    case ProposalState.DEFEATED:
    case ProposalState.VETOED:
      return classes.danger;
    case ProposalState.QUEUED:
    case ProposalState.CANCELLED:
    case ProposalState.EXPIRED:
    default:
      return classes.secondary;
  }
};

const statusText = (status: ProposalState | undefined) => {
  switch (status) {
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

interface ProposalStateProps {
  status?: ProposalState;
  className?: string;
}

const ProposalStatus: React.FC<ProposalStateProps> = (props) => {
  const { status, className } = props;
  return (
    <div
      className={clsx(statusVariant(status), classes.proposalStatus, className)}
    >
      {statusText(status)}
    </div>
  );
};

export default ProposalStatus;
