const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const commentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const Comment = mongoose.model('Comment', commentSchema);

module.exports = Comment;

var ObjectId = require('mongodb').ObjectId;    
const connect = require('../configs/db');

async function getComments() {
  const db = await connect();
  const collection = db.collection('comments');
  const comms = await collection.find().toArray();
  return comms;
}

async function addComment(comm) {
  const db = await connect();
  const collection = db.collection('comments');
  await collection.insertOne(comm);
}

async function getCommentsById(id) {
  const db = await connect();  
  const collection = db.collection('comments');
  const comment = await collection.findOne({_id: new ObjectId(id) });
  if(!comment)
  {
    throw new Error("comment not found");
  }
  return comment;
}

/* async function getComments(req, res, next) {
  Comment
    .find()
    .then((comments) => {
      res.render(createPath('comments'),{ comments });
    })
    .catch((error) => {
      console.log(error);
    })
} */

/* async function getCommentsById(req, res, next) {
  Comment.exists({ _id: req.params.id }).then(exists => {
    if (exists) {
      Comment
      .findById(req.params.id)
      .then((comment) => {
        res.render(createPath('comment'),{ comment });
      })
      .catch((error) => {
        res.send(error);
      }) 
    } else {
      res.status(404);
      res.send('<h1 style="text-align: center">404 Not Found</h1>');
    }
  })
  .catch((error) => 
  {
    res.status(404);
    res.send('<h1 style="text-align: center">404 Not Found</h1>');
    console.log(error);
  }
  )
} */

/* async function addComment(req, res, next) {
    const { name, content } = req.body;

    const commentDB = new Comment({name, content});

    commentDB
    .save()
    .then((result) => console.log(result))
    .catch((error) => {
        console.log(error);
    });
} */

module.exports = {
    getComments,
    addComment,
    getCommentsById
};