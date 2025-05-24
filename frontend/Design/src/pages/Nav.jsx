import React from 'react'
import {useNavigate} from "react-router-dom";

const Nav = () => {
  const hi = useNavigate();
  const handlewent = () => {
    hi("/pricing");}

    const handleproducts=()=>{
      hi("/productpage")
    }
  return (
<nav className="bg-slate-800 text-white border-b border-slate-300 shadow-sm">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
    
      <div className="text-2xl font-semibold text-indigo-600">DesignSite</div>

      
      <div className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-indigo-600 transition">Home</a>
        <a href="#" className="hover:text-indigo-600 transition"onClick={handleproducts}>products</a>
        <a href="#" className="hover:text-indigo-600 transition "onClick={handlewent}>Pricing</a>
        <a href="#" className="hover:text-indigo-600 transition">Contact</a>
      </div>

      
      <div className="md:hidden">
        <button id="menuToggle" className="text-indigo-600 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  </div>

  
  <div id="mobileMenu" className="md:hidden px-4 pb-4 hidden">
    <a href="#" class="block py-2 hover:text-indigo-600">Home</a>
    <a href="#" class="block py-2 hover:text-indigo-600">Features</a>
    <a href="#" class="block py-2 hover:text-indigo-600">Pricing</a>
    <a href="#" class="block py-2 hover:text-indigo-600">Contact</a>
  </div> <h1>U r in next page</h1>

</nav>

)
}

  


export default Nav
