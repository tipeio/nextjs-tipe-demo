import Head from 'next/head'
import Markdown from '../components/markdownRenderer'
import {getStaticContent, EditButton} from '@tipe/next'
import styles from '../styles/Home.module.css'

export default function Home({editUrl, documents}) {
  const home = documents[0].fields
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {home.title}
        </h1>

        <div>
          <p className={styles.description}>
            <Markdown markdown={home.description} />
          </p>
        </div>

        <div className={styles.grid}>
          {home.cards.map(card => (
            <a href={card.value.link} className={styles.card} key={card.value.title}>
              <h3>{card.value.title} &rarr;</h3>
              <p>{card.value.description}</p>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>

      <EditButton editUrl={editUrl} />
    </div>
  )
}

export const getStaticProps = getStaticContent({query: {type: 'homePage', limit: 1}})
