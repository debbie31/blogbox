import express, { request } from 'express';

import {
  getPokemon,
  getPokemonSearch,
  getPokemonName,
  getPokemonPage,
} from '../controller/pokemonsData.js';

const router = express.Router();

router.get('/', getPokemon);

router.get('/page', getPokemonPage);

router.get('/search', getPokemonSearch);

router.get('/:name', getPokemonName);

export default router;
