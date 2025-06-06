import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";



export default function About() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header /> {/* ✅ Added Header Component */}
      <div className="flex flex-col items-center justify-center space-y-4 p-6">
        <Button size="small" shape="rounded-sm">Small Button</Button>
        <Button size="medium" shape="rounded-md">Medium Button</Button>
        <Button size="large" shape="rounded-full">Large Button</Button>
      </div>
    </div>
  );
}
