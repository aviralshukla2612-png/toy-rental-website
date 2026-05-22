import React, { useState, useEffect } from "react";

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);

 
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(data);
  }, []);

 
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const removeItem = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Favorites</h2>

      {favorites.length === 0 ? (
        <p>No favorites yet</p>
      ) : (
        favorites.map(item => (
          <div key={item.id} className="flex justify-between p-3 border rounded">
            <span>{item.name}</span>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </div>
        ))
      )}
    </>
  );
};

export default Favorites;