import React from "react";

import {
  FaArrowRight,
  FaClock,
  FaPhoneAlt,
  FaShieldAlt,
} from "react-icons/fa";

import imga from "../assets/inquire1.png";

const Inquire = () => {

  const inputStyle =
    "w-full border border-gray-300 rounded-2xl px-5 py-4 bg-white focus:ring-2 focus:ring-black outline-none transition";

  const infoCards = [
    {
      icon: <FaPhoneAlt />,
      title: "Quick Support",
      desc: "Our team will contact you within 24 hours.",
    },

    {
      icon: <FaShieldAlt />,
      title: "Safe Learning",
      desc: "Educational and child-friendly toy collections.",
    },

    {
      icon: <FaClock />,
      title: "Flexible Plans",
      desc: "Choose plans based on your child’s needs.",
    },
  ];

  return (
    <div className="bg-slate-100">

      {/* HERO */}

      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${imga})` }}
      >

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-black/75"></div>

        <div className="relative max-w-7xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}

            <div className="text-white">

              <p className="uppercase tracking-[4px] text-sm text-gray-300 mb-4">
                Inquiry Form
              </p>

              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Start Your Child’s Learning Journey
              </h1>

              <p className="mt-6 text-lg text-gray-300 leading-relaxed max-w-2xl">
                Tell us about your child and our team will help you choose
                the best educational toys and learning plans.
              </p>

              {/* INFO CARDS */}

              <div className="mt-12 space-y-5">

                {infoCards.map((item, index) => (

                  <div
                    key={index}
                    className="flex items-start gap-5 bg-white/10 backdrop-blur-md rounded-2xl p-5"
                  >

                    <div className="w-14 h-14 rounded-2xl bg-white text-black flex items-center justify-center text-xl">

                      {item.icon}

                    </div>

                    <div>

                      <h3 className="text-xl font-semibold mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-300">
                        {item.desc}
                      </p>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* FORM */}

            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl">

              <h2 className="text-4xl font-bold text-slate-900 mb-3">
                Get In Touch
              </h2>

              <p className="text-gray-500 mb-8">
                Fill out the form and our team will reach out shortly.
              </p>

              <form className="space-y-6">

                {/* NAME */}

                <div className="grid md:grid-cols-2 gap-6">

                  <input
                    type="text"
                    placeholder="First Name"
                    className={inputStyle}
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    className={inputStyle}
                  />

                </div>

                {/* CONTACT */}

                <div className="grid md:grid-cols-2 gap-6">

                  <input
                    type="text"
                    placeholder="Mobile Number"
                    className={inputStyle}
                  />

                  <input
                    type="email"
                    placeholder="Email Address"
                    className={inputStyle}
                  />

                </div>

                {/* CHILD DETAILS */}

                <div className="grid md:grid-cols-2 gap-6">

                  <select className={inputStyle}>

                    <option>Gender Of Child</option>

                    <option>Boy</option>

                    <option>Girl</option>

                    <option>Other</option>

                  </select>

                  <select className={inputStyle}>

                    <option>Age Of Child</option>

                    <option>0 - 4 Years</option>

                    <option>4 - 7 Years</option>

                    <option>7+ Years</option>

                  </select>

                </div>

                {/* CENTER */}

                <input
                  type="text"
                  placeholder="Choose Nearest Center"
                  className={inputStyle}
                />

                {/* MESSAGE */}

                <textarea
                  rows="5"
                  placeholder="Write Your Message"
                  className={inputStyle}
                ></textarea>

                {/* BUTTON */}

                <button className="w-full bg-black text-white py-4 rounded-2xl hover:bg-slate-800 transition duration-300 font-semibold inline-flex items-center justify-center gap-3">

                  Submit Inquiry

                  <FaArrowRight />

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Inquire;