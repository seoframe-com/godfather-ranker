const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', service: 'Godfather Ranker' });
});

// API routes placeholder
app.get('/api/analytics/:siteId', (req, res) => {
  res.json({ message: 'Analytics data endpoint', siteId: req.params.siteId });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Godfather Ranker running on port ${PORT}`);
});
