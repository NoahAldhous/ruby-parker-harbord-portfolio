'use client';

import React, { useEffect } from 'react';
import ReactPortal from './ReactPortal';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from "next/navigation";

interface NavigationModalProps {
    isOpen: boolean;
    handleClose: () => void;
    navModalItems:{
        title:string,
        href:string
    }[]
}

export default function NavigationModal({isOpen, handleClose, navModalItems}: NavigationModalProps){

    const pathname = usePathname();

    //disable scroll on modal load
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return (): void => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen])

    if (!isOpen) return null;

    return (
        <ReactPortal wrapperId="react-portal-modal-container" >
                <>
                    <motion.div 
                        className="md:hidden flex flex-col justify-start items-center fixed top-0 left-0 w-screen h-screen z-3000 bg-primary dark:bg-dark opacity-90"
                        initial='initialState'
                        animate='animateState'
                        transition={{
                            duration: 0.3,
                            delay: 0.2
                        }}
                        variants={{
                            initialState: {
                                opacity:0
                            },
                            animateState: {
                                opacity: 0.9
                            }
                        }}
                        >
                        <motion.div 
                            className="fixed rounded flex flex-col justify-center items-center box-border min-w-fit h-full overflow-hidden p-5"
                            initial='initialState'
                            animate='animateState'
                            transition={{
                                duration: 0.3,
                                delay: 0.2
                            }}
                            variants={{
                                initialState: {
                                    opacity:0,
                                    y:20
                                },
                                animateState: {
                                    opacity:1,
                                    y:0
                                }
                            }}>
                            <button 
                                onClick={handleClose} 
                                className="py-2 px-8 self-end"
                            >
                                Close
                            </button>
                            <div className="flex justify-center items-center"> 
                            <section className="flex flex-col justify-center items-center bg-primary text-4xl dark:bg-dark">
                                {navModalItems.map((item) => (
                                    <Link 
                                        onClick={handleClose}
                                        key={item.href}
                                        className={`${
                                            pathname === item.href 
                                                ? "underline"
                                                : ""
                                            } px-2 py-6`} 
                                        href={item.href}
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </section>
                            </div>
                        </motion.div>
                    </motion.div>
                </>
        </ReactPortal>
    )
    
    
    
   
}