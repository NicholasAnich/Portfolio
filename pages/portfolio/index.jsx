import { useState } from 'react';
import styles from './portfolio.module.scss';
import Project from '../../components/projects/Project.component';

export async function getStaticProps() {
  const API = 'http://127.0.0.1:1337/api';
  const results = await fetch(`${API}/projects?populate=*`);
  const portfolioData = await results.json();
  return {
    props: { portfolioData },
  };
}

export default function Portfolio({ portfolioData }) {
  const [projects, setProjects] = useState(portfolioData);

  const projectList = projects.data.map((detail) => {
    const languages = detail?.attributes?.toolsUsed?.languages;
    const description = detail?.attributes?.description;

    return (
      <Project
        key={detail.id}
        img={detail.attributes.img.data.attributes}
        title={detail.attributes.name}
        languages={languages}
        description={description}
        gitLink={detail.attributes.gitHubURL}
        liveLink={detail.attributes.liveSiteURL}
        id={detail.id}
      />
    );
  });
  return <div className={styles.grid}>{projectList}</div>;
}
