'use client'
import React, {useEffect} from 'react';
import ReactPortal from './ReactPortal';
import { motion, AnimatePresence } from 'framer-motion';

interface NavigationModalProps {
    children: React.ReactNode;
    isOpen: boolean;
    handleClose: () => void;
}

export default function NavigationModal({children, isOpen, handleClose}: NavigationModalProps){

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
                    <div className="md:hidden flex flex-col justify-center items-center fixed top-0 left-0 w-screen h-screen z-40 bg-primary dark:bg-dark opacity-90">
                        <div className="fixed rounded flex flex-col justify-start items-center box-border min-w-fit h-5/6 overflow-hidden p-5">
                            <button 
                                onClick={handleClose} 
                                className="py-2 px-8 self-end"
                            >
                                Close
                            </button>
                            <AnimatePresence mode='wait'>
                                <motion.div 
                                    className="flex justify-center items-center"
                                    initial='initialState'
                                animate='animateState'
                                exit='exitState'
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3
                                }}
                                variants={{
                                    initialState: {
                                        opacity:0,
                                        y:20
                                    },
                                    animateState: {
                                        opacity: 1,
                                        y:0
                                    },
                                    exitState: {
                                        opacity: 0,
                                        y:0
                                    },
                                }}
                                > 
                                    {children}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </>
        </ReactPortal>
    )
    
    
    
   
}