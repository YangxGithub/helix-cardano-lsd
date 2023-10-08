import { Address, PScriptContext, PaymentCredentials, Script, bool, compile, data, makeValidator, pBool, pfn, PPubKeyHash, bs } from "@harmoniclabs/plu-ts";


const stakeContract = pfn([
    PPubKeyHash.type,
    bs,
    PScriptContext.type
], bool)
    ((owner, message, ctx) => {

        const isBeingPolite = message.eq("Hello helix-lsd");

        const signedByOwner = ctx.tx.signatories.some(owner.eqTerm);

        return isBeingPolite.and(signedByOwner);
    });

///////////////////////////////////////////////////////////////////
// ------------------------------------------------------------- //
// ------------------------- utilities ------------------------- //
// ------------------------------------------------------------- //
///////////////////////////////////////////////////////////////////

export const untypedValidator = makeValidator(stakeContract);

export const compiledContract = compile(untypedValidator);

export const script = new Script(
    "PlutusScriptV2",
    compiledContract
);

export const scriptTestnetAddr = new Address(
    "testnet",
    PaymentCredentials.script(script.hash)
);