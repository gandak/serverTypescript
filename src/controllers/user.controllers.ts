import { RequestHandler } from "express";
import { users } from "../database/users.db";
import bcrypt from "bcrypt";

const saltRounds = 10;

export const registerUser: RequestHandler = async (req, res) => {
  const { name, email, password, role } = req.body;

  const findUser = users.find((user) => user.name === name);
  if (findUser) {
    res.send("This username already exists");
    return;
  }

  const findEmail = users.find((user) => user.email === email);
  if (findEmail) {
    res.send("This email already registered");
    return;
  }

  let newRole = role;

  if (!role) {
    newRole = "customer";
  }

  const passwordHash = await bcrypt.hash(password, saltRounds);

  const newUser = {
    _id: Date.now(),
    name,
    email,
    role: newRole,
    password: passwordHash,
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  users.push(newUser);

  res.send(`User successfully registered! Your user ID: ${newUser._id}`);
  return;
};

export const getProfile: RequestHandler = (req, res) => {
  const { name } = req.body;

  const foundUser = users.find((user) => user.name == name);

  res.send(foundUser);
  return;
};

export const getAllUser: RequestHandler = (req, res) => {
  res.send(users);
  return;
};

export const loginUser: RequestHandler = async (req, res) => {
  const { name, password } = req.body;

  const foundUser = users.find((user) => {
    user.name === name;
  });
  if (!foundUser) {
    res.send("User not found");
    return;
  } else {
    let isValid = await bcrypt.compare(password, foundUser.password);

    isValid
      ? res.send("Logged in successfully")
      : res.send("You are not authorized to log in");
    return;
  }
};

export const editUserInfo: RequestHandler = async (req, res) => {
  const { name, email, password, role } = req.body;

  const foundUser = users.find((user) => name === user.name);

  if (foundUser) {
    if (password) {
      let passwordHash = await bcrypt.hash(password, saltRounds);
      foundUser.password = passwordHash;
      foundUser.updatedAt = new Date();
    }
    if (email) {
      foundUser.email = email;
      foundUser.updatedAt = new Date();
    }
    if (role) {
      foundUser.role = role;
      foundUser.updatedAt = new Date();
    }
    res.send("User info edited");
    return;
  }
  res.send("User not found");
};

export const deleteProfile: RequestHandler = (req, res) => {
  const { name } = req.body;
  const newArray = users.filter((user) => name != user.name);
  users.length = 0;
  users.push(...newArray);

  res.send("User deleted");
};
