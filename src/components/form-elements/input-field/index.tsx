import React from 'react';
import { props } from './props';
import styles from './input-field.module.scss';
import classNames from 'classnames';
import usePasswordToggle from '../../../utils/hooks/use-password-toggle';
import Image from 'next/image';

const InputField: React.FunctionComponent<props> = ({
  field,
  form: { touched, errors, setFieldValue },
  label,
  type,
  value,
  placeholder,
  min,
  max,
  valid,
  className,
  onChange,
  autoFocus,
  readOnly
}) => {
  const [passwordInputType, toggleIcon] = usePasswordToggle();

  const check = <Image src={'/images/icons/check.svg'} alt='check' width={12} height={12} />;
  const cross = <Image src={'/images/icons/cross.svg'} alt='cross' width={15} height={15} />;

  const changeHandler = (e: any) => {
    onChange && onChange(e);
    setFieldValue(field.name, e.target.value);
  };

  return (
    <div className={styles.input_div}>
      {/* Label Field */}
      {label ? (
        <label
          className={classNames(
            { [styles.error_label]: touched[field.name] && errors[field.name] },
            styles.label
          )}
          htmlFor='string'
        >
          {label}
        </label>
      ) : null}

      {/* Input Field */}
      <input
        className={classNames(styles.input_field, className, {
          [styles.error]: touched[field.name] && errors[field.name],
          [styles.isValid]: touched[field.name] && !errors[field.name] && field.value
        })}
        id={field.id}
        type={type == 'password' ? passwordInputType : type}
        placeholder={placeholder}
        min={min}
        max={max}
        {...field}
        onChange={changeHandler}
        onClick={changeHandler}
        autoFocus={autoFocus}
        readOnly={readOnly}
      />

      {/* Error for Text Field */}
      {type != 'password' && field.value && !errors[field.name] && touched[field.name] ? (
        <span className={styles.cross_check}>{check}</span>
      ) : type != 'password' && errors[field.name] && touched[field.name] ? (
        <span className={styles.cross_check}>{cross}</span>
      ) : null}

      {/* Eye icon for seeing password  */}
      {type == 'password' ? <span className={styles.see_password}>{toggleIcon}</span> : null}

      {/* Show Error */}
      {touched[field.name] && errors[field.name] && (
        <div className={styles.error_text}>{errors[field.name]}</div>
      )}
    </div>
  );
};

export default InputField;
