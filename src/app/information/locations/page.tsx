import { getLocations } from './services/locations.service'
import { Routes } from '@/models/routes.model'
import Card from '@/components/Card/Card'
import Navigator from '@/components/Navigator/Navigator'

async function fetchLocations() {
  return await getLocations()
}

async function Locations() {
  const locations = await fetchLocations()

  return (
    <>
      <Navigator pathNames={[Routes.HOME, Routes.CHARACTERS]} />
      {locations.map((location) => (
        <Card key={location.id} data={location} />
      ))}
    </>
  )
}

export default Locations
