import { dataSource } from "@graphprotocol/graph-ts";
import { FollowNFTDelegatedPowerChanged } from "../generated/LensVotingNFT/LensVotingNFT";
import { Delegator, Delegatee, Delegate } from "../generated/schema";

export function handleFollowNFTDelegatedPowerChanged(event: FollowNFTDelegatedPowerChanged): void {
  let delegatee = new Delegatee(event.params.delegate.toHexString());
  delegatee.votingPower = event.params.newPower;
  delegatee.transferedAt = event.params.timestamp;
  delegatee.save();
}

// export function handleFollowNFTTransferred(event: FollowNFTTransferred): void {
//   let delegator = new Delegator(event.params.from.toHexString());
//   delegator.address = event.params.from;
//   delegator.transferedAt = event.params.timestamp;
//   delegator.save();
// }
