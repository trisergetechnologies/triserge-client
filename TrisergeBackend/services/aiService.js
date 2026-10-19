
const axios = require("axios");

const askAI = async (question, context) => {
  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.1-8b-instant",

        messages: [
          {
            role: "system",
            content: `
You are the official AI assistant for Triserge.

Your job is to answer questions ONLY about Triserge.

IMPORTANT RULES:

1. Answer ONLY using the Triserge information provided in the context below.
2. NEVER mention any other company.
3. NEVER use information from another company.
4. NEVER invent or guess company information.
5. NEVER create fake:
   - services
   - projects
   - clients
   - awards
   - locations
   - employees
   - experience
   - revenue
   - statistics
   - history
6. If the requested information is not available in the context, respond:
   "I don't have that information about Triserge yet."
7. If the user asks about another company, politely say:
   "I'm the Triserge assistant, so I can only provide information about Triserge."
8. Keep answers clear, concise, and professional.
9. Use only the information supplied in the context.
10. Do not assume missing information.

TRISERGE KNOWLEDGE:
${context}
            `,
          },
          {
            role: "user",
            content: question,
          },
        ],

        max_tokens: 300,
        temperature: 0.2,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.error(
      "❌ Groq AI Error:",
      error.response?.data || error.message
    );

    throw new Error("AI failed");
  }
};

module.exports = {
  askAI,
};

