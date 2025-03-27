// colorManager.js
const colors = [
  "bg-red-800",
  "bg-blue-800",
  "bg-green-800",
  "bg-yellow-800",
  "bg-purple-800",
  "bg-pink-800",
  "bg-indigo-800",
  "bg-teal-800",
  "bg-orange-800",
  "bg-emerald-800",
  "bg-red-700",
  "bg-blue-700",
  "bg-green-700",
  "bg-yellow-700",
  "bg-purple-700",
  "bg-pink-700",
  "bg-indigo-700",
  "bg-teal-700",
  "bg-orange-700",
  "bg-emerald-700",
  "bg-red-600",
  "bg-blue-600",
  "bg-green-600",
  "bg-yellow-600",
  "bg-purple-600",
  "bg-pink-600",
  "bg-indigo-600",
  "bg-teal-600",
  "bg-orange-600",
  "bg-emerald-600",
  "bg-red-500",
  "bg-blue-500",
  "bg-green-500",
  "bg-yellow-500",
  "bg-purple-500",
  "bg-pink-500",
  "bg-indigo-500",
  "bg-teal-500",
  "bg-orange-500",
  "bg-emerald-500",
  "bg-red-400",
  "bg-blue-400",
  "bg-green-400",
  "bg-yellow-400",
  "bg-purple-400",
  "bg-pink-400",
  "bg-indigo-400",
  "bg-teal-400",
  "bg-orange-400",
  "bg-emerald-400",
  "bg-red-300",
  "bg-blue-300",
  "bg-green-300",
  "bg-yellow-300",
  "bg-purple-300",
  "bg-pink-300",
  "bg-indigo-300",
  "bg-teal-300",
  "bg-orange-300",
  "bg-emerald-300",
];

// Keeps track of color assignments per room
const roomColorMap = new Map();

/**
 * Get a unique color for a socketId in a specific room
 * @param {string} roomId - Unique room ID
 * @param {string} socketId - Unique socket ID
 * @returns {string} - Tailwind color class
 */
const getClientColor = (roomId, socketId) => {
  if (!roomColorMap.has(roomId)) {
    roomColorMap.set(roomId, new Map());
  }

  const socketToColor = roomColorMap.get(roomId);

  // Return existing color if already assigned
  if (socketToColor.has(socketId)) {
    return socketToColor.get(socketId);
  }

  // Determine available colors in the room
  const assignedColors = new Set(socketToColor.values());
  const availableColors = colors.filter((color) => !assignedColors.has(color));

  // If all colors are used, recycle (still deterministic)
  const color =
    availableColors.length > 0
      ? availableColors[0]
      : colors[socketToColor.size % colors.length];

  socketToColor.set(socketId, color);
  return color;
};

/**
 * Optional cleanup if a socket leaves the room
 */
const removeClientColor = (roomId, socketId) => {
  const socketToColor = roomColorMap.get(roomId);
  if (socketToColor) {
    socketToColor.delete(socketId);
    if (socketToColor.size === 0) {
      roomColorMap.delete(roomId);
    }
  }
};

export { getClientColor, removeClientColor };
