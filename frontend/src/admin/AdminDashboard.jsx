import React, { useEffect, useState } from "react";
import axios from "axios";

import Sidebar from "../component/Admin/Sidebar";
import StatsCard from "../component/Admin/StatsCard";
import RentalPiechart from "../component/Admin/RentalPieChart";
import Rentalbarchart from "../component/Admin/RentalBarChart";
import AdminNavbar from "../component/Admin/AdminNavbar";

import { API } from "../config/api";

import {
  FaBoxOpen,
  FaUsers,
  FaClipboardList,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

function AdminDashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalUsers: 0,
    totalRentals: 0,
    activeRentals: 0,
    returnedRentals: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          `${API}/api/dashboard`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setStats(res.data);
      } catch (err) {
        setError(
          err.response?.data?.message ||
            "Failed to load dashboard data"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading Dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-xl">
        {error}
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-100">

     

      {/* Main Content */}
      <div className="flex-1 p-8">



        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mt-8">

          <StatsCard
            title="Products"
            value={stats.totalProducts}
            icon={<FaBoxOpen />}
            bgColor="bg-blue-100"
            textColor="text-blue-700"
          />

          <StatsCard
            title="Users"
            value={stats.totalUsers}
            icon={<FaUsers />}
            bgColor="bg-green-100"
            textColor="text-green-700"
          />

          <StatsCard
            title="Rentals"
            value={stats.totalRentals}
            icon={<FaClipboardList />}
            bgColor="bg-yellow-100"
            textColor="text-yellow-700"
          />

          <StatsCard
            title="Active Rentals"
            value={stats.activeRentals}
            icon={<FaClock />}
            bgColor="bg-orange-100"
            textColor="text-orange-700"
          />

          <StatsCard
            title="Returned Rentals"
            value={stats.returnedRentals}
            icon={<FaCheckCircle />}
            bgColor="bg-purple-100"
            textColor="text-purple-700"
          />

        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">

          <RentalPiechart
            activeRentals={stats.activeRentals}
            returnedRentals={stats.returnedRentals}
          />

          <Rentalbarchart
            totalProducts={stats.totalProducts}
            totalUsers={stats.totalUsers}
            totalRentals={stats.totalRentals}
            returnedRentals={stats.returnedRentals}
          />

        </div>

        {/* Recent Activity */}
        <div className="mt-10 bg-white rounded-xl shadow-lg p-6">

          <h2 className="text-2xl font-semibold mb-4">
            Recent Activity
          </h2>

          <ul className="space-y-3 text-gray-700">

            <li>✅ New User Registered</li>

            <li>📦 New Product Added</li>

            <li>🚚 Rental Created</li>

            <li>✔ Product Returned</li>

          </ul>

        </div>

      </div>

    </div>
  );
}

export default AdminDashboard;