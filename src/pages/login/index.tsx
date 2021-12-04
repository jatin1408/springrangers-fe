import React from 'react';
import { props } from './props';
import styles from './index.module.scss';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import InputField from '../../components/form-elements/input-field';
import Button from '../../components/button';
import { PASSWORD_REGEX } from '../../constants/user-constants';
import { loginURL } from '../../utils/urls';
import { useRouter } from 'next/router';
import axios from 'axios';
import Toast from '../../utils/toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../../components/layout'
import Storage from '../../utils/storage';

const LoginPage: React.FunctionComponent<props> = () => {
  const router = useRouter();
  const [status, setStatus] = React.useState(0);

  const loginSendRequest = async (body: any) => {
    try {
      setStatus(100);
      const url = loginURL();
      const response = await axios.post(url, body, {
        headers: {
          'content-type': 'application/json'
        }
      });
      if (response.data) {
        const data = response.data;
        Storage.save("user",data);
        
        setStatus(data.status);
        Toast.success({ msg: 'You are successfully Logged in!' });
        router.replace({ pathname: '/details' });
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
        <ToastContainer limit={3} />
        <Formik
          initialValues={{ Email: '', Password: '' }}
          isInitialValid={false}
          validationSchema={Yup.object({
            Email: Yup.string().email('Invalid email address').required('Required'),
            Password: Yup.string().required('Required').matches(PASSWORD_REGEX, ' ')
          })}
          onSubmit={(values) => {
            const body = {
              email: values.Email,
              password: values.Password
            };
            loginSendRequest(body);
          }}
        >
          {(localProps) => (
            <div className={styles.login}>
              <Form className={styles.form_input}>
                <div className={styles.title}>Login</div>
                <Field
                  id='userEmail'
                  name='Email'
                  type='email'
                  label='Email Address*'
                  placeholder='Enter Email'
                  valid={localProps.isValid}
                  component={InputField}
                />
                <Field
                  id='Password'
                  name='Password'
                  type='password'
                  label='Password*'
                  placeholder='Enter Password'
                  valid={localProps.isValid}
                  component={InputField}
                />
                <Button
                  id='signup_email'
                  type='submit'
                  variant='gradient_primary'
                  label={'login'}
                  className={styles.send_btn}
                  disabled={!localProps.isValid}
                  inProgress={status !== 200 && status !== 400 && status === 100}
                />
              </Form>
            </div>
          )}
        </Formik>
      </Layout>
    </>
  );
};

export default LoginPage;
