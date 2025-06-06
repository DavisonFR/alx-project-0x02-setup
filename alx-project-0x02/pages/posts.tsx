import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";
import Header from "@/components/layout/Header";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
  const data: PostProps[] = await response.json();

  return {
    props: {
      posts: data.map((post) => ({
        userId: post.userId,
        id: post.id,
        title: post.title,
        body: post.body, // ✅ Using correct field name
      })),
    },
  };
}

export default function Posts({ posts }: { posts: PostProps[] }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header />
      <h1 className="text-4xl font-bold text-center mb-6">Posts</h1>
      <div className="flex flex-col items-center space-y-4">
        {posts.map((post) => (
          <PostCard key={post.id} userId={post.userId} title={post.title} body={post.body} id={0} />
        ))}
      </div>
    </div>
  );
}
