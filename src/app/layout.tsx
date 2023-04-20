import Navbar from '@/components/Navbar'
import './globals.css'
import ILink from '@/models/ILink'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Eric Hendrickson - Software Engineer',
  description: 'Portfolio page for Eric Hendrickson',
}

const links: ILink[] = [
  {
      label: 'Home',
      url: '#'
  },
  {
      label: 'About Me',
      url: '#about-me'
  },
  {
      label: 'Services',
      url: '#'
  },
  {
      label: 'Contact',
      url: '#'
  }
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Navbar links={links} />
        {children}
        <Footer />
      </body>
    </html>
  )
}
