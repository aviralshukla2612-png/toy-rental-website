import React from "react";

import {
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";

import imga from "../assets/contact1.jpg";

const Contact = () => {

  const offices = [
    {
      id: 1,
      title: "Corporate Office",
      address:
        "202-Iscon Avenue, Mithakhali, Navrangpura, Ahmedabad, Gujarat 380009",
      phone: "+91 9319313177",
    },

    {
      id: 2,
      title: "Satellite Store",
      address:
        "GF-23 & Upper Floor, Galaxy Mall, Satellite, Ahmedabad, Gujarat",
      phone: "+91 7573002742",
    },

    {
      id: 3,
      title: "South Bopal Store",
      address:
        "FF-108, Marigold, South Bopal, Ahmedabad, Gujarat 380058",
      phone: "+91 7573002754",
    },

    {
      id: 4,
      title: "Nikol Store",
      address:
        "FF - 30, Raspan Arcade, Raspan Cross Rd, Nikol, Ahmedabad-382345",
      phone: "+91 7573002347",
    },
  ];

  const inputStyle =
    "w-full border border-gray-300 rounded-2xl px-5 py-4 bg-white focus:ring-2 focus:ring-black outline-none transition";

  const cardStyle =
    "bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300";

  return (
    <div className="bg-slate-100">

      {/* HERO */}

      <section className="bg-slate-900 py-24 text-white">

        <div className="max-w-7xl mx-auto px-6 text-center">

          <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-4">
            Contact Us
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            We’d Love To Hear From You
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Have questions about our toys, rentals or services? Our team is
            always ready to help you and your family.
          </p>

        </div>

      </section>

      {/* CONTACT CARDS */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">

            {offices.map((office) => (

              <div key={office.id} className={cardStyle}>

                {/* ICON */}

                <div className="w-16 h-16 rounded-2xl bg-black text-white flex items-center justify-center mb-6">

                  <FaMapMarkerAlt className="text-2xl" />

                </div>

                {/* CONTENT */}

                <h2 className="text-2xl font-bold text-slate-900 mb-4">
                  {office.title}
                </h2>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {office.address}
                </p>

                <div className="flex items-center gap-3 text-slate-900 font-medium mb-6">

                  <FaPhoneAlt />

                  <span>{office.phone}</span>

                </div>

                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-black font-semibold hover:gap-4 transition-all duration-300"
                >

                  Get Directions

                  <FaArrowRight />

                </a>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT FORM */}

      <section
        className="relative py-24 bg-cover bg-center"
        style={{ backgroundImage: `url(${imga})` }}
      >

        {/* OVERLAY */}

        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative max-w-6xl mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT CONTENT */}

            <div className="text-white">

              <p className="uppercase tracking-[4px] text-sm text-gray-300 mb-4">
                Get In Touch
              </p>

              <h2 className="text-5xl font-bold leading-tight">
                Let’s Start A Conversation
              </h2>

              <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                Whether you need help choosing toys or want to know more about
                our rental plans, we are here to assist you.
              </p>

              <div className="mt-10 space-y-5">

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <FaPhoneAlt />
                  </div>

                  <span className="text-lg">
                    +91 9319313177
                  </span>

                </div>

                <div className="flex items-center gap-4">

                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
                    <FaEnvelope />
                  </div>

                  <span className="text-lg">
                    support@toyworld.com
                  </span>

                </div>

              </div>

            </div>

            {/* FORM */}

            <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">

              <h3 className="text-3xl font-bold text-slate-900 mb-8">
                Send A Message
              </h3>

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

                <textarea
                  rows="5"
                  placeholder="Write Your Message"
                  className={inputStyle}
                ></textarea>

                <button className="w-full bg-black text-white py-4 rounded-2xl hover:bg-slate-800 transition duration-300 font-semibold">

                  Submit Message

                </button>

              </form>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Contact;