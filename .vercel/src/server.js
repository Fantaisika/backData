import express from 'express';
import dotenv from 'dotenv';

const app = express();
const port = process.env.PORT || 3000; 

app.get('/', (req, res) => {
  res.send('Bonjour du backdata');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});