export default function Project() {
    return <div>Project</div>;
}

// export async function getStaticProps({ params }) {
//     const API = "http://127.0.0.1:1337/api";
//     const projectId = params.id;
//     console.log(projectId);
// const results = await fetch(`${API}/projects/${projectId}?populate=*`);
// const previews = await results.json();
// console.log(previews);
// const photo = await previews.data.attributes.img.data.attributes.url;
// const name = await previews.data.attributes.name;
// const location = previews.data.attributes.location;
// const date = await previews.data.attributes.createdAt.toString();
// return {
//     props: { photo, name, location, date },
// };
// }

// export async function getStaticPaths() {
//     const results = await fetch("http://localhost:1337/api/photos?populate=*");
//     const previews = await results.json();
//     return {
//         paths:
//             previews?.data.map((pic) => ({
//                 params: { id: pic.id.toString() },
//             })) || [],
//         fallback: true,
//     };
// }
