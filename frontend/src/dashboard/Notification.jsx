import React from "react";
import {
  FaBell,
  FaCheckCircle,
  FaInfoCircle,
} from "react-icons/fa";

const Notification = () => {
  const notifications = [
    {
      id: 1,
      icon: <FaCheckCircle className="text-green-500" />,
      message: "Your order has been placed successfully",
      time: "2 mins ago",
    },
    {
      id: 2,
      icon: <FaBell className="text-yellow-500" />,
      message: "New update available",
      time: "10 mins ago",
    },
    {
      id: 3,
      icon: <FaInfoCircle className="text-blue-500" />,
      message: "Welcome to Toy Rental Platform",
      time: "1 day ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center gap-3">
          <FaBell className="text-blue-600" />
          Notifications
        </h1>

        <p className="text-gray-500 mt-2">
          Stay updated with the latest activities
        </p>

      </div>

      {/* Summary Card */}
      <div className="bg-white rounded-xl shadow-md p-5 mb-6">

        <h2 className="text-lg font-semibold">
          Total Notifications:
          <span className="text-blue-600 ml-2">
            {notifications.length}
          </span>
        </h2>

      </div>

      {/* Notification List */}
      <div className="space-y-4">

        {notifications.length > 0 ? (
          notifications.map((notification) => (
            <div
              key={notification.id}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-4 sm:p-5"
            >

              <div className="flex items-start gap-4">

                <div className="text-2xl">
                  {notification.icon}
                </div>

                <div className="flex-1">

                  <p className="text-gray-800 font-medium">
                    {notification.message}
                  </p>

                  <p className="text-sm text-gray-500 mt-1">
                    {notification.time}
                  </p>

                </div>

              </div>

            </div>
          ))
        ) : (
          <div className="bg-white rounded-xl shadow-md p-10 text-center">

            <FaBell
              size={50}
              className="mx-auto text-gray-300 mb-4"
            />

            <h2 className="text-xl font-semibold text-gray-700">
              No Notifications
            </h2>

            <p className="text-gray-500 mt-2">
              You're all caught up!
            </p>

          </div>
        )}

      </div>

    </div>
  );
};

export default Notification;