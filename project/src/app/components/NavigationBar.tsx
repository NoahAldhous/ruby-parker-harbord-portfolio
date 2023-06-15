'use client';
import NavigationModal from "./NavigationModal";
import Link from 'next/link';
import React, {useState} from 'react';

export default function NavigationBar() {

    const [navigationModalOpen, setNavigationModalOpen] = useState<boolean>(false);

    function handleClose(){
        setNavigationModalOpen(false);
    }

    return <>
        <div className="hidden sm:flex flex-row w-full bg-red-400 top-0 fixed z-10 py-4 pl-4 justify-between">
            <p className="font-superRetro italic text-md md:text-3xl align-middle bg-green-500 w-1/2 items-center overflow-x-visible">
                Ruby Parker-Harbord
            </p>
            <section className="flex flex-row justify-end items-center bg-blue-500 w-1/2 text-xs md:text-lg">
                <Link onClick={handleClose} className="px-2" href="/">Home</Link>
                <Link onClick={handleClose} className="px-2" href="/project">Projects</Link>
                <Link onClick={handleClose} className="px-2 whitespace-nowrap" href="/film-photography">Film Photography</Link>
                <Link onClick={handleClose} className="px-2" href="/about">About</Link>
                <Link onClick={handleClose} className="px-2" href="/contact">Contact</Link> 
            </section>
            </div>
        <div className="sm:hidden flex flex-row w-full bg-red-400 top-0 fixed z-10 py-4 pl-4 justify-between">
            <p className="font-superRetro italic text-sm align-middle p-0 bg-green-500 w-2/3 items-center overflow-x-visible">
                Ruby Parker-Harbord
            </p>
            <section className="flex flex-row justify-end items-center bg-blue-500 w-1/3">
                <button onClick={() => setNavigationModalOpen(!navigationModalOpen)} className="px-2">Menu</button>
            </section>
            {navigationModalOpen && (
                <NavigationModal 
                    isOpen={navigationModalOpen}
                    handleClose={() => setNavigationModalOpen(!navigationModalOpen)}
                >
                    <section className="flex flex-col justify-center items-center bg-slate-800 text-4xl text-zinc-200">
                        <Link onClick={handleClose} className="px-2 py-6" href="/">Home</Link>
                        <Link onClick={handleClose} className="px-2 py-6" href="/project">Projects</Link>
                        <Link onClick={handleClose} className="px-2 py-6 whitespace-nowrap" href="/film-photography">Film Photography</Link>
                        <Link onClick={handleClose} className="px-2 py-6" href="/about">About</Link>
                        <Link onClick={handleClose} className="px-2 py-6" href="/contact">Contact</Link>
                    </section>
                </NavigationModal>
            )}
        </div>
    </>
}