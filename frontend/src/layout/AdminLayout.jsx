import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../component/Admin/Sidebar";
import AdminNavbar from "../component/Admin/AdminNavbar";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1">
        <AdminNavbar />

        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;