import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";

export default function Home() {
  const [posts, setPosts] = useState<{ title: string; content: string }[]>([]);
  const [isModalOpen, setModalOpen] = useState(false);

  function handleNewPost(title: string, content: string) {
    setPosts([...posts, { title, content }]);
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4 bg-gray-100 p-6">
      <button onClick={() => setModalOpen(true)} className="px-4 py-2 bg-green-500 text-white rounded">Add New Post</button>
      
      <PostModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} onSubmit={handleNewPost} />

      {posts.map((post, index) => (
        <Card key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
}
