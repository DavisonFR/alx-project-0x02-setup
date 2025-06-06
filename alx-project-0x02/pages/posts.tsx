import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import { type PostProps } from "@/interfaces";

export default function Posts() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      const data: PostProps[] = await response.json(); // ✅ Explicitly typed API response

     const formattedPosts: PostProps[] = data.map((post) => ({
  userId: post.userId,
  id: post.id,
  title: post.title,
  body: post.body // ✅ Matches PostProps structure
}));



      setPosts(formattedPosts);
    }

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-6">Posts</h1>
      <div className="flex flex-col items-center space-y-4">
        {posts.map((post) => (
         <PostCard key={post.id} userId={post.userId} title={post.title} body={post.body} id={0} />

        ))}
      </div>
    </div>
  );
}
