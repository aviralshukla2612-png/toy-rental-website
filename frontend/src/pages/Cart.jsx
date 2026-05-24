import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaPlus, FaMinus } from "react-icons/fa";
import { useData } from "../context/DataProvider";

export default function Cart() {
  const { cart, clearCart, setCart } = useData();

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    phone: "",
    city: "",
    address: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("");

  const inputStyle =
    "w-full border border-gray-300 rounded-2xl px-5 py-4 focus:ring-2 focus:ring-black outline-none transition";

  /* TOTAL */

  const total = cart.reduce(
    (sum, item) => sum + (item.price || 299) * (item.quantity || 1),
    0
  );

  /* INPUT */

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* QUANTITY */

  const updateQuantity = (id, type) => {
    const updated = cart.map((item) => {
      if (item.id === id) {
        const qty =
          type === "increase"
            ? (item.quantity || 1) + 1
            : Math.max((item.quantity || 1) - 1, 1);

        return { ...item, quantity: qty };
      }

      return item;
    });

    setCart(updated);
  };

  /* REMOVE */

  const removeItem = (id) => {
    const updated = cart.filter((item) => item.id !== id);
    setCart(updated);
  };

  /* ORDER */

  const handleOrder = () => {
    if (!form.name || !form.phone || !form.city || !form.address) {
      alert("Please fill all address details");
      return;
    }

    if (!paymentMethod) {
      alert("Please select payment method");
      return;
    }

    console.log({
      customer: form,
      items: cart,
      payment: paymentMethod,
      total,
    });

    clearCart();

    navigate("/thankyou");
  };

  /* EMPTY CART */

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6">

        <div className="bg-white rounded-3xl p-10 shadow-sm text-center max-w-md w-full">

          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Your Cart is Empty
          </h1>

          <p className="text-gray-500 mb-8">
            Looks like you haven’t added any toys yet.
          </p>

          <button
            onClick={() => navigate("/game")}
            className="bg-black text-white px-8 py-4 rounded-2xl hover:bg-slate-800 transition"
          >
            Explore Games
          </button>

        </div>

      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen py-10 px-6">

      <div className="max-w-7xl mx-auto">

        {/* PAGE TITLE */}

        <div className="mb-10">

          <p className="uppercase tracking-[3px] text-sm text-gray-500 mb-3">
            Checkout
          </p>

          <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
            Shopping Cart
          </h1>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT */}

          <div className="lg:col-span-2 space-y-8">

            {/* CART ITEMS */}

            <div className="bg-white rounded-3xl p-8 shadow-sm">

              <h2 className="text-2xl font-bold mb-8">
                Cart Items
              </h2>

              <div className="space-y-6">

                {cart.map((item) => (

                  <div
                    key={item.id}
                    className="flex flex-col md:flex-row md:items-center justify-between gap-6 border border-gray-200 rounded-3xl p-5"
                  >

                    {/* PRODUCT */}

                    <div className="flex items-center gap-5">

                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-28 h-28 object-contain bg-slate-100 rounded-2xl p-3"
                      />

                      <div>

                        <h3 className="text-xl font-semibold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="text-gray-500 mt-2">
                          Educational Learning Toy
                        </p>

                        <p className="text-2xl font-bold mt-3">
                          ₹{item.price || 299}
                        </p>

                      </div>

                    </div>

                    {/* ACTIONS */}

                    <div className="flex items-center gap-5">

                      {/* QUANTITY */}

                      <div className="flex items-center border border-gray-300 rounded-2xl overflow-hidden">

                        <button
                          onClick={() =>
                            updateQuantity(item.id, "decrease")
                          }
                          className="px-4 py-3 hover:bg-gray-100 transition"
                        >
                          <FaMinus />
                        </button>

                        <span className="px-5 font-semibold">
                          {item.quantity || 1}
                        </span>

                        <button
                          onClick={() =>
                            updateQuantity(item.id, "increase")
                          }
                          className="px-4 py-3 hover:bg-gray-100 transition"
                        >
                          <FaPlus />
                        </button>

                      </div>

                      {/* REMOVE */}

                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-12 h-12 rounded-2xl bg-red-100 text-red-500 hover:bg-red-500 hover:text-white transition flex items-center justify-center"
                      >
                        <FaTrash />
                      </button>

                    </div>

                  </div>

                ))}

              </div>

            </div>

            {/* ADDRESS */}

            <div className="bg-white rounded-3xl p-8 shadow-sm">

              <h2 className="text-2xl font-bold mb-8">
                Delivery Address
              </h2>

              <div className="grid md:grid-cols-2 gap-6">

                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  onChange={handleChange}
                  className={inputStyle}
                />

                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  onChange={handleChange}
                  className={inputStyle}
                />

                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  onChange={handleChange}
                  className={inputStyle}
                />

                <input
                  type="text"
                  name="address"
                  placeholder="Full Address"
                  onChange={handleChange}
                  className={inputStyle}
                />

              </div>

            </div>

            {/* PAYMENT */}

            <div className="bg-white rounded-3xl p-8 shadow-sm">

              <h2 className="text-2xl font-bold mb-8">
                Payment Method
              </h2>

              <div className="grid sm:grid-cols-2 gap-5">

                {[
                  "UPI",
                  "Debit / Credit Card",
                  "Net Banking",
                  "Cash on Delivery",
                ].map((method) => (

                  <label
                    key={method}
                    className={`border rounded-2xl p-5 cursor-pointer transition ${
                      paymentMethod === method
                        ? "border-black bg-slate-50"
                        : "border-gray-300 hover:border-black"
                    }`}
                  >

                    <div className="flex items-center gap-3">

                      <input
                        type="radio"
                        name="payment"
                        checked={paymentMethod === method}
                        onChange={() => setPaymentMethod(method)}
                      />

                      <span className="font-medium">
                        {method}
                      </span>

                    </div>

                  </label>

                ))}

              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div className="bg-white rounded-3xl p-8 shadow-sm sticky top-28">

              <h2 className="text-2xl font-bold mb-8">
                Order Summary
              </h2>

              <div className="space-y-5">

                <div className="flex justify-between text-gray-600">
                  <span>Items ({cart.length})</span>
                  <span>₹{total}</span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span className="text-green-600 font-medium">
                    FREE
                  </span>
                </div>

                <div className="flex justify-between text-gray-600">
                  <span>GST</span>
                  <span>₹99</span>
                </div>

                <hr />

                <div className="flex justify-between text-2xl font-bold text-slate-900">
                  <span>Total</span>
                  <span>₹{total + 99}</span>
                </div>

              </div>

              <button
                onClick={handleOrder}
                className="w-full mt-8 bg-black text-white py-4 rounded-2xl hover:bg-slate-800 transition duration-300 font-semibold"
              >
                Place Order
              </button>

              <button
                onClick={clearCart}
                className="w-full mt-4 border border-red-500 text-red-500 py-4 rounded-2xl hover:bg-red-50 transition"
              >
                Clear Cart
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}