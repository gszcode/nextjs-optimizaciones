import { Character } from '../models/character.model'

export const getCharacters = (): Promise<Character[]> => {
  const url = `https://rickandmortyapi.com/api/character`
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.results)
}
