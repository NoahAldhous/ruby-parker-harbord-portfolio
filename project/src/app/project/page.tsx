// import ProjectCard from '../components/ProjectCard';
import ProjectCard from '../components/NewProjectCard';

//image imports
import cafeMeloThumb from '../../../public/images/projects/cafe-melo/melo1.jpg';
import engagementsThumb from '../../../public/images/projects/engagements/engagements1.jpg';
import headshotsThumb from '../../../public/images/projects/headshots/headshots1.jpg'
import namesBandThumb from '../../../public/images/projects/names-band/names1.jpg'

export default function Page(){
    return <main className="flex h-screen w-screen flex-col items-center pt-24 bg-primary dark:bg-dark overflow-x-hidden">
        <div className="w-screen font-superRetro italic flex flex-col sm:flex-row sm:items-start items-center mb-12 overflow-y-auto">
            <div className="justify-center flex items-center flex-col w-2/3 sm:w-1/2 sm:h-full">
                <ProjectCard
                    imageSource={cafeMeloThumb} 
                    projectTitle='cafe melo' 
                    imageAlt='woman drinking from glass'
                    url='cafe-melo'
                />
                <div className="my-1/5 h-1/2 w-1/2 invisible"></div>
                <ProjectCard 
                    imageSource={engagementsThumb} 
                    projectTitle='engagements' 
                    imageAlt='woman drinking from glass'
                    url='engagements'
                />
                <div className="my-1/5 h-1/2 w-1/2 invisible"></div>
            </div>
            <div className="justify-center flex items-center flex-col w-2/3 sm:w-1/2 sm:h-full">
                <div className="hidden sm:inline sm:my-1/5 sm:h-1/2 sm:w-1/2 invisible"></div>
                <ProjectCard 
                    imageSource={headshotsThumb} 
                    projectTitle='headshots' 
                    imageAlt='headshot of a woman'
                    url='headshots'
                />
                <div className="my-1/5 h-1/2 w-1/2 invisible"></div>
                <ProjectCard 
                    imageSource={namesBandThumb} 
                    projectTitle='names' 
                    imageAlt='headshot of a woman'
                    url='names-band'
                />
            </div>
        </div>
    </main>
}