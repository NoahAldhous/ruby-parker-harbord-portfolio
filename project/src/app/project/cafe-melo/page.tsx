'use client';

import Masonry from 'react-masonry-css';
import Image from 'next/image';

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
    return <main className="flex min-h-screen flex-col items-center pt-24 px-6 bg-primary dark:bg-dark">
     <div className="flex flex-col items-center p-2 sm:p-12 w-full cursor-pointer">
        <Masonry breakpointCols={3} className="flex gap-2 sm:gap-8" columnClassName="">
            <Image placeholder="blur" src={melo1} alt='melo1' className="sm:mb-8 mb-2"/>
            <Image placeholder="blur" src={melo2} alt='melo2' className="sm:mb-8 mb-2"/>
            <Image placeholder="blur" src={melo3} alt='melo3' className="sm:mb-8 mb-2"/>
            <Image placeholder="blur" src={melo4} alt='melo4' className="sm:mb-8 mb-2"/>
            <Image placeholder="blur" src={melo5} alt='melo5' className="sm:mb-8 mb-2"/>
            <Image placeholder="blur" src={melo6} alt='melo6' className="sm:mb-8 mb-2"/>
            <Image placeholder="blur" src={melo7} alt='melo7' className="sm:mb-8 mb-2"/>
            <Image placeholder="blur" src={melo8} alt='melo8' className="sm:mb-8 mb-2"/>
            <Image placeholder="blur" src={melo9} alt='melo9' className="sm:mb-8 mb-2"/>
            <Image placeholder="blur" src={melo10} alt='melo10' className="sm:mb-8 mb-2"/>
            <Image placeholder="blur" src={melo11} alt='melo11' className="sm:mb-8 mb-2"/>
            <Image placeholder="blur" src={melo12} alt='melo12' className="sm:mb-8 mb-2"/>
            <Image placeholder="blur" src={melo13} alt='melo13' className="sm:mb-8 mb-2"/>
            <Image placeholder="blur" src={melo14} alt='melo14' className="sm:mb-8 mb-2"/>
        </Masonry>
     </div>
    </main>
}