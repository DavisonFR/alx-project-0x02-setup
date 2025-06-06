import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to ALX Project 2 🎉</h1>
      <Image src="/next.svg" alt="Next.js logo" width={180} height={38} priority />
      <p className="text-lg text-gray-600 mt-4">Start by editing <code className="bg-black/[.05] px-2 py-1 rounded">pages/index.tsx</code>.</p>
    </div>
  );
}
