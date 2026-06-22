import React from "react";

import RentalPieChart from "../component/Admin/RentalPieChart";
import RentalBarChart from "../component/Admin/RentalBarChart";

const Analytic = () => {
  const stats = {
    totalProducts: 25,
    totalUsers: 18,
    totalRentals: 40,
    activeRentals: 12,
    returnedRentals: 28,
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
          Analytics Dashboard
        </h1>

        <p className="text-sm sm:text-base text-gray-500 mt-2">
          View business insights and rental analytics
        </p>

      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">

        <div className="bg-white shadow-md hover:shadow-xl transition rounded-xl p-5">
          <h3 className="text-gray-500 text-sm sm:text-base">
            Products
          </h3>

          <h2 className="text-2xl sm:text-3xl font-bold text-blue-600 mt-2">
            {stats.totalProducts}
          </h2>
        </div>

        <div className="bg-white shadow-md hover:shadow-xl transition rounded-xl p-5">
          <h3 className="text-gray-500 text-sm sm:text-base">
            Users
          </h3>

          <h2 className="text-2xl sm:text-3xl font-bold text-green-600 mt-2">
            {stats.totalUsers}
          </h2>
        </div>

        <div className="bg-white shadow-md hover:shadow-xl transition rounded-xl p-5">
          <h3 className="text-gray-500 text-sm sm:text-base">
            Rentals
          </h3>

          <h2 className="text-2xl sm:text-3xl font-bold text-yellow-600 mt-2">
            {stats.totalRentals}
          </h2>
        </div>

        <div className="bg-white shadow-md hover:shadow-xl transition rounded-xl p-5">
          <h3 className="text-gray-500 text-sm sm:text-base">
            Returned
          </h3>

          <h2 className="text-2xl sm:text-3xl font-bold text-purple-600 mt-2">
            {stats.returnedRentals}
          </h2>
        </div>

      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        <div className="bg-white rounded-xl shadow-md p-4 overflow-x-auto">
          <RentalPieChart
            activeRentals={stats.activeRentals}
            returnedRentals={stats.returnedRentals}
          />
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 overflow-x-auto">
          <RentalBarChart
            totalProducts={stats.totalProducts}
            totalUsers={stats.totalUsers}
            totalRentals={stats.totalRentals}
            returnedRentals={stats.returnedRentals}
          />
        </div>

      </div>

      {/* Insights */}
      <div className="mt-8 bg-white shadow-md rounded-xl p-5 sm:p-6">

        <h2 className="text-xl sm:text-2xl font-semibold mb-5 text-gray-800">
          Business Insights
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <div className="bg-gray-50 p-4 rounded-lg">
            📦 Total Products Available:
            <span className="font-bold ml-2">
              {stats.totalProducts}
            </span>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            👥 Registered Users:
            <span className="font-bold ml-2">
              {stats.totalUsers}
            </span>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            🚚 Total Rentals:
            <span className="font-bold ml-2">
              {stats.totalRentals}
            </span>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            ✅ Returned Rentals:
            <span className="font-bold ml-2">
              {stats.returnedRentals}
            </span>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg md:col-span-2">
            ⏳ Active Rentals:
            <span className="font-bold ml-2">
              {stats.activeRentals}
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Analytic;
