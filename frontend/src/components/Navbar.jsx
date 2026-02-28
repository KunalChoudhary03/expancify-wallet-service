import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 shadow-md 
                    bg-white text-black 
                    dark:bg-black dark:text-white transition">
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="text-2xl font-bold text-indigo-600 cursor-pointer"
             onClick={() => navigate("/")}>
          Expansify
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-8 font-medium items-center">
          <li className="hover:text-indigo-600 cursor-pointer transition">
            Home
          </li>
          
          {/* Dashboard - Special Highlight */}
          <li 
            onClick={()=>navigate("/dashboard")} 
            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 text-white px-5 py-2.5 rounded-full font-semibold cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-110 relative overflow-hidden group"
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="text-lg">✨</span>
              AI Dashboard
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </li>
            <li onClick={()=>navigate("/features")} className="hover:text-indigo-600 cursor-pointer transition">
            Features
          </li>
          <li onClick={()=>navigate("/contact")} className="hover:text-indigo-600 cursor-pointer transition">
            Contact
          </li>
        </ul>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 dark:hover:bg-zinc-800 transition"
          >
            Login
          </button>

          <button
            onClick={() => navigate("/register")}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile AI Dashboard Button */}
        <button
          onClick={() => navigate("/dashboard")}
          className="md:hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 hover:scale-105 flex items-center gap-1.5"
        >
          <span>✨</span>
          AI
        </button>
      </div>
    </nav>
  );
};

export default Navbar;