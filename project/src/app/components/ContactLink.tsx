'use client';

import Link from 'next/link';

interface ContactLinkProps {
    firstLineText: string;
    secondLineText: string;
    url: string;
    isDownload: boolean;
}

export default function ContactLink({firstLineText, secondLineText, url, isDownload}: ContactLinkProps){
    return <div>    
        <p className="text-md font-superRetro italic sm:text-lg md:text-xl lg:text-2xl opacity-90">{firstLineText}</p>
        <Link download={isDownload} className="font-superRetro italic text-3xl sm:text-3xl md:text-4xl lg:text-6xl align-middle tracking-wider transition-all duration-600 lg:opacity-90 lg:hover:opacity-100 hover:pl-4" href={url} target="_blank">{secondLineText}</Link>
    </div>
}