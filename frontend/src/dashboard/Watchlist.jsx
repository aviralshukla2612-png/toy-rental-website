import React from "react";
import { FaBookmark } from "react-icons/fa";

const Watchlist = () => {
  const watchlistItems = [];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center gap-3">
          <FaBookmark className="text-blue-500" />
          Watchlist
        </h1>

        <p className="text-gray-500 mt-2">
          Track and manage your saved items
        </p>

      </div>

      {/* Summary Card */}
      <div className="bg-white rounded-2xl shadow-md p-5 mb-6">

        <h2 className="text-lg font-semibold text-gray-800">
          Saved Items:
          <span className="text-blue-600 ml-2">
            {watchlistItems.length}
          </span>
        </h2>

      </div>

      {/* Watchlist Content */}
      {watchlistItems.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-md p-10 text-center">

          <FaBookmark
            size={60}
            className="mx-auto text-gray-300 mb-4"
          />

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
            Your Watchlist is Empty
          </h2>

          <p className="text-gray-500 mt-3">
            Items you save for later will appear here.
          </p>

        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {watchlistItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition p-5"
            >

              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />

              <h3 className="text-lg font-semibold text-gray-800">
                {item.name}
              </h3>

              <p className="text-blue-600 font-bold mt-2">
                ₹{item.price}
              </p>

            </div>
          ))}

        </div>
      )}

    </div>
  );
};

export default Watchlist;