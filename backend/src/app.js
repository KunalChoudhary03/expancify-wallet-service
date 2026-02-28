const express = require('express')
const authRoutes = require('./routes/auth.routes')
const expenseRoutes = require('./routes/expense.routes')
const aiRoutes = require('./routes/ai.routes')  
const cors = require('cors')
const app = express()

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}))
app.use(express.json())
app.use("/api/auth", authRoutes)
app.use("/api/expenses", expenseRoutes)
app.use("/api/ai", aiRoutes)
module.exports = app