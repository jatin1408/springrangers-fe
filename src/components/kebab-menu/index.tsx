import React from 'react';
import { props } from './props';
import styles from './index.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

const KebabMenuComponent: React.FunctionComponent<props> = ({
  showNotification,
  hideNotification,
  children
}) => {
  const closeButton = (
    <Image
      src='/images/cancel.svg'
      alt='close'
      width={20}
      height={20}
      onClick={hideNotification}
      className={styles.close}
    />
  );

  return (
    <div
      className={classNames(styles.popup, {
        [styles.show_tab_header]: showNotification
      })}
    >
      <div className={styles.pointer} />
      <div className={styles.close_btn}>{closeButton}</div>
      <div className={styles.header}></div>

      <div className={styles.notifications}>{children}</div>
    </div>
  );
};

export default KebabMenuComponent;
