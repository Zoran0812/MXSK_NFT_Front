import React from 'react';
import { Modal } from "react-bootstrap";
import { ModalProps } from 'react-overlays/Modal';

import s from './styles.module.css';

export type UserRejectedModalProps = ModalProps & {};

const UserRejectedModal: React.FunctionComponent<UserRejectedModalProps> = props => {

  return (
    <Modal
      centered
      footer={[]}
      zIndex={1001}
    >
      <div className={s.headerLabel}>Error</div>
      <div className={s.text}>Transaction rejected</div>
      <div className={s.btnWrapper}>
        <div
          className={s.dismissBtn}
          onClick={props.onHide}
        >Dismiss</div>
      </div>
    </Modal>
  );
};

export default UserRejectedModal;
