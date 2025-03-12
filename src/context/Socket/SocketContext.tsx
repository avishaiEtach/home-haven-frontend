import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { io, Socket } from "socket.io-client";

// Define the type for the socket context
interface SocketContextType {
  socket: Socket | null;
}

// Create the context with an initial value of null
const SocketContext = createContext<SocketContextType | undefined>(undefined);

export const SocketContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [socket, setSocket] = useState<Socket | null>(null);

  const BASE_URL =
    process.env.NODE_ENV === "production"
      ? "https://home-haven-backend-9jzr.onrender.com"
      : "//localhost:8080";

  useEffect(() => {
    const newSocket = io(BASE_URL, {
      //   withCredentials: true,
      //   transports: ["websocket"],
      reconnectionAttempts: 3,
    });
    newSocket.on("connect", () => {
      //   console.log("Socket connected:", newSocket.id);
    });

    newSocket.on("disconnect", () => {
      //   console.log("Socket disconnected");
    });

    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export const useSocketContext = (): SocketContextType => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error(
      "useSocketContext must be used within a SocketContextProvider"
    );
  }
  return context;
};
