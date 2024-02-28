import { getCharacters } from './services/characters.service'
import { Routes } from '@/models/routes.model'
import Card from '@/components/Card/Card'
import Navigator from '@/components/Navigator/Navigator'

async function fetchCharacters() {
  return await getCharacters()
}

async function Characters() {
  const characters = await fetchCharacters()

  return (
    <>
      <Navigator pathNames={[Routes.HOME, Routes.LOCATIONS]} />
      {characters.map((character) => (
        <Card key={character.id} data={character} />
      ))}
    </>
  )
}

export default Characters
