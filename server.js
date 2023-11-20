// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5002;

app.use(bodyParser.json());
app.use(cors());

app.post('/api/calculate', (req, res) => {
  try {
    const { expression } = req.body;
    const result = eval(expression);
    res.json({ result });
  } catch (error) {
    res.status(400).json({ error: 'Invalid expression' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
