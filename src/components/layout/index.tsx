import Head from 'next/head';
import React from 'react';
import FooterComponent from '../footer';
import HeaderComponent from '../header';
import { props } from './props';

const Layout: React.FunctionComponent<props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>SafePay</title>
        <meta name='author' content='SafePay Inc' />
        <meta
          name='description'
          content='Welcome to SafePay the only secondary concert ticket market using the power of blockchain to bring fans closer to artists.'
        />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <HeaderComponent />
      {children}
      <FooterComponent />
    </>
  );
};

export default Layout;
