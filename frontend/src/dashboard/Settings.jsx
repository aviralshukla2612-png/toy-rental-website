import React from "react";

const Settings = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Settings</h2>

      <div className="space-y-4 ">
        <div className="grid md:grid-cols-2 gap-6">
        <input type="password" placeholder="New Password" className="p-4 rounded-lg bg-gray-100 w-full outline-none"/>
        <input type="password" placeholder="Confirm Password" className="p-4 rounded-lg bg-gray-100 w-full outline-none" />
</div>
        <button className="bg-teal-500 text-white px-4 py-2 rounded">
          Update Password
        </button>

        <div className="flex justify-between mt-4">
          <span>Enable Notifications</span>
          <input type="checkbox" />
        </div>

        <button className="text-red-500 border border-red-500 px-4 py-2 rounded mt-4">
          Delete Account
        </button>
      </div>
    </>
  );
};

export default Settings;