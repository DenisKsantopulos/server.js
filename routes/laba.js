const express = require('express');
const router = express.Router();


const comment = require('../middlewares/middlewares');
const commentControllers = require('../controllers/comments')

const bodyParser = require('body-parser');
router.use(bodyParser.json());

//router.use(auth.checkApiKey);



/* router.get("/stats", getStats); */

router.get("/comment/:id", commentControllers.getOneComment);
router.get("/comment", commentControllers.getOneComment);

router.get("/comments", commentControllers.getAllComments);

router.post("/comments", comment.validateComment, comment.sendComment, commentControllers.createComment);

module.exports = router;