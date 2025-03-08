import express from 'express';
import morgan from 'morgan';

const app = express();

app.use(morgan('combined'));


app.get('/test', (req, res) => {
  const testValues = [16, "soso", true];
  res.json(testValues);
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});