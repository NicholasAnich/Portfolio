import Link from "next/link";
import { CldImage } from "next-cloudinary";
import styles from "./projects.module.scss";
import clsx from "clsx";

export default function Project({ img, title, id, languages }) {
    const cloudinaryImage = img.url;

    return (
        <div className={styles.grid}>
            <div>
                <h1 className={styles.projectTitle}>{title}</h1>
            </div>
            <Link as={`/portfolio/${id}`} href="/portfolio/[id]">
                <CldImage
                    className="cloudImage"
                    width={1200}
                    height={1200}
                    src={cloudinaryImage}
                    alt="photo of title"
                    crop="thumb"
                    gravity="center"
                    sizes="(min-width: 600px) 100vw, 50vw"
                />
            </Link>
            <div className={styles.body}>
                <ul className={styles.languageList}>
                    {languages.map((language, i) => {
                        const languageClass = clsx(
                            styles.languageItem,
                            styles[language.toLowerCase()]
                        );
                        return (
                            <li
                                className={languageClass}
                                key={`${language}-${i}`}
                            >
                                {/* {language} */}
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
