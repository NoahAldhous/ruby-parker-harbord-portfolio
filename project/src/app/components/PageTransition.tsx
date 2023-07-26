'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from "next/navigation";

interface PageTransitionProps {
    children: React.ReactNode
}

export default function PageTransition({children}:PageTransitionProps){
    const pathname = usePathname();
    return <AnimatePresence mode="wait" initial={false}>
        <motion.div
        key={pathname}
        initial='initialState'
        animate='animateState'
        exit='exitState'
        transition={{
            duration:0.5
        }}
        variants={{
            initialState: {
                opacity: 0
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