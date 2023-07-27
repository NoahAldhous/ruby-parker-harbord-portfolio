'use client';
import NavigationModal from "./NavigationModal";
import Link from 'next/link';
import React, {useState} from 'react';
import { usePathname } from "next/navigation";
import { motion, LayoutGroup } from 'framer-motion';


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

    const navModalItems = [
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

    const [navigationModalOpen, setNavigationModalOpen] = useState<boolean>(false);

    const pathname = usePathname();

    function handleClose(){
        setNavigationModalOpen(false);
    }

    return <>
        <div className="hidden sm:flex flex-row w-full top-0 right-0 absolute z-10 py-6 px-6 sm:px-12 justify-between bg-gradient-to-b from-bgprimary from-10% to-70% dark:from-bgdark">
            <Link 
                onClick={handleClose} 
                key={'/'}
                className='whitespace-nowrap transition-all duration-600 md:hover:text-slate-700'
                href={'/'}
            >
                <motion.p
                    className="text-backdrop-invert font-superRetro italic text-md md:text-3xl align-middle w-1/2 items-center overflow-x-visible"
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
                layout
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
                        opacity:1,
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
                            className='px-2 whitespace-nowrap transition-all duration-600 relative flex flex-col items-center' 
                            href={item.href}                      
                        >
                            {item.title}
                            {pathname === item.href ? (
                        <motion.div
                        className='bottom--6 inset-x-0 h-1 bg-secondary rounded-lg z-0 w-full'
                        layoutId="underline"
                        />
                        ) : null}
                        </Link>
                    ))}
            </motion.section>
            </div>
        <motion.div 
            className="sm:hidden flex flex-row w-full top-0 fixed z-10 py-6 px-6 justify-between bg-gradient-to-b from-bgprimary from-10% to-70% dark:from-bgdark"
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
                <button onClick={() => setNavigationModalOpen(!navigationModalOpen)} className="p-0 pr-0.5 text-right font-superRetro italic text-xs align-middle items-center overflow-x-visible">Menu</button>
            </section>
            {navigationModalOpen && (
                <NavigationModal 
                    isOpen={navigationModalOpen}
                    handleClose={() => setNavigationModalOpen(!navigationModalOpen)}
                    navModalItems={navModalItems}
                />
            )}
        </motion.div>
    </>
}