// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Test.sol";
import "../src/ETHdos.sol";

contract ETHdosTest is Test {
    function setUp() public {}

    function testExample() public {
        assertTrue(true);
    }

    uint256[2] _a = [1, 1];
    uint256[2][2] _b = [[1, 1], [1, 1]];
    uint256[2] _c = [1, 1];

    function testTokenURI() public {
        address originAddr = 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045;
        string memory originName = "Vitalik";
        address creatorAddr = 0xF05b5f04B7a77Ca549C0dE06beaF257f40C66FDB;
        ETHdos ethdos = new ETHdos(originAddr, originName, creatorAddr);
        vm.startPrank(address(0xF05b5f04B7a77Ca549C0dE06beaF257f40C66FDB), address(0xF05b5f04B7a77Ca549C0dE06beaF257f40C66FDB));
        ethdos.mint(
            _a,
            _b,
            _c,
            [11642711455315657037619325453283726029571464969592491499732195523426936339829, 4, uint256(uint160(0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045)), uint256(uint160(0xF05b5f04B7a77Ca549C0dE06beaF257f40C66FDB))]
        );
        vm.stopPrank();
        string memory output = ethdos.tokenURI(1);
        console.log('output', output);
    }
}
