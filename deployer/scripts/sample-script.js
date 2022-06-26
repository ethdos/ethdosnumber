// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.

const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  const provider = ethers.provider;
  console.log(deployer.address);
  console.log("Deployer balance: ", ethers.utils.formatEther(await provider.getBalance(deployer.address)));

  // const Verifier = await ethers.getContractFactory("Verifier");
  // const verifier = await Verifier.deploy();
  const verifier = await ethers.getContractAt("Verifier", "0x8fE7505a8Af0f39932DdFe8aDcD186173Ce6c2e7");
  console.log("Verifier: ", verifier.address);

  const Ethdos = await ethers.getContractFactory("ETHdos");
  const ethdos = await Ethdos.deploy(verifier.address);
  console.log(ethdos.address);

  //var inputs = [["0x10ea7fa33ef58445e47d88197f4cab6f3826af390a932d600c03c555820f9730", "0x1863cf3fe4b4c55eefa1e896dfb14d5f55549de59b519ad32b8f2a6c68f8b0be"],[["0x065da3a45209f19b6c7ac05fc992f97160f94a4051dccae9ee410f43d20ac63e", "0x1043d13e2db4b3fa091a79db12e8790d8e510920fa40813c09630dafe5ed40d2"],["0x24d2cf40a37bf895b23e4d6d92e8284a0914abe9063c06036f9c9973f1014af7", "0x091a910a4a81596df110620b036cb4ad8c88acd53f5a68c808c40ed5c8a5798b"]],["0x02d16b4b879a84b761e6e9ff7b99e34719ed92117be4401c700aa2b6c0f26d07", "0x2ba2ebdc06c68ca68faeea9646cbe9176e31623ec440adf361828e9e126edc66"],["0x0fc84d8fc6b9e19bed037c5f05378c39ccc273c233ffab25579eeae0ef7eec4e","0x0000000000000000000000000000000000000000000000000000000000000002","0x0000000000000000000000004eab0fa55a6c71c0c23bd0e67c06682b4ce78a7f","0x000000000000000000000000da1ea97d4c6d723125b26e4a1441c399d0ea0be4"]];
  //const resp = await ethdos.mint(inputs[0], inputs[1], inputs[2], inputs[3]);
  //console.log(await resp.wait());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
