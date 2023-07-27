'use client';
import NavigationModal from "./NavigationModal";
import Link from 'next/link';
import React, {useState} from 'react';
import { usePathname } from "next/navigation";
import { motion } from 'framer-motion';

export default function NavigationBar() {

    const navBarItems = [
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
    ];

    const [navigationModalOpen, setNavigationModalOpen] = useState<boolean>(false);

    const pathname = usePathname();

    function handleClose(){
        setNavigationModalOpen(false);
    }

    return <>
        <div className="hidden sm:flex flex-row w-full top-0 right-0 absolute z-10 py-6 px-6 justify-between">
            <Link 
                onClick={handleClose} 
                key={'/'}
                className='px-2 whitespace-nowrap'
                href={'/'}
            >
                <motion.p
                    className="font-superRetro italic text-md md:text-3xl align-middle w-1/2 items-center overflow-x-visible transition-all duration-600 hover:opacity-90"
                    initial='initialState'
                    animate='animateState'
                    exit='exitState'
                    transition={{
                        duration: 0.75,
                        delay: 0.3
                    }}
                    variants={{
                        initialState: {
                            opacity:0,
                            y:-20
                        },
                        animateState: {
                            opacity: 1,
                            y:0
                        },
                        exitState: {
                            opacity: 0
                        },
                    }}
                >
                    Ruby Parker-Harbord
                </motion.p>
            </Link>
            <motion.section 
                className="flex flex-row justify-end items-center w-1/2 text-xs md:text-lg pr-2"
                initial='initialState'
                animate='animateState'
                exit='exitState'
                transition={{
                    duration: 0.75,
                    delay: 0.3
                }}
                variants={{
                    initialState: {
                        opacity:0,
                        y:-20
                    },
                    animateState: {
                        opacity: 1,
                        y:0
                    },
                    exitState: {
                        opacity: 0
                    },
                }}
            >
                {navBarItems.map((item) => (
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
            </motion.section>
            </div>
        <motion.div 
            className="sm:hidden flex flex-row w-full top-0 fixed z-10 py-6 px-6 justify-between"
            initial='initialState'
            animate='animateState'
            exit='exitState'
            transition={{
                duration: 0.75,
                delay: 0.3
            }}
            variants={{
                initialState: {
                    opacity:0,
                    y:-20
                },
                animateState: {
                    opacity: 1,
                    y:0
                },
                exitState: {
                    opacity: 0
                },
            }}
            >
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
        </motion.div>
    </>
}