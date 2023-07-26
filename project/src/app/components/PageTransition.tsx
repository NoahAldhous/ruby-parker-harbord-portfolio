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
        exit='exitState'
        transition={{
            duration:0.75,
            delay:0.2
        }}
        variants={{
            initialState: {
                opacity:1
            },
            exitState: {
                opacity:0
            },
        }}
        >
        {children}
        </motion.div>
    </AnimatePresence>
}