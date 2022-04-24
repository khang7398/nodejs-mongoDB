import express from 'express';
import mongoose from 'mongoose';
import user from '../models/user';

const controllerUserCreate = async (req: express.Request, res: express.Response) => {
  const { username, password } = req.body;

  const newUser = new user({
    username,
    password,
  });
  console.log(newUser);

  await newUser.save();

  res.json(newUser);
};

// const controllerReadUser = (req: express.Request, res: express.Response) => {
//   const userID = req.query.userID;

//   return user
//     .findById(userID)
//     .then((user) =>
//       user ? res.status(200).json({ user }) : res.status(404).json({ message: 'Not found' })
//     )
//     .catch((error) => res.status(500).json({ error }));
// };

const controllerUserReadAll = async (req: express.Request, res: express.Response) => {
  const { l, p } = req.query;

  const limit: number = typeof l !== 'string' ? 10 : Math.min(50, parseInt(l));
  const page: number = typeof p !== 'string' ? 0 : parseInt(p);

  const users = await user
    .find()
    .limit(limit)
    .skip(limit * page);

  res.json(users);
};

const controllerUserReadNAme = async (req: express.Request, res: express.Response) => {
  const { username } = req.params;

  const theUser = await user.findOne({ username });
  res.json(theUser);
};

export default {
  // controllerReadUser,
  controllerUserCreate,
  controllerUserReadAll,
  controllerUserReadNAme,
};
