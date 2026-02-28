import React from "react";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <button
        onClick={() => navigate("/")}
        className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition"
      >
        ←
      </button>

      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">Expansify Features</h1>
        <p className="text-gray-400">
          Smart expense tracking and analysis to help you manage your money better.
        </p>
      </div>

      {/* Feature List */}
      <div className="max-w-4xl mx-auto space-y-8">

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">💰 Expense Tracking</h2>
          <p className="text-gray-400">
            Add, update and manage your daily expenses easily in one place.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">📊 Expense Analysis</h2>
          <p className="text-gray-400">
            Analyze your spending habits with smart insights and summary reports.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">🚫 Unwanted Expense Detection</h2>
          <p className="text-gray-400">
            Identify unnecessary expenses and discover areas where you can save money.
          </p>
        </div>

        <div className="bg-zinc-900 p-6 rounded-xl">
          <h2 className="text-xl font-semibold mb-2">🔐 Secure & Private</h2>
          <p className="text-gray-400">
            Your data is protected and accessible only to you.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Features;