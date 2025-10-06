
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('AI Server is ready!');
});


app.post('/api/challenge', (req, res) => {
  console.log('Received data:', req.body);
  
  if (!req.body || Object.keys(req.body).length === 0) {
    return res.status(400).json({ error: 'No data provided in the request body.' });
  }

  res.status(200).json({
    message: 'Data received successfully!',
    data: req.body
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});