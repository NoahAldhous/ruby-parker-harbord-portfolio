import placeholderMiriam from '../../assets/images/placeholder-miriam.jpg';
import portrait1 from '../../assets/images/portrait1.jpg';
import wedding1 from '../../assets/images/wedding1.jpg';
import ProjectCard from '../components/ProjectCard';

export default function Page(){
    return <main className="flex min-h-screen min-w-screen flex-col items-center pt-24 bg-primary dark:bg-dark">
     <div className="font-superRetro italic flex flex-col sm:flex-row sm:items-start items-center w-full">
        <div className="sm:flex-col sm:flex sm:w-1/2">
            <ProjectCard 
                imageSource={placeholderMiriam} 
                projectTitle='portraits' 
                imageAlt='woman drinking from glass'
            />
        </div>
        <div className="sm:flex-col sm:flex sm:w-1/2">
            <ProjectCard 
                imageSource={portrait1} 
                projectTitle='headshots' 
                imageAlt='headshot of a woman'
            />
        </div>
     </div>
    </main>
}