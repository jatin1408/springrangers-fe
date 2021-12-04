/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import styles from './index.module.scss';
import { props } from './props';
import classNames from 'classnames';
import Link from 'next/link';

const FooterComponent: React.FunctionComponent<props> = ({ showFooterShadow = true }) => {
  return (
    <div className={classNames(styles.footer_wrapper, { [styles.showShadow]: showFooterShadow })}>
      <p
        className={styles.rights}
      >{`© ${new Date().getFullYear()} SafePay. All rights reserved`}</p>
      <div className={styles.image}>
        <img src='/images/logo.png' alt='SafePay_Logo' width={150} height={90} />
      </div>
      {/* <Link href='/terms-and-conditions'>
        <p className={styles.tc}>Terms & Conditions | Privacy Policy</p>
      </Link> */}
    </div>
  );
};

export default FooterComponent;
