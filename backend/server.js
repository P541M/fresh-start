const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get('/api-key', (req, res) => {
  res.json({ apiKey: process.env.GOOGLE_API_KEY });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
