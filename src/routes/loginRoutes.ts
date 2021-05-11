import { Request, Response } from 'express';
import { Router } from 'express';

interface RequestWithBody extends Request {
  body: {[key: string]: string | undefined }
}

const router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send(`
      <form method="POST">
         <div>
          <label>Email</label>
          <input name="email" />
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password" />
        </div>
        <button>Submit</button>
      </form>
    `);
});

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;
  // type gaurd
  if (email){
    res.send(email + password);
  } else {
    res.send('You must provide and email')
  }
});

export { router };
