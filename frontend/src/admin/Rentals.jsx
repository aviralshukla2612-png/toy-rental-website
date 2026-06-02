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
      <div className="p-10 text-xl font-semibold">
        Loading Rentals...
      </div>
    );
  }

  return (
    <div className="p-6">

      {/* Header */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold">
          Rental Management
        </h1>

        <p className="text-gray-500">
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
          className="w-full border rounded-lg pl-12 p-3"
        />

      </div>

      {/* Table */}
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">

        <table className="w-full">

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

              <th className="p-4 text-left">
                Status
              </th>
            </tr>

          </thead>

          <tbody>

            {filteredRentals.length > 0 ? (
              filteredRentals.map((rental) => (
                <tr
                  key={rental._id}
                  className="border-t hover:bg-gray-50"
                >

                  <td className="p-4">
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

                  <td className="p-4">

                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
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
                  className="text-center p-10"
                >
                  No Rentals Found
                </td>

              </tr>
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
};

export default Rentals;
