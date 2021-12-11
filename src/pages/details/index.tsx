import React from 'react';
import { props } from './props';
import styles from './index.module.scss';
import CardComponent from '../../components/card';
import TransactionModal from '../../components/transaction-modal';
import Layout from '../../components/layout';
import { getOrderURL } from '../../utils/urls';
import Storage from '../../utils/storage';
import { USER_ID } from '../../constants/user-constants';
import axios from 'axios';
import Toast from '../../utils/toast';
import Loader from '../../components/loader';

const DetailsPage: React.FunctionComponent<props> = () => {
  const [modal, setModal] = React.useState(false);
  const userDetails = {
    name: 'Alex Dram',
    email: 'alexdram@gmail.com',
    phoneNumber: '9842522245',
    type: 'Seller',
    code: 'UID84582282'
  };
  const [status, setStatus] = React.useState(0);
  const [getOrder, setGetOrder] = React.useState([]);

  const toggle = () => {
    setModal(!modal);
  };

  React.useEffect(() => {
    getOrderSendRequest();
  }, []);

  const getOrderSendRequest = async () => {
    let user_id;
    if (Storage.check(USER_ID)) {
      user_id = Storage.get(USER_ID);
    }
    try {
      setStatus(100);
      const url = getOrderURL(1);
      const response = await axios.get(url, {
        headers: {
          'content-type': 'application/json'
        }
      });

      if (response.data) {
        const data = response.data;
        setStatus(data.status);

        setGetOrder(data);
      }
    } catch (error: any) {
      let message = error?.response?.data?.message;
      setStatus(error?.response?.data?.status);
      Toast.error({ msg: message });
    }
  };

  return (
    <>
      <Layout>
        {status !== 200 && status !== 400 && status === 100 ? (
          <Loader />
        ) : (
          <>
            {' '}
            <div className={styles.details}>
              <div className={styles.left}>
                <div className={styles.content}>Name: {userDetails.name}</div>
                <div className={styles.content}>Email: {userDetails.email} </div>
                <div className={styles.content}>PhoneNumber: {userDetails.phoneNumber} </div>
                <div className={styles.content}>Type: {userDetails.type} </div>
                <div className={styles.content}>Code: {userDetails.code} </div>
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
                    {/* {getOrder?.map((order: any) => {
                      console.log(order);

                      <CardComponent userDetail={order} />;
                    })} */}
                    <div className={styles.card_detail}>
                      {' '}
                      <CardComponent userDetail={getOrder[0]} />
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
            </div>
            <TransactionModal modal={modal} toggle={toggle} />
          </>
        )}
      </Layout>
    </>
  );
};

export default DetailsPage;
