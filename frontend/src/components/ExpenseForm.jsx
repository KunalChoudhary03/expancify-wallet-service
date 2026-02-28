import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ExpenseForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/expenses/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "include", 
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        alert("Expense Added Successfully ");
        setFormData({ title: "", amount: "", date: "" });
      } else {
        alert(data.message || "Something went wrong");
      }
    } catch (error) {
      console.error(error);
      alert("Server Error");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-24 p-6 bg-white shadow-lg rounded-2xl">
      <button
        onClick={() => navigate("/")}
        className="mb-4 flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition"
      >
        ← Back to Home
      </button>
      <h2 className="text-2xl font-bold text-indigo-600 mb-6 text-center">
        Add Expense
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        {/* Title */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter expense title"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Amount
          </label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            placeholder="Enter amount"
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Date */}
        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;