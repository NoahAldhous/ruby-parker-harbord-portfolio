import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    imageSource: StaticImageData;
    projectTitle: string;
    imageAlt: string;
}

export default function ProjectCard({imageSource, projectTitle, imageAlt}:ProjectCardProps){
    return <div className="sm:max-h-screen sm:w-full flex flex-col items-center justify-between bg-zinc-900 p-8 sm:p-24">
        <Link className="sm:min-h-2/3 flex flex-col relative items-center sm:justify-center w-full cursor-pointer" href={`/project/${projectTitle}`}>
            <Image placeholder='blur' className="sm:object-contain" src={imageSource} alt={imageAlt}/>
            <div className="hidden sm:tracking-wider sm:text-slate-300 sm:absolute sm:min-w-full sm:min-h-full sm:flex sm:justify-center sm:items-center sm:bg-slate-900 sm:opacity-0 sm:hover:opacity-90 sm:transition sm:duration-200">
                {projectTitle}
            </div>
        </Link>
        <div className="pt-4 md:hidden">
            {projectTitle}
        </div>
    </div>
}