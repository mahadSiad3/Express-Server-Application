import express from 'express';
const router = express.Router();

let posts = [{ id: 1, userId: 1, title: 'Hello', content: 'My first post' }];

router.get('/', (req, res) => res.json(posts));
router.post('/', (req, res) => {
    const { userId, title, content } = req.body;
    const newPost = { id: posts.length + 1, userId: parseInt(userId), title, content };
    posts.push(newPost);
    res.status(200).json(newPost);
});

export default router;