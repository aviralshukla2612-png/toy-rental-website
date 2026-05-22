import React from 'react'
import seed from '../assets/plan1.png';
import grow from '../assets/plan2.png';
import plant from '../assets/plan3.png';
import { useNavigate } from "react-router-dom";

 const Plans = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 py-16 mt-10">

      <h1 className="font-bold text-4xl text-center mb-12">OUR PLANS</h1>

      <div className="grid grid-cols-4 max-w-6xl mx-auto gap-6">

        
       
<div className="rounded-xl overflow-hidden text-right">

  
  <div className="p-6 h-[150px] flex items-center justify-end">
    <h2 className="text-xl font-bold">OUR PLAN</h2>
  </div>

  <div className="p-6">
    <ul className="space-y-4 font-semibold">
      <li>Toys at a time</li>
      <li>Toys during Month</li>
      <li>Books</li>
      <li>Rotation Period</li>
      <li>One Time Membership Fee</li>
      <li>Refundable Deposit</li>
      <li>Price - 1 Month</li>
      <li>Price - 3 Months</li>
      <li>Price - 6 Months</li>
      <li>Door Delivery</li>
    </ul>
  </div>

</div>

<div className="bg-orange-500 rounded-xl overflow-hidden text-white text-center">

  <div className="bg-orange-600 p-6">
    <img src={seed} className="mx-auto mb-2"/>
    <h2 className="text-xl font-bold">SEED</h2>
  </div>

 
  <div className="bg-orange-500 p-6">
    <ul className="space-y-4 font-semibold">
      <li>1 Toy</li>
      <li>2 Toys</li>
      <li>2 Books</li>
      <li>15 Days</li>
      <li>$250</li>
      <li>$1250</li>
      <li>$350</li>
      <li>$1000</li>
      <li>$2000</li>
      <li>Yes</li>
    </ul>
  </div>

</div>

  

  <div className="bg-green-500 rounded-xl overflow-hidden text-white text-center">

  <div className="bg-green-600 p-6">
    <img src={grow} className="mx-auto mb-2"/>
    <h2 className="text-xl font-bold">GROW</h2>
  </div>

 
  <div className="bg-green-500 p-6">
    <ul className="space-y-4 font-semibold">
      <li>1 Toy</li>
      <li>2 Toys</li>
      <li>2 Books</li>
      <li>15 Days</li>
      <li>$250</li>
      <li>$1250</li>
      <li>$350</li>
      <li>$1000</li>
      <li>$2000</li>
      <li>Yes</li>
    </ul>
  </div>

</div>

       
    <div className="bg-sky-500 rounded-xl overflow-hidden text-white text-center">

  <div className="bg-sky-600 p-6">
    <img src={plant} className="mx-auto mb-2"/>
    <h2 className="text-xl font-bold">PLANT</h2>
  </div>

 
  <div className="bg-sky-500 p-6">
    <ul className="space-y-4 font-semibold">
      <li>1 Toy</li>
      <li>2 Toys</li>
      <li>2 Books</li>
      <li>15 Days</li>
      <li>$250</li>
      <li>$1250</li>
      <li>$350</li>
      <li>$1000</li>
      <li>$2000</li>
      <li>Yes</li>
    </ul>
  </div>

</div>

      </div>
    
 <div className="bg-gray-100 py-20">

      <h1 className="text-4xl font-bold text-center text-red-500 mb-16">
        Big Toys / Riders
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6">

       
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">

          <div className="bg-green-600 text-white text-center py-5 font-semibold text-lg">
            NON - ELECTRONIC
          </div>

          <div className="p-10 text-center space-y-6">

            <h2 className="text-4xl font-bold text-green-600">
              MRP 10%
            </h2>

            <p className="text-gray-600">
              Refundable Deposit <span className="font-semibold">Same as MRP</span>
            </p>

            <p className="font-medium text-gray-700">
              Slide / Trampoline / Ball Pool / Swing
            </p>

            <button className="mt-6 px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 cursor-pointer transition">
              SUBSCRIBE
            </button>

          </div>
        </div>

        
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">

          <div className="bg-sky-600 text-white text-center py-5 font-semibold text-lg">
            ELECTRONIC
          </div>

          <div className="p-10 text-center space-y-6">

            <h2 className="text-4xl font-bold text-sky-600">
              MRP 15%
            </h2>

            <p className="text-gray-600">
              Refundable Deposit <span className="font-semibold">Same as MRP</span>
            </p>

            <p className="font-medium text-gray-700">
              Car / Bike
            </p>

            <button className="mt-6 px-8 py-3 bg-sky-600 text-white rounded-full hover:bg-sky-700 transition cursor-pointer">
              SUBSCRIBE
            </button>

          </div>
        </div>

      </div>
    </div>
     <div className="bg-gray-100 py-20">

      <h1 className="text-4xl font-bold text-center text-red-500 mb-16">
        PARTY-TOYS PLAN
      </h1>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 px-6">

       
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">

          <div className="bg-yellow-600 text-white text-center py-5 font-bold text-lg">
            MINI PARTY
          </div>

          <div className="p-10 text-center space-y-6">

            <h2 className="text-4xl font-bold text-yellow-600">
              $ 2000
            </h2>

            <p className="text-gray-600">
              4 TOYS AT A TIME
            </p>

            <p className="font-medium text-gray-700">
              5 HOUR TIME DURATION
            </p>
             <p className="font-medium text-gray-700">
               WITH REFUNDABLE SECURITY DEPOSITE
            </p>

            <button className="mt-6 px-8 py-3 bg-yellow-600 text-white rounded-full hover:bg-yellow-700 transition cursor-pointer">
              SUBSCRIBE
            </button>

          </div>
        </div>

        
        <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 overflow-hidden">

          <div className="bg-green-600 text-white text-center py-5 font-semibold text-lg">
              SUPER PARTY
          </div>

          <div className="p-10 text-center space-y-6">

            <h2 className="text-4xl font-bold text-sky-600">
              $ 3600
            </h2>

            <p className="text-gray-600">
              8 TOYS AT A TIME
            </p>

            <p className="font-medium text-gray-700">
              5 HOUR TIME DURATION
            </p>
             <p className="font-medium text-gray-700">
             WITH REFUNDABLE SECURITY DEPOSITE
            </p>

            <button className="mt-6 px-8 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition cursor-pointer">
              SUBSCRIBE
            </button>

          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Plans;
