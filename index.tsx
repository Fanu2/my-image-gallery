// pages/index.tsx
import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Image Gallery</title>
      </Head>
      <main className={styles.main}>
        <h1>Welcome to My Image Gallery</h1>
        <p>Start adding your gallery here!</p>
      </main>
    </div>
  );
}
