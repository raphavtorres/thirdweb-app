// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/Script.sol";

import {TeamManager} from "src/TeamManager.sol";

contract TeamManagerScript is Script {
    function setUp() public {}

    function run() public {
        vm.broadcast();
        new TeamManager();
    }
}
