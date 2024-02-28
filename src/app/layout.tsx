import './tailwind-global.scss'
import { Roboto } from '@next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['italic', 'normal'],
  subsets: ['latin']
})

interface Props {
  children: React.ReactNode
}

function RootLayout({ children }: Props) {
  return (
    <html>
      <head lang="es" className={roboto.className} />
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
