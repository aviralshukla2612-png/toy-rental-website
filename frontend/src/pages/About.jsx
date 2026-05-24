import React from "react";
import { useNavigate } from "react-router-dom";

import imgc from "../assets/about.jpg";

import choose from "../assets/about1.jfif";
import delivery from "../assets/about2.jfif";
import play from "../assets/about3.jfif";
import exchange from "../assets/about4.jfif";

import variety from "../assets/about5.jfif";
import sanitized from "../assets/about6.jfif";
import affordable from "../assets/about7.jpg";
import eco from "../assets/about8.png";
import fast from "../assets/about9.jfif";
import easy from "../assets/about10.webp";

import toy from "../assets/about11.jfif";
import happy from "../assets/about12.jfif";
import city from "../assets/about13.jfif";
import star from "../assets/about14.jfif";

import { FaArrowRight } from "react-icons/fa";

const About = () => {

   const navigate = useNavigate();

  const steps = [
    {
      img: choose,
      title: "Choose Toys",
      description:
        "Browse our collection and select toys suitable for your child's age.",
    },

    {
      img: delivery,
      title: "Delivery To Your Home",
      description:
        "We deliver sanitized toys directly to your doorstep.",
    },

    {
      img: play,
      title: "Play & Learn",
      description:
        "Kids play, learn and enjoy with our educational toys.",
    },

    {
      img: exchange,
      title: "Return Or Exchange",
      description:
        "Return toys anytime and exchange them for new ones.",
    },
  ];

  const features = [
    {
      img: variety,
      title: "Wide Variety of Toys",
    },

    {
      img: sanitized,
      title: "100% Sanitized Toys",
    },

    {
      img: affordable,
      title: "Affordable Rental Plans",
    },

    {
      img: eco,
      title: "Eco-Friendly Toy Sharing",
    },

    {
      img: fast,
      title: "Fast Delivery",
    },

    {
      img: easy,
      title: "Easy Exchange Policy",
    },
  ];

  const stats = [
    {
      img: toy,
      number: "500+",
      title: "Toys Available",
    },

    {
      img: happy,
      number: "1000+",
      title: "Happy Families",
    },

    {
      img: city,
      number: "20+",
      title: "Cities Served",
    },

    {
      img: star,
      number: "4.8",
      title: "Customer Rating",
    },
  ];

  const cardStyle =
    "bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300";

  return (
    <div className="bg-slate-100">

      {/* HERO */}

      <section className="bg-slate-900 py-24 text-white">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-4">
            About Us
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Creating Joyful Learning Through Play
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We help families discover educational toys in a smarter,
            affordable and eco-friendly way through our modern toy rental
            platform.
          </p>

        </div>

      </section>

      {/* ABOUT */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}

          <div className="overflow-hidden rounded-3xl shadow-xl">

            <img
              src={imgc}
              alt="About"
              className="w-full h-[500px] object-cover hover:scale-105 transition duration-500"
            />

          </div>

          {/* CONTENT */}

          <div>

            <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-4">
              Who We Are
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Making Learning More Fun For Every Child
            </h2>

            <p className="mt-8 text-gray-600 leading-relaxed text-lg">
              Children grow quickly and their interests constantly evolve.
              Our mission is to provide parents with a smarter way to access
              educational toys without unnecessary clutter or expensive
              purchases.
            </p>

            <p className="mt-5 text-gray-600 leading-relaxed text-lg">
              We offer high-quality, sanitized and engaging toys that inspire
              creativity, imagination and skill development while promoting
              sustainability through toy sharing.
            </p>

            <button 
              className="mt-10 inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition"
              onClick={() => navigate("/game")}
            >

              Explore Collection

              <FaArrowRight />

            </button>

          </div>

        </div>

      </section>

      {/* HOW IT WORKS */}

      <section className="bg-white py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-4">
              Process
            </p>

            <h2 className="text-5xl font-bold text-slate-900">
              How Our Toy Rental Works
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {steps.map((step, index) => (

              <div key={index} className={`${cardStyle} p-8 text-center`}>

                <img
                  src={step.img}
                  alt={step.title}
                  className="w-24 h-24 object-contain mx-auto mb-6"
                />

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FEATURES */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-4">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-bold text-slate-900">
              Trusted By Modern Families
            </h2>

          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">

            {features.map((item, index) => (

              <div
                key={index}
                className={`${cardStyle} p-6 flex flex-col items-center text-center`}
              >

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-20 h-20 object-contain mb-5"
                />

                <h3 className="font-semibold text-slate-900">
                  {item.title}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="bg-slate-900 py-24 text-white">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-4">
              Achievements
            </p>

            <h2 className="text-5xl font-bold">
              Our Growing Community
            </h2>

          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

            {stats.map((item, index) => (

              <div
                key={index}
                className="bg-white text-black rounded-3xl p-8 text-center hover:-translate-y-2 transition-all duration-300"
              >

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 object-contain mx-auto mb-6"
                />

                <h2 className="text-4xl font-bold mb-3">
                  {item.number}
                </h2>

                <p className="text-gray-600">
                  {item.title}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-white py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-4">
            Get Started
          </p>

          <h2 className="text-5xl font-bold text-slate-900 leading-tight">
            Ready To Explore Our Toy Collection?
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Discover educational toys that inspire creativity, learning and
            endless fun for your children.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition" onClick={() => navigate("/game")}>

            Browse Toys

            <FaArrowRight />

          </button>

        </div>

      </section>

    </div>
  );
};

export default About;