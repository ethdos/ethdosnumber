import { useQuery } from "@apollo/client";
import React from "react";
import { Image } from "react-bootstrap";
import _LinkIcon from "../../assets/icons/Link.svg";
import { auctionQuery } from "../../wrappers/subgraph";
import _HeartIcon from "../../assets/icons/Heart.svg";
import classes from "./NounInfoRowHolder.module.css";

import config from "../../config";
import { buildEtherscanAddressLink } from "../../utils/etherscan";
import ShortAddress from "../ShortAddress";

import { useAppSelector } from "../../hooks";
import { Trans } from "@lingui/macro";
import Tooltip from "../Tooltip";

interface NounInfoRowHolderProps {
  nounId: number;
}

const NounInfoRowHolder: React.FC<NounInfoRowHolderProps> = (props) => {
  const { nounId } = props;
  const isCool = useAppSelector((state) => state.application.isCoolBackground);
  const { loading, error, data } = useQuery(auctionQuery(nounId));

  const winner = data && data.auction.bidder.id;

  if (loading || !winner) {
    return (
      <div className={classes.nounHolderInfoContainer}>
        <span className={classes.nounHolderLoading}>
          <>Loading...</>
        </span>
      </div>
    );
  } else if (error) {
    return (
      <div>
        <>Failed to fetch Noun info</>
      </div>
    );
  }

  const etherscanURL = buildEtherscanAddressLink(winner);
  const shortAddressComponent = <ShortAddress address={winner} />;

  return (
    <Tooltip
      tip="View on Etherscan"
      tooltipContent={(tip: string) => {
        return <>View on Etherscan</>;
      }}
      id="holder-etherscan-tooltip"
    >
      <div className={classes.nounHolderInfoContainer}>
        <span>
          <Image src={_HeartIcon} className={classes.heartIcon} />
        </span>
        <span>
          <>Winner</>
        </span>
        <span>
          <a
            className={
              isCool
                ? classes.nounHolderEtherscanLinkCool
                : classes.nounHolderEtherscanLinkWarm
            }
            href={etherscanURL}
            target={"_blank"}
            rel="noreferrer"
          >
            {winner.toLowerCase() ===
            config.addresses.nounsAuctionHouseProxy.toLowerCase() ? (
              <>Nouns Auction House</>
            ) : (
              shortAddressComponent
            )}
          </a>
        </span>
        <span className={classes.linkIconSpan}>
          <Image src={_LinkIcon} className={classes.linkIcon} />
        </span>
      </div>
    </Tooltip>
  );
};

export default NounInfoRowHolder;
