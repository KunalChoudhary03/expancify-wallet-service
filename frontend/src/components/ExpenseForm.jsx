import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ExpenseForm = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleExpense = async (e) => {
  e.preventDefault();

  try {
    const token = localStorage.getItem("token");

    const response = await axios.post(
      "http://localhost:3000/api/expenses/add",
      { title, amount, date },
      {
        headers: {
          Authorization: `Bearer ${token}`   
        }
      }
    );

    console.log(response.data);
    alert("Expense added successfully");
    navigate("/");

  } catch (err) {
    console.log(err.response?.data || err.message);
    alert("Failed to add expense. Please try again.");
  }
};

  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-12 px-4 flex items-center justify-center">
      <div className="max-w-md w-full p-6 bg-gray-800 shadow-lg rounded-2xl border border-gray-700">
        <button
          onClick={() => navigate("/")}
          className="mb-4 flex items-center gap-2 text-gray-400 hover:text-indigo-400 transition"
        >
          ← Back to Home
        </button>

        <h2 className="text-2xl font-bold text-indigo-400 mb-6 text-center">
          Add Expense
        </h2>

        <form onSubmit={handleExpense} className="space-y-4">
          
          {/* Title */}
          <div>
            <label className="block mb-1 font-medium text-gray-300">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter expense title"
              required
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-300">
              Amount
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              required
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 placeholder-gray-500"
            />
          </div>

          {/* Date */}
          <div>
            <label className="block mb-1 font-medium text-gray-300">
              Date
            </label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-500 transition font-semibold"
          >
            Add Expense
          </button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;