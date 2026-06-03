import React from "react";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const RentalPieChart = ({
  activeRentals = 0,
  returnedRentals = 0,
}) => {
  const data = [
    {
      name: "Active Rentals",
      value: activeRentals,
    },
    {
      name: "Returned Rentals",
      value: returnedRentals,
    },
  ];

  const COLORS = ["#f59e0b", "#10b981"];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">
        Rental Status Overview
      </h2>

      <ResponsiveContainer
        width="100%"
        height={300}
      >
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={100}
            dataKey="value"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>

          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RentalPieChart;