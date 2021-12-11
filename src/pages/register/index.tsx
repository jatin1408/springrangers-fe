import React from 'react';
import { props } from './props';
import styles from './index.module.scss';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import InputField from '../../components/form-elements/input-field';
import Button from '../../components/button';
import { NAME_REGEX, PASSWORD_REGEX, PHONE_NUMBER_REGEX } from '../../constants/user-constants';
import PasswordStrengthIndicator from '../../components/form-elements/password-strength-indicator';
import PhoneNumberField from '../../components/form-elements/phone-number-field';
import SelectField from '../../components/form-elements/select-field';
import { registerURL } from '../../utils/urls';
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Toast from '../../utils/toast';
import { useRouter } from 'next/dist/client/router';
import Layout from '../../components/layout';

const RegisterPage: React.FunctionComponent<props> = () => {
  const router = useRouter();
  const [status, setStatus] = React.useState(0);

  const registerSendRequest = async (body: any) => {
    try {
      setStatus(100);
      const url = registerURL();
      const response = await axios.post(url, body, {
        headers: {
          'content-type': 'application/json'
        }
      });
      if (response.data) {
        const data = response.data;
        setStatus(data.status);
        Toast.success({ msg: 'You are successfully registered!' });
        router.replace({ pathname: '/login' });
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
          initialValues={{
            firstName: '',
            lastName: '',
            Email: '',
            MobileNumber: '',
            Type: '',
            Password: '',
            confirmPassword: ''
          }}
          isInitialValid={false}
          validationSchema={Yup.object({
            firstName: Yup.string().required('Required').matches(NAME_REGEX, {
              message: 'oh-no!! Looks like you have mistyped your first name. :('
            }),
            lastName: Yup.string().required('Required').matches(NAME_REGEX, {
              message: 'oh-no!! Looks like you have mistyped your first name. :('
            }),
            Email: Yup.string().email('Invalid email address').required('Required'),
            MobileNumber: Yup.string().matches(PHONE_NUMBER_REGEX, {
              message: 'Invalid mobile number. Please input a valid mobile number.',
              excludeEmptyString: false
            }),
            Type: Yup.string().required('Required'),
            Password: Yup.string().required('Required').matches(PASSWORD_REGEX, ' '),
            confirmPassword: Yup.string()
              .oneOf([Yup.ref('Password')], 'Passwords must match')
              .required('Required')
          })}
          onSubmit={(values) => {
            const body = {
              first_name: values.firstName,
              last_name: values.lastName,
              email: values.Email,
              mobile_number: values.MobileNumber,
              type: values.Type.toLowerCase(),
              password: values.Password
            };
            registerSendRequest(body);
          }}
        >
          {(localProps) => (
            <div className={styles.register}>
              <Form className={styles.form_input}>
                <div className={styles.title}>Register</div>
                <Field
                  id='firstName'
                  name='firstName'
                  placeholder='Enter First Name'
                  type='text'
                  label='First Name*'
                  component={InputField}
                />
                <Field
                  id='lastName'
                  name='lastName'
                  placeholder='Enter Last Name'
                  type='text'
                  label='Last Name*'
                  component={InputField}
                />
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
                  name='MobileNumber'
                  render={({ field }: any) => {
                    return (
                      <>
                        <PhoneNumberField
                          field={field}
                          touched={localProps.touched.MobileNumber}
                          errors={localProps.errors.MobileNumber}
                        />
                      </>
                    );
                  }}
                />
                <SelectField
                  localProps={localProps}
                  name={'Type'}
                  label={'Role*'}
                  options={['Seller', 'Buyer']}
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
                <PasswordStrengthIndicator
                  password={localProps.values.Password}
                  touch={localProps.touched.Password}
                />
                <Field
                  id='confirmPassword'
                  name='confirmPassword'
                  type='password'
                  label='Confirm Password*'
                  placeholder='Re-enter Password'
                  valid={localProps.isValid}
                  component={InputField}
                />
                <Button
                  id='signup_email'
                  type='submit'
                  variant='gradient_primary'
                  label={'Register'}
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

export default RegisterPage;
