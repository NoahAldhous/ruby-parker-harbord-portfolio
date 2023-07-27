'use client';

import Link from 'next/link';

interface ContactLinkProps {
    firstLineText: string;
    secondLineText: string;
    url: string;
}

export default function ContactLink({firstLineText, secondLineText, url}: ContactLinkProps){
    return <div>    
        <p className="text-sm sm:text-lg md:text-2xl opacity-80">{firstLineText}</p>
        <Link className="font-superRetro italic text-md sm:text-3xl md:text-6xl align-middle tracking-wider transition-all duration-600 sm:opacity-80 sm:hover:opacity-100 sm:hover:pl-4" href={url} target="_blank">{secondLineText}</Link>
    </div>
}