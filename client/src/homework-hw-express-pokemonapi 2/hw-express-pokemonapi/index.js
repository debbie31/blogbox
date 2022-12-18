import express from 'express';
import pokemonsRoute from './routes/pokemons.js';

const app = express();

const port = 3003;

app.use(express.json());

app.use('/pokemon', pokemonsRoute);

app.listen(port, () => {
  console.log(`This is port ${port}`);
});
