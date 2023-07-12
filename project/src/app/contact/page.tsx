import Link from 'next/link';

export default function Page(){
    return <main className="flex flex-col sm:flex-row space-y-8
     sm:space-y-0 justify-center items-start sm:space-x-2 border-2 space-around border-indigo-600 h-screen w-screen p-24 bg-primary dark:bg-dark">
        <div>    
            <p className="text-sm">Follow me on</p>
            <Link className="font-superRetro italic underline text-md md:text-3xl align-middle tracking-wider" href='https://www.instagram.com/rubyparkerh/' target="_blank">Instagram</Link>
        </div>
        <div>
            <p className="text-sm">Send me an</p>
            <Link className="font-superRetro italic underline text-md md:text-3xl align-middle tracking-wider" href='mailto:rubyparkerphotography@gmail.com' target="_blank">Email</Link>
        </div>
        <div>
            <p className="text-sm">Download my</p>
            <Link className="font-superRetro italic underline text-md md:text-3xl align-middle tracking-wider" href='mailto:rubyparkerphotography@gmail.com' target="_blank">Portfolio</Link>
        </div>
    </main>
}