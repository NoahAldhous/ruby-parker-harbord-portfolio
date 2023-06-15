import './globals.css';
import localFont from 'next/font/local';
import Link from 'next/link';
import NavigationModal from './components/NavigationModal';

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
      <div className="hidden sm:flex flex-row w-full bg-red-400 top-0 absolute z-10 py-4 pl-4 justify-between">
        <p className="font-superRetro italic text-md md:text-3xl align-middle bg-green-500 w-1/2 items-center overflow-x-visible">
          Ruby Parker-Harbord
        </p>
        <section className="flex flex-row justify-end items-center bg-blue-500 w-1/2 text-xs md:text-lg">
  
          <Link className="px-2" href="/">Home</Link>
          <Link className="px-2" href="/project">Projects</Link>
          <Link className="px-2 whitespace-nowrap" href="/film-photography">Film Photography</Link>
          <Link className="px-2" href="/about">About</Link>
          <Link className="px-2" href="/contact">Contact</Link>
          
        </section>
      </div>
      <div className="sm:hidden flex flex-row w-full bg-red-400 top-0 absolute z-10 py-4 pl-4 justify-between">
        <p className="font-superRetro italic text-sm align-middle p-0 bg-green-500 w-2/3 items-center overflow-x-visible">
            Ruby Parker-Harbord
        </p>
        <section className="flex flex-row justify-end items-center bg-blue-500 w-1/3">
          <p className="px-2">Menu</p>
        </section>
      </div>
      <NavigationModal/>
      <nav></nav>
        {children}</body>
    </html>
  )
}
