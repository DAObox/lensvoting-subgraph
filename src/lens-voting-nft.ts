import { FollowNFTDelegatedPowerChanged, FollowNFTTransferred } from "../generated/LensVotingNFT/LensVotingNFT";
import { Delegator, Delegate } from "../generated/schema";

export function handleFollowNFTDelegatedPowerChanged(event: FollowNFTDelegatedPowerChanged): void {
  let delegate = new Delegate(event.params.delegate.toHexString());
  delegate.address = event.params.delegate;
  delegate.votingPower = event.params.newPower;
  delegate.transferedAt = event.params.timestamp;
  delegate.save();
}

export function handleFollowNFTTransferred(event: FollowNFTTransferred): void {
  let delegator = new Delegator(event.params.from.toHexString());
  delegator.address = event.params.from;
  delegator.delegateAddress = event.params.to;
  delegator.transferedAt = event.params.timestamp;
  delegator.save();
}
