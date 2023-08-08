//this is no longer a used component, will delete and replace with 'NewProjectCard' 

import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

interface ProjectCardProps {
    imageSource: StaticImageData;
    projectTitle: string;
    imageAlt: string;
    url: string
}

export default function ProjectCard({imageSource, projectTitle, imageAlt, url}:ProjectCardProps){
    return <div className="sm:w-full sm:h-full h-screen w-screen flex flex-col relative items-center sm:justify-between p-2 sm:p-0">
        <Link className="group sm:mb-4 mb-1 h-2/3 sm:h-full flex flex-col relative items-center sm:justify-center w-full cursor-pointer" href={`/project/${url}`}>
            <div className="relative flex sm:inline-block object-contain h-full w-full">
                <Image 
                    placeholder='blur' 
                    className="object-contain sm:group-hover:opacity-60 sm:transition sm:duration-200" 
                    src={imageSource} 
                    alt={imageAlt} 
                    quality={100}
                    fill={true}/> 
                <div className="hidden sm:tracking-wider sm:text-lg md:text-3xl sm:absolute sm:w-full sm:h-full sm:flex sm:justify-center sm:items-center sm:opacity-0 sm:group-hover:opacity-100 sm:transition sm:duration-200">
                    {projectTitle}
                </div>
            </div>
        </Link>
        <div className="pt-4 lg:hidden">
            {projectTitle}
        </div>
    </div>
}