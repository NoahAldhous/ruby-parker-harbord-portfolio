'use client';

import Link from 'next/link';

interface ContactLinkProps {
    firstLineText: string;
    secondLineText: string;
    url: string;
}

export default function ContactLink({firstLineText, secondLineText, url}: ContactLinkProps){
    return <div>    
        <p className="text-md font-superRetro italic sm:text-lg md:text-2xl opacity-90">{firstLineText}</p>
        <Link className="font-superRetro italic text-3xl sm:text-3xl md:text-6xl align-middle tracking-wider transition-all duration-600 sm:opacity-90 sm:hover:opacity-100 sm:hover:pl-4" href={url} target="_blank">{secondLineText}</Link>
    </div>
}