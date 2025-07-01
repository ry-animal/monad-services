// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IPulseEvents {
    /**
     * @notice Emitted when a new Pulse is created.
     * @param id Unique identifier for the Pulse.
     * @param author Address of the Pulse creator.
     * @param contentHash IPFS or Arweave hash of the Pulse content.
     * @param timestamp Block timestamp of creation.
     */
    event PulseCreated(
        uint256 indexed id,
        address indexed author,
        string contentHash,
        uint256 timestamp
    );

    /**
     * @notice Emitted when a Reaction is added to a Pulse.
     * @param reactionId Unique identifier for the reaction.
     * @param pulseId The Pulse being reacted to.
     * @param reactor Address of the user reacting.
     * @param reactionType Type of reaction (e.g., emoji code).
     * @param timestamp Block timestamp of reaction.
     */
    event ReactionAdded(
        uint256 indexed reactionId,
        uint256 indexed pulseId,
        address indexed reactor,
        string reactionType,
        uint256 timestamp
    );

    /**
     * @notice Emitted when a wallet connects to Monad Pulse.
     * @param user Address of the wallet.
     * @param timestamp Block timestamp of connection.
     */
    event WalletConnected(
        address indexed user,
        uint256 timestamp
    );
} 