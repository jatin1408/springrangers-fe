import Head from 'next/head';
import Layout from '../components/layout';
import styles from './index.module.scss';
import Button from '../components/button';

export default function Home() {
  return (
    <>
      <Layout>
        <div className={styles.container}>
          <div className={styles.title}>SAFEPAY</div>
          <div className={styles.tagline}>Worried about money?</div>
          <div className={styles.tagline}>Pay Safe! We got you covered.</div>
          <div className={styles.btn}>
            <Button
              id='signup_email'
              type='submit'
              variant='secondary'
              label={'Register'}
              className={styles.register}
            />
          </div>
        </div>
      </Layout>
    </>
  );
}
