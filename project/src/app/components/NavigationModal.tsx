'use client'
import {useState} from 'react';
import Link from 'Next/link';



export default function NavigationModal(){

    const [NavigationModalIsOpen, setNavigationModalIsOpen] = useState(false)

    return <div className="flex justify-center items-center z-40 absolute h-full w-full bg-slate-800 opacity-90">
        <div className="flex flex-col justify-center items-center bg-red-600 text-4xl text-blue-400">
            <Link className="px-2 py-6" href="/">Home</Link>
            <Link className="px-2 py-6" href="/project">Projects</Link>
            <Link className="px-2 py-6 whitespace-nowrap" href="/film-photography">Film Photography</Link>
            <Link className="px-2 py-6" href="/about">About</Link>
            <Link className="px-2 py-6" href="/contact">Contact</Link>
        </div>
    </div>
}