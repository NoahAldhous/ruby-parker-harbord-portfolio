'use client';

import Link from 'next/link';

interface ContactLinkProps {
    firstLineText: string;
    secondLineText: string;
    url: string;
}

export default function ContactLink({firstLineText, secondLineText, url}: ContactLinkProps){
    return <div>    
        <p className="text-sm sm:text-lg md:text-2xl">{firstLineText}</p>
        <Link className="font-superRetro italic underline text-md sm:text-3xl md:text-6xl align-middle tracking-wider transition-all duration-600 sm:hover:text-slate-600 sm:hover:pl-4" href={url} target="_blank">{secondLineText}</Link>
    </div>
}