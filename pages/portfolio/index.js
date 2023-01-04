import { useState } from "react";
import styles from "./portfolio.module.scss";
import Project from "../../components/projects/Project.component";

export async function getStaticProps() {
    const results = await fetch(
        "http://127.0.0.1:1337/api/projects?populate=*"
    );
    const portfolioData = await results.json();
    return {
        props: { portfolioData },
    };
}

export default function Portfolio({ portfolioData }) {
    const [projects, setProjects] = useState(portfolioData);

    const projectList = projects.data.map((detail) => {
        const languages = detail?.attributes?.toolsUsed?.languages;
        return (
            <Project
                key={detail.id}
                img={detail.attributes.img.data.attributes}
                title={detail.attributes.name}
                languages={languages}
                id={detail.id}
            />
        );
    });
    return <div className={styles.grid}>{projectList}</div>;
}
