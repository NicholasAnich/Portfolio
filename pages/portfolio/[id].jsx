import { CldImage } from 'next-cloudinary';
import styles from './preview.module.scss';

export async function getStaticProps({ params }) {
  const API = 'http://127.0.0.1:1337/api';
  const projectId = params.id;

  const results = await fetch(`${API}/projects/${projectId}?populate=*`);
  const previews = await results.json();

  const image = await previews.data.attributes.img.data.attributes.url;
  const altText = await previews.data.attributes.img.data.attributes
    .alternativeText;
  const name = await previews.data.attributes.name;
  const languages = await previews.data.attributes.toolsUsed.languages;
  const date = await previews.data.attributes.createdAt.toString();

  return {
    props: { image, altText, name, languages, date, previews },
  };
}

export async function getStaticPaths() {
  const API = 'http://127.0.0.1:1337/api';
  const results = await fetch(`${API}/projects?populate=*`);
  const previews = await results.json();
  return {
    paths:
      previews?.data.map((project) => ({
        params: { id: project.id.toString() },
      })) || [],
    fallback: true,
  };
}

export default function Project({
  image,
  altText,
  name,
  languages,
  date,
  // previews,
}) {
  return (
    <div>
      <CldImage
        className={styles.cldImage}
        width={1200}
        height={1200}
        src={image}
        alt={altText}
      />
      <h1>{name}</h1>
    </div>
  );
}

// https://res.cloudinary.com/dsfpnlxqn/image/upload/c_fill,g_auto,h_250,w_970/b_rgb:000000,e_gradient_fade,y_-0.50/c_scale,co_rgb:ffffff,fl_relative,l_text:montserrat_25_style_light_align_center:Shop%20Now,w_0.5,y_0.18/v1672523617/project_Tablet_b8dc6c8aad.png
