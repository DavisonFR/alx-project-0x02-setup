import { type PostProps } from "@/interfaces";

export default function PostCard({ userId, title, body }: PostProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-700">{body}</p> {/* ✅ Ensure this uses `body`, not `content` */}
      <span className="text-sm text-gray-500">User ID: {userId}</span>
    </div>
  );
}
