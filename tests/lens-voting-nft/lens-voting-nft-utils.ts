import { Address, BigInt, Bytes, ethereum } from "@graphprotocol/graph-ts"
import { createMockedFunction, newMockEvent } from "matchstick-as/assembly/index"

import { Delegator, Delegatee } from "../../generated/schema";
import { FollowNFTDelegatedPowerChanged, FollowNFTTransferred } from "../../generated/LensVotingNFT/LensVotingNFT";
import { handleFollowNFTDelegatedPowerChanged, handleFollowNFTTransferred } from "../../src/lens-voting-nft";

export function handleFollowNFTDelegatedPowerChanges(events: FollowNFTDelegatedPowerChanged[]): void {
  events.forEach(event => {
    handleFollowNFTDelegatedPowerChanged(event)
  })
}


export function saveDelegateFromContract() {}