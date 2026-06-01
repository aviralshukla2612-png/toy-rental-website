import React, { useEffect, useState } from "react";
import axios from "axios";

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

        console.log("Dashboard Data:", res.data);

        setStats(res.data);
      } catch (err) {
        console.error(err);
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
    return <h2>Loading Dashboard...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red" }}>{error}</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Admin Dashboard</h1>

      <hr />

      <h3>Total Products: {stats.totalProducts}</h3>
      <h3>Total Users: {stats.totalUsers}</h3>
      <h3>Total Rentals: {stats.totalRentals}</h3>
      <h3>Active Rentals: {stats.activeRentals}</h3>
      <h3>Returned Rentals: {stats.returnedRentals}</h3>
    </div>
  );
}

export default AdminDashboard;