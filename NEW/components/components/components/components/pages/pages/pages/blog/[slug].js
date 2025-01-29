import Layout from '../../components/Layout';

export async function getStaticPaths() {
  const paths = [
    { params: { slug: 'first-post' } },
    { params: { slug: 'second-post' } },
  ];
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}

export default function BlogPost({ slug }) {
  return (
    <Layout>
      <h2>{slug}</h2>
      <p>This is the blog post with the slug: {slug}</p>
    </Layout>
  );
}
