import { Button, Spinner } from "react-bootstrap";
import { Trans } from "@lingui/macro";
import { i18n } from "@lingui/core";

const CreateProposalButton = ({
  className,
  isLoading,
  proposalThreshold,
  hasActiveOrPendingProposal,
  hasEnoughVote,
  isFormInvalid,
  handleCreateProposal,
}: {
  className?: string;
  isLoading: boolean;
  proposalThreshold?: number;
  hasActiveOrPendingProposal: boolean;
  hasEnoughVote: boolean;
  isFormInvalid: boolean;
  handleCreateProposal: () => void;
}) => {
  const buttonText = () => {
    if (hasActiveOrPendingProposal) {
      return <>You already have an active or pending proposal</>;
    }
    if (!hasEnoughVote) {
      if (proposalThreshold) {
        return (
          <>
            You must have {i18n.number((proposalThreshold || 0) + 1)} votes to
            submit a proposal
          </>
        );
      }
      return <>You don't have enough votes to submit a proposal</>;
    }
    return <>Create Proposal</>;
  };

  return (
    <div className="d-grid gap-2">
      <Button
        className={className}
        variant={
          hasActiveOrPendingProposal || !hasEnoughVote ? "danger" : "primary"
        }
        disabled={isFormInvalid || hasActiveOrPendingProposal || !hasEnoughVote}
        onClick={handleCreateProposal}
      >
        {isLoading ? <Spinner animation="border" /> : buttonText()}
      </Button>
    </div>
  );
};
export default CreateProposalButton;
