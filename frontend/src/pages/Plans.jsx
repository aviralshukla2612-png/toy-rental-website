import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaArrowRight,
  FaCheck,
  FaStar,
} from "react-icons/fa";

import seed from "../assets/plan1.png";
import grow from "../assets/plan2.png";
import plant from "../assets/plan3.png";

const Plans = () => {

 const navigate = useNavigate();

  const plans = [
    {
      id: 1,
      name: "Seed Plan",
      image: seed,
      price: "₹999",
      popular: false,
      features: [
        "1 Toy At A Time",
        "2 Toys Per Month",
        "2 Books Included",
        "15 Days Rotation",
        "Free Delivery",
      ],
    },

    {
      id: 2,
      name: "Grow Plan",
      image: grow,
      price: "₹1999",
      popular: true,
      features: [
        "2 Toys At A Time",
        "4 Toys Per Month",
        "4 Books Included",
        "10 Days Rotation",
        "Priority Delivery",
      ],
    },

    {
      id: 3,
      name: "Plant Plan",
      image: plant,
      price: "₹2999",
      popular: false,
      features: [
        "3 Toys At A Time",
        "6 Toys Per Month",
        "Unlimited Books",
        "7 Days Rotation",
        "Premium Support",
      ],
    },
  ];

  const bigToys = [
    {
      title: "Non Electronic Toys",
      price: "MRP 10%",
      desc: "Slides, Trampolines, Ball Pools & Swings",
    },

    {
      title: "Electronic Toys",
      price: "MRP 15%",
      desc: "Cars, Bikes & Battery Operated Toys",
    },
  ];

  const partyPlans = [
    {
      title: "Mini Party",
      price: "₹2000",
      toys: "4 Toys At A Time",
      duration: "5 Hours Duration",
    },

    {
      title: "Super Party",
      price: "₹3600",
      toys: "8 Toys At A Time",
      duration: "5 Hours Duration",
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
            Membership Plans
          </p>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Choose The Perfect Plan
          </h1>

          <p className="mt-6 text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Flexible toy rental plans designed to make learning, creativity and
            fun affordable for every family.
          </p>

        </div>

      </section>

      {/* MAIN PLANS */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-4">
              Pricing
            </p>

            <h2 className="text-5xl font-bold text-slate-900">
              Membership Plans
            </h2>

          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

            {plans.map((plan) => (

              <div
                key={plan.id}
                className={`${cardStyle} relative p-10 ${
                  plan.popular
                    ? "border-2 border-black scale-105"
                    : ""
                }`}
              >

                {/* POPULAR */}

                {plan.popular && (

                  <div className="absolute top-5 right-5 bg-black text-white text-xs px-4 py-2 rounded-full flex items-center gap-2">

                    <FaStar />

                    Most Popular

                  </div>

                )}

                {/* IMAGE */}

                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-24 h-24 object-contain mb-8"
                />

                {/* TITLE */}

                <h3 className="text-3xl font-bold text-slate-900">
                  {plan.name}
                </h3>

                {/* PRICE */}

                <div className="mt-6">

                  <span className="text-5xl font-bold text-slate-900">
                    {plan.price}
                  </span>

                  <span className="text-gray-500 ml-2">
                    / month
                  </span>

                </div>

                {/* FEATURES */}

                <div className="mt-10 space-y-5">

                  {plan.features.map((feature, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-4"
                    >

                      <div className="w-7 h-7 rounded-full bg-black text-white flex items-center justify-center text-xs">

                        <FaCheck />

                      </div>

                      <span className="text-gray-700">
                        {feature}
                      </span>

                    </div>

                  ))}

                </div>

                {/* BUTTON */}

                <button className="w-full mt-10 bg-black text-white py-4 rounded-2xl hover:bg-slate-800 transition duration-300 font-semibold inline-flex items-center justify-center gap-3">

                  Choose Plan

                  <FaArrowRight />

                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* BIG TOYS */}

      <section className="bg-white py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-4">
              Special Rentals
            </p>

            <h2 className="text-5xl font-bold text-slate-900">
              Big Toys & Riders
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {bigToys.map((item, index) => (

              <div key={index} className={`${cardStyle} p-10`}>

                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  {item.title}
                </h3>

                <h2 className="text-5xl font-bold text-black mb-6">
                  {item.price}
                </h2>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {item.desc}
                </p>

                <div className="bg-slate-100 rounded-2xl p-5 text-gray-700 mb-8">

                  Refundable Deposit Same As MRP

                </div>

                <button className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition duration-300">

                  Subscribe Now

                </button>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PARTY PLANS */}

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-4">
              Party Plans
            </p>

            <h2 className="text-5xl font-bold text-slate-900">
              Toy Party Packages
            </h2>

          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {partyPlans.map((plan, index) => (

              <div key={index} className={`${cardStyle} p-10 text-center`}>

                <h3 className="text-3xl font-bold text-slate-900 mb-6">
                  {plan.title}
                </h3>

                <h2 className="text-6xl font-bold text-black mb-8">
                  {plan.price}
                </h2>

                <div className="space-y-4 mb-10">

                  <p className="text-gray-700 text-lg">
                    {plan.toys}
                  </p>

                  <p className="text-gray-700 text-lg">
                    {plan.duration}
                  </p>

                  <p className="text-gray-700 text-lg">
                    Refundable Security Deposit Included
                  </p>

                </div>

                <button className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition duration-300 inline-flex items-center gap-3">

                  Subscribe Now

                  <FaArrowRight />

                </button>

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
            Ready To Start Your Toy Journey?
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Discover educational toys, flexible rental plans and exciting
            learning experiences for your children.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 bg-black text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition"
          onClick={() => navigate("/game")}>

            Explore Collection

            <FaArrowRight />

          </button>

        </div>



      </section>

    </div>
  );
};

export default Plans;