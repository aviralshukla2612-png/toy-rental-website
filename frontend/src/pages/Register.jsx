import React, { useState } from "react";

import axios from "axios";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FaArrowRight,
  FaLock,
  FaUser,
} from "react-icons/fa";

import { API } from "../config/api";

const Register = () => {

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    username: "",
    name: "",
    email: "",
    password: "",
    dob: "",
    number: "",
    gender: "",
    address: "",
  });

  const inputStyle =
    "w-full border border-gray-300 rounded-2xl px-5 py-4 bg-white focus:ring-2 focus:ring-black outline-none transition";

  /* HANDLE INPUT */

  const handleInput = (e) => {

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

  };

  /* HANDLE SUBMIT */

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoading(true);

      await axios.post(
        `${API}/api/auth/register`,
        form
      );

      alert("Registration Successful");

      navigate("/login");

    } catch (err) {

      console.error(err);

      alert("Registration Failed");

    } finally {

      setLoading(false);

    }

  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-20">

      {/* MAIN CARD */}

      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl">

        {/* LEFT SIDE */}

        <div className="bg-slate-900 text-white p-10 md:p-14 flex flex-col justify-center">

          <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-4">
            Join Curio Kid
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Create Your Account
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Register now to explore educational toys, manage rentals,
            track orders and access personalized learning experiences.
          </p>

          {/* FEATURES */}

          <div className="mt-12 space-y-5">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">

                <FaUser />

              </div>

              <div>

                <h3 className="font-semibold">
                  Personalized Dashboard
                </h3>

                <p className="text-gray-400 text-sm">
                  Manage toys, orders and subscriptions easily.
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">

                <FaLock />

              </div>

              <div>

                <h3 className="font-semibold">
                  Secure Registration
                </h3>

                <p className="text-gray-400 text-sm">
                  Your account information stays protected.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="p-10 md:p-14">

          <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-4">
            Registration Form
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            Sign Up
          </h2>

          <p className="text-gray-500 mb-10">
            Create your account to continue.
          </p>

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* USERNAME + NAME */}

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="block mb-2 font-medium text-slate-700">

                  Username

                </label>

                <input
                  type="text"
                  name="username"
                  placeholder="Enter username"
                  value={form.username}
                  onChange={handleInput}
                  className={inputStyle}
                  required
                />

              </div>

              <div>

                <label className="block mb-2 font-medium text-slate-700">

                  Full Name

                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter full name"
                  value={form.name}
                  onChange={handleInput}
                  className={inputStyle}
                  required
                />

              </div>

            </div>

            {/* EMAIL + PASSWORD */}

            <div className="grid md:grid-cols-2 gap-6">

              <div>

                <label className="block mb-2 font-medium text-slate-700">

                  Email Address

                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={form.email}
                  onChange={handleInput}
                  className={inputStyle}
                  required
                />

              </div>

              <div>

                <label className="block mb-2 font-medium text-slate-700">

                  Password

                </label>

                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={form.password}
                  onChange={handleInput}
                  className={inputStyle}
                  required
                />

              </div>

            </div>

            {/* DOB + NUMBER + GENDER */}

            <div className="grid md:grid-cols-3 gap-6">

              <div>

                <label className="block mb-2 font-medium text-slate-700">

                  Date Of Birth

                </label>

                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleInput}
                  className={inputStyle}
                  required
                />

              </div>

              <div>

                <label className="block mb-2 font-medium text-slate-700">

                  Mobile Number

                </label>

                <input
                  type="text"
                  name="number"
                  placeholder="Enter number"
                  value={form.number}
                  onChange={handleInput}
                  className={inputStyle}
                  required
                />

              </div>

              <div>

                <label className="block mb-2 font-medium text-slate-700">

                  Gender

                </label>

                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleInput}
                  className={inputStyle}
                  required
                >

                  <option value="">
                    Select Gender
                  </option>

                  <option value="male">
                    Male
                  </option>

                  <option value="female">
                    Female
                  </option>

                  <option value="other">
                    Other
                  </option>

                </select>

              </div>

            </div>

            {/* ADDRESS */}

            <div>

              <label className="block mb-2 font-medium text-slate-700">

                Address

              </label>

              <textarea
                rows="4"
                name="address"
                placeholder="Enter address"
                value={form.address}
                onChange={handleInput}
                className={inputStyle}
                required
              ></textarea>

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              disabled={loading}
              className="
              w-full
              bg-black
              hover:bg-slate-800
              text-white
              py-4
              rounded-2xl
              font-semibold
              transition
              duration-300
              inline-flex
              items-center
              justify-center
              gap-3
              disabled:opacity-70
              "
            >

              {loading ? "Creating Account..." : "Register"}

              {!loading && <FaArrowRight />}

            </button>

          </form>

          {/* LOGIN */}

          <p className="text-center text-gray-600 mt-8">

            Already have an account?

            <Link
              to="/login"
              className="ml-2 font-semibold text-black hover:underline"
            >
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;

