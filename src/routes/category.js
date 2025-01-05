import express from 'express';

const router = express.Router();

router.get('/category', (req, res) => {
  res.send('category route');
});

export default router;