import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import {
  FaHeart,
  FaSearch,
} from "react-icons/fa";

import imga from "../assets/games1.webp";
import imgb from "../assets/games2.webp";
import imgc from "../assets/games3.webp";
import imgd from "../assets/games4.webp";
import imge from "../assets/games5.webp";
import imgf from "../assets/games6.webp";



const Games = () => {

  const navigate = useNavigate();



  /* GAMES DATA */

  const gamesData = [

    {
      id: 1,
      img: imga,
      title: "Bounce And Win",
      age: "1-4",
      category: "Board Games",
    },

    {
      id: 2,
      img: imgb,
      title: "Catch Ball Game",
      age: "4-7",
      category: "Big Toys",
    },

    {
      id: 3,
      img: imgc,
      title: "Number Duck Shape Tray",
      age: "1-4",
      category: "Educational Games",
    },

    {
      id: 4,
      img: imgd,
      title: "Ship Tray",
      age: "7+",
      category: "Educational Games",
    },

    {
      id: 5,
      img: imge,
      title: "Flipping Frog",
      age: "4-7",
      category: "Board Games",
    },

    {
      id: 6,
      img: imgf,
      title: "Learning Dyno",
      age: "7+",
      category: "Educational Games",
    },

  ];



  /* STATES */

  const [selectedAge, setSelectedAge] = useState("All");

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [search, setSearch] = useState("");



  /* FILTER LOGIC */

  const filteredGames = gamesData.filter((game) => {

    const ageMatch =
      selectedAge === "All" ||
      game.age === selectedAge;

    const categoryMatch =
      selectedCategory === "All" ||
      game.category === selectedCategory;

    const searchMatch =
      game.title
        .toLowerCase()
        .includes(search.toLowerCase());

    return ageMatch && categoryMatch && searchMatch;

  });



  /* FAVORITES */

  const addToFavorites = (game, e) => {

    e.stopPropagation();

    const existing =
      JSON.parse(localStorage.getItem("favorites")) || [];

    const alreadyExists =
      existing.find((item) => item.id === game.id);

    if (alreadyExists) {
      alert("Already in favorites");
      return;
    }

    const updated = [...existing, game];

    localStorage.setItem(
      "favorites",
      JSON.stringify(updated)
    );

    alert("Added to favorites ❤️");

  };



  return (

    <>

      {/* HERO SECTION */}

      <section className="
      bg-slate-900
      py-24
      text-white
      text-center
      ">

        <div className="
        max-w-4xl
        mx-auto
        px-6
        ">

          <p className="
          uppercase
          tracking-[4px]
          text-sm
          text-gray-400
          mb-4
          ">
            Educational Collection
          </p>

          <h1 className="
          text-5xl
          md:text-6xl
          font-bold
          leading-tight
          ">
            Explore Educational Games
          </h1>

          <p className="
          mt-6
          text-lg
          text-gray-300
          leading-relaxed
          ">
            Discover engaging games designed
            to improve creativity, learning
            and logical thinking.
          </p>

        </div>

      </section>



      {/* MAIN SECTION */}

      <section className="
      bg-slate-50
      py-24
      ">

        <div className="
        max-w-7xl
        mx-auto
        px-6
        grid
        grid-cols-1
        lg:grid-cols-4
        gap-10
        ">



          {/* SIDEBAR */}

          <div className="
          bg-white
          rounded-3xl
          p-8
          shadow-sm
          h-fit
          ">

            <h2 className="
            text-2xl
            font-bold
            text-slate-900
            mb-8
            ">
              Filters
            </h2>



            {/* SEARCH */}

            <div className="relative mb-10">

              <FaSearch className="
              absolute
              left-4
              top-1/2
              -translate-y-1/2
              text-gray-400
              " />

              <input
                type="text"
                placeholder="Search games..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="
                w-full
                border
                border-gray-300
                rounded-2xl
                pl-12
                pr-4
                py-4
                outline-none
                focus:ring-2
                focus:ring-black
                "
              />

            </div>



            {/* AGE FILTER */}

            <div className="mb-10">

              <h3 className="
              text-lg
              font-semibold
              mb-5
              ">
                Age Group
              </h3>

              <div className="
              flex
              flex-wrap
              gap-3
              ">

                {["All", "1-4", "4-7", "7+"].map((age) => (

                  <button
                    key={age}
                    onClick={() => setSelectedAge(age)}
                    className={`
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    duration-300
                    ${
                      selectedAge === age
                        ? "bg-black text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }
                    `}
                  >
                    {age}
                  </button>

                ))}

              </div>

            </div>



            {/* CATEGORY FILTER */}

            <div>

              <h3 className="
              text-lg
              font-semibold
              mb-5
              ">
                Categories
              </h3>

              <div className="
              flex
              flex-wrap
              gap-3
              ">

                {[
                  "All",
                  "Board Games",
                  "Big Toys",
                  "Educational Games",
                ].map((category) => (

                  <button
                    key={category}
                    onClick={() =>
                      setSelectedCategory(category)
                    }
                    className={`
                    px-4
                    py-3
                    rounded-xl
                    transition-all
                    duration-300
                    text-sm
                    ${
                      selectedCategory === category
                        ? "bg-black text-white"
                        : "bg-gray-100 hover:bg-gray-200"
                    }
                    `}
                  >
                    {category}
                  </button>

                ))}

              </div>

            </div>

          </div>



          {/* PRODUCTS */}

          <div className="lg:col-span-3">

            <div className="
            flex
            items-center
            justify-between
            mb-10
            ">

              <div>

                <h2 className="
                text-4xl
                font-bold
                text-slate-900
                ">
                  Available Games
                </h2>

                <p className="
                mt-3
                text-gray-500
                ">
                  {filteredGames.length} Products Found
                </p>

              </div>

            </div>



            {/* GRID */}

            <div className="
            grid
            grid-cols-1
            md:grid-cols-2
            xl:grid-cols-3
            gap-8
            ">

              {filteredGames.map((game) => (

                <div
                  key={game.id}
                  onClick={() =>
                    navigate(`/product/${game.id}`)
                  }
                  className="
                  group
                  bg-white
                  rounded-3xl
                  overflow-hidden
                  shadow-sm
                  hover:shadow-2xl
                  hover:-translate-y-2
                  transition-all
                  duration-300
                  cursor-pointer
                  relative
                  "
                >



                  {/* AGE BADGE */}

                  <span className="
                  absolute
                  top-4
                  left-4
                  bg-black
                  text-white
                  text-xs
                  px-3
                  py-1
                  rounded-full
                  z-10
                  ">
                    {game.age}
                  </span>



                  {/* FAVORITE BUTTON */}

                  <button
                    onClick={(e) =>
                      addToFavorites(game, e)
                    }
                    className="
                    absolute
                    top-4
                    right-4
                    w-10
                    h-10
                    rounded-full
                    bg-white
                    shadow-md
                    flex
                    items-center
                    justify-center
                    hover:bg-red-500
                    hover:text-white
                    transition
                    z-10
                    "
                  >
                    <FaHeart />
                  </button>



                  {/* IMAGE */}

                  <div className="
                  overflow-hidden
                  bg-slate-50
                  ">

                    <img
                      src={game.img}
                      alt={game.title}
                      className="
                      w-full
                      h-72
                      object-cover
                      group-hover:scale-110
                      transition
                      duration-500
                      "
                    />

                  </div>



                  {/* CONTENT */}

                  <div className="p-6">

                    <span className="
                    inline-block
                    bg-gray-100
                    text-sm
                    px-3
                    py-1
                    rounded-full
                    mb-4
                    ">
                      {game.category}
                    </span>

                    <h3 className="
                    text-2xl
                    font-bold
                    text-slate-900
                    leading-snug
                    ">
                      {game.title}
                    </h3>

                    <div className="
                    flex
                    items-center
                    justify-between
                    mt-6
                    ">

                      <button className="
                      bg-black
                      text-white
                      px-5
                      py-3
                      rounded-xl
                      hover:bg-slate-800
                      transition
                      ">
                        View Details
                      </button>

                    </div>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </div>

      </section>

    </>

  );

};

export default Games;