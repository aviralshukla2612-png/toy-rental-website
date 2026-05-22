import React from "react";
import { useNavigate } from "react-router-dom";
import { GiPartyPopper } from "react-icons/gi";

export default function ThankYou() {
  const navigate = useNavigate();

  return (
    <div className="h-[80vh] flex flex-col justify-center items-center text-center bg-gray-100">

      <h1 className="text-4xl font-bold text-green-600 mb-4 flex"><GiPartyPopper className="text-orange-400"/>Order Placed Successfully!</h1>

      <p className="text-gray-600 mb-6">Thank you for your purchase. Your order will be delivered soon.</p>

      <button
        onClick={() => navigate("/")}
        className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded"
      >
        Go to Home
      </button>
    </div>
  );
}