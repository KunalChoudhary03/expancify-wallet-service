import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-20 pt-28">
      <div className="max-w-4xl mx-auto">

        {/* Back Button */}
        <button
          onClick={() => navigate("/")}
          className="text-gray-400 hover:text-indigo-400 mb-8 flex items-center gap-2 transition duration-300 animate-in fade-in slide-in-from-left duration-500"
        >
          <span>←</span> Back
        </button>

        {/* Heading */}
        <h1 className="text-4xl font-bold mb-6 text-[#1C4D8D] animate-in fade-in slide-in-from-top duration-500 delay-100">
          About Expansify
        </h1>

        {/* Intro */}
        <p className="text-gray-300 leading-relaxed mb-6">
          Hi, I'm <span className="text-white font-semibold">Kunal Choudhary</span>, 
          the creator of <span className="text-[#1C4D8D] font-semibold">Expansify</span>.
          Expansify is more than just an expense tracker — it’s a smart financial 
          awareness platform designed to help people take control of their money 
          and eliminate unnecessary spending.
        </p>

        {/* Vision */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#1C4D8D]">
          My Vision
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          My vision is to grow Expansify into a powerful financial companion 
          that not only tracks expenses but also intelligently analyzes spending 
          patterns using AI. I want to help individuals identify unwanted 
          expenses, reduce wasteful spending, and build better financial habits.
        </p>

        <p className="text-gray-300 leading-relaxed mb-6">
          In the future, I aim to expand Expansify into a complete financial 
          ecosystem — offering budgeting tools, smart insights, savings goals, 
          and real-time financial recommendations.
        </p>

        {/* Mission */}
        <h2 className="text-2xl font-semibold mt-8 mb-4 text-[#1C4D8D]">
          Mission
        </h2>

        <p className="text-gray-300 leading-relaxed mb-6">
          To empower people with clarity over their finances and help them 
          minimize unwanted expenses through technology and smart analytics.
        </p>

        {/* GitHub */}
        <div className="mt-10">
          <a
            href="https://github.com/KunalChoudhary03"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#1C4D8D] hover:bg-[#163c6d] transition px-6 py-3 rounded-xl font-semibold shadow-lg"
          >
            View My GitHub
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;