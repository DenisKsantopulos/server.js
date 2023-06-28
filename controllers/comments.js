const { getComments, getCommentById, addComment } = require('../services/comments');
const userService = require('../services/comments');

async function getAllComments(req, res) {
  try {
    const comments = await getComments();
    res.status(200).json(comments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getOneComment(req, res) {
  try {
    const id = req.params.id;
    const comment = await getCommentById(id);
    res.status(200).json(comment);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

async function createComment(req, res,next) {
  const { name, comment } = req.body;


  let comm = {};
  comm.name = name;
  comm.comment = comment;
  comm.createdAt = new Date();
  await userService.addComment(comm);
}

module.exports = { getAllComments, getOneComment, createComment };

/* if (!name || !text) {
      throw new Error('Name and text are required');
    } */
