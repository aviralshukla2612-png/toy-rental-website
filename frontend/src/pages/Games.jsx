import React from 'react'
import imga from '../assets/games1.webp';
import imgb from '../assets/games2.webp';
import imgc from '../assets/games3.webp';
import imgd from '../assets/games4.webp';
import imge from '../assets/games5.webp';
import imgf from '../assets/games6.webp';
import { useNavigate } from "react-router-dom";

 const Games = () => {
  const navigate = useNavigate(); 

  const Games = [
    { id:1, img:imga, title:"Bounce And Win" },
    { id:2, img:imgb, title:"Catch Ball Game" },
    { id:3, img:imgc, title:"Number Duck Shape Tray With Knob" },
    { id:4, img:imgd, title:"Ship Tray" },
    { id:5, img:imge, title:"Flipping Frog" },
    { id:6, img:imgf, title:"AL-92 Learning Dyno Number 1 to 30" },
  ];

  // ⭐ ADD TO FAVORITES FUNCTION
  const addToFavorites = (game, e) => {
    e.stopPropagation(); // 🚨 prevent navigation

    const existing = JSON.parse(localStorage.getItem("favorites")) || [];

    // prevent duplicate
    const alreadyExists = existing.find(item => item.id === game.id);
    if (alreadyExists) {
      alert("Already in favorites");
      return;
    }

    const updated = [...existing, game];
    localStorage.setItem("favorites", JSON.stringify(updated));

    alert("Added to favorites ❤️");
  };

  return (
    <>
      <div className='w-11/12 flex justify-center items-start gap-10 mt-10 mx-auto'>

        {/* LEFT FILTER */}
        <div className='w-1/4 bg-gray-100 p-10'>
          <h1 className='font-bold text-2xl'>CATEGORIES</h1>

          <h1 className='font-bold text-xl mt-8 px-5 py-3'>AGE GROUP</h1>
          <ul className='text-gray-600 text-lg font-semibold px-3' style={{lineHeight:3}}>
            <li className='cursor-pointer hover:text-black px-3'>1-4 Years</li>
            <li className='cursor-pointer hover:text-black px-3'>4-7 Years</li>
            <li className='cursor-pointer hover:text-black px-3'>7+ Years</li>
          </ul>

          <h1 className='font-bold text-xl mt-2 px-5 py-3'>TOP CATEGORY</h1>
          <ul className='text-gray-600 text-lg font-semibold px-3' style={{lineHeight:3}}>
            <li className='cursor-pointer hover:text-black px-3'>Big Toys</li>
            <li className='cursor-pointer hover:text-black px-3'>Board Games</li>
            <li className='cursor-pointer hover:text-black px-3'>Educational Games</li>
          </ul>
        </div>

        {/* PRODUCTS */}
        <div className="w-7/12 p-10">
          <h1 className="text-2xl font-bold text-center mb-10">
            AVAILABLE PRODUCT
          </h1>

          <div className="grid grid-cols-3 gap-10 mt-5">

            {Games.map((Game) => (
              <div
                key={Game.id}
                className="text-center cursor-pointer border p-3 rounded-lg hover:shadow-md transition relative"
                onClick={() => navigate(`/product/${Game.id}`)}
              >

                {/* ❤️ FAVORITE BUTTON */}
                <button
                  onClick={(e) => addToFavorites(Game, e)}
                  className="absolute top-2 right-2 text-xl text-gray-400 hover:text-red-500"
                >
                  ❤️
                </button>

                <img
                  src={Game.img}
                  alt={Game.title}
                  className="w-full h-52 object-contain hover:scale-105 transition"
                />

                <h2 className="mt-3 font-semibold hover:text-blue-600">
                  {Game.title}
                </h2>

              </div>
            ))}

          </div>
        </div>

      </div>
    </>
  );
};
export default Games;