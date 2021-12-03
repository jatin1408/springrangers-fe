import React from 'react';
import { props } from './props';
import InputMask from 'react-input-mask';
import styles from './phone-number-field.module.scss';
import Image from 'next/image';
import classNames from 'classnames';

const check = <Image src={'/images/icons/check.svg'} alt='check' width={12} height={12} />;
const cross = <Image src={'/images/icons/cross.svg'} alt='cross' width={15} height={15} />;
// const flag = <Image src={'/images/flag.svg'} alt='US Flag' width={35} height={30} />;

const PhoneNumberField: React.FunctionComponent<props> = ({ field, touched, errors, inputRef }) => {
  return (
    <div className={styles.input_div}>
      <label
        htmlFor='string'
        className={classNames({ [styles.error_label]: touched && errors }, styles.phone_label)}
      >
        Mobile Number
      </label>

      {/* Flag and Country Code for Phone Number Input Field */}
      <span className={styles.country_flag}>
        {/* {flag} */}
        <div className={styles.country_code}>+91</div>
      </span>
      <InputMask
        {...field}
        placeholder='__________'
        mask='9999999999'
        className={classNames(
          { [styles.error]: touched && errors, [styles.isValid_phone]: touched && !errors },
          styles.input_field
        )}
        ref={inputRef}
      />
      {touched && !errors ? (
        <span className={styles.cross_check}>{check}</span>
      ) : touched && errors ? (
        <span className={styles.cross_check}>{cross}</span>
      ) : null}
      {touched && errors && <div className={styles.error_text}>{errors}</div>}
    </div>
  );
};

export default PhoneNumberField;
