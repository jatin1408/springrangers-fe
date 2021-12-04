import React from 'react';
import Image from 'next/image';
import { Modal as PopupModal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import classNames from 'classnames';

import styles from './index.module.scss';
import { props } from './props';

const Modal: React.FunctionComponent<props> = ({
  toggle,
  isVisible,
  children,
  className,
  classNameTitle,
  title,
  modalFooter
}) => {
  const closeButton = (
    <Image
      src='/images/cancel.svg'
      alt='close'
      width={30}
      height={30}
      onClick={toggle}
      className={styles.close}
    />
  );
  return (
    <PopupModal
      isOpen={isVisible}
      className={classNames(styles.modal, className)}
      toggle={toggle}
      backdrop='static'
    >
      <ModalHeader
        className={classNames(styles.title, classNameTitle)}
        toggle={toggle}
        close={closeButton}
      >
        {title}
      </ModalHeader>
      <ModalBody className={styles.modal_body}>{children}</ModalBody>
      {modalFooter && <ModalFooter className={styles.modal_footer}>{modalFooter}</ModalFooter>}
    </PopupModal>
  );
};

export default Modal;
