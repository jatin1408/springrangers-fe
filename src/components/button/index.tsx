import React from 'react';
import styles from './index.module.scss';
import { props } from './props';
import classNames from 'classnames';
import Image from 'next/image';
import Loader from '../loader';

const Button: React.FunctionComponent<props> = ({
  onClick,
  variant = 'primary',
  label,
  iconPath,
  color = 'black',
  fullWidth,
  className,
  container_className,
  children,
  invert,
  unbold,
  disabled,
  id,
  showInline,
  type,
  inProgress
}) => {
  let icon = undefined;
  if (iconPath) {
    icon = (
      <Image
        src={iconPath}
        alt={'Image SafeDeal'}
        height={label ? 28 : 40}
        width={label ? 28 : 40}
      />
    );
  }

  return (
    <>
      <div
        className={classNames(
          variant === 'gradient_primary' ? styles.gradient_border : undefined,
          styles.container,
          container_className,
          { [styles.inline]: showInline },
          { [styles.inline]: showInline, [styles.fullWidth]: fullWidth }
        )}
      >
        <button
          id={id}
          onClick={onClick}
          disabled={disabled}
          type={type}
          className={classNames(styles.button, styles[variant], className, styles[color], {
            [styles.icon_button]: !label,
            [styles.icon_padding]: iconPath,
            [styles.unbold]: unbold,
            [styles.invert]: invert,
            [styles.blur]: disabled
          })}
        >
          {icon && <div className={styles.icon}>{icon}</div>}
          {label && <p className={styles.label}>{inProgress ? <Loader /> : label}</p>}
          {children}
        </button>
      </div>
    </>
  );
};

export default Button;
