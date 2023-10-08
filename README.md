## Technical Flow

![image](https://github.com/ZKHelixlabs/helix-cardano-lsd/blob/main/Technical_Flow.jpg)

## Product Prototype Figma

https://www.figma.com/file/KwuzaXJFa0OPXJW2I5NCLc/Helix-LSD

## Install Wallet

Yoroi Wallet(Only supports mainnet, can easily choose a stake pool to delegate and stake ADA): https://chrome.google.com/webstore/detail/yoroi/ffnbelfdoeiohenkjibnmadjiehjhajb

Nami Wallet(Supports mainnet, preview and preprod testnet, need to install this wallet to test the demo on the testnet): https://chrome.google.com/webstore/detail/nami/lpfcbjknijpeeillifnkikgncikgfhdo

## Get Test Token (tADA)

https://docs.cardano.org/cardano-testnet/tools/faucet

## Install Dependencies

```
npm i
```

## Run Project

```
npm run dev
```

Use your browser to access http://localhost:3000, you need to switch to the *preprod* test network in the settings of nami wallet first.

And then you can test the demo (connect wallet, send tADA, redeem tADA)

## Build Project

```
npm run build
```