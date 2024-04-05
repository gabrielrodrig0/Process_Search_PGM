const express = require('express');
const app = express();

const cors = require('cors');
const bodyParser = require("body-parser");

const PORT = 3039;

// Middleware CORS
app.use(cors());
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
});

app.post('/proxy', async (req, res) => {
  const { url, numeroProcesso } = req.body;

  console.log(url);
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'APIKey cDZHYzlZa0JadVREZDJCendQbXY6SkJlTzNjLV9TRENyQk1RdnFKZGRQdw==',
      },
      body: JSON.stringify({
        "query": {
          "match": {
            "numeroProcesso": numeroProcesso
          }
        }
      })
    });

    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao buscar dados:', error);
    res.status(500).json({ error: 'Erro ao buscar dados' });
  }
});


app.get("/", (req, res) => {
  res.send("seila");
});

app.listen(PORT, () => {
  console.log(`Servidor Node.js rodando na porta ${PORT}`);
});
