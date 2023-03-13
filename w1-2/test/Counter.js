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
