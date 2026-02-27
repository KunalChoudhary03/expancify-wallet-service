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

    // Create structured prompt
    const prompt = `
    Analyze the following expenses and provide:
    - Total spending
    - Spending pattern
    - Saving suggestions
    - Any unusual activity
    
    Expense Data:
    ${JSON.stringify(expenses)}
    `;

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