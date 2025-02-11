import { ConnectButton } from "thirdweb/react";
import { darkTheme } from "thirdweb/react";
import { createWallet } from "thirdweb/wallets";
import { client } from "@/app/client";
import { sepolia } from "thirdweb/chains";

const wallets = [
  createWallet("io.metamask"),
  createWallet("com.safepal"),
  createWallet("com.coinbase.wallet"),
  createWallet("io.rabby"),
  createWallet("io.zerion.wallet"),
  createWallet("com.binance"),
];

function WalletConnect() {
  return (
    <ConnectButton
      client={client}
      chain={sepolia}
      wallets={wallets}
      theme={darkTheme({
        colors: {
          accentText: "hsl(215, 94%, 22%)",
          modalBg: "hsl(0, 9%, 4%)",
        },
      })}
      connectModal={{
        size: "wide",
        showThirdwebBranding: false,
      }}
    />
  );
}

export default WalletConnect;
