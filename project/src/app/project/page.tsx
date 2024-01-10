import ProjectCard from '../components/NewProjectCard';
import Footer from '../components/Footer'


//image imports
import cafeMelo from '../../../public/images/projects/cafe-melo/melo14.jpg';
import engagements from '../../../public/images/projects/engagements/engagements16.jpg';
import headshots from '../../../public/images/projects/headshots/headshots5.jpg'
import namesBand from '../../../public/images/projects/names-band/names2.jpg'
import portraits from '../../../public/images/projects/portraits/portraits3.jpg'
import patient from '../../../public/images/projects/patient/patient4.png'
import summer from '../../../public/images/projects/summer-scott/summer11.jpg'
import carpet from '../../../public/images/projects/red-carpet/red-carpet8.jpg'
import events from '../../../public/images/projects/events/events15.jpg'

export default function Page(){
    return <main className="flex flex-col items-center pt-24 bg-primary dark:bg-dark overflow-x-hidden box-border">
        <div className="w-screen font-superRetro italic flex flex-col sm:flex-row sm:items-start items-center mb-12 overflow-x-hidden overflow-y-hidden">
            <div className="justify-center flex items-center flex-col w-2/3 sm:w-1/2 sm:h-full">
                <ProjectCard 
                    imageSource={carpet} 
                    projectTitle='red carpets' 
                    imageAlt='actor standing on the red carpet surrounded by lights'
                    url='red-carpet'
                />
                <div className="my-1/5 h-1/2 w-1/2 invisible"></div>
                <ProjectCard 
                    imageSource={headshots} 
                    projectTitle='headshots' 
                    imageAlt='actors headshot'
                    url='headshots'
                />
                <div className="my-1/5 h-1/2 w-1/2 invisible"></div>
                <ProjectCard
                    imageSource={engagements} 
                    projectTitle='engagements' 
                    imageAlt='a happy couple'
                    url='engagements'
                />
                <div className="my-1/5 h-1/2 w-1/2 invisible"></div>
                <ProjectCard 
                    imageSource={namesBand} 
                    projectTitle='Music Artists' 
                    imageAlt='people from a band'
                    // change the url page name to more generic e.g 'band' or 'music artists'
                    url='names-band'
                />
                <div className="my-1/5 h-1/2 w-1/2 invisible"></div>
            </div>
            {/* SECOND COLUMN */}
            <div className="justify-center flex items-center flex-col w-2/3 sm:w-1/2 sm:h-full">
                <div className="hidden sm:inline sm:my-1/5 sm:h-1/2 sm:w-1/2 invisible"></div>
                <ProjectCard 
                    imageSource={events} 
                    projectTitle='events and theatre' 
                    imageAlt='a drag queen performance'
                    url='events'
                />
                <div className="my-1/5 h-1/2 w-1/2 invisible"></div>
                <ProjectCard 
                //will be changed to BTS stills
                    imageSource={summer} 
                    projectTitle='summer scott' 
                    imageAlt='woman standing amongst trees'
                    url='summer-scott'
                />
                <div className="my-1/5 h-1/2 w-1/2 invisible"></div>
                <ProjectCard 
                    imageSource={portraits} 
                    projectTitle='portraits' 
                    imageAlt='portrait of a man'
                    url='portraits'
                />
                <div className="my-1/5 h-1/2 w-1/2 invisible"></div>
                <ProjectCard 
                    imageSource={cafeMelo} 
                    projectTitle='cafe melo' 
                    imageAlt='cup of coffee'
                    url='cafe-melo'
                />
            </div>
        </div>
        <Footer/>
    </main>
}