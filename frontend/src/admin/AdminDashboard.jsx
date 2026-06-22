import React, { useEffect, useState } from "react";
import axios from "axios";


import StatsCard from "../component/Admin/StatsCard";
import RentalPiechart from "../component/Admin/RentalPieChart";
import Rentalbarchart from "../component/Admin/RentalBarChart";


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

        const res = await axios.get(`${API}/api/dashboard`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

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
      <div className="flex justify-center items-center h-screen text-lg md:text-xl font-semibold">
        Loading Dashboard...
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen text-red-500 text-lg md:text-xl text-center px-4">
        {error}
      </div>
    );
  }

return (
  <div className="p-4 sm:p-6 lg:p-8">

        

          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Dashboard Overview
          </h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5 mt-6">

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
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 mt-8">

            <div className="bg-white rounded-xl shadow-md p-4 overflow-x-auto">
              <RentalPiechart
                activeRentals={stats.activeRentals}
                returnedRentals={stats.returnedRentals}
              />
            </div>

            <div className="bg-white rounded-xl shadow-md p-4 overflow-x-auto">
              <Rentalbarchart
                totalProducts={stats.totalProducts}
                totalUsers={stats.totalUsers}
                totalRentals={stats.totalRentals}
                returnedRentals={stats.returnedRentals}
              />
            </div>

          </div>

          {/* Recent Activity */}
          <div className="mt-8 bg-white rounded-xl shadow-md p-5 sm:p-6">

            <h2 className="text-xl sm:text-2xl font-semibold mb-4">
              Recent Activity
            </h2>

            <ul className="space-y-4 text-gray-700 text-sm sm:text-base">

              <li className="flex items-center gap-2">
                ✅ New User Registered
              </li>

              <li className="flex items-center gap-2">
                📦 New Product Added
              </li>

              <li className="flex items-center gap-2">
                🚚 Rental Created
              </li>

              <li className="flex items-center gap-2">
                ✔ Product Returned
              </li>

            </ul>

          </div>

        </div>

     
   
  );
}

export default AdminDashboard;