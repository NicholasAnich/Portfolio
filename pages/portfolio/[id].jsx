import { CldImage } from 'next-cloudinary';
import LanguageList from '../../components/languageList/LanguageList.component';
import styles from './preview.module.scss';

export async function getStaticProps({ params }) {
  // const API = 'http://127.0.0.1:1337/api';
  const projectId = params.id;

  const results = await fetch(
    `${process.env.API_BASE_URL}/projects/${projectId}?populate=*` ||
      `${process.env.PRODUCTION_BASE_URL}/projects/${projectId}?populate=*`
  );
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
  // const API = 'http://127.0.0.1:1337/api';
  const results = await fetch(
    process.env.DEV_API_URL || process.env.PRODUCTION_URL
  );
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
  const projectDate = new Date(date);
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = projectDate.toLocaleDateString('en-US', options);

  console.log(formattedDate);
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
      <time dateTime={date}>{formattedDate}</time>
      <LanguageList languages={languages} />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem,
        accusamus temporibus fugiat, saepe consequatur necessitatibus enim
        nostrum distinctio nemo vero reiciendis dolorum voluptate aliquam quasi
        omnis non facilis quod, quam esse quisquam. Quo atque accusantium eos
        hic autem, molestias consectetur?
      </p>
    </div>
  );
}
