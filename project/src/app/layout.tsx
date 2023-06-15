import './globals.css'
import localFont from 'next/font/local';

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
          <p className="px-2">Home</p>
          <p className="px-2">Projects</p>
          <p className="px-2">Analogue</p>
          <p className="px-2">About</p>
          <p className="px-2">Contact</p>
        </div>
      </div>
      <nav></nav>
        {children}</body>
    </html>
  )
}
