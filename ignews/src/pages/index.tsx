import Head from 'next/head';

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>🖖 Hey, welcome</span>
          <h1>News aboult the <span>React</span> world.</h1>
          <p>
            Get access to all publcations <br />
            <span>form $9.90 month</span>
          </p>
        </section>
        <img src="/images/avatar.svg" alt="Girl coding"/>
      </main>
    </>
  )
}
