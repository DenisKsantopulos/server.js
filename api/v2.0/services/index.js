const getDatabase = require('../configs/index.js');

async function getUsers() {
  const db = await getDatabase();
  const users = await db.collection('users').find().toArray();
  return users;
}

/* async function addUser(user) {
  const db = await getDatabase();
  const result = await db.collection('users').insertOne(user);
  return result;
} */

async function addUser(comment) {
  const { name, content } = comment;

  const commentDB = new Comment({name, content});

  commentDB.save().catch((error) => {
      console.log(error);
  });
}


module.exports = { getUsers, addUser };