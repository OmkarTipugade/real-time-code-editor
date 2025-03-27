import React from "react";
import { getClientColor } from "../../../functions/getColor";

const Client = ({ socketId, username, roomId }) => {
  return (
    <button className={`flex text-white`}>
      <div
        className={`w-15 h-15 rounded-md flex items-center justify-center p-2 ${getClientColor(
          roomId,
          socketId
        )} `}
      >
        <span className="text-sm font-medium overflow-hidden text-ellipsis w-full text-center">
          {username}
        </span>
      </div>
    </button>
  );
};

export default Client;
