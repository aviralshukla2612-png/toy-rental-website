import React from "react";
import {
  FaBell,
  FaLock,
  FaTrashAlt,
  FaCog,
} from "react-icons/fa";

const Settings = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center gap-3">
          <FaCog className="text-teal-500" />
          Settings
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your account settings and preferences
        </p>

      </div>

      <div className="space-y-6">

        {/* Change Password */}
        <div className="bg-white rounded-2xl shadow-md p-6">

          <div className="flex items-center gap-3 mb-6">
            <FaLock className="text-teal-500 text-xl" />
            <h2 className="text-xl font-semibold text-gray-800">
              Change Password
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                New Password
              </label>

              <input
                type="password"
                placeholder="Enter new password"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm password"
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

          </div>

          <button className="mt-6 w-full md:w-auto bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition">
            Update Password
          </button>

        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-2xl shadow-md p-6">

          <div className="flex items-center gap-3 mb-6">
            <FaBell className="text-yellow-500 text-xl" />
            <h2 className="text-xl font-semibold text-gray-800">
              Notifications
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <div>
              <h3 className="font-medium text-gray-800">
                Enable Notifications
              </h3>

              <p className="text-sm text-gray-500">
                Receive alerts, updates, and rental reminders.
              </p>
            </div>

            <input
              type="checkbox"
              className="h-5 w-5 accent-teal-500"
            />

          </div>

        </div>

        {/* Danger Zone */}
        <div className="bg-white rounded-2xl shadow-md p-6 border border-red-200">

          <div className="flex items-center gap-3 mb-4">
            <FaTrashAlt className="text-red-500 text-xl" />
            <h2 className="text-xl font-semibold text-red-600">
              Danger Zone
            </h2>
          </div>

          <p className="text-gray-600 mb-5">
            Deleting your account is permanent and cannot be undone.
          </p>

          <button className="w-full md:w-auto border border-red-500 text-red-500 px-6 py-3 rounded-lg font-semibold hover:bg-red-500 hover:text-white transition">
            Delete Account
          </button>

        </div>

      </div>

    </div>
  );
};

export default Settings;