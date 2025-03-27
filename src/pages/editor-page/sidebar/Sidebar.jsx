import React from "react";
import logo from "../../../assets/coding-collab.webp";
import Client from "./Client";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Sidebar({ roomId, clients }) {
  const navigat = useNavigate();

  const onLeave = (e) => {
    e.preventDefault();
    navigat("/");
  };

  const copyRoomId = () => {
    navigator.clipboard.writeText(roomId);
    toast.success("Room Id copied successfully");
  };

  return (
    <>
      {/* Sidebar */}
      <Toaster />
      <div
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 flex flex-col
        -translate-x-full md:translate-x-0"
      `}
      >
        <div className="flex items-center justify-between cursor-pointer gap-2 p-4">
          <img src={logo} alt="coding-collab" className="h-25 w-auto" />
          <div>
            <h3 className="text-3xl text-blue-500 hover:text-blue-600 font-bold">
              Coding Collab
            </h3>
            <p className="text-sm font-medium text-gray-500 hover:text-gray-600">
              Write code with your friends
            </p>
          </div>
        </div>
        <div className="flex items-center justify-between h-16 px-4 border-b">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-800">Connected</span>
          </div>
          <button className="p-1 rounded-md text-gray-500 hover:text-gray-600 md:hidden"></button>
        </div>

        <nav className="mt-5 px-2 flex-grow overflow-y-auto">
          <div
            className={`space-y-2 ${
              clients.length !== 0 && "grid grid-cols-3 gap-4"
            } `}
          >
            {clients.length === 0 ? (
              <p className="text-center text-gray-500">No users connected</p>
            ) : (
              clients.map((client) => (
                <Client
                  key={client.socketId}
                  socketId={client.socketId}
                  username={client.username}
                  roomId={roomId}
                />
              ))
            )}
          </div>
        </nav>

        {/* Bottom action buttons */}
        <div className="p-4 border-t mt-auto">
          <div className="flex flex-col gap-2">
            <button
              onClick={copyRoomId}
              className="w-full py-2 bg-blue-500 cursor-pointer hover:bg-blue-600 text-white rounded-md font-medium transition-colors duration-200"
            >
              Copy Room ID
            </button>
            <button
              onClick={onLeave}
              className="w-full py-2 bg-red-500 cursor-pointer hover:bg-red-600 text-white rounded-md font-medium transition-colors duration-200"
            >
              Leave
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
