import express from 'express';
import { router } from './routes/loginRoutes';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['dkjhskdh'] }));
app.use(router);
app.use(AppRouter.getInstance());

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
