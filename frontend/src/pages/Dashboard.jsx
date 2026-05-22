import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Profile from "../dashboard/Profile";
import Favorites from "../dashboard/Favorites";
import Watchlist from "../dashboard/Watchlist";
import Settings from "../dashboard/Settings";
import Notification from "../dashboard/Notification";

import {
  FaRegUser,
  FaRegBell,
  FaRegHeart,
  FaRegStar
} from "react-icons/fa";
import { FaGear } from "react-icons/fa6";

const Dashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");

  const menu = [
    { icon: <FaRegUser />, label: "User Info", key: "profile" },
    { icon: <FaRegHeart />, label: "Favorites", key: "favorites" },
    { icon: <FaRegStar />, label: "Watchlist", key: "watchlist" },
    { icon: <FaGear />, label: "Settings", key: "settings" },
    { icon: <FaRegBell />, label: "Notification", key: "notification" }
  ];

  return (
    <div className="w-full px-6 py-6 bg-gray-100 min-h-screen">

      <h1 className="text-2xl md:text-3xl font-bold text-center mb-6">
        Welcome to Dashboard
      </h1>

      <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">

        
        <div className="w-full md:w-1/4 bg-white p-5 rounded-xl shadow">
          <h2 className="text-xl font-semibold mb-6">User Profile</h2>

          <ul className="space-y-3">
            {menu.map((item, index) => (
              <li
                key={index}
                onClick={() => setActiveTab(item.key)}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer
                ${activeTab === item.key
                    ? "bg-yellow-200 font-semibold"
                    : "hover:bg-yellow-100"}`}
              >
                {item.icon}
                {item.label}
              </li>
            ))}
          </ul>

          <button
            onClick={() => navigate("/")}
            className="mt-6 w-full border border-red-500 text-red-500 py-2 rounded hover:bg-red-100"
          >
            Log Out
          </button>
        </div>

      
        <div className="w-full md:w-3/4 bg-white p-6 rounded-xl shadow">

          {activeTab === "profile" && <Profile />}
          {activeTab === "favorites" && <Favorites />}
          {activeTab === "watchlist" && <Watchlist />}
          {activeTab === "settings" && <Settings />}
          {activeTab === "notification" && <Notification />}

        </div>
      </div>
    </div>
  );
};
export default Dashboard;