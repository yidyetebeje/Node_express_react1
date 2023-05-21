import { v4 as uuid } from "uuid";
let users = [];

export const getUsers = (req, res) => res.send(users);

export const createUser = (req, res) => {
  const user = req.body;
  users.push({ ...user, id: uuid() });
  res.send("User added succesfully");
};

export const getUser = (req, res) => {
  const singleUser = users.filter((user) => user.id === req.params.id);
  res.send(singleUser);
};

export const deleteUser = (req, res) => {
  users = users.filter((user) => user.id !== req.params.id);
  res.send(`User with id: ${req.params.id} has been deleted Succesfully`);
};

export const updateUser = (req, res) => {
  const user1 = users.find((user) => user.id === req.params.id);
  user1.name = req.body.name;
  user1.email = req.body.email;
  user1.contact = req.body.contact;
  res.send("User Updated Succefully");
};

export default users;
