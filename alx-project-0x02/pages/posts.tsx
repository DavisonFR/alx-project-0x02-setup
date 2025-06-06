import Header from "@/components/layout/Header";

export default function Posts() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header /> {/* ✅ Navigation added */}
      <div className="flex flex-col items-center justify-center p-6">
        <h1 className="text-4xl font-bold">Welcome to Posts Page</h1>
      </div>
    </div>
  );
}
