export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-primary dark:bg-dark">
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
    </main>
  )
}
