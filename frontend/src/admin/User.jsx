import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch, FaUser } from "react-icons/fa";
import { API } from "../config/api";

const User = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    const result = users.filter(
      (user) =>
        user.name?.toLowerCase().includes(search.toLowerCase()) ||
        user.email?.toLowerCase().includes(search.toLowerCase()) ||
        user.username?.toLowerCase().includes(search.toLowerCase())
    );

    setFilteredUsers(result);
  }, [search, users]);

  const fetchUsers = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${API}/api/auth/users`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUsers(res.data.data);
      setFilteredUsers(res.data.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[300px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-6">

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
          User Management
        </h1>

        <p className="text-gray-500 mt-1">
          View all registered users
        </p>

      </div>

      {/* Search */}
      <div className="relative mb-6">

        <FaSearch className="absolute left-4 top-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search users..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border border-gray-300 rounded-lg pl-12 p-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-md overflow-x-auto">

        <table className="min-w-[800px] w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-4 text-left">
                User
              </th>

              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Username
              </th>

              <th className="p-4 text-center">
                Role
              </th>
            </tr>

          </thead>

          <tbody>

            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user._id}
                  className="border-t hover:bg-blue-50 transition"
                >

                  <td className="p-4">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <FaUser className="text-blue-600" />
                    </div>
                  </td>

                  <td className="p-4 font-medium">
                    {user.name}
                  </td>

                  <td className="p-4">
                    {user.email}
                  </td>

                  <td className="p-4">
                    {user.username}
                  </td>

                  <td className="p-4 text-center">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        user.role === "admin"
                          ? "bg-purple-100 text-purple-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {user.role}
                    </span>

                  </td>

                </tr>
              ))
            ) : (
              <tr>

                <td
                  colSpan="5"
                  className="text-center p-10 text-gray-500"
                >
                  No Users Found
                </td>

              </tr>
            )}

          </tbody>

        </table>

      </div>

      {/* Summary */}
      <div className="mt-6 bg-white rounded-xl shadow-md p-5">

        <h2 className="text-lg font-semibold mb-3">
          User Summary
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div className="bg-gray-50 rounded-lg p-4">
            Total Users:
            <span className="font-bold ml-2">
              {filteredUsers.length}
            </span>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            Admin Users:
            <span className="font-bold ml-2">
              {
                filteredUsers.filter(
                  (user) => user.role === "admin"
                ).length
              }
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default User;
