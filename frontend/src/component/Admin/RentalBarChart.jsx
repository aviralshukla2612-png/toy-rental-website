import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const RentalBarChart = ({
  totalProducts = 0,
  totalUsers = 0,
  totalRentals = 0,
  returnedRentals = 0,
}) => {
  const data = [
    {
      name: "Products",
      value: totalProducts,
    },
    {
      name: "Users",
      value: totalUsers,
    },
    {
      name: "Rentals",
      value: totalRentals,
    },
    {
      name: "Returned",
      value: returnedRentals,
    },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">
        System Analytics
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="name" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="value"
            radius={[8, 8, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RentalBarChart;
