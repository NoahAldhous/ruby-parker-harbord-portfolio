import Link from 'next/link';

interface ContactLinkProps {
    firstLineText: string;
    secondLineText: string;
    url: string;
}

export default function ContactLink({firstLineText, secondLineText, url}: ContactLinkProps){
    return <div>    
        <p className="text-sm sm:text-lg">{firstLineText}</p>
        <Link className="font-superRetro italic underline text-md md:text-3xl align-middle tracking-wider transition-all duration-600 sm:hover:text-slate-600 sm:hover:pl-2" href={url} target="_blank">{secondLineText}</Link>
    </div>
}