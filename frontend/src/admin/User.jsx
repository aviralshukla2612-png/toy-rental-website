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
        user.email?.toLowerCase().includes(search.toLowerCase())
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
      <div className="p-10 text-xl font-semibold">
        Loading Users...
      </div>
    );
  }

  return (
    <div className="p-6">

      {/* Header */}
      <div className="mb-6">

        <h1 className="text-3xl font-bold">
          User Management
        </h1>

        <p className="text-gray-500">
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
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full border rounded-lg pl-12 p-3"
        />

      </div>

      {/* User Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">

        <table className="w-full">

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

              <th className="p-4 text-left">
                Role
              </th>
            </tr>

          </thead>

          <tbody>

            {filteredUsers.length > 0 ? (
              filteredUsers.map((user) => (
                <tr
                  key={user._id}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="p-4">
                    <FaUser
                      size={24}
                      className="text-blue-500"
                    />
                  </td>

                  <td className="p-4">
                    {user.name}
                  </td>

                  <td className="p-4">
                    {user.email}
                  </td>

                  <td className="p-4">
                    {user.username}
                  </td>

                  <td className="p-4">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                      {user.role}
                    </span>
                  </td>

                </tr>
              ))
            ) : (
              <tr>

                <td
                  colSpan="5"
                  className="text-center p-10"
                >
                  No Users Found
                </td>

              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default User;
