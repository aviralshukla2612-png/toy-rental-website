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
  FaRegStar,
  FaShoppingBag,
  FaBars,
  FaTimes,
  FaClock,
} from "react-icons/fa";

import { FaGear } from "react-icons/fa6";
import { motion } from "framer-motion";

const Dashboard = () => {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const menu = [
    { icon: <FaRegUser />, label: "My Profile", key: "profile" },
    { icon: <FaRegHeart />, label: "Favorites", key: "favorites" },
    { icon: <FaRegStar />, label: "Watchlist", key: "watchlist" },
    { icon: <FaShoppingBag />, label: "Orders", key: "orders" },
    { icon: <FaRegBell />, label: "Notifications", key: "notification" },
    { icon: <FaGear />, label: "Settings", key: "settings" },
  ];

  const cards = [
    { icon: <FaRegHeart />, title: "Favorites", value: 24 },
    { icon: <FaRegStar />, title: "Watchlist", value: 9 },
    { icon: <FaShoppingBag />, title: "Orders", value: 12 },
  ];

  const activities = [
    {
      title: "Added 'Bounce And Win'",
      desc: "Added to favorites 2 hours ago",
    },
    {
      title: "Viewed 'Learning Dyno'",
      desc: "Recently viewed product",
    },
    {
      title: "Order Delivered",
      desc: "Your order has been delivered successfully",
    },
  ];

  const cardStyle =
    "bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300";

  return (
    <div className="min-h-screen bg-slate-100">

      {/* MOBILE HEADER */}

      <div className="lg:hidden flex items-center justify-between px-6 py-5 bg-white shadow-sm sticky top-0 z-50">

        <h1 className="text-2xl font-bold text-slate-900">
          My Account
        </h1>

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="text-2xl text-slate-800"
        >
          {sidebarOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      <div className="flex">

        {/* SIDEBAR */}

        <aside
          className={`fixed lg:static top-0 left-0 h-screen w-72 bg-slate-900 text-white p-8 z-50 transition-all duration-300 ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }`}
        >

          {/* USER */}

          <div className="flex flex-col items-center text-center border-b border-slate-700 pb-8">

            <div className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center text-3xl font-bold">
              A
            </div>

            <h2 className="mt-5 text-2xl font-bold">
              Aviral
            </h2>

            <p className="text-gray-400 mt-2">
              Premium Member
            </p>

            <p className="text-sm text-gray-500 mt-1">
              Joined 2026
            </p>

          </div>

          {/* MENU */}

          <ul className="mt-10 space-y-3">

            {menu.map((item) => (

              <li
                key={item.key}
                onClick={() => {
                  setActiveTab(item.key);
                  setSidebarOpen(false);
                }}
                className={`flex items-center gap-4 px-5 py-4 rounded-2xl cursor-pointer transition-all duration-300 ${
                  activeTab === item.key
                    ? "bg-white text-black"
                    : "hover:bg-slate-800"
                }`}
              >

                <span className="text-lg">
                  {item.icon}
                </span>

                <span className="font-medium">
                  {item.label}
                </span>

              </li>

            ))}

          </ul>

          {/* LOGOUT */}

          <button
            onClick={() => navigate("/")}
            className="w-full mt-10 bg-red-500 hover:bg-red-600 text-white py-4 rounded-2xl transition duration-300 font-medium"
          >
            Logout
          </button>

        </aside>

        {/* MAIN */}

        <main className="flex-1 px-6 lg:px-10 py-8">

          {/* HERO */}

          <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

            <div>

              <p className="uppercase tracking-[3px] text-sm text-gray-500 mb-3">
                Welcome Back
              </p>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                Hello, Aviral 👋
              </h1>

              <p className="mt-4 text-gray-600 text-lg">
                Manage your profile, favorites and activity.
              </p>

            </div>

            <button
              onClick={() => navigate("/game")}
              className="bg-black text-white px-6 py-4 rounded-2xl hover:bg-slate-800 transition duration-300"
            >
              Browse Games
            </button>

          </div>

          {/* OVERVIEW */}

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

            {cards.map((card, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 + index * 0.1 }}
                className={cardStyle}
              >

                <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-2xl mb-6">
                  {card.icon}
                </div>

                <p className="text-gray-500">
                  {card.title}
                </p>

                <h2 className="text-4xl font-bold mt-2">
                  {card.value}
                </h2>

              </motion.div>

            ))}

          </div>

          {/* ACTIVITY */}

          <div className="max-w-6xl mx-auto grid grid-cols-1 xl:grid-cols-3 gap-8 mb-10">

            <div className={`${cardStyle} xl:col-span-2`}>

              <h2 className="text-2xl font-bold">
                Recent Activity
              </h2>

              <p className="text-gray-500 mt-2 mb-8">
                Your latest interactions
              </p>

              <div className="space-y-5">

                {activities.map((activity, index) => (

                  <div
                    key={index}
                    className="flex items-center gap-4 bg-slate-50 rounded-2xl p-5"
                  >

                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      <FaClock />
                    </div>

                    <div>

                      <h3 className="font-semibold text-slate-900">
                        {activity.title}
                      </h3>

                      <p className="text-gray-500 text-sm mt-1">
                        {activity.desc}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* QUICK ACTIONS */}

            <div className={cardStyle}>

              <h2 className="text-2xl font-bold mb-8">
                Quick Actions
              </h2>

              <div className="flex flex-col gap-5">

                <button
                  onClick={() => navigate("/game")}
                  className="bg-black text-white py-4 rounded-2xl hover:bg-slate-800 transition"
                >
                  Explore Games
                </button>

                <button
                  onClick={() => setActiveTab("favorites")}
                  className="border border-gray-300 py-4 rounded-2xl hover:bg-gray-100 transition"
                >
                  View Favorites
                </button>

                <button
                  onClick={() => setActiveTab("settings")}
                  className="border border-gray-300 py-4 rounded-2xl hover:bg-gray-100 transition"
                >
                  Account Settings
                </button>

              </div>

              {/* PROFILE COMPLETION */}

              <div className="mt-10 bg-slate-50 rounded-2xl p-6">

                <div className="flex items-center justify-between mb-4">

                  <h3 className="font-semibold">
                    Profile Completion
                  </h3>

                  <span className="text-sm font-semibold">
                    80%
                  </span>

                </div>

                <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">

                  <div className="w-[80%] h-full bg-black rounded-full"></div>

                </div>

              </div>

            </div>

          </div>

          {/* PAGE TITLE */}

          <div className="max-w-5xl mx-auto mb-8">

            <h2 className="text-4xl font-bold text-slate-900">
              My Profile
            </h2>

            <p className="text-gray-500 mt-2">
              Manage your account settings and personal information.
            </p>

          </div>

          {/* TAB CONTENT */}

          <div className="max-w-5xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-sm mb-16">

            {activeTab === "profile" && <Profile />}
            {activeTab === "favorites" && <Favorites />}
            {activeTab === "watchlist" && <Watchlist />}
            {activeTab === "settings" && <Settings />}
            {activeTab === "notification" && <Notification />}

          </div>

        </main>

      </div>

    </div>
  );
};

export default Dashboard;