import React from "react";

const StatsCard = ({
  title,
  value,
  icon,
  bgColor = "bg-white",
  textColor = "text-gray-800",
}) => {
  return (
    <div
      className={`${bgColor} rounded-xl shadow-lg p-5 hover:scale-105 transition-transform duration-300`}
    >
      <div className="flex justify-between items-center">
        
        <div>
          <p className="text-gray-500 text-sm font-medium">
            {title}
          </p>

          <h2 className={`text-3xl font-bold mt-2 ${textColor}`}>
            {value}
          </h2>
        </div>

        <div className="text-4xl">
          {icon}
        </div>

      </div>
    </div>
  );
};

export default StatsCard;