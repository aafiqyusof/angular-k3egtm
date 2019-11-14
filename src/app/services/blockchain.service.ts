import { Injectable } from '@angular/core';
import { Blockchain } from 'SavjeeCoin/src/blockchain';
import EC from "elliptic";

@Injectable({
  providedIn: 'root'
})
export class BlockchainService {

  public blockhainInstance = new Blockchain();
  public walletKeys = [];

  constructor() {
    this.blockhainInstance.difficulty = 1;
    this.blockhainInstance.minePendingTransaction('my-wallet-address');

    this.generateWalletKeys();

   }

   getBlocks(){
     return this.blockhainInstance.chain;

   }

   private generateWalletKeys() {
     const ec = new EC.ec('secp256k1');
     const key = ec.genKeyPair();

     this.walletKeys.push({
       keyObj: key,
       publicKey: key.getPublic('hex'),
       privateKey: key.getPrivate('hex'),
     });
   }
}
