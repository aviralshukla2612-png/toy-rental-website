import axios from "axios";
import React, { useState } from "react";

import {
  Link,
  useNavigate,
} from "react-router-dom";

import {
  FaArrowRight,
  FaEnvelope,
  FaLock,
} from "react-icons/fa";

import { API } from "../config/api";
import { useData } from "../context/DataProvider";

const Login = () => {

  const navigate = useNavigate();

  const { login } = useData();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

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

    let response;

    // Try admin login first
    try {
      response = await axios.post(
        `${API}/api/auth/admin/login`,
        form
      );

      const { data } = response;

      login(
        {
          role: data.role,
          email: form.email,
        },
        data.token
      );

      navigate("/admin");
      return;

    } catch {
      // If not admin, continue with user login
    }

    response = await axios.post(
      `${API}/api/auth/login`,
      form
    );

    const { data } = response;

    login(data.data, data.token);

    navigate("/");

  } catch (err) {
    console.error(err);
    alert("Invalid email or password");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center px-6 py-20">

      {/* LOGIN CARD */}

      <div className="w-full max-w-5xl grid lg:grid-cols-2 bg-white rounded-3xl overflow-hidden shadow-2xl">

        {/* LEFT SIDE */}

        <div className="bg-slate-900 text-white p-10 md:p-14 flex flex-col justify-center">

          <p className="uppercase tracking-[4px] text-sm text-gray-400 mb-4">
            Welcome Back
          </p>

          <h1 className="text-5xl font-bold leading-tight">
            Continue Your Learning Journey
          </h1>

          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Login to access your dashboard, manage rentals,
            track orders and explore educational toys.
          </p>

          {/* FEATURES */}

          <div className="mt-12 space-y-5">

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">

                <FaEnvelope />

              </div>

              <div>

                <h3 className="font-semibold">
                  Secure Login
                </h3>

                <p className="text-gray-400 text-sm">
                  Your information stays protected.
                </p>

              </div>

            </div>

            <div className="flex items-center gap-4">

              <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">

                <FaLock />

              </div>

              <div>

                <h3 className="font-semibold">
                  Personalized Dashboard
                </h3>

                <p className="text-gray-400 text-sm">
                  Access your orders and toy collections.
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="p-10 md:p-14 flex flex-col justify-center">

          <p className="uppercase tracking-[4px] text-sm text-gray-500 mb-4">
            Login Account
          </p>

          <h2 className="text-4xl font-bold text-slate-900 mb-3">
            Sign In
          </h2>

          <p className="text-gray-500 mb-10">
            Enter your credentials to continue.
          </p>

          {/* FORM */}

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* EMAIL */}

            <div>

              <label className="block mb-2 font-medium text-slate-700">

                Email Address

              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleInput}
                className={inputStyle}
                required
              />

            </div>

            {/* PASSWORD */}

            <div>

              <label className="block mb-2 font-medium text-slate-700">

                Password

              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={form.password}
                onChange={handleInput}
                className={inputStyle}
                required
              />

            </div>

            {/* FORGOT PASSWORD */}

            <div className="flex justify-end">

              <button
                type="button"
                className="text-sm text-gray-500 hover:text-black transition"
              >
                Forgot Password?
              </button>

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

              {loading ? "Signing In..." : "Login"}

              {!loading && <FaArrowRight />}

            </button>

          </form>

          {/* REGISTER */}

          <p className="text-center text-gray-600 mt-8">

            Don’t have an account?

            <Link
              to="/register"
              className="ml-2 font-semibold text-black hover:underline"
            >
              Register
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Login;