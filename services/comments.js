const connectDB = require('../configs/db');

async function getComments() {
  const db = await connectDB();
  const collection = db.collection('users');
  const comments = await collection.find().toArray();
  return comments;
}

async function getCommentById(id) {
  const db = await connectDB();
  const collection = db.collection('users');
  const comment = await collection.findOne({ _id: id });
  if (!comment) {
    throw new Error('Comment not found');
  }
  return comment;
}

async function addComment(comment) {
  const db = await connectDB();
  const collection = db.collection('users');
  const result = await collection.insertOne(comment);
  const comments = await getComments();
  return comments;
}

module.exports = { getComments, getCommentById, addComment };