import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Clean Clean Up !</title>
        <meta name="description" content="A Tool of Cleaning Rust Large Target Directory" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            clean rust target directory&nbsp;
            <code className={styles.code}>./target</code>
          </p>
          <div>
            <a
              href="https://github.com/weykon"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' weykon'}
              <Image
                src="/icon_large.JPG"
                alt="Clean Clean Up Logo"
                className={styles.vercelLogo}
                width={32}
                height={32}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.preview_container}>
            <Image src="/preview.gif" alt="Be patient..."  
            width={680}
            height={578} />
          </div>
          <Image
            className={styles.logo}
            src="/icon.png"
            alt="Next.js Logo"
            width={200}
            height={200}
            priority
          />
          <div className={styles.thirteen}>
            v0.0.1
          </div>

        </div>


        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Download <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>


        </div>
      </main>
    </>
  )
}
