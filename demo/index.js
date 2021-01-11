const mongoose = require('mongoose');
const express = require('express');

const User = require('./user');

async function main() {
  try {
    await mongoose.connect('mongodb://localhost/session');
    console.log('Connected to db');
  
  const app = express();

  app.use(express.json());

  app.post('/users', async function (req, res) {
    const user = await User.create(req.body);
    res.json(user);
  });

  app.get('/users', async function (req, res) {
    const users = await User.find({});
    res.json(users);
  });

  app.get('/users/:username', async function (req, res) {
    const username = req.params.username;

    const user = await User.findOne({ name: username });

    res.json(user);
  });

  app.put('/users/:username', async function (req, res) {
    const newUser = req.body;

    const u = await User.updateOne({ name: req.params.username }, newUser);

    res.json(u);
  });

  app.patch('/users/:username', async function (req, res) {
    const updates = req.body;
    const user = await User.findOne({ name: req.params.username });

    const newUser = {
      ...user.toObject(),
      ...updates,
    };

    console.log(newUser);

    const result = await User.updateOne({ name: req.params.username }, newUser);

    res.json(result);
  });

  const deleteHandler = async function (req, res) {
    await User.remove({ name: req.params.username });
    res.json({ success: true });
  };

  app.delete('/users/:username', deleteHandler);

  app.listen(3000, () => {
    console.log('App is running in port: 3000');
  });
  } catch (error) {
    console.log('Failure', error);
  }
}

main();
