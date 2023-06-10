import Navigation from '../components/Navigation'
import './globals.css'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>Mi primera pagina con Next JS</title>
      </head>

      <body className='p-8'>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
