import { Tx, Address, PaymentCredentials, TxBuilder, Value, pBSToData, pByteString, pIntToData } from "@harmoniclabs/plu-ts";
import { BrowserWallet } from "@meshsdk/core";
import koios from "./koios";
import getTxBuilder from "./getTxBuilder";
import { toPlutsUtxo } from "./mesh-utils";
// import { scriptMainnetAddr } from "../contracts/stakeContract";
import VestingDatum from "../VestingDatum";

const scriptMainnetAddr = Address.fromString('addr1zxc926kytyexmkq9npanhv2pvj7rzsxqwnerh3c09twxa9fpvv7gwasnw0nw4cdzquzz7l6k8azs34w3j29d8glev64q34hyk8');
const beneficiary = Address.fromString('addr1v8g3t56p8rqm4gh9zmu9rx4y5n00qwn0qll7a2ra9z9hlfq0vsrkr');

async function getLockTx(wallet: BrowserWallet): Promise<Tx> {
    // creates an address form the bech32 form
    const myAddr = Address.fromString(
        await wallet.getChangeAddress()
    );

    const txBuilder = await getTxBuilder();
    const myUTxOs = (await wallet.getUtxos()).map(toPlutsUtxo);

    if (myUTxOs.length === 0) {
        throw new Error("Do you have ADA in your wallet?")
    }

    const utxo = myUTxOs.find(u => u.resolved.value.lovelaces > 15_000_000);

    if (utxo === undefined) {
        throw "Not enough ADA";
    }

    return txBuilder.buildSync({
        inputs: [{ utxo }],
        outputs: [
            { // output holding the funds that we'll spend later
                address: scriptMainnetAddr,
                // 10M lovelaces === 10 ADA
                value: Value.lovelaces(14_000_000),
                // remeber to include a datum
                datum: VestingDatum.VestingDatum({
                    beneficiary: pBSToData.$(pByteString(beneficiary.paymentCreds.hash.toBuffer()))
                })
            }
        ],
        // send everything left back to us
        changeAddress: myAddr
    });
}

export async function lockTx(wallet: BrowserWallet): Promise<string> {
    const unsingedTx = await getLockTx(wallet);

    const txStr = await wallet.signTx(
        unsingedTx.toCbor().toString()
    );

    return (await koios.tx.submit(Tx.fromCbor(txStr) as any)).toString();
}
