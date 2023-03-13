//SPDX-License-Identifier: MIT
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

    function get() public view returns (uint) {
        return counter;
    }
}