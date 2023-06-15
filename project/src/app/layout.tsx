import './globals.css'
import localFont from 'next/font/local';
import Link from 'next/link';

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
        <p className="font-superRetro italic text-md md:text-3xl bg-green-500 w-1/2 items-center overflow-x-visible">
          Ruby Parker-Harbord
        </p>
        <div className="flex flex-row justify-end items-center bg-blue-500 w-1/2">
  
          <Link className="px-2" href="/">Home</Link>
          <Link className="px-2" href="/project">Projects</Link>
          <Link className="px-2" href="/film-photography">Film Photography</Link>
          <Link className="px-2" href="/about">About</Link>
          <Link className="px-2" href="/contact">Contact</Link>
          
        </div>
      </div>
      <nav></nav>
        {children}</body>
    </html>
  )
}
