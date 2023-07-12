'use client';
import Image from 'next/image';
import { useRef } from 'react';

import type {LightGallery} from 'lightgallery/lightgallery';
import LightGalleryComponent from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

//import images
import placeholderMiriam from '../assets/images/placeholder-miriam.jpg'
import portrait1 from '../assets/images/portrait1.jpg';
import portrait2 from '../assets/images/portrait2.jpg';
import localfile from '../../public/images/localfile.jpg';

export default function Home() {

  const lightboxRef = useRef<LightGallery | null>(null);

  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  return (
    <main className="flex min-h-screen flex-col items-center md:p-24 md:pt-32 p-10 pt-24 bg-primary dark:bg-dark">
      <div className="w-fill object-contain flex flex-col sm:grid gap-6 sm:gap-4 sm:grid-cols-3 sm:grid-rows-3">
        <Image src={portrait1} alt='img-1'/>
        <Image src={portrait2} alt='img-1'/>
        <Image src={localfile} alt='img-1'/>
      </div>
    </main>
  )
}
