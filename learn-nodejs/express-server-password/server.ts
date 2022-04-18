import express from 'express';
import userRouter from './router/userRouter';

const app: express.Application = express();

//form data
app.use(express.json());

const hostname: string = '127.0.0.1';
const port: number = 5000;

app.get('/', (request: express.Request, response: express.Response) => {
  response.status(200).send(`<h3>hello Express js</h3>`);
});

//router

app.use('/user', userRouter);

app.listen(port, hostname, () => {
  console.log(`node js Server is start at http://${hostname}:${port}`);
});
