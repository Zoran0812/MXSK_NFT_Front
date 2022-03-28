import React from "react";
import styled from "styled-components";
import { BiPlus } from "react-icons/bi";

import { OverlayTrigger, Button } from "react-bootstrap";
import { useWallet } from "wallets/wallet";
import { getEtherscanAddressUrl, shortenAddr } from "web3/utils";

import s from "./styles.module.css";

const ContacthBtn = styled(Button)`
  background-color: transparent;
  font-size: 13px;
  border-radius: 84px;
  padding: 10px 15px;
  border: 1px solid #dc920f;
  width: 230px;
  &:hover {
    background-color: transparent;
    color: #fff;
    border: 1px solid #dc920f;
  }
  &:focus {
    color: #fff;
    background-color: transparent;
    box-shadow: 0 0 0 0 rgb(38 143 255 / 50%);
    border: 1px solid #dc920f;
  }
  &:not(:disabled):not(.disabled):active {
    background-color: transparent;
    color: #fff;
    border: 1px solid #dc920f;
  }
  &:not(:disabled):not(.disabled):active:focus {
    box-shadow: 0 0 0 0.2rem rgb(0 0 0 / 5%);
  }
`;

const ConnectedWallet: React.FunctionComponent = (props) => {
  const wallet = useWallet();

  function handleWalletConnect() {
    wallet.showWalletsModal();
  }

  const handleWalletDisconnect = () => {
    wallet.disconnect();
  };

  if (wallet.connecting) {
    return (
      <div className={s.component}>
        <OverlayTrigger
          placement="bottom"
          trigger="click"
          rootClose
          overlay={
            <div
              style={{
                width: "255px",
                background: "#0a0a0a",
                zIndex: 9999,
                border: "1px solid #dc920f",
                marginTop: "15px",
              }}
            >
              <div className={s.disconnectBtnRow}>
                <Button type="ghost" className={s.disconnectBtn} onClick={handleWalletDisconnect}>
                  Disconnect
                </Button>
              </div>
            </div>
          }
        >
          <div className={s.connectBtn}>Connecting...</div>
        </OverlayTrigger>
      </div>
    );
  }

  if (!wallet.isActive) {
    return (
      <div className={s.component}>
        <ContacthBtn onClick={() => handleWalletConnect()}>
          CONNECT WALLET
        </ContacthBtn>
      </div>
    );
  }

  return (
    <div className={s.component}>
      <div className={s.walletBox}>
        <OverlayTrigger
          trigger="click"
          placement="bottom"
          rootClose
          overlay={
            <div style={{ background: "#0a0a0a", zIndex: 9999, border: "1px solid #dc920f", marginTop: "5px" }}>
              <div className={s.walletHeader}>
                <div>
                  <a href={getEtherscanAddressUrl(wallet.account!)} className={s.walletPreviewHash}>
                    {shortenAddr(wallet.account!, 8, 5)}
                  </a>
                </div>
              </div>
              <div className={s.stats}>
                <div className={s.statRow}>
                  <div>
                    <span className={s.statName}>Status:&nbsp;</span>
                  </div>
                  <div>
                    <span className={s.statTag}>Connected</span>
                  </div>
                </div>
                <div className={s.statRow}>
                  <div>
                    <span className={s.statName}>Wallet:&nbsp;</span>
                  </div>
                  <div>
                    <span className={s.statValue}>{wallet.connector?.name}</span>
                  </div>
                </div>
                <div className={s.statRow}>
                  <div>
                    <span className={s.statName}>Network:&nbsp;</span>
                  </div>
                  <div>
                    <span className={s.statValue}>{wallet.networkName}</span>
                  </div>
                </div>
              </div>
              <div className={s.disconnectBtnRow} style={{ cursor: "pointer" }}>
                <Button type="ghost" className={s.disconnectBtn} onClick={handleWalletDisconnect}>
                  Disconnect
                </Button>
              </div>
            </div>
          }
        >
          <div className={s.walletPreview}>
            <div>
              <span className={s.walletPreviewHashOnBtn}>{shortenAddr(wallet.account!, 4, 4)}</span>
            </div>
          </div>
        </OverlayTrigger>
      </div>
    </div>
  );
};

export default ConnectedWallet;
