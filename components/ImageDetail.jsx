import Link from "next/link";
import { CldImage } from "next-cloudinary";

export default function Project({ img, title, id }) {
    const cloudinaryImage = img.url;

    return (
        <div>
            <Link as={`/preview/${id}`} href="/preview/[id]">
                <div className="title">
                    <h1>{title}</h1>
                </div>
                <CldImage
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
