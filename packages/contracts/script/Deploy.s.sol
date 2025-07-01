// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "forge-std/Script.sol";
import "../src/Reaction.sol";

contract DeployScript is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        address deployer = vm.addr(deployerPrivateKey);
        
        vm.startBroadcast(deployerPrivateKey);
        
        Reaction reaction = new Reaction(deployer);
        
        vm.stopBroadcast();
        
        console.log("Reaction deployed at:", address(reaction));
        console.log("Deployer address:", deployer);
    }
} 