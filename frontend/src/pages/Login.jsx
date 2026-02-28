import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        { email: email, password: password },
        { withCredentials: true }
      );  
      localStorage.setItem("token", response.data.token);
      navigate('/')
      console.log(response.data);
      alert("Login Successful");
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Login failed. Please check your credentials and try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
      <button
        onClick={() => navigate("/")}
        className="absolute top-6 left-6 text-gray-600 hover:text-gray-800 transition font-semibold text-lg"
      >
        ← Back
      </button>
      <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>
        <p className="text-center text-gray-600 mt-4">
          Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Register</a>
        </p>
        </form>
      </div>
    </div>
  );
};

export default Login;