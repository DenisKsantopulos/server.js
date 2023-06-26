const express = require('express');
const router = express.Router();
const { getAllComments, getComment, createComment } = require('../controllers/comments');

router.get('/', getAllComments);
router.get('/:id', getComment);
router.post('/', createComment);

module.exports = router;