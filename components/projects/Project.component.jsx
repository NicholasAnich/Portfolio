import Link from "next/link";
import { CldImage } from "next-cloudinary";
import styles from "./projects.module.scss";

export default function Project({ img, title, id }) {
    const cloudinaryImage = img.url;

    return (
        <div className={styles.grid}>
            <h1 className={styles.projectTitle}>{title}</h1>
            <Link as={`/preview/${id}`} href="/preview/[id]">
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
        </div>
    );
}
