"use client";

import useSocket from "@/hooks/useSocket";

export default function Home() {
  const data = useSocket();
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
        <thead>
          <tr className="text-left bg-gray-100 text-gray-600">
            <th className="px-4 py-2 border-b">ID</th>
            <th className="px-4 py-2 border-b">Name</th>
            <th className="px-4 py-2 border-b">Email</th>
            <th className="px-4 py-2 border-b">Address</th>
            <th className="px-4 py-2 border-b">Phone</th>
            <th className="px-4 py-2 border-b">Company</th>
            <th className="px-4 py-2 border-b">Created At</th>
          </tr>
        </thead>
        <tbody>
          {data?.data.map((row) => (
            <tr key={row.id} className="border-b">
              <td className="px-4 py-2">{row.id}</td>
              <td className="px-4 py-2">{row.name}</td>
              <td className="px-4 py-2">{row.email}</td>
              <td className="px-4 py-2">{row.address}</td>
              <td className="px-4 py-2">{row.phone}</td>
              <td className="px-4 py-2">{row.company}</td>
              <td className="px-4 py-2">{row.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
