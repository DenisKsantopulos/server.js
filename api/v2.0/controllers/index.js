const { getUsers, addUser } = require('../services/index.js');

async function getUsersController(req, res) {
  try {
    const users = await getUsers();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

async function addUserController(req, res) {
  try {
    const user = req.body;
    const result = await addUser(user);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

module.exports = { getUsersController, addUserController };