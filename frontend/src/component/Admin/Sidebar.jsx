import React from "react";
import { Link, useLocation } from "react-router-dom";

import {
  FaTachometerAlt,
  FaBoxOpen,
  FaUsers,
  FaClipboardList,
  FaChartPie,
  FaSignOutAlt,
} from "react-icons/fa";

function Sidebar() {
  const location = useLocation();

  const menuItems = [
    {
      name: "Dashboard",
      path: "/admin",
      icon: <FaTachometerAlt />,
    },
    {
      name: "Products",
      path: "/admin/products",
      icon: <FaBoxOpen />,
    },
    {
      name: "Users",
      path: "/admin/users",
      icon: <FaUsers />,
    },
    {
      name: "Rentals",
      path: "/admin/rentals",
      icon: <FaClipboardList />,
    },
    {
      name: "Analytics",
      path: "/admin/analytics",
      icon: <FaChartPie />,
    },
  ];

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    window.location.href = "/";
  };

  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white flex flex-col">

      {/* Logo */}
      <div className="p-6 border-b border-gray-700">
        <h1 className="text-2xl font-bold text-center">
          Toy Rental Admin
        </h1>
      </div>

      {/* Menu */}
      <div className="flex-1 p-4">

        {menuItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={`flex items-center gap-3 px-4 py-3 rounded-lg mb-3 transition-all
            ${
              location.pathname === item.path
                ? "bg-blue-600"
                : "hover:bg-gray-800"
            }`}
          >
            {item.icon}
            <span>{item.name}</span>
          </Link>
        ))}

      </div>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-4 py-3 bg-red-500 hover:bg-red-600 rounded-lg"
        >
          <FaSignOutAlt />
          Logout
        </button>
      </div>

    </div>
  );
}

export default Sidebar;