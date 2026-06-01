import React, { useEffect, useState } from "react";
import axios from "axios";
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
          "http://localhost:5000/api/dashboard",
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
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">
          Admin Dashboard
        </h1>

        <p className="text-gray-500 mt-2">
          Welcome back, Admin 👋
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">

        <div className="bg-white rounded-xl shadow-md p-5">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-500">Products</h3>
              <h2 className="text-3xl font-bold">
                {stats.totalProducts}
              </h2>
            </div>
            <FaBoxOpen size={35} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-500">Users</h3>
              <h2 className="text-3xl font-bold">
                {stats.totalUsers}
              </h2>
            </div>
            <FaUsers size={35} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-500">Rentals</h3>
              <h2 className="text-3xl font-bold">
                {stats.totalRentals}
              </h2>
            </div>
            <FaClipboardList size={35} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-500">Active Rentals</h3>
              <h2 className="text-3xl font-bold">
                {stats.activeRentals}
              </h2>
            </div>
            <FaClock size={35} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-gray-500">Returned Rentals</h3>
              <h2 className="text-3xl font-bold">
                {stats.returnedRentals}
              </h2>
            </div>
            <FaCheckCircle size={35} />
          </div>
        </div>

      </div>

      <div className="mt-10 bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4">
          Dashboard Overview
        </h2>

        <p className="text-gray-600">
          Product Management, User Management,
          Rental Reports and Charts will be added here.
        </p>
      </div>

    </div>
  );
}

export default AdminDashboard;