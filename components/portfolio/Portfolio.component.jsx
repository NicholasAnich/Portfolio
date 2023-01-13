import { useState, useEffect } from 'react';
import axios from 'axios';
import Head from 'next/head';
import styles from './portfolio.module.scss';
import Project from '../projects/Project.component';

export default function Portfolio() {
  const [projects, setProjects] = useState('');

  useEffect(() => {
    axios
      .get(process.env.NEXT_PUBLIC_DEV_API_URL || process.env.PRODUCTION_URL)
      .then((res) => {
        setProjects(res.data);
      });
  }, []);

  const projectList = projects?.data?.map((detail, i) => {
    const languages = detail?.attributes?.toolsUsed?.languages;
    const description = detail?.attributes?.description;

    return (
      <div id='projects' key={detail?.id}>
        <Head>
          <title>Portfolio</title>
        </Head>
        <Project
          key={detail?.id}
          img={detail?.attributes?.img?.data?.attributes}
          title={detail?.attributes?.name}
          languages={languages}
          description={description}
          gitLink={detail?.attributes?.gitHubURL}
          liveLink={detail?.attributes?.liveSiteURL}
          id={detail?.id}
        />
      </div>
    );
  });

  return <div className={styles.grid}>{projectList}</div>;
}
