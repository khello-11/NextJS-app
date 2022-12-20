import Link from "next/link";

export default function Posts({ posts }: any) {
  return (
    <div>
      Posts Component
      {posts.map((post: any) => (
        <div>
          <Link href={`/posts/${post.id}`} key={post.id}>
            {post.title}
          </Link>
        </div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();

  return {
    props: {
      posts: data,
    },
  };
};
