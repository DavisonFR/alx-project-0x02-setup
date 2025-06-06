import { type CardProps } from "@/interfaces";
export default function Card({ title, content }: CardProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-700">{content}</p>
    </div>
  );
}
