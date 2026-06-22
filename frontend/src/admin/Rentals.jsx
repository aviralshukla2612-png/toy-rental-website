import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaSearch } from "react-icons/fa";
import { API } from "../config/api";

const Rentals = () => {
  const [rentals, setRentals] = useState([]);
  const [filteredRentals, setFilteredRentals] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchRentals();
  }, []);

  useEffect(() => {
    const result = rentals.filter(
      (rental) =>
        rental.user?.name
          ?.toLowerCase()
          .includes(search.toLowerCase()) ||
        rental.product?.title
          ?.toLowerCase()
          .includes(search.toLowerCase())
    );

    setFilteredRentals(result);
  }, [search, rentals]);

  const fetchRentals = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${API}/api/rentals`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setRentals(res.data.data);
      setFilteredRentals(res.data.data);
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
          Rental Management
        </h1>

        <p className="text-gray-500 mt-1">
          View all rentals and their status
        </p>

      </div>

      {/* Search */}
      <div className="relative mb-6">

        <FaSearch className="absolute left-4 top-4 text-gray-400" />

        <input
          type="text"
          placeholder="Search rentals..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full border border-gray-300 rounded-lg pl-12 p-3 focus:ring-2 focus:ring-blue-500 outline-none"
        />

      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-md overflow-x-auto">

        <table className="min-w-[800px] w-full">

          <thead className="bg-gray-100">

            <tr>
              <th className="p-4 text-left">
                Customer
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Product
              </th>

              <th className="p-4 text-left">
                Rent Date
              </th>

              <th className="p-4 text-center">
                Status
              </th>
            </tr>

          </thead>

          <tbody>

            {filteredRentals.length > 0 ? (
              filteredRentals.map((rental) => (
                <tr
                  key={rental._id}
                  className="border-t hover:bg-blue-50 transition"
                >

                  <td className="p-4 font-medium">
                    {rental.user?.name}
                  </td>

                  <td className="p-4">
                    {rental.user?.email}
                  </td>

                  <td className="p-4">
                    {rental.product?.title}
                  </td>

                  <td className="p-4">
                    {new Date(
                      rental.rentDate
                    ).toLocaleDateString()}
                  </td>

                  <td className="p-4 text-center">

                    <span
                      className={`px-3 py-1 rounded-full text-xs sm:text-sm font-medium ${
                        rental.status === "returned"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {rental.status}
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
                  No Rentals Found
                </td>

              </tr>
            )}

          </tbody>

        </table>

      </div>

      {/* Summary */}
      <div className="mt-6 bg-white rounded-xl shadow-md p-5">

        <h2 className="text-lg font-semibold mb-3">
          Rental Summary
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

          <div className="bg-gray-50 rounded-lg p-4">
            Total Rentals:
            <span className="font-bold ml-2">
              {filteredRentals.length}
            </span>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            Active Rentals:
            <span className="font-bold ml-2">
              {
                filteredRentals.filter(
                  (r) => r.status !== "returned"
                ).length
              }
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};

export default Rentals;
