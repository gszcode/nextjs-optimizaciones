import Navigator from '@/components/Navigator/Navigator'
import { Routes } from '@/models/routes.model'
import Image from 'next/image'
import staticImage from '../../public/images/goku.jpg'
import { gokuBlur } from './models/goku.blur'

function App() {
  return (
    <div>
      <h1>Welcome to Rick and Morty app</h1>
      <h2>What do you wnt to see?</h2>
      <Navigator pathNames={[Routes.CHARACTERS, Routes.LOCATIONS]} />
      <Image
        src={staticImage}
        alt="Image"
        blurDataURL={gokuBlur}
        placeholder="blur"
      />
    </div>
  )
}

export default App
