## Technical Flow

![image](https://github.com/ZKHelixlabs/helix-cardano-lsd/blob/main/Technical_Flow.jpg)

## Product Prototype Figma

https://www.figma.com/file/KwuzaXJFa0OPXJW2I5NCLc/Helix-LSD

## Install Wallet

Nami Wallet: https://chrome.google.com/webstore/detail/nami/lpfcbjknijpeeillifnkikgncikgfhdo

## Install Dependencies

```
npm i
```

## Run Project

```
npm run dev
```

## Build Project

```
npm run build
```

## Run Scripts on Server

```
npx pm2 start
```

## Check Scripts Logs on Server

```
npx pm2 logs
```

## Mainnet Demo

```
https://ada.helixlsd.com/
```
You need to install the Nami wallet first, and there needs to be at least 15 ADA in the wallet.

This is a temporary domain and can be changed to an official domain later.

## TODO List

------- Prepare -------
- [x] Tech Flow
- [x] Product Prototype
- [ ] UI Draft

------- Wallet -------
- [x] Connect Nami Wallet

------- Stake -------
- [x] Stake ADA to stake contract
- [ ] Listening Stake Event
- [ ] Mint stADA to user

------- Unstake -------
- [ ] Unstake stADA to stake contract
- [ ] Listening Unstake Event
- [ ] Burn stADA to blackhole
- [ ] Send ADA to user

------- Delegate -------
- [x] Delegate stake contract to stake pool (Let’s temporarily use someone else’s pool first, and then we can change it to our own pool later)

## Stake Contract Address

https://cardanoscan.io/address/addr1zxc926kytyexmkq9npanhv2pvj7rzsxqwnerh3c09twxa9fpvv7gwasnw0nw4cdzquzz7l6k8azs34w3j29d8glev64q34hyk8