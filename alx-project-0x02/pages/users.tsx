import UserCard from "@/components/common/UserCard";
import { type UserProps } from "@/interfaces";
import Header from "@/components/layout/Header";

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data: UserProps[] = await response.json();

  return {
    props: {
      users: data.map((user) => ({
        id: user.id,
        name: user.name,
        email: user.email,
        address: {
          street: user.address.street,
          city: user.address.city,
          zipcode: user.address.zipcode,
        },
      })),
    },
  };
}

export default function Users({ users }: { users: UserProps[] }) {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <Header />
      <h1 className="text-4xl font-bold text-center mb-6">Users</h1>
      <div className="flex flex-col items-center space-y-4">
        {users.map((user) => {
            return (
                <UserCard key={user.id} name={user.name} email={user.email} address={user.address} id={0} />
            );
        })}
      </div>
    </div>
  );
}
