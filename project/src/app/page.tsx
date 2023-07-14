'use client';
import Image from 'next/image';

import { Transition } from '@headlessui/react'

import LightGalleryComponent from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

//import images
import portrait1 from '../assets/images/portrait1.jpg';
import portrait2 from '../assets/images/portrait2.jpg';
import localfile from '../../public/images/localfile.jpg';

export default function Home() {
  
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <main className="flex sm:h-screen sm:w-screen flex-col items-center pt-24 bg-primary dark:bg-dark overflow-y-auto overflow-x-hidden">
      <div className="w-full object-contain flex flex-col sm:grid gap-6 sm:gap-4 sm:grid-cols-3 sm:grid-rows-3">
        <LightGalleryComponent
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
        >
          <Transition
            appear={true}
            show={true}
            enter="transition-opacity duration-75"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
          <Image placeholder='blur' src={portrait1} alt='img-1'/>
          <Image placeholder='blur' src={portrait2} alt='img-1'/>
          <Image placeholder='blur' src={localfile} alt='img-1'/>
          </Transition>
        </LightGalleryComponent>
      </div>
    </main>
  )
}
