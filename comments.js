import express from 'express';
const router = express.Router();

let comments = [{ id: 1, postId: 1, userId: 1, comment: 'Great post!' }];

router.get('/', (req, res) => res.json(comments));
router.post('/', (req, res) => {
    const { postId, userId, comment } = req.body;
    const newComment = { id: comments.length + 1, postId: parseInt(postId), userId: parseInt(userId), comment };
    comments.push(newComment);
    res.status(200).json(newComment);
});

export default router;
