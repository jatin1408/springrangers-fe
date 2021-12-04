import React from 'react';
import { props } from './props';
import styles from './index.module.scss';
import Image from 'next/image';
import KebabMenuComponent from '../kebab-menu';
import {
  ButtonDropdown,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarToggler,
  UncontrolledDropdown
} from 'reactstrap';

const CardComponent: React.FunctionComponent<props> = ({ userDetail, userType }) => {
  return (
    <div className={styles.card_body}>
      <div className={styles.left}>
        <div className={styles.content}>
          Name: {userDetail?.name} | Email: {userDetail?.email} | Code: {userDetail?.unique_code}{' '}
        </div>
        <div className={styles.content}>Order Id: {userDetail?.order_Id}</div>{' '}
        {/* Only for Seller */}
        <div className={styles.content}>Service Type: {userDetail?.service}</div>
        <div className={styles.content}>Order Status: {userDetail?.status}</div>
        <div className={styles.content}>
          Amount: {userDetail?.amount} | Payment Status: {userDetail?.payment_status}
        </div>
      </div>
      <div className={styles.right}>
        <UncontrolledDropdown>
          <DropdownToggle nav caret>
            <div className={styles.icon}>
              <div className={styles.kebab}></div>
              <div className={styles.kebab}></div>
              <div className={styles.kebab}></div>
            </div>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem onClick={function noRefCheck() {}}>Accept</DropdownItem>
            <DropdownItem onClick={function noRefCheck() {}}>Cancel</DropdownItem>
            <DropdownItem onClick={function noRefCheck() {}}>Complete</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </div>
  );
};

export default CardComponent;
