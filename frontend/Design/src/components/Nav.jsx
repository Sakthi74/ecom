import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const [display, setDisplay] = useState(false); 
  const navigate = useNavigate();

  const handleWent = () => {
    navigate("/pricing");
  };

  const handleProducts = () => {
    navigate("/productpage");
  };

  const toggleMenu = () => {
    setDisplay(!display); 
  };

  return (
    <nav className="bg-slate-800 text-white border-b border-slate-300 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-2xl font-extrabold">SHOPKART</div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#" className="hover:text-indigo-600 transition">Home</a>
            <a href="#" className="hover:text-indigo-600 transition" onClick={handleProducts}>Products</a>
            <a href="#" className="hover:text-indigo-600 transition" onClick={handleWent}>Cart</a>
          <button className=' cursor-pointer p-1 rounded-sm  border-2 border-white bg-yellow-400 text-black hover:bg-red-400'>Logout</button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-indigo-600 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

     
      {display && (
        <div className="md:hidden px-4 pb-4 flex flex-col items-center">
          <a href="#" className="block py-2 hover:text-indigo-600">Home</a>
          <a href="#" className="block py-2 hover:text-indigo-600" onClick={handleProducts}>Products</a>
          <a href="#" className="block py-2 hover:text-indigo-600" onClick={handleWent}>Cart</a>
          <a href="#" className="block py-2 hover:text-indigo-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Nav;
