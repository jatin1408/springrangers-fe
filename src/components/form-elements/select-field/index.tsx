import React from 'react';
import { props } from './props';
import styles from './index.module.scss';
import classNames from 'classnames';
import { Field } from 'formik';

const SelectField: React.FunctionComponent<props> = ({
  localProps,
  name,
  label,
  multiple = false,
  placeholder,
  className,
  options
}) => {
  return (
    <div className={styles.input_div}>
      {/* Label Field */}
      {label ? (
        <label
          className={classNames(
            { [styles.error_label]: localProps.touched[name] && localProps.errors[name] },
            styles.label
          )}
          htmlFor='string'
        >
          {label}
        </label>
      ) : null}

      {/* Input Field */}
      <Field
        className={classNames(styles.input_field, className, {
          [styles.error]: localProps.touched[name] && localProps.errors[name],
          [styles.isValid]:
            localProps.touched[name] && !localProps.errors[name] && localProps.values[name]
        })}
        component='select'
        id={name}
        name={name}
        placeholder={placeholder}
        multiple={multiple}
      >
        {/* {options.map((option: any) => {
        })} */}
        <option value={'Select'} selected>
          Select
        </option>
        <option value={options[0]}>{options[0]}</option>;
        <option value={options[1]}>{options[1]}</option>;
      </Field>

      {/* Show Error */}
      {localProps.touched[name] && localProps.errors[name] && (
        <div className={styles.error_text}>{localProps.errors[name]}</div>
      )}
    </div>
  );
};

export default SelectField;
