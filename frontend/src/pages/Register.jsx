import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API } from '../config/api';

export const Register = () => {
  const[form,setForm]=useState({
    username:"",
    name:"",
    email:"",
    password:"",
    dob:"",
    number:"",
    gender:"",
    address:"",
  });
  const navigate = useNavigate();

  const handleChange = async(e) =>{
    e.preventDefault();
    await axios.post(`${API}/api/auth/register`,form);
    alert("Register Successful");
    navigate("/login");
  };
  return (
    <>
    <div className="max-w-5xl mx-auto mt-15 mb-15">
      <h1 className='text-center font-bold text-4xl mb-12'>REGISTERATION  PAGE</h1>
    <form onSubmit={handleChange} className='space-y-6 '>
       <div className="grid md:grid-cols-2 gap-6">
      <input type='text' className="p-4 rounded-lg bg-gray-100  outline-none w-full" placeholder='UserName' onChange={(e)=>setForm({...form,username:e.target.value})}></input>
      <input type='text'className="p-4 rounded-lg bg-gray-100  outline-none w-full" placeholder='Name' onChange={(e)=>setForm({...form,name:e.target.value})}></input>
      </div>
       <div className="grid md:grid-cols-2 gap-6">
      <input type='email'className="p-4 rounded-lg bg-gray-100  outline-none w-full" placeholder='Email' onChange={(e)=>setForm({...form,email:e.target.value})}></input>
      <input type='text' className="p-4 rounded-lg bg-gray-100  outline-none w-full" placeholder='Password' onChange={(e)=>setForm({...form,password:e.target.value})}></input>
      </div>
       <div className="grid md:grid-cols-3 gap-6">
      <input type='date'className="p-4 rounded-lg bg-gray-100  outline-none w-full" placeholder='Date Of Birth' onChange={(e)=>setForm({...form,dob:e.target.value})}></input>
      <input type='number'className="p-4 rounded-lg bg-gray-100  outline-none w-full" placeholder='Number' onChange={(e)=>setForm({...form,number:e.target.value})}></input>
       <select
           className="p-4 rounded-lg bg-gray-100 outline-none w-full" onChange={(e)=>setForm({...form,gender:e.target.value})}>
            
           <option value="">Gender</option>
           <option value="male">Male</option>
           <option value="female">Female</option>
           <option value="other">Other</option>
           </select> 
           </div>
      <input type='text'className="p-4 rounded-lg bg-gray-100  outline-none w-full" placeholder='Address' onChange={(e)=>setForm({...form,address:e.target.value})}></input>
        <button className="w-full bg-teal-500 text-white py-4 rounded-lg font-semibold hover:bg-teal-600 transition mb-10" onClick={()=>navigate("/login")}>
            SUBMIT
          </button> 
     </form>
    </div>
    </>
  )
}
