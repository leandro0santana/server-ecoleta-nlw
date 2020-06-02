import express from 'express';
import knex from './database/connection'

const router = express.Router();

router.get('/items', async (req, res) => {
  const items = await knex('items').select('*')
  
  return res.json({ message: 'Hello World' });
});

export default router;
