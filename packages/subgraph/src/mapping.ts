import { ReactionAdded } from '../abis/Reaction.json';
import { Reaction, TrackedEvent, User } from '../generated/schema';

export function handleReactionAdded(event: ReactionAdded): void {
  let reaction = new Reaction(event.transaction.hash.toHex());
  reaction.userAddress = event.params.user;
  reaction.transactionId = event.params.transactionId;
  reaction.emojiId = event.params.emojiId;
  reaction.timestamp = event.block.timestamp;
  reaction.save();
}

// Add other handlers as needed for legacy reference 