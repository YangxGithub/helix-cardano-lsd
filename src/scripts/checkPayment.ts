// Please add this dependency using npm install node-fetch and npm install @types/node-fetch
import fetch from 'node-fetch';
import { Response } from 'node-fetch';

const walletId: string = "101b3814d6977de4b58c9dedc67b87c63a4f36dd";
const totalExpectedLovelace: number = 1000000;
const resp: Response = await fetch(`http://127.0.0.1:9998/v2/wallets/${walletId}`);
const wallet: any = await resp.json();
const balance: number = wallet.balance.total.quantity;

// Check if payment is complete
const isPaymentComplete: boolean = balance >= totalExpectedLovelace;

console.log(`Total Received: ${balance} LOVELACE`);
console.log(`Expected Payment: ${totalExpectedLovelace} LOVELACE`);
console.log(`Payment Complete: ${(isPaymentComplete ? "✅":"❌")}`);