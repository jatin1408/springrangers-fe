import React from 'react';
import { props } from './props';
import styles from './index.module.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../modal';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import InputField from '../form-elements/input-field';
import Button from '../button';
import Storage from '../../utils/storage';
import { useRouter } from 'next/dist/client/router';
import { createOrderURL } from '../../utils/urls';
import axios from 'axios';
import Toast from '../../utils/toast';

const TransactionModal: React.FunctionComponent<props> = ({ modal, toggle }) => {
  const router = useRouter();
  const [status, setStatus] = React.useState(0);

  // const user_id = 1;
  // if (Storage.check("user")) {
  //   const user = Storage.get("user");
  //   console.log(user)
  // }

  const createOrderRequest = async (body: any) => {
    try {
      const url = createOrderURL();
      body.user_id = 1;

      const response = await axios.post(url, body, {
        headers: {
          'content-type': 'application/json'
        }
      });
      if (response.data) {
        const data = response.data;
        setStatus(data.status);
        Toast.success({ msg: 'Order created successfully!' });
        router.reload();
      }
    } catch (error: any) {
      let message = error?.response?.data?.message;
      setStatus(error?.response?.data?.status);
      Toast.error({ msg: message });
    }
  }

  return (
    <>
      <ToastContainer limit={3} />
      <Modal isVisible={modal} toggle={toggle} title={'Transaction Details'}>
        <Formik
          initialValues={{ code: '', service: '', amount: 0 }}
          isInitialValid={false}
          validationSchema={Yup.object({
            code: Yup.string().required('Required'),
            service: Yup.string().required('Required'),
            amount: Yup.number().required('Required')
          })}
          onSubmit={(values) => {
            const body = {
              grand_total: values.amount,
              service: values.service,
              code: values.code
            };
            createOrderRequest(body);
          }}
        >
          {(localProps) => (
            <Form className={styles.form_input}>
              <Field
                id='code'
                name='code'
                type='text'
                label='Code*'
                placeholder='Enter Unique Code'
                valid={localProps.isValid}
                component={InputField}
              />
              <Field
                id='service'
                name='service'
                type='text'
                label='Service Type*'
                placeholder='Enter service type'
                valid={localProps.isValid}
                component={InputField}
              />
              <Field
                id='amount'
                name='amount'
                type='number'
                label='Amount*'
                placeholder='Enter Amount'
                valid={localProps.isValid}
                component={InputField}
              />
              <Button
                id='signup_email'
                type='submit'
                variant='gradient_primary'
                label={'Send'}
                className={styles.send_btn}
                disabled={!localProps.isValid}
                // inProgress={status !== 200 && status !== 400 && status === 100}
              />
            </Form>
          )}
        </Formik>
      </Modal>
    </>
  );
};

export default TransactionModal;
