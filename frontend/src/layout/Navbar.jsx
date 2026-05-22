import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import img from '../assets/image.png';
import { FaShoppingCart, FaBars, FaTimes, FaUser } from 'react-icons/fa';
import { useData } from '../context/DataProvider';
import { Dashboard } from '../pages/Dashboard';
export const Navbar = () => {
  const navigate = useNavigate();
  const { cart, isLogIn, token, user } = useData();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdown, setDropdow] = useState(false);

  const linkItems = [
    { name: 'HOME', link: '/' },
    { name: 'ABOUT', link: '/about' },
    { name: 'GAMES', link: '/game' },
    { name: 'PLANS', link: '/plan' },
    { name: 'FRANCHISE', link: '/fran' },
    { name: 'BLOGS', link: '/blog' },
    { name: 'CONTACT US', link: '/contact' }
  ];


  const handleDropdown = () => {
    setDropdow(prev => !prev);
  };

  return (
    <>

      <div className="bg-teal-400 text-white flex flex-col md:flex-row items-center justify-between px-4 py-2 text-sm md:text-base">
        <div>
          Contact us on
          <span className="mx-2 font-semibold text-black">+91 931 931 7177</span>
          or
          <span className="mx-2 font-semibold text-black">info.curiokid@gmail.com</span>
        </div>

        <div className="mt-2 md:mt-0">
          
              <button
                className='text-black hover:bg-white px-2 py-1 mx-2 rounded'
                onClick={() => navigate("/login")}
              >
                Login
              </button>
              <button
                className='text-black hover:bg-white px-2 py-1 rounded'
                onClick={() => navigate("/register")}
              >
                Register
              </button>
            
        </div>
      </div>


      <div className="w-full bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

          <img
            src={img}
            className="h-10 md:h-12 cursor-pointer"
            onClick={() => navigate("/")}
          />

          <ul className="hidden md:flex items-center gap-6 text-sm font-semibold">
            {linkItems.map((data, i) => (
              <li key={i}>
                <NavLink
                  to={data.link}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded transition ${isActive
                      ? "bg-yellow-400 text-white"
                      : "text-gray-700 hover:bg-yellow-300 hover:text-white"
                    }`
                  }
                >
                  {data.name}
                </NavLink>
              </li>
            ))}
          </ul>


         <div className="flex items-center gap-4">

  {isLogIn && token ? (
    <div className="relative">
      
   
     <div
  className="w-10 h-10 flex items-center justify-center rounded-full 
             bg-amber-100 text-amber-500 border border-amber-200 
             cursor-pointer capitalize"
  onClick={handleDropdown}
>
  {user?.username?.slice(0, 1)}
</div>

     
      {dropdown && (
        <div className="absolute right-0 mt-3 w-52 bg-white rounded-xl shadow-xl border border-gray-200 py-3 z-50">

          <ul className="text-gray-700 text-sm">

            <li><Link to="/dash" className="block px-4 py-2 hover:bg-gray-100 transition">Dashboard</Link></li>
            <li><Link to="/cart" className="block px-4 py-2 hover:bg-gray-100 transition">Order</Link></li>

           

            <li className="border-t mt-2 pt-2">
              <button
                className="w-full text-left px-4 py-2 text-red-500 cursor-pointer hover:bg-red-100 transition rounded-md"onClick={()=>navigate('/')}>
                Log Out
              </button>
            </li>

          </ul>
        </div>
      )}
    </div>
  ) : (
    <Link
      className="px-4 py-2 border border-amber-400 rounded-full 
                 text-amber-600 hover:bg-amber-100 transition"
      to="/login"
    >
      Log In
    </Link>
  )}

  
  <button
    onClick={() => navigate("/cart")}
    className="relative flex items-center gap-2 bg-yellow-400 
               hover:bg-yellow-500 text-black px-4 py-2 
               rounded-full shadow-md transition"
  >
    <FaShoppingCart />
    <span className="hidden sm:inline font-medium">Cart</span>

    {cart.length > 0 && (
      <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs 
                       w-5 h-5 flex items-center justify-center rounded-full shadow">
        {cart.length}
      </span>
    )}
  </button>

  <button
    className="md:hidden text-2xl p-2 rounded-md hover:bg-gray-100 transition"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    {menuOpen ? <FaTimes /> : <FaBars />}
  </button>

</div>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg px-4 py-3">
            <ul className="flex flex-col gap-3 text-sm font-semibold">
              {linkItems.map((data, i) => (
                <li key={i}>
                  <NavLink
                    to={data.link}
                    onClick={() => setMenuOpen(false)}
                    className="block px-3 py-2 rounded text-gray-700 hover:bg-yellow-300 hover:text-white"
                  >
                    {data.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};