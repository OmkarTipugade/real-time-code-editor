import React, { useState } from "react";
import logo from "../../assets/coding-collab.webp";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const Home = () => {
  const navigate = useNavigate();
  const [roomId, setRoomId] = useState("");
  const [username, setUsername] = useState("");

  const joinRoom = (e) => {
    e.preventDefault();
    if (!roomId || !username) {
      toast.error("Please enter both room ID and Username");
      return;
    }
    localStorage.setItem("username", username);
    localStorage.setItem("roomId", roomId);
    navigate(`/editor-page/${roomId}`, {
      state: {
        username,
      },
    });
  };

  const createNewRoom = (e) => {
    e.preventDefault();
    const id = uuidv4();
    setRoomId(id);
    toast.success("Room is created successfully");
  };
  return (
    <React.Fragment>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <Toaster position="top-right" autoClose={3000} />
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="Your Company" src={logo} className="mx-auto h-25 w-auto" />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Code with your friends 👨🏻‍💻
          </h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Paste/Type invitation ROOM ID:
              </label>
              <div className="mt-2">
                <input
                  id="text"
                  username="text"
                  onChange={(e) => {
                    setRoomId(e.target.value);
                  }}
                  value={roomId}
                  placeholder="Enter the invitation ROOM ID"
                  type="text"
                  required
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="username"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  Userusername:
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="username"
                  username="username"
                  type="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  value={username}
                  placeholder="Enter your Username"
                  required
                  autoComplete="username"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                onClick={(e) => joinRoom(e)}
                className="flex cursor-pointer w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Join
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            If don't have invite then create{" "}
            <button
              href="#"
              onClick={(e) => createNewRoom(e)}
              onKeyDown={(e) => {
                e.preventDefault();
                if (e.key === "Enter") createNewRoom(e);
              }}
              className=" cursor-pointer font-semibold text-indigo-600 hover:text-indigo-500"
            >
              new room
            </button>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
