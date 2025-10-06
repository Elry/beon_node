import express, { Express, Request, Response } from 'express';

const app: Express = express();
const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  res.send('Server running');
});

app.post('/api/challenge', (req: Request, res: Response) => {
  console.log('post-body', req.body);

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
