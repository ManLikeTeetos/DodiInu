import { InjectedConnector } from "@web3-react/injected-connector";

import { WalletLinkConnector } from "@web3-react/walletlink-connector";

const RPC_URLS = {
  1: "https://mainnet.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4",
  4: "https://rinkeby.infura.io/v3/55d040fb60064deaa7acc8e320d99bd4",
};

//metamask
export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 42, 56, 11155111],
});

//coinbase
export const walletlink = new WalletLinkConnector({
  url: RPC_URLS[4],
  appName: "demo-app",
  supportedChainIds: [1, 4, 56, 11155111],
});
