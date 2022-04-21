import express from 'express';
import user, { Iuser } from '../models/user';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

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

const controllerSignup = async (req: express.Request, res: express.Response) => {
  const users: Iuser = new user({
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  users.password = await users.encryptPassword(users.password);
  const saveUser = await users.save();

  const token: string = jwt.sign(
    { _id: saveUser._id },
    process.env.ACCESS_TOKEN_SECRET || 'tokentest'
  );
  // res.json(token);
  res.header('autoken', token).json(saveUser);
};

const controllerSignin = async (req: express.Request, res: express.Response) => {
  const users: Iuser = new user({
    password: req.body.password,
  });

  const userEmail = await user.findOne({ email: req.body.email });
  if (!userEmail) {
    return res.status(400).json('Email wrong');
  }

  const correctPassword: boolean = await users.validatePassword(req.body.password);
  if (!correctPassword) {
    return res.status(400).json('Invalid Password');
  }

  const token: string = jwt.sign(
    { _id: users._id },
    process.env.ACCESS_TOKEN_SECRET || 'tokentest',
    { expiresIn: 60 * 60 * 24 }
  );
  const saveUser = await users.save();

  res.header('autoken', token).json(saveUser);
  // res.json(userEmail);
};

export default {
  controllerSignup,
  controllerSignin,
  controllerUserReadAll,
  controllerUserReadNAme,
};
