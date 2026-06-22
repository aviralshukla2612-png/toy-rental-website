import React from "react";
import {
  FaBell,
  FaUserCircle,
  FaBars,
} from "react-icons/fa";

const AdminNavbar = ({ setOpen }) => {
  const user =
    JSON.parse(localStorage.getItem("user")) || {};

  return (
    <div className="bg-white shadow-md rounded-xl px-4 sm:px-6 py-4 flex justify-between items-center">

      {/* Left Side */}
      <div className="flex items-center gap-4">

        {/* Mobile Menu Button */}
        {setOpen && (
          <button
            onClick={() => setOpen(true)}
            className="lg:hidden"
          >
            <FaBars
              size={24}
              className="text-gray-700"
            />
          </button>
        )}

        <div>
          <h1 className="text-lg sm:text-2xl font-bold text-gray-800">
            Admin Dashboard
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm">
            Welcome back, Admin 👋
          </p>
        </div>

      </div>

      {/* Right Side */}
      <div className="flex items-center gap-3 sm:gap-6">

        {/* Notification */}
        <button className="relative">
          <FaBell
            size={20}
            className="text-gray-600"
          />

          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] px-1 rounded-full">
            3
          </span>
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 sm:gap-3">

          <FaUserCircle
            size={36}
            className="text-gray-700"
          />

          <div className="hidden sm:block">
            <h3 className="font-semibold text-sm">
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
