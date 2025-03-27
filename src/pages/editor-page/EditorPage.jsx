import React, { useEffect, useRef, useState } from "react";
import Sidebar from "./sidebar/Sidebar";
import CodeEditor from "./CodeEditor";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { initSocket } from "../../socket";
import ACTIONS from "../../actions";
import { removeClientColor } from "../../functions/getColor";

const EditorPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [clients, setClients] = useState([]);

  const codeRef = useRef(""); // Initialize with empty string instead of null
  const socketRef = useRef(null);
  const { roomId } = useParams();

  const effectRan = useRef(false);

  useEffect(() => {
    // Only run the effect if it hasn't run before
    if (!effectRan.current) {
      const init = async () => {
        try {
          socketRef.current = await initSocket();
          socketRef.current.emit(ACTIONS.JOIN, {
            roomId,
            username: location.state?.username,
          });

          socketRef.current.on(
            ACTIONS.JOINED,
            ({ clients, username, socketId }) => {
              if (username !== location.state?.username) {
                toast.success(`${username} joined`);
              }
              setClients(clients);

              // Ensure code is synced even if it's an empty string
              socketRef.current.emit(ACTIONS.SYNC_CODE, {
                socketId,
                code: codeRef.current,
              });
            }
          );

          // Disconnected
          socketRef.current.on(
            ACTIONS.DISCONNECTED,
            ({ socketId, username }) => {
              // Remove client color
              removeClientColor(roomId, socketId);

              // Show toast notification
              toast.error(`${username} left`);

              // Remove the disconnected client from the clients list
              setClients((prev) =>
                prev.filter((client) => client.socketId !== socketId)
              );
            }
          );

          socketRef.current.on(ACTIONS.CONNECT_ERROR, handleError);
          socketRef.current.on(ACTIONS.CONNECT_FAILED, handleError);
        } catch (error) {
          handleError(error);
        }
      };

      init();

      // Mark the effect as run
      effectRan.current = true;

      // Cleanup function
      return () => {
        if (socketRef.current) {
          socketRef.current.off("connect_error", handleError);
          socketRef.current.off("connect_failed", handleError);
          socketRef.current.disconnect();
          socketRef.current.off(ACTIONS.JOINED);
          socketRef.current.off(ACTIONS.DISCONNECTED);
        }
      };
    }
  }, []);

  const handleError = (err) => {
    console.error(`Socket error: ${err}`);
    toast.error(`Socket connection failed`);
    navigate("/");
  };

  if (!location.state) {
    toast.error("No user information found");
    navigate("/");
    return null;
  }

  const onCodeChange = (code) => {
    codeRef.current = code;
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar roomId={roomId} clients={clients} />
      <div className="flex-1 p-4 flex flex-col overflow-hidden">
        <CodeEditor
          socketRef={socketRef}
          roomId={roomId}
          onCodeChange={onCodeChange}
        />
      </div>
    </div>
  );
};

export default EditorPage;
