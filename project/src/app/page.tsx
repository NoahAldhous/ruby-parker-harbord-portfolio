'use client';
import MasonryGrid from './components/MasonryGrid';
import Image from 'next/image';

//image import
import home1 from '../../public/images/film/film78.jpg';
import home2 from '../../public/images/film/film7.jpg';
import home3 from '../../public/images/film/film64.jpg';
import home4 from '../../public/images/projects/engagements/engagements9.jpg';
import home5 from '../../public/images/film/film9.jpg';
import home6 from '../../public/images/film/film37.jpg';
import home7 from '../../public/images/projects/headshots/headshots6.jpg';
import home8 from '../../public/images/home-page/home4.jpg';
import home9 from '../../public/images/projects/names-band/names4.jpg';
import home10 from '../../public/images/home-page/home11.jpg';
import home11 from '../../public/images/home-page/home15.jpg';
import home12 from '../../public/images/home-page/home16.jpg';
import home13 from '../../public/images/home-page/home17.jpg';


import images from './image-import'

export default function Home() {

  return (  
    <main className="flex sm:h-screen sm:w-screen flex-col items-center pt-24 bg-primary dark:bg-dark overflow-y-auto overflow-x-hidden">
      <section className="flex h-full flex-col justify-start items-start p-2 sm:p-8 w-full h-full">
        <div className='w-full flex justify-end'>
          <div className='p-8 flex flex-col justify-end mb-24'>
          <Image 
            src={home2} 
            alt='home2 mt-24'
          />
          </div>
          <div className='flex flex-col items-end'>
          <Image 
            src={home1} 
            alt='home1'
            className='mb-24 w-11/12'
          />
          <Image 
            src={home3} 
            alt='home3'
            className='mt-24 pr-8 pl-2'
          />
          </div>
        </div>
        <div className='w-full flex justify-center'>
        <Image 
            src={home4} 
            alt='home4'
            className='mt-24'
          />
        </div>
        <div className='w-full flex flex-row items-center pt-12 justify-between'>
          <Image 
              src={home6} 
              alt='home6'
              className='w-1/2'
          />
          <Image 
              src={home5} 
              alt='home5'
              className='w-5/12'
          />
        </div>
        <div className='w-full flex justify-center'>
        <Image 
            src={home7} 
            alt='home7'
            className='mt-24'
          />
        </div>
        <div className='w-full flex justify-end'>
        <Image 
            src={home8} 
            alt='home8'
            className='mt-24 pr-2 w-5/6'
          />
        </div>
        <div className='w-full flex justify-between items-end'>
        <Image 
            src={home9} 
            alt='home9'
            className='mt-24 ml-4 mb-36 pr-2 w-1/2'
          />
        <Image 
            src={home10} 
            alt='home10'
            className='mt-24 mr-6 w-5/12'
          />
        </div>
        <div className='w-full flex justify-center'>
        <Image 
            src={home11} 
            alt='home11'
            className='mt-24 w-9/12'
          />
        </div>
        <div className='w-full flex justify-between items-end'>
        <Image 
            src={home12} 
            alt='home12'
            className='mt-24 ml-4 mb-4 pr-2 w-1/2'
          />
        <Image 
            src={home13} 
            alt='home13'
            className='mt-24 mr-2 mb-32 w-5/12'
          />
        </div>
        {/* <MasonryGrid images={images}/> */}
      </section>
    </main>
  )
}
