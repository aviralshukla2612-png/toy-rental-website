import React from 'react'
import imga from '../assets/contact1.jpg';

export const Contact = () => {

  const offices = [
  {
    id: 1,
    title: "CORPORATE OFFICE",
    address:"202-Iscon Avenue, Mithakhali, Navrangpura, Ahmedabad, Gujarat 380009",
    phone: "+91 9319313177",
  },
  {
    id: 2,
    title: "SATELLITE STORE",
    address:"GF-23 & Upper Floor, Galaxy Mall, Satellite, Ahmedabad, Gujarat",
    phone: "+91 7573002742",
  },
  {
    id: 3,
    title: "SOUTH BOPAL STORE",
    address:"FF-108, Marigold, South Bopal, Ahmedabad, Gujarat 380058",
    phone: "+91 7573002754",
  },
  {
    id: 4,
    title: "NIKOL STORE",
    address:"FF - 30, Raspan Arcade, Raspan Cross Rd, New India Colony, Nikol, Ahmedabad-382345",
    phone: "+91 7573002347",
  },
];


const style={
  backgroundImage:`url(${imga})`,
  height:'800px',
  backgroundSize:' cover',
  backgroundRepeat:"no-repeat",
  backgroundPosition:"center",
};
  return (
    <>
    <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-10 bg-gray-100 mt-10">

      {offices.map((office) => (

        <div
          key={office.id}
          className="bg-white p-8 rounded-xl shadow hover:shadow-lg transition text-center"
        >

         
          <div className="w-20 h-20 bg-red-500 flex items-center justify-center rounded-[28px] mx-auto mb-6 shadow-md">

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-10 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21s6-5.33 6-10a6 6 0 10-12 0c0 4.67 6 10 6 10z"
              />
              <circle cx="12" cy="11" r="2" />
            </svg>

          </div>

          <h3 className="text-xl font-bold mb-3">
            {office.title}
          </h3>

          <p className="text-gray-600 mb-4">
            {office.address}
          </p>

          <p className="font-semibold text-gray-800">
            Call On: {office.phone}
          </p>

          <p className="text-blue-600 mt-3 cursor-pointer hover:underline">
            Get Direction Here
          </p>

        </div>

      ))}
         
 
    </div>

     
         

    <div style={style} className=" py-48 px-4 mt-10 w-100%">

     
      <h1 className="text-center text-white text-5xl font-bold mb-12">
        GET IN TOUCH
      </h1>

      
      <div className="max-w-5xl mx-auto">

        <form className="space-y-6">

          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name*"
              className="p-4 rounded-lg bg-gray-100  outline-none"
            />

            <input
              type="text"
              placeholder="Your Mobile No*"
              className="p-4 rounded-lg bg-gray-100 w-full outline-none"
            />
          </div>

         
          <input
            type="email"
            placeholder="Your Email*"
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



        
    


    </>
      
 )
}
