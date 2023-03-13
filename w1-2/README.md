## 修改Counter合约

```solidity
// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract Counter{
    uint public counter;
    address owner;

    constructor(){
        owner = msg.sender;
        counter = 0;
    }

    function count() public{
	    	require(owner == msg.sender, "only owner called");
        counter = counter + 1;
    }
}
```



## 合约测试

```solidity
const { ethers } = require("hardhat");
const { expect } = require("chai");

let counter;

describe("Counter", function () {
  it("部署者调用", async function () {
    const [owner, otherAccount] = await ethers.getSigners();
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    await counter.deployed();

    await counter.connect(owner).count();
  });


  // 
  it("非部署者调用", async function () {
    const [owner, otherAccount] = await ethers.getSigners();
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    await counter.deployed();

    await expect(counter.connect(otherAccount).count()).to.be.revertedWith("only owner called");
  });


});
```



## 合约部署

https://goerli.etherscan.io/address/0xCEE59Dd5f51b65fa57863ad191e29a9EDcf6312C



## 开源代码

https://goerli.etherscan.io/address/0xCEE59Dd5f51b65fa57863ad191e29a9EDcf6312C#code
