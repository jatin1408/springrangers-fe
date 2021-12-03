import classNames from 'classnames';
import React from 'react';
import styles from './index.module.scss';
import { props } from './props';

const Loader: React.FunctionComponent<props> = ({ className }) => {
  return <div className={classNames(styles.progress_inline, className)}></div>;
};

export default Loader;
