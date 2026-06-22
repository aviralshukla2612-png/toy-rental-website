import React from "react";
import { FaRegUser, FaCamera } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">

      {/* Profile Card */}
      <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">

        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-5 border-b pb-6 mb-8">

          <div className="relative">

            <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-gray-100 border flex items-center justify-center">
              <FaRegUser className="text-4xl sm:text-5xl text-gray-500" />
            </div>

            <button className="absolute bottom-0 right-0 bg-teal-500 text-white p-2 rounded-full shadow hover:bg-teal-600 transition">
              <FaCamera size={12} />
            </button>

          </div>

          <div className="text-center sm:text-left">

            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
              Aviral Shukla
            </h2>

            <p className="text-gray-500 mt-1">
              Manage your profile information
            </p>

          </div>

        </div>

        {/* Form */}
        <form className="space-y-6">

          {/* Row 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                First Name
              </label>

              <input
                type="text"
                placeholder="Enter first name"
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Last Name
              </label>

              <input
                type="text"
                placeholder="Enter last name"
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter email"
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Phone Number
              </label>

              <input
                type="tel"
                placeholder="Enter phone number"
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

          </div>

          {/* Row 3 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Location
              </label>

              <input
                type="text"
                placeholder="Enter location"
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">
                Pin Code
              </label>

              <input
                type="text"
                placeholder="Enter pin code"
                className="w-full p-4 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:outline-none"
              />
            </div>

          </div>

          {/* Save Button */}
          <div className="flex justify-center pt-4">

            <button
              type="submit"
              className="w-full sm:w-72 bg-teal-500 text-white py-3 rounded-xl font-semibold hover:bg-teal-600 transition duration-300 shadow-md"
            >
              Save Changes
            </button>

          </div>

        </form>

      </div>

    </div>
  );
};

export default Profile;