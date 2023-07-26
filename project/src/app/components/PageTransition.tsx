'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from "next/navigation";

interface PageTransitionProps {
    children: React.ReactNode
}

export default function PageTransition({children}:PageTransitionProps){
    const pathname = usePathname();
    return <AnimatePresence mode="wait">
        <motion.div
        key={pathname}
        initial='initialState'
        animate='animateState'
        exit='exitState'
        transition={{
            duration:0.75
        }}
        variants={{
            initialState: {
                
            },
            animateState: {
                opacity: 1
            },
            exitState: {
            },
        }}
        >
        {children}
        </motion.div>
    </AnimatePresence>
}