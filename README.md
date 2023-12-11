# solidityContracts
from hardhat

https://hardhat.org/tutorial/creating-a-new-hardhat-project

```npm
npx hardhat init

npm install --save-dev @nomicfoundation/hardhat-toolbox

//编译
npx hardhat compile
```

```ts
hardhat.config

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox-viem";
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.19",
};

export default config;
```

Test
```ts
const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Token contract", function () {
  it("Deployment should assign the total supply of tokens to the owner", async function () {
    const [owner] = await ethers.getSigners();

    const hardhatToken = await ethers.deployContract("TestToken");

    const ownerBalance = await hardhatToken.balanceOf(owner.address);
    expect(await hardhatToken.totalSupply()).to.equal(ownerBalance);
  });
});
```

npx hardhat test

result
```cmd

  Token contract
    ✔ Deployment should assign the total supply of tokens to the owner (1753ms)

  1 passing (2s)
```