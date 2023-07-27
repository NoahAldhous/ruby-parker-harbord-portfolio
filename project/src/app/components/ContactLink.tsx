'use client'
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ContactLinkProps {
    firstLineText: string;
    secondLineText: string;
    url: string;
}

export default function ContactLink({firstLineText, secondLineText, url}: ContactLinkProps){
    return <motion.div
                initial='initialState'
                animate='animateState'
                transition={{
                    duration: 0.3,
                    delay: 0.2
                }}
                variants={{
                    initialState: {
                        x:-15,
                        opacity:0
                    },
                    animateState: {
                        x:0,
                        opacity: 0.9
                    }
                }}
    >    
        <p className="text-sm sm:text-lg md:text-2xl">{firstLineText}</p>
        <Link className="font-superRetro italic underline text-md sm:text-3xl md:text-6xl align-middle tracking-wider transition-all duration-600 sm:hover:text-slate-600 sm:hover:pl-4" href={url} target="_blank">{secondLineText}</Link>
    </motion.div>
}