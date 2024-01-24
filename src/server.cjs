const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001; // Escolha a porta que desejar

app.use(express.json()); // Habilitar análise de JSON no corpo da solicitação

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/api/shorten', async (req, res) => {
  try {
    const urlToShorten = req.body.url;
    const cleanUriApiResponse = await axios.post('https://cleanuri.com/api/v1/shorten', {
      url: urlToShorten,
    });

    const shortenedUrl = cleanUriApiResponse.data.result_url;
    res.json({ shortenedUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro interno no servidor' });
  }
});

app.listen(port, () => {
  console.log(`Servidor está rodando em http://localhost:${port}`);
});
