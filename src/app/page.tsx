"use client";

import useSocket from "@/hooks/useSocket";
import { useState } from "react";

export default function Home() {
  const [from, setFrom] = useState<string>("");
  const [to, setTo] = useState<string>("");
  console.log("from", from);
  console.log("to", to);
  const data = useSocket({ from, to });
  return (
    <div className="container mx-auto my-24 overflow-x-auto">
      <div className="flex justify-between">
        <p className="my-4">Total Results: {data?.data.length}</p>
        <div className="flex space-x-4">
          <div className="flex gap-2 justify-center items-center">
            <label htmlFor="from">From:</label>
            <input
              type="date"
              name="from"
              id="from"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>
          <div className="flex gap-2 justify-center items-center">
            <label htmlFor="to">To:</label>
            <input
              type="date"
              name="to"
              id="to"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>
        </div>
      </div>

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
          {data?.data?.map((row) => (
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
