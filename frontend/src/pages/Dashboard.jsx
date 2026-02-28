import { useNavigate } from "react-router-dom";
const demoData = [
  { title: "Food", amount: 1200 },
  { title: "Transport", amount: 800 },
  { title: "Shopping", amount: 2000 },
  { title: "Snacks", amount: 300 }
];

const Dashboard = () => {
  const navigate = useNavigate();
  const total = demoData.reduce((acc, curr) => acc + curr.amount, 0);

  const unwanted = demoData
    .filter(item => item.amount < 500)
    .reduce((acc, curr) => acc + curr.amount, 0);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <button
        onClick={() => navigate("/")}
        className="mb-6 flex items-center gap-2 text-gray-400 hover:text-white transition"
      >
        ←
      </button>

      {/* Heading */}
      <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

      {/* Summary Cards */}
      <div className="grid md:grid-cols-3 gap-6 mb-10">

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <p className="text-gray-400">Total Expenses</p>
          <h2 className="text-2xl font-bold mt-2">₹{total}</h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <p className="text-gray-400">Unwanted Expenses</p>
          <h2 className="text-2xl font-bold mt-2 text-red-500">₹{unwanted}</h2>
        </div>

        <div className="bg-zinc-900 p-6 rounded-2xl">
          <p className="text-gray-400">Savings Potential</p>
          <h2 className="text-2xl font-bold mt-2 text-green-500">
            ₹{unwanted}
          </h2>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4 mb-10">

        <button  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl transition">
           Analyze Expenses
        </button>

      </div>

      {/* Insight Section */}
      <div className="bg-zinc-900 p-6 rounded-2xl">
        <h3 className="text-xl font-semibold mb-3">Smart Insight</h3>
        <p className="text-gray-400">
          You are spending more on Shopping compared to other categories.
          Try reducing impulsive purchases.
        </p>
      </div>

    </div>
  );
};

export default Dashboard;