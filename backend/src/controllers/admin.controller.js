const userModel = require("../model/user.model");
const expenseModel = require("../model/expence.model")
async function getUser(req, res) {
    try {
        const users = await userModel.find({});

        return res.status(200).json({
            message: "users retrieved successfully",
            users
        });
    }
    catch (err) {
        return res.status(500).json({
            message: "server error",
            err
        });
    }
}

async function getUserExpenseById(req, res) {
    try {
        const expenses = await expenseModel.find({ paidBy: req.params.id });

        if (!expenses || expenses.length === 0) {
            return res.status(404).json({
                message: "expense not found"
            });
        }

        return res.status(200).json({
            message: "expense retrieved Successfully",
            expenses
        });

    } catch (err) {
        return res.status(500).json({
            message: "server error",
            err
        });
    }
}

module.exports = {
    getUser,getUserExpenseById
}

