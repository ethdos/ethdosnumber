// SPDX-License-Identifier: MIT
pragma solidity >=0.6.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "./base64.sol";
import "./Verifier.sol";

contract ETHdos is ERC721Enumerable {
    using Counters for Counters.Counter;

    Counters.Counter private tokenCounter;

    mapping(uint256 => address) private originAddress;
    mapping(uint256 => address) private sinkAddress;
    mapping(uint256 => uint256) private degree;

    Verifier verifier;

    function getDesc(address origin, address sink, uint256 degree) private view returns (string memory) {
        // convert address to string
        string memory originStr = toString(origin);
        string memory sinkStr = toString(sink);
        // concatenate strings
        string memory result = string(abi.encodePacked(sinkStr, "is ", toString(degree), "th degree friends with ", originStr));

        return result;
    }

    function tokenDesc(uint256 tokenId) public view returns (string memory) {
        address origin = originAddress[tokenId];
        address sink = sinkAddress[tokenId];
        uint256 degree = degree[tokenId];
        return getDesc(origin, sink, degree);
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        string[3] memory parts;
        parts[
            0
        ] = '<svg xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin meet" viewBox="0 0 350 350"><style>.base { fill: white; font-family: serif; font-size: 14px; }</style><rect width="100%" height="100%" fill="black" /><text x="10" y="20" class="base">';

        parts[1] = tokenDesc(tokenId);

        parts[2] = "</text></svg>";

        string memory output = string(
            abi.encodePacked(
                parts[0],
                parts[1],
                parts[2]
            )
        );

        string memory json = Base64.encode(
            bytes(
                string(
                    abi.encodePacked(
                        '{"origin": "',
                        abi.encodePacked(originAddress[tokenId]),
                        '", "owner": "',
                        abi.encodePacked(sinkAddress[tokenId]),
                        '", "degree": "',
                        degree[tokenId],
                        '", "description": "ETHdos are Erdos number NFTs on Ethereum. They prove your degree of seperation from the origin address without revealing anything about the friend path to the world (and yourself). ETHDos uses recursive ZK SNARKs to insinuate this social experiment game.", "image": "data:image/svg+xml;base64,',
                        Base64.encode(bytes(output)),
                        '"}'
                    )
                )
            )
        );
        output = string(abi.encodePacked("data:application/json;base64,", json));

        return output;
    }

    function toString(address account) public pure returns(string memory) {
        return toString(abi.encodePacked(account));
    }

    function toString(uint256 value) public pure returns(string memory) {
        return toString(abi.encodePacked(value));
    }

    function toString(bytes32 value) public pure returns(string memory) {
        return toString(abi.encodePacked(value));
    }

    function toString(bytes memory data) public pure returns(string memory) {
        bytes memory alphabet = "0123456789abcdef";

        bytes memory str = new bytes(2 + data.length * 2);
        str[0] = "0";
        str[1] = "x";
        for (uint i = 0; i < data.length; i++) {
            str[2+i*2] = alphabet[uint(uint8(data[i] >> 4))];
            str[3+i*2] = alphabet[uint(uint8(data[i] & 0x0f))];
        }
        return string(str);
    }

    function mint(uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[4] memory signals) public {
        tokenCounter.increment();
        uint256 tokenId = tokenCounter.current();

        require(signals[0] == 7138597452374049843442357986628673314690363139209617000292486089713270058062, "invalid signals");
        degree[tokenId] = signals[1];
        originAddress[tokenId] = address(uint160(signals[2]));
        sinkAddress[tokenId] = address(uint160(signals[3]));

        require(sinkAddress[tokenId] == msg.sender, "Invalid Sender");
        require(verifier.verifyProof(a, b, c, signals), "Invalid Proof");

        _mint(msg.sender, tokenId);
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override {
        if (from != address(0)) {
            revert("Cannot transfer - ETHDOS is soulbound");
        }
    }

    constructor(address _verifier) ERC721("ETHdos", "ETHDOS") {
        verifier = Verifier(_verifier);
    }
}