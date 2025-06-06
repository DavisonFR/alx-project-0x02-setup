export interface CardProps {
  title: string;
  content: string;
}
export interface ButtonProps {
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
  children: React.ReactNode;
  onClick?: () => void;
}
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string; // ✅ Ensure this is named "body"
}

