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
        <ul className="hidden md:flex space-x-8 font-medium">
          <li className="hover:text-indigo-600 cursor-pointer transition">
            Home
          </li>
          <li onClick={()=>navigate("/features")} className="hover:text-indigo-600 cursor-pointer transition">
            Features
          </li>
          <li onClick={()=>navigate("/dashboard")} className="hover:text-indigo-600 cursor-pointer transition">
            Dashboard
          </li>
          <li className="hover:text-indigo-600 cursor-pointer transition">
            Contact
          </li>
        </ul>

        {/* Right Side Buttons */}
        <div className="hidden md:flex items-center space-x-4">

          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-2 rounded-lg border border-gray-400 
                       dark:border-gray-600 hover:bg-gray-100 
                       dark:hover:bg-zinc-800 transition"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

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

        {/* Mobile Icon */}
        <div className="md:hidden text-2xl cursor-pointer">
          ☰
        </div>
      </div>
    </nav>
  );
};

export default Navbar;