/** AUTOGENERATED CODE BY GHOSTGRAPH CODEGEN **/

// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "./gen_schema.sol";
import "./gen_events.sol";
import { EventDetails } from "./gen_helpers.sol";

enum GhostEventName {
    PulseCreated,
    ReactionAdded,
    WalletConnected
}

interface IGhostGraph {
    function getPulse(uint256 id) external returns (Pulse memory);
    function getReaction(uint256 id) external returns (Reaction memory);
    function getUser(address id) external returns (User memory);
    function getGlobal(string memory id) external returns (Global memory);
    function savePulse(Pulse memory pulse) external returns (bool);
    function saveReaction(Reaction memory reaction) external returns (bool);
    function saveUser(User memory user) external returns (bool);
    function saveGlobal(Global memory global) external returns (bool);
    function registerHandle(address addr) external returns (bool);
    function registerFactory(address addr, GhostEventName eventName, string memory param) external returns (bool);
    
    // helper methods
    struct GhostTxDetails {
        address from;
        address to;
        uint256 value;
    }
    function ghostToString(address value) external returns (string memory);
    function ghostToString(bytes calldata value) external returns (string memory);
    function ghostToString(bytes32 value) external returns (string memory);
    function ghostToString(bool value) external returns (string memory);
    function ghostToString(uint256 value) external returns (string memory);
    function ghostToString(int256 value) external returns (string memory);
    function ghostIsContract(address addr) external returns (bool);
    function ghostTxDetails(bytes32 txHash) external returns (GhostTxDetails memory);
    function ghostStringsEqual(string memory a, string memory b) external returns (bool);
    function ghostDivideUintByPower(uint256 val, uint8 decimals, uint8 precision) external returns (string memory);
    function ghostDecimalStringToUint(string memory s, uint8 decimals) external returns (uint256);
    function ghostUintToDecimalString(uint256 val, uint8 decimals) external returns (string memory);
    function ghostStringToArray(string memory s) external returns (string[] memory);
    function ghostAppendStringToArray(string[] memory arr, string memory s) external returns (string memory);
    function ghostDateBin(string memory interval, uint64 timestamp) external returns (uint64);
}

contract GhostGraph {

    IGhostGraph public constant graph = IGhostGraph(address(0x0011223344));
}