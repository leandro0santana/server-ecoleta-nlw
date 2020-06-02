import express from 'express';

const app = express();

app.get('/users', (req, res) => {
  console.log('Listagem de usuários');
  res.json([
    'Leandro',
    'Alex',
    'Gislaine',
    'Teste',
  ]);
});

app.listen(3333);