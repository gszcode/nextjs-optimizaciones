import Image from 'next/image'
import cardStyles from './Card.module.scss'

export interface CardData {
  name: string
  type?: string
  created: string
  image?: string
}

interface Props {
  data: CardData
}

function Card({ data }: Props) {
  return (
    <div className={cardStyles.Card}>
      <p>Name: {data.name}</p>
      <p>Type: {data.type ? data.type : 'No type'}</p>
      <p>Created: {data.created}</p>
      {!!data.image && (
        <Image src={data.image} alt="Image" width={100} height={100} />
      )}
    </div>
  )
}

export default Card
