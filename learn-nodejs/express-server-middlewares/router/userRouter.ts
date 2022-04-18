import express from 'express';

const userRouter: express.Router = express.Router();

userRouter.get('/', (request: express.Request, response: express.Response) => {
  response.status(200).send(`<h3>hello User Router</h3>`);
});
userRouter.post('/login', (resquest: express.Request, response: express.Response) => {
  let formData = resquest.body;
  response.status(200).json({
    msg: 'form data is received',
    formData: formData,
  });
});

export default userRouter;
