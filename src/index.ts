import express from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['dkjhskdh'] }));
app.use(AppRouter.getInstance());

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
