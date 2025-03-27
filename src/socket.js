import { io } from "socket.io-client";

export const initSocket = async () => {
  const options = {
    transports: ["websocket"],
    reconnectionAttempts: Infinity,
    reconnectionDelay: 5000,
    forceNew: true,
  };

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  if (!backendUrl) {
    throw new Error("VITE_BACKEND_URL is not defined");
  }

  return io(backendUrl, options);
};
