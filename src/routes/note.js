import express from 'express';

const router = express.Router();

router.get('/note', (req, res) => {
  res.send('note route');
});

export default router;