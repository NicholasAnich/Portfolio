import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <>
            <Head>
                <title>Home Page</title>
                <meta name="Nicholas Anich" content="my website!" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <h1>THIS IS THE MAIN CONTENT</h1>
            </main>
        </>
    );
}
