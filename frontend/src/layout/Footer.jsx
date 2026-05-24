import React from "react";

import img from "../assets/image.png";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import { Link } from "react-router-dom";



export const Footer = () => {

  return (

    <footer className="bg-slate-950 text-white pt-24 pb-8">

      <div className="
      max-w-7xl
      mx-auto
      px-6
      grid
      grid-cols-1
      md:grid-cols-2
      lg:grid-cols-4
      gap-14
      ">



        {/* COMPANY INFO */}

        <div>

          <img
            src={img}
            alt="Logo"
            className="h-16 object-contain mb-6"
          />

          <p className="
          text-gray-400
          leading-relaxed
          ">
            A fun and interactive platform where children
            discover creativity, learning and happiness
            through educational toys and games.
          </p>



          {/* SOCIAL ICONS */}

          <div className="flex gap-4 mt-8">

            <div className="
            w-11
            h-11
            rounded-full
            bg-slate-800
            hover:bg-white
            hover:text-black
            transition-all
            duration-300
            flex
            items-center
            justify-center
            cursor-pointer
            hover:-translate-y-1
            ">
              <FaFacebookF />
            </div>

            <div className="
            w-11
            h-11
            rounded-full
            bg-slate-800
            hover:bg-white
            hover:text-black
            transition-all
            duration-300
            flex
            items-center
            justify-center
            cursor-pointer
            hover:-translate-y-1
            ">
              <FaInstagram />
            </div>

            <div className="
            w-11
            h-11
            rounded-full
            bg-slate-800
            hover:bg-white
            hover:text-black
            transition-all
            duration-300
            flex
            items-center
            justify-center
            cursor-pointer
            hover:-translate-y-1
            ">
              <FaTwitter />
            </div>

            <div className="
            w-11
            h-11
            rounded-full
            bg-slate-800
            hover:bg-white
            hover:text-black
            transition-all
            duration-300
            flex
            items-center
            justify-center
            cursor-pointer
            hover:-translate-y-1
            ">
              <FaLinkedinIn />
            </div>

            <div className="
            w-11
            h-11
            rounded-full
            bg-slate-800
            hover:bg-white
            hover:text-black
            transition-all
            duration-300
            flex
            items-center
            justify-center
            cursor-pointer
            hover:-translate-y-1
            ">
              <FaYoutube />
            </div>

          </div>

        </div>



        {/* QUICK LINKS */}

        <div>

          <h2 className="
          text-2xl
          font-bold
          mb-6
          ">
            Quick Links
          </h2>

          <ul className="
          space-y-4
          text-gray-400
          ">

            <li>
              <Link
                to="/"
                className="hover:text-white transition duration-300"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-white transition duration-300"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/game"
                className="hover:text-white transition duration-300"
              >
                Games
              </Link>
            </li>

            <li>
              <Link
                to="/plan"
                className="hover:text-white transition duration-300"
              >
                Plans
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-white transition duration-300"
              >
                Contact
              </Link>
            </li>

          </ul>

        </div>



        {/* CATEGORIES */}

        <div>

          <h2 className="
          text-2xl
          font-bold
          mb-6
          ">
            Categories
          </h2>

          <ul className="
          space-y-4
          text-gray-400
          ">

            <li className="hover:text-white transition duration-300 cursor-pointer">
              Educational Toys
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              Board Games
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              Puzzle Games
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              Creative Kits
            </li>

            <li className="hover:text-white transition duration-300 cursor-pointer">
              STEM Learning
            </li>

          </ul>

        </div>



        {/* STORE INFO */}

        <div>

          <h2 className="
          text-2xl
          font-bold
          mb-6
          ">
            Our Stores
          </h2>



          <div className="
          space-y-6
          text-gray-400
          ">

            <div>

              <div className="flex items-start gap-3">

                <FaMapMarkerAlt className="mt-1 text-white" />

                <p className="leading-relaxed">
                  Navrangpura, Ahmedabad - 380009
                </p>

              </div>

              <div className="flex items-center gap-3 mt-3">

                <FaPhoneAlt className="text-white" />

                <p>
                  +91 9319313177
                </p>

              </div>

            </div>



            <div>

              <div className="flex items-start gap-3">

                <FaMapMarkerAlt className="mt-1 text-white" />

                <p className="leading-relaxed">
                  South Bopal, Ahmedabad - 380058
                </p>

              </div>

              <div className="flex items-center gap-3 mt-3">

                <FaPhoneAlt className="text-white" />

                <p>
                  +91 7573002754
                </p>

              </div>

            </div>



            <div>

              <div className="flex items-start gap-3">

                <FaMapMarkerAlt className="mt-1 text-white" />

                <p className="leading-relaxed">
                  Nikol, Ahmedabad - 382345
                </p>

              </div>

              <div className="flex items-center gap-3 mt-3">

                <FaPhoneAlt className="text-white" />

                <p>
                  +91 7573002347
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>



      {/* BOTTOM COPYRIGHT */}

      <div className="
      border-t
      border-slate-800
      mt-20
      pt-8
      text-center
      text-gray-500
      text-sm
      px-6
      ">

        © 2026 CurioKid. All rights reserved.

      </div>

    </footer>

  );
};