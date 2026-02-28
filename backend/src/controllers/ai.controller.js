const expenseModel = require("../model/expence.model");
const generateResponse = require("../services/ai.services");

async function generateContent(req, res) {
  try {
    //  Get user expenses
    const expenses = await expenseModel.find({
      paidBy: req.user._id
    });

    if (!expenses.length) {
      return res.status(404).json({
        message: "No expenses found for analysis"
      });
    }

    // Create structured prompt with formatted expenses
    const expenseList = expenses.map(exp => 
      `${exp.title}: ₹${exp.amount} on ${new Date(exp.date).toLocaleDateString()}`
    ).join('\n');

    const prompt = `ANALYZE THESE USER EXPENSES STRICTLY:

${expenseList}

RESPOND WITH EXACT FORMAT:
=== Expense Analysis ===
Summary: [brief overview]
Unnecessary Spending: [list wasteful items only]
Spending Patterns: [recurring wasteful patterns]
Smart Suggestions: [actionable cost cuts]
Estimated Monthly Savings Potential: [exact ₹ amount]`;

    // Call AI service
    const response = await generateResponse(prompt);

    res.status(200).json({
      message: "AI response generated successfully",
      response
    });

  } catch (err) {
    res.status(500).json({
      message: "Error generating AI response",
      error: err.message
    });
  }
}

module.exports = {
  generateContent
};