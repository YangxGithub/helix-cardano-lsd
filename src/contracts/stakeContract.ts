import { Address, bool, bs, compile, data, int, lam, makeValidator, papp, PaymentCredentials, pBool, pfn, phoist, pif, pintToBS, plet, pmatch, precursive, PScriptContext, pStr, ptrace, ptraceIfFalse, punsafeConvertType, Script, ScriptType, pstruct, PPubKeyHash } from "@harmoniclabs/plu-ts";

import VestingDatum from "../VestingDatum";

const stakeContract = pfn([
    VestingDatum.type,
    data,
    PScriptContext.type
], bool)
    ((datum, _redeemer, ctx) => {
        // inlined
        const signedByBeneficiary = ctx.tx.signatories.some(datum.beneficiary.eqTerm);

        return signedByBeneficiary;
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

export const scriptMainnetAddr = new Address(
    "mainnet",
    PaymentCredentials.script(script.hash)
);

export default stakeContract;