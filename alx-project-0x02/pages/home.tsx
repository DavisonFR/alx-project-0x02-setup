import Card from "../components/common/Card";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center space-y-4 bg-gray-100 p-6">
      <Card title="Welcome" content="This is your reusable Card component!" />
      <Card title="Next.js with Tailwind" content="A powerful combination for modern web development!" />
      <Card title="Project ALX" content="Hands-on learning with structured guidance!" />
    </div>
  );
}

