const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({});

async function generateResponse(prompt) {
  const systemPrompt = `You are a smart and practical financial assistant for an expense tracking app called Expansify.

Your goal is to help users clearly understand where they are overspending and how they can save money, more focus on unnecessary expenses.

STRICT RULES:
- Follow the exact format given below.
- Do NOT add extra headings.
- Keep response under 250 words.
- Be direct and user-friendly.

Format:

=== Expense Analysis ===
Summary:
Unnecessary Spending:
Spending Patterns:
Smart Suggestions:
Estimated Monthly Savings Potential:`;

  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    systemInstruction: systemPrompt,
    contents: [{
      role: "user",
      parts: [{ text: prompt }]
    }],
    generationConfig: {
      temperature: 0.3
    }
  });

  return response.text;
}

module.exports = generateResponse;