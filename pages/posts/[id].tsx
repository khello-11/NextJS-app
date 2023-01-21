export default function Dynamic({ posts }: any) {
  return (
    <div key={posts.id} style={{ background: "red" }}>
      <p>{posts.title}</p>
      <p>{posts.body}</p>
    </div>
  );
}

// to select how many id are to have
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();

  const paths = data.map((d: any) => {
    return {
      params: { id: `${d.id}` },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
};

// function to display every item's detail
export const getStaticProps = async (context: any) => {
  const res = await fetch(`http://localhost:3000/api/posts/${context.params.id}`);
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
