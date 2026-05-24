import React, { useState } from "react";

import {
  Link,
  NavLink,
  useNavigate,
} from "react-router-dom";

import {
  FaBars,
  FaShoppingCart,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

import img from "../assets/image.png";

import { useData } from "../context/DataProvider";

export const Navbar = () => {

  const navigate = useNavigate();

  const {
    cart,
    isLogIn,
    token,
    user,
    logout,
  } = useData();

  const [menuOpen, setMenuOpen] =
    useState(false);

  const [dropdown, setDropdown] =
    useState(false);

  const [categoryOpen, setCategoryOpen] =
    useState(false);

  const links = [
    { name: "HOME", path: "/" },
    { name: "ABOUT", path: "/about" },
    { name: "GAMES", path: "/game" },
    { name: "PLANS", path: "/plan" },
    { name: "FRANCHISE", path: "/fran" },
    { name: "BLOGS", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  const navStyle = ({ isActive }) =>
    `px-4 py-2 rounded-xl font-medium transition-all duration-300
    ${
      isActive
        ? "bg-black text-white"
        : "text-gray-700 hover:bg-gray-100"
    }`;

  const buttonStyle =
    "px-5 py-2.5 rounded-xl transition duration-300";

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <>

      {/* TOP BAR */}

      <div className="bg-slate-900 text-sm text-gray-300">

        <div className="max-w-7xl mx-auto px-6 py-3 flex flex-col md:flex-row items-center justify-between gap-3">

          <div className="text-center md:text-left">

            Contact us:

            <span className="ml-2 text-white font-medium">
              +91 931 931 7177
            </span>

            <span className="hidden md:inline mx-2">
              |
            </span>

            <span className="text-white">
              info.curiokid@gmail.com
            </span>

          </div>

          {!isLogIn && (

            <div className="flex items-center gap-3">

              <button
                onClick={() => navigate("/login")}
                className="hover:text-white transition"
              >
                Login
              </button>

              <button
                onClick={() => navigate("/register")}
                className={`${buttonStyle} bg-white text-black hover:bg-gray-200`}
              >
                Register
              </button>

            </div>

          )}

        </div>

      </div>

      {/* MAIN NAVBAR */}

      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

          {/* LOGO */}

          <img
            src={img}
            alt="Logo"
            className="h-14 object-contain cursor-pointer"
            onClick={() => navigate("/")}
          />

          {/* DESKTOP LINKS */}

          <ul className="hidden md:flex items-center gap-2">

            {links.map((item) => (

              <li key={item.name}>

                <NavLink
                  to={item.path}
                  className={navStyle}
                >
                  {item.name}
                </NavLink>

              </li>

            ))}

            {/* CATEGORY DROPDOWN */}

            <li className="relative">

              <button
                onClick={() =>
                  setCategoryOpen(!categoryOpen)
                }
                className="
                px-4
                py-2
                rounded-xl
                font-medium
                text-gray-700
                hover:bg-gray-100
                transition-all
                duration-300
                flex
                items-center
                gap-2
                "
              >

                Categories

                <FaChevronDown className="text-sm" />

              </button>

              {categoryOpen && (

                <div className="
                absolute
                top-14
                left-0
                w-60
                bg-white
                rounded-2xl
                shadow-2xl
                border
                overflow-hidden
                z-50
                ">

                  <Link
                    to={`/game?category=${encodeURIComponent("Board Games")}`}
                    className="
                    block
                    px-5
                    py-3
                    hover:bg-gray-100
                    transition
                    "
                    onClick={() =>
                      setCategoryOpen(false)
                    }
                  >
                    Board Games
                  </Link>

                  <Link
                    to={`/game?category=${encodeURIComponent("Big Toys")}`}
                    className="
                    block
                    px-5
                    py-3
                    hover:bg-gray-100
                    transition
                    "
                    onClick={() =>
                      setCategoryOpen(false)
                    }
                  >
                    Big Toys
                  </Link>

                  <Link
                    to={`/game?category=${encodeURIComponent("Educational Games")}`}
                    className="
                    block
                    px-5
                    py-3
                    hover:bg-gray-100
                    transition
                    "
                    onClick={() =>
                      setCategoryOpen(false)
                    }
                  >
                    Educational Games
                  </Link>

                </div>

              )}

            </li>

          </ul>

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-4">

            {/* USER */}

            {isLogIn && token ? (

              <div className="relative">

                <div
                  onClick={() =>
                    setDropdown(!dropdown)
                  }
                  className="
                  w-11
                  h-11
                  rounded-full
                  bg-black
                  text-white
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                  font-semibold
                  uppercase
                  "
                >
                  {user?.username?.slice(0, 1)}
                </div>

                {dropdown && (

                  <div className="
                  absolute
                  right-0
                  mt-4
                  w-64
                  bg-white
                  rounded-2xl
                  shadow-2xl
                  border
                  overflow-hidden
                  ">

                    <div className="px-5 py-4 border-b">

                      <p className="text-sm text-gray-500">
                        Welcome Back
                      </p>

                      <h3 className="font-semibold mt-1">
                        {user?.username}
                      </h3>

                    </div>

                    <Link
                      to="/dash"
                      className="
                      block
                      px-5
                      py-3
                      hover:bg-gray-100
                      "
                    >
                      Dashboard
                    </Link>

                    <Link
                      to="/cart"
                      className="
                      block
                      px-5
                      py-3
                      hover:bg-gray-100
                      "
                    >
                      Orders
                    </Link>

                    <button
                      onClick={handleLogout}
                      className="
                      w-full
                      text-left
                      px-5
                      py-3
                      text-red-500
                      hover:bg-red-50
                      "
                    >
                      Logout
                    </button>

                  </div>

                )}

              </div>

            ) : (

              <Link
                to="/login"
                className={`
                hidden
                md:block
                border
                border-gray-300
                text-gray-700
                hover:bg-gray-100
                ${buttonStyle}
                `}
              >
                Login
              </Link>

            )}

            {/* CART */}

            <button
              onClick={() => navigate("/cart")}
              className="
              relative
              flex
              items-center
              gap-2
              bg-black
              text-white
              px-5
              py-3
              rounded-xl
              hover:bg-slate-800
              transition
              "
            >

              <FaShoppingCart />

              <span className="hidden sm:inline">
                Cart
              </span>

              {cart.length > 0 && (

                <span className="
                absolute
                -top-2
                -right-2
                bg-red-500
                text-xs
                w-5
                h-5
                rounded-full
                flex
                items-center
                justify-center
                ">

                  {cart.length}

                </span>

              )}

            </button>

            {/* MOBILE BUTTON */}

            <button
              onClick={() =>
                setMenuOpen(!menuOpen)
              }
              className="md:hidden text-2xl text-gray-700"
            >
              {menuOpen ? (
                <FaTimes />
              ) : (
                <FaBars />
              )}
            </button>

          </div>

        </div>

        {/* MOBILE MENU */}

        {menuOpen && (

          <div className="md:hidden bg-white border-t px-6 py-6">

            <ul className="flex flex-col gap-3">

              {links.map((item) => (

                <li key={item.name}>

                  <NavLink
                    to={item.path}
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className={navStyle}
                  >
                    {item.name}
                  </NavLink>

                </li>

              ))}

              {/* MOBILE CATEGORY */}

              <div className="mt-4">

                <h3 className="
                font-semibold
                mb-3
                text-gray-700
                ">
                  Categories
                </h3>

                <div className="flex flex-col gap-2">

                  <Link
                    to={`/game?category=${encodeURIComponent("Board Games")}`}
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="
                    px-4
                    py-3
                    rounded-xl
                    bg-gray-100
                    hover:bg-gray-200
                    transition
                    "
                  >
                    Board Games
                  </Link>

                  <Link
                    to={`/game?category=${encodeURIComponent("Big Toys")}`}
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="
                    px-4
                    py-3
                    rounded-xl
                    bg-gray-100
                    hover:bg-gray-200
                    transition
                    "
                  >
                    Big Toys
                  </Link>

                  <Link
                    to={`/game?category=${encodeURIComponent("Educational Games")}`}
                    onClick={() =>
                      setMenuOpen(false)
                    }
                    className="
                    px-4
                    py-3
                    rounded-xl
                    bg-gray-100
                    hover:bg-gray-200
                    transition
                    "
                  >
                    Educational Games
                  </Link>

                </div>

              </div>

            </ul>

            {!isLogIn && (

              <div className="flex flex-col gap-3 mt-6">

                <button
                  onClick={() => {
                    navigate("/login");
                    setMenuOpen(false);
                  }}
                  className="
                  w-full
                  border
                  border-gray-300
                  py-3
                  rounded-xl
                  "
                >
                  Login
                </button>

                <button
                  onClick={() => {
                    navigate("/register");
                    setMenuOpen(false);
                  }}
                  className="
                  w-full
                  bg-black
                  text-white
                  py-3
                  rounded-xl
                  hover:bg-slate-800
                  transition
                  "
                >
                  Register
                </button>

              </div>

            )}

          </div>

        )}

      </header>

    </>
  );
};