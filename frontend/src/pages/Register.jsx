import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: ""
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/register",
        { email, password, username, fullName },
        { withCredentials: true }
      );

      console.log(response.data);
      alert("Registration Successful");
      navigate("/");
    } catch (err) {
      console.log(err.response?.data || err.message);
      alert("Registration Failed");
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
          Create Account
        </h2>

        <form onSubmit={handleRegister} className="space-y-4">

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            placeholder="First Name"
            value={fullName.firstName}
            onChange={(e) =>
              setFullName({ ...fullName, firstName: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="text"
            placeholder="Last Name"
            value={fullName.lastName}
            onChange={(e) =>
              setFullName({ ...fullName, lastName: e.target.value })
            }
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Register
          </button>
      <p className="text-center text-gray-600 mt-4">
        Already have an account? <a href="/login" className="text-blue-600 hover:underline">Login</a>
      </p>
        </form>
      </div>
    </div>
  );
};

export default Register;