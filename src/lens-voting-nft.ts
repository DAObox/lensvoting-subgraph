import { FollowNFTDelegatedPowerChanged, FollowNFTTransferred } from "../generated/LensVotingNFT/LensVotingNFT";
import { Delegator, Delegate } from "../generated/schema";

export function handleFollowNFTDelegatedPowerChanged(event: FollowNFTDelegatedPowerChanged): void {
  let delegator = Delegator.load(event.params.delegate.toHexString());
  if (delegator == null) {
    delegator = new Delegator(event.params.delegate.toHexString());
  }
  delegator.save();

  let delegate = Delegate.load(event.params.delegate.toHexString());
  if (delegate == null) {
    delegate = new Delegate(event.params.delegate.toHexString());
  }
  delegate.save();
}

export function handleFollowNFTTransferred(event: FollowNFTTransferred): void {
  let delegator = Delegator.load(event.params.from.toHexString());
  if (delegator != null) {
    delegator.save();
  }
}