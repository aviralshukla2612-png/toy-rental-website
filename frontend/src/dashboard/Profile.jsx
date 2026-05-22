import React from "react";
import { FaRegUser } from "react-icons/fa";

const Profile = () => {
  return (
    <>
      <div className="flex items-center gap-5 border-b pb-4 mb-6">
        <FaRegUser className="text-4xl p-2 h-14 w-14 bg-gray-100 border rounded-full" />
        <div>
          <h3 className="text-2xl font-bold">Sara Trancadi</h3>
          <p className="text-gray-500 text-sm">Manage your profile</p>
        </div>
      </div>

      <form className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <input placeholder="First Name" className="p-4 rounded-lg bg-gray-100 w-full outline-none" />
          <input placeholder="Last Name" className="p-4 rounded-lg bg-gray-100 w-full outline-none" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <input placeholder="Email" className="p-4 rounded-lg bg-gray-100 w-full outline-none" />
          <input placeholder="Phone" className="p-4 rounded-lg bg-gray-100 w-full outline-none" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <input placeholder="Location" className="p-4 rounded-lg bg-gray-100 w-full outline-none" />
          <input placeholder="Pin Code" className="p-4 rounded-lg bg-gray-100 w-full outline-none" />
        </div>

        <div className="flex justify-center">
          <button className="w-64 bg-teal-500 text-white py-3 rounded-xl">
            Save Changes
          </button>
        </div>
      </form>
    </>
  );
};

export default Profile;


