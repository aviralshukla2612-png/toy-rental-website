import React from 'react'
import imga from '../assets/inquire1.png'

export const Inquire = () => {
    const style={
      backgroundImage:`url(${imga})`,
      height:'800px',
      backgroundSize:' cover',
      backgroundRepeat:"no-repeat",
      backgroundPosition:"center",
    };
  return (
     <div style={style} className=" py-20 px-4  w-100%">

     
      <h1 className="text-center text-white text-5xl font-bold mb-12">
        GET IN TOUCH
      </h1>

      
      <div className="max-w-5xl mx-auto ">

        <form className="space-y-6">

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="First Name*"
              className="p-4 rounded-lg bg-gray-100  outline-none"
            />

            <input
              type="text"
              placeholder="Last Name*"
              className="p-4 rounded-lg bg-gray-100 w-full outline-none"
            />
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="number"
              placeholder="Your Moblie No.*"
              className="p-4 rounded-lg bg-gray-100  outline-none"
            />

            <input
              type="email"
              placeholder="Your Email*"
              className="p-4 rounded-lg bg-gray-100 w-full outline-none"
            />
          </div>
         <div className="grid md:grid-cols-2 gap-6">
          <select
           className="p-4 rounded-lg bg-gray-100 outline-none">
            
           <option value="">Gender Of Child*</option>
           <option value="male">Boy</option>
           <option value="female">Girl</option>
           <option value="other">Other</option>
           </select>

            <select
           className="p-4 rounded-lg bg-gray-100 outline-none">
            
           <option value="">Age Of Child*</option>
           <option value="">0-4 Year</option>
           <option value="">4-7 Year</option>
           <option value="">7+ Year</option>
           </select>
          </div>
         
          <input
            type="text"
            placeholder="Choose Nearest Center *"
            className="p-4 rounded-lg bg-gray-100 w-full outline-none"
          />

         
          <textarea
            rows="4"
            placeholder="Message*"
            className="p-4 rounded-lg bg-gray-100 w-full outline-none"
          ></textarea>

        
          <button className="w-full bg-teal-500 text-white py-4 rounded-lg font-semibold hover:bg-teal-600 transition">
            SUBMIT
          </button>

        </form>

      </div>
    </div>
  )
}
