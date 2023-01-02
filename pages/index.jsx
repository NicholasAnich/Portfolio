import Head from "next/head";
import { useState } from "react";
import Project from "../components/ImageDetail";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export async function getStaticProps() {
    const results = await fetch(
        "http://127.0.0.1:1337/api/projects?populate=*"
    );
    const stuff = await results.json();
    return {
        props: { stuff },
    };
}

export default function Home({ stuff }) {
    const [projects, setProjects] = useState(stuff);
    const [search, setSearch] = useState("");
    console.log(projects.data[0].attributes);
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
                <h1>hello world</h1>
                <div className={styles.fade}>
                    <div className={styles.gridContainer}>
                        {projects &&
                            projects.data.map((detail) => (
                                <Project
                                    key={detail.id}
                                    img={
                                        detail.attributes.img.data
                                            .attributes
                                    }
                                    title={detail.attributes.name}
                                    id={detail.id}
                                />
                            ))}
                    </div>
                </div>
            </main>
        </>
    );
}
