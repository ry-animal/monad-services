// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "forge-std/Test.sol";
import "../src/Reaction.sol";

contract ReactionTest is Test {
    Reaction reaction;
    address user = address(0xBEEF);
    address owner = address(this);
    bytes32 eventId = keccak256("event1");

    function setUp() public {
        reaction = new Reaction(owner);
    }

    function testAddReactionEmitsEvent() public {
        vm.prank(user);
        vm.expectEmit(true, true, false, true);
        emit Reaction.ReactionAdded(eventId, user, 1);
        reaction.addReaction(eventId, 1);
    }

    function testAddReactionUpdatesMapping() public {
        vm.prank(user);
        reaction.addReaction(eventId, 2);
        assertEq(reaction.reactions(eventId, user), 2);
    }

    function testAddReactionInvalidEmojiReverts() public {
        vm.prank(user);
        vm.expectRevert("Invalid emoji");
        reaction.addReaction(eventId, 0);
    }

    function testOnlyOwnerCanCallAdminAction() public {
        // Owner can call
        reaction.adminAction();
        // Non-owner reverts
        vm.prank(user);
        vm.expectRevert("Ownable: caller is not the owner");
        reaction.adminAction();
    }

    function testOverwriteReaction() public {
        vm.prank(user);
        reaction.addReaction(eventId, 1);
        vm.prank(user);
        reaction.addReaction(eventId, 3);
        assertEq(reaction.reactions(eventId, user), 3);
    }

    function testFuzzAddReaction(bytes32 _eventId, uint8 _emojiId) public {
        vm.assume(_emojiId > 0);
        vm.prank(user);
        reaction.addReaction(_eventId, _emojiId);
        assertEq(reaction.reactions(_eventId, user), _emojiId);
    }
} 