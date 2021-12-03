import React from 'react';
import Image from 'next/image';
import { props } from './props';
import styles from './password-strength-indicator.module.scss';
import PasswordStrengthBar from '../password-strength-bar';

const isCapitalCharRegex = /[A-Z]/;
const isNotValidSpecialChar = /[ ~_+\-=\[\]{};':"`\\|<>\/]/;
const isSpecialChar = /[!@#$%^&*(),.?]/;

const PasswordStrengthIndicator: React.FunctionComponent<props> = ({ password, touch }: any) => {
  let strength: number = 0;
  let minAlphaChar = null;
  let capitalChar = null;
  let specialChar = null;

  // Password Strength Indicator through Conditions
  minAlphaChar = password.length >= 8 && password.length <= 20 ? true : false;
  capitalChar = isCapitalCharRegex.test(password) ? true : false;
  specialChar = isNotValidSpecialChar.test(password)
    ? false
    : isSpecialChar.test(password)
    ? true
    : false;

  // Password Strength Bar using Strength
  [minAlphaChar, capitalChar, specialChar].forEach((indicator) => {
    strength = indicator ? strength + 1 : strength;
  });

  return (
    <div className={styles.pass_condition}>
      <PasswordStrengthBar strength={strength} touch={touch} />

      <p className={styles.head}>Password must be</p>
      <ul className={styles.ul}>
        <PasswordStrengthIndicatorItem
          isValid={minAlphaChar}
          text='8-20 alphanumberic characters'
          touchInput={touch}
        />
        <PasswordStrengthIndicatorItem
          isValid={capitalChar}
          text='At least 1 capital letter'
          touchInput={touch}
        />
        <PasswordStrengthIndicatorItem
          isValid={specialChar}
          text='At least 1 of this symbols: !@#$%^&*(),.?'
          touchInput={touch}
        />
      </ul>
    </div>
  );
};

const PasswordStrengthIndicatorItem = ({ isValid, text, touchInput }: any) => {
  const cross = <Image src={'/images/icons/cross.svg'} alt='wrong' width={17} height={17} />;
  const check = <Image src={'/images/icons/check.svg'} alt='check' width={13} height={13} />;
  return (
    <div className={styles.condition}>
      <div>{text}</div>
      <div className={styles.icon}>{isValid ? check : isValid || touchInput ? cross : null}</div>
    </div>
  );
};

export default PasswordStrengthIndicator;
