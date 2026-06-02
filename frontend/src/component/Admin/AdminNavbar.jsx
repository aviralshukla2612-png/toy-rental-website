import React from "react";
import {
  FaBell,
  FaUserCircle,
} from "react-icons/fa";

const AdminNavbar = () => {
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="bg-white shadow-md rounded-xl px-6 py-4 flex justify-between items-center">

      {/* Left Side */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 text-sm">
          Welcome back, Admin 👋
        </p>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">

        {/* Notification */}
        <button className="relative">
          <FaBell
            size={22}
            className="text-gray-600"
          />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-1 rounded-full">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3">

          <FaUserCircle
            size={40}
            className="text-gray-700"
          />

          <div>
            <h3 className="font-semibold">
              {user?.email || "Admin"}
            </h3>

            <p className="text-xs text-gray-500">
              Administrator
            </p>
          </div>

        </div>

      </div>

    </div>
  );
};

export default AdminNavbar;
