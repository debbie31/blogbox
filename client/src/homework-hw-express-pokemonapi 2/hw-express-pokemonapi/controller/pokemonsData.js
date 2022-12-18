import { givenData } from './givenData.js';

let pokemons = [];
pokemons = givenData;

export const getPokemon = (request, response) => {
  response.json(pokemons);
};

export const getPokemonPage = (request, response) => {
  const limit = request.query.limit;
  const offset = request.query.offset;
  const page = pokemons.slice(offset, limit);

  response.status(200).json(page);
};

export const getPokemonSearch = (request, response) => {
  const name = request.query;
  const key = Object.keys(name)[0];
  const value = Object.values(name)[0];

  if (key === 'name') {
    const findName = pokemons.find(
      (pokemon) => pokemon.name.toLowerCase() === value
    );

    response.status(200).json(findName);
  }
};

export const getPokemonName = (request, response) => {
  const { name } = request.params;
  const findPokemon = pokemons.find(
    (pokemon) => pokemon.name.toLowerCase() === name
  );

  response.status(200).json(findPokemon);
};
