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
  FaEnvelope,
} from "react-icons/fa";

import { Link } from "react-router-dom";

export const Footer = () => {

  const socialLinks = [
    {
      icon: <FaFacebookF />,
      link: "https://facebook.com",
    },
    {
      icon: <FaInstagram />,
      link: "https://instagram.com",
    },
    {
      icon: <FaTwitter />,
      link: "https://twitter.com",
    },
    {
      icon: <FaLinkedinIn />,
      link: "https://linkedin.com",
    },
    {
      icon: <FaYoutube />,
      link: "https://youtube.com",
    },
  ];

  return (

    <footer className="bg-slate-950 text-white pt-20 pb-8">

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
            className="h-16 object-contain mb-5"
          />

          <p className="
          text-gray-400
          leading-relaxed
          text-sm
          ">
            CurioKid is a fun and interactive toy rental
            platform where children discover creativity,
            learning and happiness through educational
            toys and games.
          </p>

          {/* SOCIAL LINKS */}

          <div className="flex gap-4 mt-8">

            {socialLinks.map((item, index) => (

              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="
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
                hover:-translate-y-1
                "
              >
                {item.icon}
              </a>

            ))}

          </div>

        </div>

        {/* QUICK LINKS */}

        <div>

          <h2 className="
          text-xl
          font-semibold
          mb-6
          ">
            Quick Links
          </h2>

          <ul className="
          space-y-4
          text-gray-400
          text-sm
          ">

            <li>
              <Link
                to="/"
                className="hover:text-white transition"
              >
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-white transition"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/game"
                className="hover:text-white transition"
              >
                Games
              </Link>
            </li>

            <li>
              <Link
                to="/plan"
                className="hover:text-white transition"
              >
                Plans
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-white transition"
              >
                Contact
              </Link>
            </li>

          </ul>

        </div>

        {/* CATEGORIES */}

       {/* CATEGORIES */}

<div>

  <h2 className="
  text-xl
  font-semibold
  mb-6
  ">
    Categories
  </h2>

  <ul className="
  space-y-4
  text-gray-400
  text-sm
  ">

    <li>

      <Link
        to="/game?category=Board Games"
        className="hover:text-white transition"
      >
        Board Games
      </Link>

    </li>

    <li>

      <Link
        to="/game?category=Big%20Toys"
        className="hover:text-white transition"
      >
        Big Toys
      </Link>

    </li>

    <li>

      <Link
        to="/game?category=Educational Games"
        className="hover:text-white transition"
      >
        Educational Games
      </Link>

    </li>

  </ul>

</div>

        {/* CONTACT */}

        <div>

          <h2 className="
          text-xl
          font-semibold
          mb-6
          ">
            Contact Us
          </h2>

          <div className="
          space-y-5
          text-gray-400
          text-sm
          ">

            <div className="flex items-start gap-3">

              <FaMapMarkerAlt className="mt-1 text-white" />

              <p>
                Navrangpura, Ahmedabad - 380009
              </p>

            </div>

            <div className="flex items-center gap-3">

              <FaPhoneAlt className="text-white" />

              <p>
                +91 9319313177
              </p>

            </div>

            <div className="flex items-center gap-3">

              <FaEnvelope className="text-white" />

              <p>
                info.curiokid@gmail.com
              </p>

            </div>

          </div>

          {/* NEWSLETTER */}

          <div className="mt-8">

            <h3 className="text-sm font-medium mb-3">
              Subscribe Newsletter
            </h3>

            <div className="flex">

              <input
                type="email"
                placeholder="Enter email"
                className="
                w-full
                px-4
                py-3
                rounded-l-xl
                bg-slate-800
                outline-none
                text-sm
                "
              />

              <button
                className="
                bg-white
                text-black
                px-5
                rounded-r-xl
                font-medium
                hover:bg-gray-200
                transition
                "
              >
                Send
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* COPYRIGHT */}

      <div className="
      border-t
      border-slate-800
      mt-16
      pt-6
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