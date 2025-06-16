import express from 'express';
const router = express.Router();

let users = [{ id: 1, name: 'Alice', email: 'alice@example.com' }];

router.get('/', (req, res) => res.json(users));
router.post('/', (req, res) => {
  const { name, email } = req.body;
  const newUser = { id: users.length + 1, name, email };
  users.push(newUser);
  res.status(200).json(newUser);
});

export default router;
