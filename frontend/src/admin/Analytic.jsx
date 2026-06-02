import React from "react";

import RentalPiechart from "../component/Admin/RentalPiechart";
import Rentalbarchart from "../component/Admin/Rentalbarchart";

const Analytic = () => {

  const stats = {
    totalProducts: 25,
    totalUsers: 18,
    totalRentals: 40,
    activeRentals: 12,
    returnedRentals: 28,
  };

  return (
    <div className="p-6">

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-3xl font-bold">
          Analytics Dashboard
        </h1>

        <p className="text-gray-500">
          View business insights and rental analytics
        </p>

      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-gray-500">
            Products
          </h3>

          <h2 className="text-3xl font-bold text-blue-600">
            {stats.totalProducts}
          </h2>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-gray-500">
            Users
          </h3>

          <h2 className="text-3xl font-bold text-green-600">
            {stats.totalUsers}
          </h2>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-gray-500">
            Rentals
          </h3>

          <h2 className="text-3xl font-bold text-yellow-600">
            {stats.totalRentals}
          </h2>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-6">
          <h3 className="text-gray-500">
            Returned
          </h3>

          <h2 className="text-3xl font-bold text-purple-600">
            {stats.returnedRentals}
          </h2>
        </div>

      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

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

      {/* Insights */}
      <div className="mt-8 bg-white shadow-lg rounded-xl p-6">

        <h2 className="text-2xl font-semibold mb-4">
          Business Insights
        </h2>

        <ul className="space-y-3 text-gray-700">

          <li>
            📦 Total Products Available:
            {" "}
            {stats.totalProducts}
          </li>

          <li>
            👥 Registered Users:
            {" "}
            {stats.totalUsers}
          </li>

          <li>
            🚚 Total Rentals:
            {" "}
            {stats.totalRentals}
          </li>

          <li>
            ✅ Returned Rentals:
            {" "}
            {stats.returnedRentals}
          </li>

          <li>
            ⏳ Active Rentals:
            {" "}
            {stats.activeRentals}
          </li>

        </ul>

      </div>

    </div>
  );
};

export default Analytic;
