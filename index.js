const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express on Vercel!' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
module.exports = app;
