// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

import "openzeppelin-contracts/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "openzeppelin-contracts/contracts/utils/Strings.sol";
import "openzeppelin-contracts/contracts/utils/Counters.sol";
import "openzeppelin-contracts/contracts/utils/Base64.sol";
import "openzeppelin-contracts/contracts/utils/math/SafeMath.sol";
import "./Verifier.sol";
import "./NFTSVG.sol";
import "./HexStrings.sol";

contract ETHdos is ERC721Enumerable {
    using Counters for Counters.Counter;
    using HexStrings for uint256;
    using SafeMath for uint256;
    using Strings for uint256;
    using Strings for address;

    Counters.Counter private tokenCounter;

    struct TokenMetadata {
        address originAddress;
        string originName;
        address sinkAddress;
        uint256 degree;
    }

    mapping(uint256 => TokenMetadata) private tokenIdtoMetadata;
    mapping(address => mapping(address => mapping(uint256 => uint256))) private attrToTokenID;

    function tokenToColorHex(uint256 token, uint256 offset) internal pure returns (string memory str) {
        return string((token >> offset).toHexStringNoPrefix(3));
    }

    function getCircleCoord(
        uint256 tokenAddress,
        uint256 offset,
        uint256 tokenId
    ) internal pure returns (uint256) {
        return (sliceTokenHex(tokenAddress, offset) * tokenId) % 255;
    }

    function sliceTokenHex(uint256 token, uint256 offset) internal pure returns (uint256) {
        return uint256(uint8(token >> offset));
    }

    function scale(
        uint256 n,
        uint256 inMn,
        uint256 inMx,
        uint256 outMn,
        uint256 outMx
    ) private pure returns (string memory) {
        return (n.sub(inMn).mul(outMx.sub(outMn)).div(inMx.sub(inMn)).add(outMn)).toString();
    }


    function tokenURI(uint256 tokenId) public view override returns (string memory output) {
        TokenMetadata memory meta = tokenIdtoMetadata[tokenId];
        NFTSVG.SVGParams memory svgParams = NFTSVG.SVGParams({
            originAddress: meta.originAddress,
            originName: meta.originName,
            sinkAddress: meta.sinkAddress,
            degree: meta.degree,
            tokenId: tokenId,
            color0: tokenToColorHex(uint256(uint160(meta.originAddress)), 136),
            color1: tokenToColorHex(uint256(uint160(meta.sinkAddress)), 136),
            color2: tokenToColorHex(uint256(uint160(meta.originAddress)), 0),
            color3: tokenToColorHex(uint256(uint160(meta.sinkAddress)), 0),
            x1: scale(getCircleCoord(uint256(uint160(meta.originAddress)), 16, tokenId), 0, 255, 16, 274),
            y1: scale(getCircleCoord(uint256(uint160(meta.sinkAddress)), 16, tokenId), 0, 255, 100, 484),
            x2: scale(getCircleCoord(uint256(uint160(meta.originAddress)), 32, tokenId), 0, 255, 16, 274),
            y2: scale(getCircleCoord(uint256(uint160(meta.sinkAddress)), 32, tokenId), 0, 255, 100, 484),
            x3: scale(getCircleCoord(uint256(uint160(meta.originAddress)), 48, tokenId), 0, 255, 16, 274),
            y3: scale(getCircleCoord(uint256(uint160(meta.sinkAddress)), 48, tokenId), 0, 255, 100, 484)
        });
        string memory svgOutput = NFTSVG.generateSVG(svgParams);

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"attributes":[ ',
                        '{"trait_type": "Origin",',
                        '"value": "',
                        tokenIdtoMetadata[tokenId].originAddress.toHexString(),
                        '"}, {"trait_type": "Owner",',
                        '"value": "',
                        tokenIdtoMetadata[tokenId].sinkAddress.toHexString(),
                        '"}, {"trait_type": "Degree",',
                        '"value": "',
                        tokenIdtoMetadata[tokenId].degree.toString(),
                        '"}], "description": "ETHdos are Erdos number NFTs on Ethereum. They prove your degree of seperation from the origin address without revealing anything about the friend path to the world (and yourself). ETHDos uses recursive ZK SNARKs to instrument this social experiment.", "image": "data:image/svg+xml;base64,',
                        Base64.encode(bytes(svgOutput)),
                        '"}'
                    )
                )
            )
        );
        output = string(abi.encodePacked("data:application/json;base64,", json));
    }

    function mint(uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[4] memory signals) public {
        tokenCounter.increment();
        uint256 tokenId = tokenCounter.current();

        require(signals[0] == 4252433715821012769718070692042314069815324618341008546615054712305544311485, "invalid signals");
        tokenIdtoMetadata[tokenId].degree = signals[1];
        tokenIdtoMetadata[tokenId].originAddress = address(uint160(signals[2]));
        tokenIdtoMetadata[tokenId].originName = ORIGIN_NAME;
        tokenIdtoMetadata[tokenId].sinkAddress = address(uint160(signals[3]));
        TokenMetadata memory meta = tokenIdtoMetadata[tokenId];

        require(meta.sinkAddress == msg.sender, "Invalid Sender");
        require(meta.originAddress == ORIGIN_ADDRESS, "Invalid Origin");
        require(Verifier.verifyProof(a, b, c, signals), "Invalid Proof");
        require(attrToTokenID[meta.originAddress][meta.sinkAddress][meta.degree] == 0, "NFT already exists");
        attrToTokenID[meta.originAddress][meta.sinkAddress][meta.degree] = tokenId;

        _mint(msg.sender, tokenId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal pure override {
        if (from != address(0)) {
            revert("Cannot transfer - ETHdos is soulbound");
        }
    }

    address public ORIGIN_ADDRESS;
    string public ORIGIN_NAME;
    address public CREATOR_ADDRESS;

    constructor(address _originAddress, string memory _originName, address _creatorAddress) ERC721("ETHdos", "ETHDOS") {
        ORIGIN_ADDRESS = _originAddress;
        ORIGIN_NAME = _originName;
        CREATOR_ADDRESS = _creatorAddress;
    }

    function setOriginAddress(address _originAddress, string memory _originName) public {
        require(msg.sender == CREATOR_ADDRESS, "Only creator can set origin address");
        ORIGIN_ADDRESS = _originAddress;
        ORIGIN_NAME = _originName;
    }

    function setCreatorAddress(address _creatorAddress) public {
        require(msg.sender == CREATOR_ADDRESS, "Only creator can set creator address");
        CREATOR_ADDRESS = _creatorAddress;
    }
}