const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.post('/chat', async (req, res) => {
  const userMessage = req.body.message;
  if (!userMessage) {
    return res.status(400).json({ error: "User input is empty", reply: "Please provide a message." });
  }

  // Resposta fixa simulando a Lulu
  res.json({ reply: "Hello! I'm Lulu. How can I help you today? 😊" });  
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
}); 