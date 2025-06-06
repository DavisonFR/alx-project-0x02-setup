import { type UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border rounded-lg p-4 shadow-md bg-white">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-gray-700">{email}</p>
      <p className="text-sm text-gray-500">{address.street}, {address.city}, {address.zipcode}</p>
    </div>
  );
}
