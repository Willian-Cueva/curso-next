import { Raleway } from '@next/font/google'
import Navigation from '../components/Navigation'
import './globals.css'

const font = Raleway({
  weight: ['400', '700'],
  subsets: ['latin']
  // preload: false
})

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>Mi primera pagina con Next JS</title>
      </head>

      <body className={`p-8 ${font.className}`}>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
