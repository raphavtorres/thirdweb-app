import { ConnectButton } from "thirdweb/react";
import { darkTheme } from "thirdweb/react";
import { client } from "@/utils/client";
import { sepolia } from "thirdweb/chains";
import { wallets } from "@/utils/wallets";

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
