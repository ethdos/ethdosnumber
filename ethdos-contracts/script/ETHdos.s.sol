// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";
import "../src/ETHdos.sol";

contract ETHdosScript is Script {
    function setUp() public {}

    function run() public {
        mint();
    }

    uint256[2] _a = [1, 1];
    uint256[2][2] _b = [[1, 1], [1, 1]];
    uint256[2] _c = [1, 1];

    function deploy() public {
        vm.startBroadcast();
        address originAddr = 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045;
        string memory originName = "Vitalik";
        address creatorAddr = 0xF05b5f04B7a77Ca549C0dE06beaF257f40C66FDB;
        ETHdos ethdos = new ETHdos(originAddr, originName, creatorAddr);
        console.log(address(ethdos));
        vm.stopBroadcast();
    }

    function mint() public {
        vm.startBroadcast();
        ETHdos ethdos = ETHdos(0x612048D83f0f744d5C14c45FEdEFEAF61C45E39D);
        ethdos.mint(
            _a,
            _b,
            _c,
            [7138597452374049843442357986628673314690363139209617000292486089713270058062, 4, uint256(uint160(0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045)), uint256(uint160(0x9a57D792CC04a7bCEB5D1f8b1B7AF5F8e5695E54))]
        );
        vm.stopBroadcast();
    }
}
