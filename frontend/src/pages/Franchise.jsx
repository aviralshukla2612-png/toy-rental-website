import React from 'react'
import imga from "../assets/franchise.jpg";
 const Franchise = () => {
  return (
    <>
    <div className='mt-10 bg-gray-100'>
      <h1 className='text-center font-extrabold text-4xl'> <span className='text-red-600'>~~~~~ </span>    "Welcome to Curio Kid Toy Library Franchisee World !!!"    <span className='text-red-600'>~~~~~ </span> </h1>
   
               
                   <div className='  py-16 px-6'>
                    <div className=' flex  bg-purple-900 max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center'>
                      <div className='  rounded-xl p-10 text-white'>
                             <h2 className='text-4xl font-bold  mb-10 text-center'>GET IN TOUCH</h2>
                             <form className='space-y-5  '>
                              <input type='text' placeholder='YOUR NAME' className='w-full p-4 rounded-md bg-white text-gray-700'/>
                              <input type='number' placeholder='YOUR MOBILE NO.' className='w-full p-4 rounded-md bg-white text-gray-700'/>
                              <input type='email' placeholder='YOUR EMAIL' className='w-full p-4 rounded-md text-gray-700 bg-white'/>
                              <input type='text' placeholder='YOUR CITY' className='w-full p-4 rounded-md text-gray-700 bg-white'/>
                              <textarea placeholder='MESSAGE' className='w-full p-4 rounded-md text-gray-700 bg-white' rows="4"/>
                               <button className="w-full bg-teal-400 hover:bg-teal-500 text-white font-semibold py-3 rounded-md">SUBMIT</button>
                             </form>
                        </div>
                      <div className='rounded-xl overflow-hidden '>
                          <img src={imga} alt='Franchise banner' className='w-full  h-full p-5 object-center'/> 
                      </div>


                      </div>
                    </div>
                   </div>
               
      
   

    </>
  )
}

export default Franchise;