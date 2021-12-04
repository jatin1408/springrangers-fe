import React from 'react';
import { props } from './props';
import styles from './index.module.scss';
import CardComponent from '../../components/card';
import TransactionModal from '../../components/transaction-modal';
import Layout from '../../components/layout';

const DetailsPage: React.FunctionComponent<props> = () => {
  const [modal, setModal] = React.useState(false);
  const toggle = () => {
    setModal(!modal);
  };

  return (
    <>
      <Layout>
        <div className={styles.details}>
          <div className={styles.left}>
            <div className={styles.content}>NAME</div>
            <div className={styles.content}>EMAIL</div>
            <div className={styles.content}>PhoneNumber</div>
            <div className={styles.content}>Type</div>
            <div className={styles.content}>Code</div>
          </div>
          <div className={styles.right}>
            <div className={styles.user_order_detail}>
              <div className={styles.orders}>Orders</div>
              <div className={styles.payment}>
                <div className={styles.text} onClick={toggle}>
                  + Add Transaction
                </div>
              </div>
            </div>
            <div className={styles.cards}>
              <div className={styles.card_detail}>
                {' '}
                <CardComponent />
              </div>
              <div className={styles.card_detail}>
                {' '}
                <CardComponent />
              </div>
              <div className={styles.card_detail}>
                {' '}
                <CardComponent />
              </div>
              <div className={styles.card_detail}>
                {' '}
                <CardComponent />
              </div>
              <div className={styles.card_detail}>
                {' '}
                <CardComponent />
              </div>
              <div className={styles.card_detail}>
                {' '}
                <CardComponent />
              </div>
            </div>
          </div>
        </div>
        <TransactionModal modal={modal} toggle={toggle} />
      </Layout>
    </>
  );
};

export default DetailsPage;
