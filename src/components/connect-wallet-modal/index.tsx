import React from "react";

import { Modal } from "react-bootstrap";
import styled from "styled-components";
import MetamaskIcon from "assets/image/wallet/metamask-logo.svg";
import walletCon from "assets/image/wallet/walletconnect-logo.svg";

import { WalletConnector } from "wallets/types";
import { useWallet, WalletConnectors } from "wallets/wallet";

const Wallet = styled.button`
  color: white;
  background: #0a0a0a;
  border-radius: 40px;
  width: 240px;
  height: 45px;
  margin: 20px auto;
  border: 1.5px solid #dc920f;
  text-align: left;
  font-size: 13px;
  padding: 10px 30px;
  & img {
    width: 24px;
    margin-right: 15px;
  }
`;
const ModelInfo = styled.div`
  & p {
    font-size: 13px;
    & a {
      color: #dc920f;
    }
  }
`;

const ConnectWalletModal: React.FunctionComponent<any> = (props) => {
  const wallet = useWallet();

  // const [ledgerModal, setLedgerModal] = React.useState<boolean>(false);

  function handleConnectorSelect(connector: WalletConnector) {
    if (wallet.isActive) {
      return;
    }

    // if (connector.id === 'ledger') {
    //   return setLedgerModal(true);
    // }

    return wallet.connect(connector);
  }

  return (
    <>
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Connect to a wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body className="show-grid">
          <ModelInfo>
            <div className="text-center">
              <Wallet onClick={() => handleConnectorSelect(WalletConnectors[0])}>
                <img src={MetamaskIcon} alt="" />
                METAMASK
              </Wallet>
              <br></br>
              <Wallet onClick={() => handleConnectorSelect(WalletConnectors[1])}>
                <img src={walletCon} alt="" />
                WALLET CONNECT
              </Wallet>
            </div>
          </ModelInfo>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ConnectWalletModal;
