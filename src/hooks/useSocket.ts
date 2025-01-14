// hooks/useSocket.ts
import { DataTableProps } from "@/types/index.types";
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

// Define the socket URL based on your environment
const SOCKET_URL =
  process.env.NEXT_PUBLIC_SOCKET_URL || "http://localhost:3000";

export interface DataRow {
  id: string;
  name: string;
  email: string;
  address: string;
  phone: string;
  company: string;
  createdAt: string;
}

let socket: Socket;

const useSocket = (): DataTableProps | null => {
  const [data, setData] = useState<DataTableProps | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SOCKET_URL}/api/v1/historical`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "2021-01-01",
            to: "2025-01-13",
          }),
        }
      );
      const historicalData = await response.json();
      setData({
        data: historicalData,
      });
    };
    fetchData();
    // Initialize the socket connection on mount
    socket = io(SOCKET_URL);

    // Listen for the 'DataRow' event from the server
    socket.on("BROADCASTED_PING", (data: DataRow) => {
      console.log("Received broadcasted data:", data);
      setData((prev) => {
        if (prev) {
          return {
            data: [...prev.data, data],
          };
        } else {
          return {
            data: [data],
          };
        }
      });
    });

    // Clean up the socket connection when the component unmounts
    return () => {
      socket.disconnect();
    };
  }, []);

  // Return the received data from the broadcast
  return data;
};

export default useSocket;
