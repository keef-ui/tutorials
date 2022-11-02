import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import SideMenuList from '../components/aside-menulist'
import logo from '../assets/yt-logo.jpg'
import {BrandingHeader} from '../components/header/branding'
import LeftAside from '../components/layouts/left-side'


export const course_a = [
  {
    id: 3,
    href: "string",
    title: "tttttstring",
    extraContent: [{ id: 4, href: "aaaExtrastring", title: "aaaExtraTitle" }],
  },
  { id: 5, href: "5string", title: "5tttttstring" },
  { id: 5, href: "5string", title: "5tttttstring" },
  {
    id: 5,
    href: "5string",
    title: "5tttttstring",
    extraContent: [
      { id: 4, href: "aaaExtrastring", title: "aaaExtraTitle" },
      { id: 4, href: "aaaExtrastring", title: "Working with Mobile Devices" },
      { id: 4, href: "aaaExtrastring", title: "aaaExtraTitle" },
      {
        id: 4,
        href: "aaaExtrastring",
        title: "Objects, properties and constructor arguments",
      },
    ],
  },
  { id: 5, href: "5string", title: "5tttttstring" },
];

const Home: NextPage = () => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LeftAside />
      <main className={styles.main}>
        <div className={styles.main_content}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <p className={styles.description}>
            Now that we've covered all of the theory when it comes to Flexbox,
            let's see how we can use it in some practical every-day examples! If
            you prefer, you can treat these as exercises, and try to complete
            them before watching the videos. Totally up to you!
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Documentation &rarr;</h2>
            <p>Find in-depth information </p>
          </a>
          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn Next.js in an interactive course with quizzes!</p>
          </a>
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>{" "}
          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy boilerplate example Next.js projects.</p>
          </a>
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>
      <aside className={styles.right_aside}>
        <a href="https://nextjs.org/docs" className={styles.card}>
          <h2>Documentation &rarr;</h2>
          <p>Find in-depth information </p>
        </a>

        <a href="https://nextjs.org/learn" className={styles.card}>
          <h2>Learn &rarr;</h2>
          <p>Learn Next.js in an interactive course with quizzes!</p>
        </a>

        <a
          href="https://github.com/vercel/next.js/tree/canary/examples"
          className={styles.card}
        >
          <h2>Examples &rarr;</h2>
          <p>Discover and deploy boilerplate example Next.js projects.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          className={styles.card}
        >
          <h2>Deploy &rarr;</h2>
          <p>Instantly deploy your Next.js site to a public URL with Vercel.</p>
        </a>
      </aside>
    </div>
  );
}

export default Home
