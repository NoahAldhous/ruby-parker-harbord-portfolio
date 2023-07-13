import placeholderMiriam from '../../assets/images/placeholder-miriam.jpg';
import portrait1 from '../../assets/images/portrait1.jpg';
import ProjectCard from '../components/ProjectCard';

//image imports
import cafeMeloThumb from '../../assets/images/projects/cafe-melo/1 and Thumbnail.jpg';
import engagementsThumb from '../../assets/images/projects/engagements/DSCF6970.jpg';
import headshotsThumb from '../../assets/images/projects/headshots/DSCF6699.jpg'
import namesBandThumb from '../../assets/images/projects/names-band/000093060003.jpg'

export default function Page(){
    return <main className="flex sm:h-screen sm:w-screen flex-col items-center pt-24 bg-primary dark:bg-dark overflow-y-auto overflow-x-h-0">
        <div className="h-screen w-screen font-superRetro italic flex flex-col sm:flex-row sm:items-start items-center w-full">
            <div className="sm:flex-col sm:block sm:w-1/2 sm:h-full">
                <ProjectCard 
                    imageSource={cafeMeloThumb} 
                    projectTitle='cafe melo' 
                    imageAlt='woman drinking from glass'
                    url='cafe-melo'
                />
                <div className="h-0 sm:h-1/2 invisible"></div>
                <ProjectCard 
                    imageSource={engagementsThumb} 
                    projectTitle='engagements' 
                    imageAlt='woman drinking from glass'
                    url='engagements'
                />
                <div className="h-0 sm:h-1/2 invisible"></div>
            </div>
            <div className="sm:flex-col sm:block sm:w-1/2 sm:h-full">
                <div className="h-0 sm:h-1/2 w-full"></div>
                <ProjectCard 
                    imageSource={headshotsThumb} 
                    projectTitle='headshots' 
                    imageAlt='headshot of a woman'
                    url='headshots'
                />
                <div className="h-0 sm:h-1/2 invisible"></div>
                <ProjectCard 
                    imageSource={namesBandThumb} 
                    projectTitle='names' 
                    imageAlt='headshot of a woman'
                    url='names-band'
                />
                <div className="h-0 sm:h-1/2 invisible"></div>
            </div>
        </div>
    </main>
}