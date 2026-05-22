import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { API } from '../config/api';
import { useData } from '../context/DataProvider';

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });
  const { login } = useData();
  const navigate = useNavigate();

  const handleChange = async (e) => {
    e.preventDefault();
    try {

      const { data } = await axios.post(`${API}/api/auth/login`, form);
      const userToken = data.token;
      const userData = JSON.stringify(data.data);
      login(userData, userToken);
    } catch (err) {
      alert("Login failed");
      console.error("Login error:", err);
    }
  }


  return (
    <>
      <div className="max-w-5xl mx-auto mt-15 mb-15">
        <h1 className='text-center font-bold text-4xl mb-12'>LOGIN PAGE</h1>
        <form onSubmit={handleChange} className='space-y-6'>
          <input type="email" className='p-4 rounded-lg bg-gray-100 outline-none w-full' placeholder='Email' onChange={(e) => setForm({ ...form, email: e.target.value })} />
          <input type="password" className='p-4 rounded-lg bg-gray-100 outline-none w-full' placeholder='Password' onChange={(e) => setForm({ ...form, password: e.target.value })} />
          <button className="w-full bg-teal-500 text-white py-4 rounded-lg font-semibold hover:bg-teal-600 transition mb-10" onClick={() => navigate("/")}>
            SUBMIT
          </button>
        </form>
      </div>
    </>
  )
}

export default Login;