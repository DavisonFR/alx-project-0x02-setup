import { type ButtonProps } from "@/interfaces";

export default function Button({ size, shape, children, onClick }: ButtonProps) {
  const sizeClass = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg"
  }[size];

  const shapeClass = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full"
  }[shape];

  return (
    <button
      className={`bg-blue-500 text-white ${sizeClass} ${shapeClass}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
