import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-center space-x-6">
      <Link href="/home" className="hover:underline">Home</Link>
      <Link href="/about" className="hover:underline">About</Link>
      <Link href="/posts" className="hover:underline">Posts</Link>  {/* ✅ Added /posts */}
    </nav>
  );
}
