import React from "react";

import { useNavigate } from "react-router-dom";

import {
  FaArrowRight,
  FaBoxOpen,
  FaCheckCircle,
  FaTruck,
} from "react-icons/fa";

export default function ThankYou() {

  const navigate = useNavigate();

  const cardStyle =
    "bg-white rounded-3xl shadow-sm hover:shadow-2xl transition-all duration-300";

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-20">

      <div className={`${cardStyle} max-w-3xl w-full p-10 md:p-14 text-center`}>

        {/* SUCCESS ICON */}

        <div className="w-24 h-24 rounded-full bg-black text-white flex items-center justify-center text-5xl mx-auto mb-8">

          <FaCheckCircle />

        </div>

        {/* TITLE */}

        <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-4">
          Order Confirmed
        </p>

        <h1 className="text-5xl font-bold text-slate-900 leading-tight">
          Thank You For Your Purchase!
        </h1>

        <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Your order has been placed successfully and is now being processed.
          We’ll notify you once your toys are shipped.
        </p>

        {/* ORDER INFO */}

        <div className="grid md:grid-cols-3 gap-6 mt-12">

          <div className="bg-slate-100 rounded-2xl p-6">

            <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-2xl mx-auto mb-4">

              <FaBoxOpen />

            </div>

            <h3 className="font-bold text-slate-900 mb-2">
              Order ID
            </h3>

            <p className="text-gray-600">
              #CK1024
            </p>

          </div>

          <div className="bg-slate-100 rounded-2xl p-6">

            <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-2xl mx-auto mb-4">

              <FaTruck />

            </div>

            <h3 className="font-bold text-slate-900 mb-2">
              Delivery
            </h3>

            <p className="text-gray-600">
              3 - 5 Working Days
            </p>

          </div>

          <div className="bg-slate-100 rounded-2xl p-6">

            <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-2xl mx-auto mb-4">

              <FaCheckCircle />

            </div>

            <h3 className="font-bold text-slate-900 mb-2">
              Payment
            </h3>

            <p className="text-gray-600">
              Confirmed
            </p>

          </div>

        </div>

        {/* BUTTONS */}

        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-14">

          <button
            onClick={() => navigate("/game")}
            className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition duration-300 font-semibold inline-flex items-center justify-center gap-3"
          >

            Continue Shopping

            <FaArrowRight />

          </button>

          <button
            onClick={() => navigate("/dashboard")}
            className="border border-black text-black px-8 py-4 rounded-2xl hover:bg-black hover:text-white transition duration-300 font-semibold"
          >

            View Dashboard

          </button>

        </div>

      </div>

    </div>
  );
}