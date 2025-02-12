import { createWallet } from "thirdweb/wallets";

export const wallets = [
  createWallet("io.metamask"),
  createWallet("com.safepal"),
  createWallet("com.coinbase.wallet"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
  createWallet("com.binance"),
];
