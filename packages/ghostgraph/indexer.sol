// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./gen_schema.sol";
import "./gen_events.sol";
import "./gen_base.sol";
import "./gen_helpers.sol";

/**
 * @title GhostGraphIndexer
 * @notice (Stub) Indexer logic for GhostGraph. Indexing is performed offchain, but this file documents the event interface.
 */
contract PulseIndexer is GhostGraph {
    using StringHelpers for EventDetails;
    using StringHelpers for uint256;
    using StringHelpers for address;

    address constant PULSE_CONTRACT_ADDRESS = 0x29D404443f2CFd112B9C2947B28bf0Db27a7D00E;

    function registerHandles() external {
        graph.registerHandle(PULSE_CONTRACT_ADDRESS);
    }

    function onPulseCreated(EventDetails memory /*details*/, PulseCreatedEvent memory ev) external {
        Pulse memory pulse = graph.getPulse(ev.id);
        pulse.id = ev.id;
        pulse.author = ev.author;
        pulse.contentHash = ev.contentHash;
        pulse.timestamp = ev.timestamp;
        pulse.reactionCount = 0;
        graph.savePulse(pulse);

        // Update global stats
        Global memory global = graph.getGlobal("1");
        global.totalPulses += 1;
        graph.saveGlobal(global);

        // Update user stats
        User memory user = graph.getUser(ev.author);
        user.totalPulses += 1;
        graph.saveUser(user);
    }

    function onReactionAdded(EventDetails memory /*details*/, ReactionAddedEvent memory ev) external {
        Reaction memory reaction = graph.getReaction(ev.reactionId);
        reaction.id = ev.reactionId;
        reaction.reactionId = ev.reactionId;
        reaction.pulseId = ev.pulseId;
        reaction.reactor = ev.reactor;
        reaction.reactionType = ev.reactionType;
        reaction.timestamp = ev.timestamp;
        graph.saveReaction(reaction);

        // Update pulse analytics
        Pulse memory pulse = graph.getPulse(ev.pulseId);
        pulse.reactionCount += 1;
        graph.savePulse(pulse);

        // Update global stats
        Global memory global = graph.getGlobal("1");
        global.totalReactions += 1;
        graph.saveGlobal(global);

        // Update user stats
        User memory user = graph.getUser(ev.reactor);
        user.totalReactions += 1;
        graph.saveUser(user);
    }

    function onWalletConnected(EventDetails memory /*details*/, WalletConnectedEvent memory ev) external {
        // Optionally handle wallet connections
        // Example: track unique users, update stats, etc.
    }
} 