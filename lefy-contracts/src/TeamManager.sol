// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

contract TeamManagement {
    // - Create/delete teams.
    struct Team {
        uint256 id;
        string name;
        address captain; // Tracks which addresses are in the team
    }

    mapping(uint256 => Team) public teams; // Store teams by their ID

    mapping(uint256 => address[]) public teamMembers; // TeamID -> Member List
    mapping(uint256 => address[]) public joinRequests; // TeamID -> Address Pending join requests

    address public owner;

    constructor() {
        owner = msg.sender;
    }

    // - Add/remove members.
    // - Administrator defined on-chain.
}
