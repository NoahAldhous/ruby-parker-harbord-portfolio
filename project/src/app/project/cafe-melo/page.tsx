'use client';
import MasonryGrid from '@/app/components/MasonryGrid';

//image imports
import melo1 from '../../../assets/images/projects/cafe-melo/melo1.jpg';
import melo2 from '../../../assets/images/projects/cafe-melo/melo2.jpg';
import melo3 from '../../../assets/images/projects/cafe-melo/melo3.jpg';
import melo4 from '../../../assets/images/projects/cafe-melo/melo4.jpg';
import melo5 from '../../../assets/images/projects/cafe-melo/melo5.jpg';
import melo6 from '../../../assets/images/projects/cafe-melo/melo6.jpg';
import melo7 from '../../../assets/images/projects/cafe-melo/melo7.jpg';
import melo8 from '../../../assets/images/projects/cafe-melo/melo8.jpg';
import melo9 from '../../../assets/images/projects/cafe-melo/melo9.jpg';
import melo10 from '../../../assets/images/projects/cafe-melo/melo10.jpg';
import melo11 from '../../../assets/images/projects/cafe-melo/melo11.jpg';
import melo12 from '../../../assets/images/projects/cafe-melo/melo12.jpg';
import melo13 from '../../../assets/images/projects/cafe-melo/melo13.jpg';
import melo14 from '../../../assets/images/projects/cafe-melo/melo14.jpg';

export default function Page(){

    const images = [
        {
            alt: 'melo1',
            src: melo1, 
        },
        {
            alt: 'melo2',
            src: melo2, 
        },
        {
            alt: 'melo3',
            src: melo3, 
        },
        {
            alt: 'melo4',
            src: melo4, 
        },
        {
            alt: 'melo5',
            src: melo5, 
        },
        {
            alt: 'melo6',
            src: melo6, 
        },
        {
            alt: 'melo7',
            src: melo7, 
        },
        {
            alt: 'melo8',
            src: melo8, 
        },
        {
            alt: 'melo9',
            src: melo9, 
        },
        {
            alt: 'melo10',
            src: melo10, 
        },
        {
            alt: 'melo11',
            src: melo11, 
        },
        {
            alt: 'melo12',
            src: melo12, 
        },
        {
            alt: 'melo13',
            src: melo13, 
        },
        {
            alt: 'melo14',
            src: melo14, 
        }
    ]

    return <main className="flex sm:h-screen sm:w-screen flex-col items-center pt-24 bg-primary dark:bg-dark overflow-y-auto overflow-x-hidden">
     <div className="flex flex-col items-center p-2 sm:p-12 w-full">
        <MasonryGrid images={images}/>
     </div>
    </main>
}