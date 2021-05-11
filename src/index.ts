import express, { Request, Response } from 'express';

const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>Hello there</div>
    `);
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
