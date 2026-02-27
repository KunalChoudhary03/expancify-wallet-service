const express = require('express');
const aiContoller = require("../controllers/ai.controller")
const authMiddleware = require("../middleware/auth.middleware")
const router = express.Router();


router.post("/generate",authMiddleware, aiContoller.generateContent)


module.exports = router;