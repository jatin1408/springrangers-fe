import React from 'react';
import { props } from './props';
import styles from './password-strength-bar.module.scss';

const PasswordStrengthBar: React.FunctionComponent<props> = ({ strength, touch }) => {
  return (
    <>
      {
        <div className={styles.stepper}>
          {/* If Strength >= 1 */}
          {strength >= 1 ? (
            <div className={styles.check_bar}></div>
          ) : strength == 0 && touch ? (
            <div className={styles.cross_bar}></div>
          ) : null}

          {/* If Strength >= 2 */}
          {strength >= 2 ? (
            <div className={styles.check_bar}></div>
          ) : (strength == 0 && touch) || (strength < 2 && strength > 0) ? (
            <div className={styles.cross_bar}></div>
          ) : null}

          {/* If Strength >= 3 */}
          {strength == 3 ? (
            <div className={styles.check_bar}></div>
          ) : (strength == 0 && touch) || (strength < 3 && strength > 0) ? (
            <div className={styles.cross_bar}></div>
          ) : null}
        </div>
      }
    </>
  );
};

export default PasswordStrengthBar;
