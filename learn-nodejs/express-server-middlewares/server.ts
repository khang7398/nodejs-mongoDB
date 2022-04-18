import express from 'express';
import apiRouter from './router/apiRouter';
import userRouter from './router/userRouter';
import appLogger from './middlewares/appLogger';

const app: express.Application = express();

const hostname: string = '127.0.0.1';
const port: number = 5000;

app.get('/', (request: express.Request, response: express.Response) => {
  response.status(200).send(`<h3>hello Express js</h3>`);
});

// middlewares
app.use(appLogger);

// form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//router
app.use('/user', userRouter);
app.use('/api', apiRouter);

app.listen(port, hostname, () => {
  console.log(`node js Server is start at http://${hostname}:${port}`);
});
