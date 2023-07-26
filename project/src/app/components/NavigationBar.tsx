'use client';
import NavigationModal from "./NavigationModal";
import Link from 'next/link';
import React, {useState} from 'react';
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationBarProps {
    items:{
        title:string,
        href:string
    }[];
}

export default function NavigationBar({items}:NavigationBarProps) {

    const [navigationModalOpen, setNavigationModalOpen] = useState<boolean>(false);

    const pathname = usePathname();

    function handleClose(){
        setNavigationModalOpen(false);
    }

    return <>
        <div className="hidden sm:flex flex-row w-full top-0 right-0 absolute z-10 py-6 px-6 justify-between">
        <motion.p
            className="font-superRetro italic text-md md:text-3xl align-middle w-1/2 items-center overflow-x-visible"
            initial='initialState'
            animate='animateState'
            exit='exitState'
            transition={{
                duration: 0.75,
                delay: 0.2
            }}
            variants={{
                initialState: {
                    opacity:0,
                    x:-3
                },
                animateState: {
                    opacity: 1,
                    x:0
                },
                exitState: {
                    opacity: 0
                },
            }}
        >
            Ruby Parker-Harbord
        </motion.p>
            <section className="flex flex-row justify-end items-center w-1/2 text-xs md:text-lg pr-2">
                {items.map((item) => (
                    <Link 
                        onClick={handleClose} 
                        key={item.href}
                        className={`${
                            pathname === item.href 
                                ? "underline"
                                : ""
                            } px-2 whitespace-nowrap transition-all duration-600 md:hover:pb-2`} 
                        href={item.href}
                    >
                        {item.title}
                    </Link>
                ))}
            </section>
            </div>
        <div className="sm:hidden flex flex-row w-full top-0 fixed z-10 py-6 px-6 justify-between">
            <p className="font-superRetro italic text-xs align-middle p-0 w-2/3 items-center overflow-x-visible">
                Ruby Parker-Harbord
            </p>
            <section className="flex flex-row justify-end items-center w-1/3">
                <button onClick={() => setNavigationModalOpen(!navigationModalOpen)} className="px-2">Menu</button>
            </section>
            {navigationModalOpen && (
                <NavigationModal 
                    isOpen={navigationModalOpen}
                    handleClose={() => setNavigationModalOpen(!navigationModalOpen)}
                >
                    <section className="flex flex-col justify-center items-center bg-primary text-4xl dark:bg-dark">
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