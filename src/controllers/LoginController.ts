import { NextFunction, Request, Response } from 'express';
import { Router } from 'express';

@controller('/')
class LoginController {
  @get('login')
  getLogin(req: Request, res: Response): void => {
    if (req.session && req.session.loggedIn) {
      res.send(`
        <div>
        <div>You are logged in.</div>
        <a href="/logout">Logout</a>
      </div>
      `);
    } else {
      res.send(`
      <div>
        <div>You are not logged in.</div>
        <a href="/login">Login</a>
      </div>
      `)
    }
  };
}
