import React from "react";
import img from '../assets/image.png';
import { FaFacebookF, FaInstagram, FaTwitter,FaLinkedinIn,FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-6">

      <div className="max-w-7xl mx-auto px-3 grid md:grid-cols-2 lg:grid-cols-4 gap-10">

        <div>
          <img src={img} height={150} width={150}/>
          <p className="text-gray-300">
            A fun place where kids discover amazing toys, creativity and learning.
            We bring happiness with every toy.
          </p>

          <div className="flex gap-4 mt-5 text-xl">
            <FaFacebookF className="cursor-pointer hover:text-yellow-400"/>
            <FaInstagram className="cursor-pointer hover:text-yellow-400"/>
            <FaTwitter className="cursor-pointer hover:text-yellow-400"/>
            <FaLinkedinIn className="cursor-pointer hover:text-yellow-400"/>
            <FaYoutube className="cursor-pointer hover:text-yellow-400"/> 
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-yellow-400 cursor-pointer">Home</li>
            <li className="hover:text-yellow-400 cursor-pointer">About</li>
            <li className="hover:text-yellow-400 cursor-pointer">Games</li>
            <li className="hover:text-yellow-400 cursor-pointer">Contact</li>
          </ul>
        </div>

       
        <div>
          <h2 className="text-xl font-semibold mb-4">Categories</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-yellow-400 cursor-pointer">Educational Toys</li>
            <li className="hover:text-yellow-400 cursor-pointer">Soft Toys</li>
            <li className="hover:text-yellow-400 cursor-pointer">Board Games</li>
            <li className="hover:text-yellow-400 cursor-pointer">Creative Kits</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">CORPORATE OFF.</h2>
          <p className="text-gray-300">
            202-Iscon Avenue, Navrangpura, Ahmedabad-09
          </p>

          <p className="text-gray-300 mt-2">
            +91 9319313177
          </p>

           <p className="text-blue-600 mt-3 cursor-pointer hover:underline">
            Get Direction Here
          </p>
          
        </div>
         <div >
          <h2 className="text-xl font-semibold mb-4">SATELLITE STORE</h2>
          <p className="text-gray-300">
            GF-23 & Upper Floor,Galaxy Mall,Bimnagar Rd,opp.Ocean Park,Acharya Narendradev Nagar,Satelllite,Ahmedabad,Gujarat 380015
          </p>

          <p className="text-gray-300 mt-2">
            +91 7573002742
          </p>

          <p className="text-blue-600 mt-3 cursor-pointer hover:underline">
            Get Direction Here
          </p>
        </div>
         <div>
          <h2 className="text-xl font-semibold mb-4">SO-BO STORE</h2>
          <p className="text-gray-300">
           FF-108, Marigold, South Bopal, Ahmedabad, Gujarat 380058
          </p>

          <p className="text-gray-300 mt-2">
            +91 7573002754
          </p>

          <p className="text-blue-600 mt-3 cursor-pointer hover:underline">
            Get Direction Here
          </p>
        </div>
         <div className="">
          <h2 className="text-xl font-semibold mb-4">NIKOL STORE</h2>
          <p className="text-gray-300">
            FF - 30, Raspan Arcade, Raspan Cross Rd, New India Colony, Nikol, Ahmedabad-382345
          </p>

          <p className="text-gray-300 mt-2">
            +91 7573002347
          </p>

          <p className="text-blue-600 mt-3 cursor-pointer hover:underline">
           Get Direction Here
          </p>
        </div>

      </div>

    
     

    </footer>
  );
};