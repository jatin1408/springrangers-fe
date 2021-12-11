import React from 'react';
import { props } from './props';
import styles from './index.module.scss';
import Link from 'next/link';

const HeaderComponent: React.FunctionComponent<props> = () => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href='/'>
            <img
              className={styles.pointer}
              alt='Vybo Logo'
              src='/images/logo.png'
              width={250}
              height={250}
            />
          </Link>
        </div>
        <div className={styles.right}>
          <Link href='/register'>
            <a className={styles.a_link}>Register</a>
          </Link>
          <Link href='/login'>
            <a className={styles.a_link}>Login</a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
