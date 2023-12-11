const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    // 获取 signer签名
    const [owner] = await ethers.getSigners();

    // 部署合约
    const hardhatToken = await ethers.deployContract("TestToken");

    // 调用合约的balanceOf方法测试
    const ownerBalance = await hardhatToken.balanceOf(owner.address);

    // 校验总供应量是否匹配发布人的balance
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});
