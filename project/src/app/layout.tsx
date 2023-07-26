import './globals.css';
import localFont from 'next/font/local';
import NavigationBar from './components/NavigationBar';

const superRetro = localFont({
  src: [
    {
      path: '../../public/fonts/Super-Retro-M54.ttf',
      style: 'normal'
    },
    {
      path: '../../public/fonts/Super-Retro-Italic-M54.ttf',
      style: 'italic'
    },
  ],
  variable: '--superRetro'
})

const items = [
  {
    title: "Home" ,
    href: "/"
  },
  {
    title: "Projects" ,
    href: "/project"
  },
  {
    title: "Film Photography" ,
    href: "/film-photography"
  },
  {
    title: "About" ,
    href: "/about"
  },
  {
    title: "Contact" ,
    href: "/contact"
  },
]

export const metadata = {
  title: 'Ruby Parker-Harbord',
  description: 'Professional Photographer and Videographer',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
          <body className={superRetro.variable}>
            <NavigationBar items={items}/>
            <nav></nav>
            {children}
          </body>
    </html>
  )
}
