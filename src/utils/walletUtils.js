import {
    Connection
  } from "@solana/web3.js";
import { NETWORK } from "./nftCreation";
import { Connection, PublicKey } from '@solana/web3.js';
import { Provider, Program } from '@project-serum/anchor';

export const connection = new Connection(NETWORK);