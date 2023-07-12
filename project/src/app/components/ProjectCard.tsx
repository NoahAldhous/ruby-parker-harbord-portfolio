import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    imageSource: StaticImageData;
    projectTitle: string;
    imageAlt: string;
}

export default function ProjectCard({imageSource, projectTitle, imageAlt}:ProjectCardProps){
    return <div className="w-full h-full flex flex-col relative items-center justify-between p-8 sm:p-0">
        <Link className="group sm:mb-4 sm:h-full flex flex-col relative items-center sm:justify-center w-full  cursor-pointer" href={`/project/${projectTitle}`}>
            <div className="relative inline-block object-contain h-full w-full">
            <Image placeholder='blur' className="sm:object-contain sm:group-hover:opacity-60 sm:transition sm:duration-200" src={imageSource} alt={imageAlt} fill={true}/> 
            <div className="hidden sm:tracking-wider sm:text-lg md:text-3xl sm:text-slate-800 sm:absolute sm:w-full sm:h-full sm:flex sm:justify-center sm:items-center sm:opacity-0 sm:group-hover:opacity-90 sm:transition sm:duration-200">
                    {projectTitle}
            </div>
            </div>
        </Link>
        <div className="pt-4 lg:hidden">
            {projectTitle}
        </div>
    </div>
}