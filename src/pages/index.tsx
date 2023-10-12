import { Button, useToast } from "@chakra-ui/react";
import { useNetwork, useWallet } from "@meshsdk/react";

import style from "../styles/Home.module.css";
import ConnectionHandler from "../components/ConnectionHandler";
import { lockTx } from "../offchain/lockTx";
import { unlockTx } from "../offchain/unlockTx";

export default function Home() {
    const { wallet, connected } = useWallet();
    const network = useNetwork();
    const toast = useToast();

    if (typeof network === "number" && network !== 1) {
        return (
            <div className={[
                style.pageContainer,
                "center-child-flex-even"
            ].join(" ")}
            >
                <b style={{
                    margin: "auto 10vw"
                }}>
                    Make sure to set your wallet in mainnet mode;<br />
                    We are playing with founds here!
                </b>
                <Button
                    onClick={() => window.location.reload()}
                    style={{
                        margin: "auto 10vw"
                    }}
                >Refresh page</Button>
            </div>
        )
    }

    function onLock() {
        lockTx(wallet)
            // lock transaction created successfully
            .then(txHash => toast({
                title: `stake tx submitted: https://cardanoscan.io/transaction/${txHash}`,
                status: "success"
            }))
            // lock transaction failed
            .catch(e => {
                toast({
                    title: `something went wrong`,
                    status: "error"
                });
                console.error(e)
            });
    }

    function onUnlock() {
        unlockTx(wallet)
            // unlock transaction created successfully
            .then(txHash => toast({
                title: `unstake tx submitted: https://cardanoscan.io/transaction/${txHash}`,
                status: "success"
            }))
            // unlock transaction failed
            .catch(e => {
                toast({
                    title: `something went wrong`,
                    status: "error"
                });
                console.error(e)
            });
    }

    return (
        <div className={[
            style.pageContainer,
            "center-child-flex-even"
        ].join(" ")} >
            <ConnectionHandler />
            {
                connected &&
                <>
                    <Button onClick={onLock} >Stake 10 ADA(+2 fee ADA, +2 inscription ADA) </Button>
                    <Button onClick={onUnlock} >Unstake</Button>
                </>
            }
        </div>
    )
}