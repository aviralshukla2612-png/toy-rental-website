import React, { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../component/Admin/Sidebar";
import AdminNavbar from "../component/Admin/AdminNavbar";

const AdminLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Mobile Sidebar */}
      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          
          {/* Background Overlay */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setOpen(false)}
          ></div>

          {/* Sidebar */}
          <div className="relative w-64 h-full">
            <Sidebar />
          </div>
        </div>
      )}

      {/* Mobile Navbar */}
      <div className="lg:hidden p-2">
        <AdminNavbar setOpen={setOpen} />
      </div>

      <div className="flex">

        {/* Desktop Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">

          {/* Desktop Navbar */}
          <div className="hidden lg:block p-4">
            <AdminNavbar />
          </div>

          <div className="p-4 sm:p-6">
            <Outlet />
          </div>

        </div>

      </div>
    </div>
  );
};

export default AdminLayout;