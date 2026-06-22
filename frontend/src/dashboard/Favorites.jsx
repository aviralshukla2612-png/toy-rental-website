import React, { useState, useEffect } from "react";
import { FaHeart, FaTrash } from "react-icons/fa";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

  // Load favorites from localStorage
  useEffect(() => {
    const data =
      JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(data);
  }, []);

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem(
      "favorites",
      JSON.stringify(favorites)
    );
  }, [favorites]);

  // Remove favorite item
  const removeItem = (id) => {
    setFavorites(
      favorites.filter((item) => item.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8">

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 flex items-center gap-3">
          <FaHeart className="text-red-500" />
          Favorites
        </h1>

        <p className="text-gray-500 mt-2">
          Manage your favorite products
        </p>

      </div>

      {/* Empty State */}
      {favorites.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-10 text-center">

          <FaHeart
            size={50}
            className="mx-auto text-gray-300 mb-4"
          />

          <h2 className="text-xl font-semibold text-gray-700">
            No Favorites Yet
          </h2>

          <p className="text-gray-500 mt-2">
            Add products to your favorites list.
          </p>

        </div>
      ) : (
        <>
          {/* Summary */}
          <div className="bg-white rounded-xl shadow-md p-5 mb-6">

            <h2 className="text-lg font-semibold">
              Total Favorites:
              <span className="text-blue-600 ml-2">
                {favorites.length}
              </span>
            </h2>

          </div>

          {/* Favorites Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {favorites.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition p-5"
              >

                {item.image && (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                )}

                <h3 className="text-lg font-semibold text-gray-800 break-words">
                  {item.name}
                </h3>

                {item.price && (
                  <p className="text-blue-600 font-bold mt-2">
                    ₹{item.price}
                  </p>
                )}

                <button
                  onClick={() => removeItem(item.id)}
                  className="mt-4 w-full flex items-center justify-center gap-2 bg-red-500 text-white py-2 rounded-lg hover:bg-red-600 transition"
                >
                  <FaTrash />
                  Remove
                </button>

              </div>
            ))}

          </div>
        </>
      )}

    </div>
  );
};

export default Favorites;