import React from "react";

import {
  FaArrowRight,
  FaChartLine,
  FaHandshake,
  FaStore,
  FaUsers,
} from "react-icons/fa";

import imga from "../assets/franchise.jpg";

const Franchise = () => {

  const benefits = [
    {
      icon: <FaStore />,
      title: "Trusted Brand",
      desc: "Build your business with a growing and trusted toy rental brand.",
    },

    {
      icon: <FaUsers />,
      title: "Growing Market",
      desc: "Tap into the fast-growing educational toy and parenting market.",
    },

    {
      icon: <FaHandshake />,
      title: "Complete Support",
      desc: "Get guidance, setup assistance and operational support.",
    },

    {
      icon: <FaChartLine />,
      title: "Low Investment",
      desc: "Start your franchise with affordable investment opportunities.",
    },
  ];

  const inputStyle =
    "w-full border border-gray-300 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-black outline-none transition";

  const cardStyle =
    "bg-white rounded-3xl shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300";

  return (
    <div className="bg-slate-100">

      {/* HERO */}

      <section className="bg-slate-900 py-24 text-white">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-4">
            Franchise Opportunity
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Partner With Curio Kid Toy Library
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join our growing toy rental business and bring educational,
            creative and joyful learning experiences to families in your city.
          </p>

        </div>

      </section>

      {/* BENEFITS */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-4">
              Why Choose Us
            </p>

            <h2 className="text-5xl font-bold text-slate-900">
              Franchise Benefits
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {benefits.map((item, index) => (

              <div key={index} className={`${cardStyle} p-8 text-center`}>

                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center text-2xl mx-auto mb-6">

                  {item.icon}

                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* FORM SECTION */}

      <section className="pb-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* IMAGE */}

            <div className="overflow-hidden rounded-3xl shadow-2xl">

              <img
                src={imga}
                alt="Franchise"
                className="w-full h-full object-cover hover:scale-105 transition duration-500"
              />

            </div>

            {/* FORM */}

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm">

              <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-4">
                Get In Touch
              </p>

              <h2 className="text-4xl font-bold text-slate-900 mb-8">
                Start Your Franchise Journey
              </h2>

              <form className="space-y-6">

                <input
                  type="text"
                  placeholder="Your Name"
                  className={inputStyle}
                />

                <input
                  type="text"
                  placeholder="Your Mobile Number"
                  className={inputStyle}
                />

                <input
                  type="email"
                  placeholder="Your Email Address"
                  className={inputStyle}
                />

                <input
                  type="text"
                  placeholder="Your City"
                  className={inputStyle}
                />

                <textarea
                  rows="5"
                  placeholder="Write Your Message"
                  className={inputStyle}
                ></textarea>

                <button className="w-full bg-black text-white py-4 rounded-2xl hover:bg-slate-800 transition duration-300 font-semibold inline-flex items-center justify-center gap-3">

                  Submit Inquiry

                  <FaArrowRight />

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="bg-white py-24">

        <div className="max-w-4xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-4">
            Grow With Us
          </p>

          <h2 className="text-5xl font-bold text-slate-900 leading-tight">
            Become Part Of A Fast Growing Toy Rental Brand
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Build a meaningful business that supports creativity, learning and
            joyful childhood experiences for modern families.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition">

            Apply For Franchise

            <FaArrowRight />

          </button>

        </div>

      </section>

    </div>
  );
};

export default Franchise;