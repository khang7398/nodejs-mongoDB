import express, { Router } from 'express';
import mongoose from 'mongoose';
import Logging from './src/library/logging';
import MiddlewareLogger from './src/middleware/middlewareLogger';
import userRouters from './src/routers/user';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

const MONGO_URI = 'mongodb://127.0.0.1:27017/new-database?retryWrites=true&w=majority';

mongoose
  .connect(MONGO_URI)
  .then(() => {
    Logging.info('Connected to mongoDB');
  })
  .catch((error) => {
    Logging.error('Unable to connect: ');
    Logging.error(error);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (rep, res) => {
  res.send('welcome nodejs');
});

// middleware
app.use(MiddlewareLogger);

//router
app.use('/user', userRouters);

app.listen(5000, () => console.log('listening on http://localhost:5000'));
