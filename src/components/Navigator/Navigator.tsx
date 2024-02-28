import { Route } from '@/models/routes.model'
import Link from 'next/link'

interface Props {
  pathNames: Route[]
}

function Navigator({ pathNames }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', gap: '15px' }}>
      {pathNames.map((pathName) => (
        <Link
          className="bg-fuchsia-500 hover:bg-sky-700"
          key={pathName.name}
          href={pathName.path}
        >
          {pathName.name}
        </Link>
      ))}
    </div>
  )
}

export default Navigator
