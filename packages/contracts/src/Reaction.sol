// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/access/Ownable.sol";

/**
 * @title Reaction
 * @notice UUPS upgradeable contract for on-chain reactions in Monad Pulse.
 */
contract Reaction is Ownable {
    /// @notice Maps transaction IDs to emoji IDs
    mapping(bytes32 => mapping(address => uint8)) public reactions;

    /**
     * @notice Emitted when a reaction is added
     * @param transactionId The transaction being reacted to
     * @param user The address of the reactor
     * @param emojiId The emoji code
     */
    event ReactionAdded(bytes32 indexed transactionId, address indexed user, uint8 emojiId);

    constructor(address initialOwner) Ownable(initialOwner) {}

    /**
     * @notice Add a reaction to a transaction
     * @param transactionId The transaction hash
     * @param emojiId The emoji code
     */
    function addReaction(bytes32 transactionId, uint8 emojiId) external {
        require(emojiId > 0, "Invalid emoji");
        reactions[transactionId][msg.sender] = emojiId;
        emit ReactionAdded(transactionId, msg.sender, emojiId);
    }

    // Example admin function (owner only)
    function adminAction() external onlyOwner {
        // Placeholder for future admin logic
    }
}