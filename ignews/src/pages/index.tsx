import Head from 'next/head';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>início | ig.news</title>
      </Head>
      <h1 className={styles.title}>
        Hello, <span>NextJS</span>
      </h1>
    </>
  )
}
