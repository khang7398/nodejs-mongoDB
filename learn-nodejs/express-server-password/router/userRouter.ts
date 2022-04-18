import express from 'express';
import bcrypt from 'bcrypt';

const userRouter: express.Router = express.Router();

userRouter.get('/', (request: express.Request, response: express.Response) => {
  response.status(200).send(`<h3>hello User Router</h3>`);
});
userRouter.post('/register', async (request: express.Request, response: express.Response) => {
  let { name, email, password } = request.body;

  try {
    let salt = await bcrypt.genSalt(10);
    let hashedPassword = await bcrypt.hash(password, salt);
    response.status(200).json({
      user: { name, email, password },
      hashedPassword: hashedPassword,
    });
  } catch (error) {
    console.error(error);
  }
});

export default userRouter;
