import { assert, createMockedFunction, clearStore, test, newMockEvent, newMockCall, countEntities, mockIpfsFile, beforeAll, describe, afterEach, afterAll, logStore } from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes, ethereum, store, Value, ipfs } from "@graphprotocol/graph-ts"

import { Delegator, Delegatee } from "../../generated/schema";
import { FollowNFTDelegatedPowerChanged, FollowNFTTransferred } from "../../generated/LensVotingNFT/LensVotingNFT";
import { handleFollowNFTDelegatedPowerChanged, handleFollowNFTTransferred } from "../../src/lens-voting-nft";

// Coverage
export { handleFollowNFTDelegatedPowerChanged, handleFollowNFTTransferred }

let Delegate_ENTITY_TYPE = "Delegate"
let TRANSACTION_ENTITY_TYPE = "Transaction"

test("Should throw an error", () => {
    throw new Error()
}, true)