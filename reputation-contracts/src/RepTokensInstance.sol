// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {RepTokens} from "../lib/reputation/src/RepTokens.sol";

contract RepTokensInstance is RepTokens {
    constructor(address[] memory admins, uint256 maxMintAmountPerTx, string memory baseURI)
        RepTokens(admins, maxMintAmountPerTx, baseURI)
    {}
}