import React from "react";
import { useNavigate } from "react-router-dom";

const demoExpenses = [
  { id: 1, title: "Naashta", amount: 90, paidBy: "Kunal Choudhary (me)", day: "Today" },
  { id: 2, title: "Chai", amount: 30, paidBy: "Kunal Choudhary (me)", day: "Today" },
  { id: 3, title: "Kirana", amount: 80, paidBy: "Siddharth", day: "Yesterday" },
  { id: 4, title: "Nanaksar", amount: 600, paidBy: "Siddharth", day: "Yesterday" },
  { id: 5, title: "Csb", amount: 45, paidBy: "Kunal Choudhary (me)", day: "Yesterday" }
];

const ExpenseList = () => {
  const navigate = useNavigate();
  const todayExpenses = demoExpenses.filter(e => e.day === "Today");
  const yesterdayExpenses = demoExpenses.filter(e => e.day === "Yesterday");

  const totalExpenses = demoExpenses.reduce((acc, curr) => acc + curr.amount, 0);
  const myExpenses = demoExpenses
    .filter(e => e.paidBy.includes("(me)"))
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="min-h-screen bg-black text-white px-4 py-6">

      {/* Top Summary */}
      <div className="flex justify-between mb-8">
        <div>
          <p className="text-gray-400 text-sm">My Expenses</p>
          <h2 className="text-2xl font-bold">₹{myExpenses.toFixed(2)}</h2>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Total Expenses</p>
          <h2 className="text-2xl font-bold">₹{totalExpenses.toFixed(2)}</h2>
        </div>
      </div>

      {/* Today Section */}
      <h3 className="text-xl font-semibold mb-3">Today</h3>

      <div className="space-y-4">
        {todayExpenses.map((expense) => (
          <div
            key={expense.id}
            className="bg-zinc-900 rounded-2xl p-4 flex justify-between items-center"
          >
            <div>
              <h4 className="text-lg font-medium">{expense.title}</h4>
              <p className="text-sm text-gray-400">
                Paid by {expense.paidBy}
              </p>
            </div>

            <h3 className="text-lg font-semibold">
              ₹{expense.amount.toFixed(2)}
            </h3>
          </div>
        ))}
      </div>

      {/* Yesterday Section */}
      <h3 className="text-xl font-semibold mt-8 mb-3">Yesterday</h3>

      <div className="space-y-4">
        {yesterdayExpenses.map((expense) => (
          <div
            key={expense.id}
            className="bg-zinc-900 rounded-2xl p-4 flex justify-between items-center"
          >
            <div>
              <h4 className="text-lg font-medium">{expense.title}</h4>
              <p className="text-sm text-gray-400">
                Paid by {expense.paidBy}
              </p>
            </div>

            <h3 className="text-lg font-semibold">
              ₹{expense.amount.toFixed(2)}
            </h3>
          </div>
        ))}
      </div>

      {/* Floating Button */}
      <button onClick={() => navigate("/AddExpense")} className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center text-3xl shadow-lg">
        +
      </button>

    </div>
  );
};

export default ExpenseList;