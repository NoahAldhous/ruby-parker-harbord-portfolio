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

export default function Home() {

  const lightboxRef = useRef<LightGallery | null>(null)

  return (
    <main className="flex min-h-screen flex-col items-center md:p-24 md:pt-32 p-10 pt-24 bg-primary dark:bg-dark">
      <div className="w-fill object-contain flex flex-col md:grid gap-6 md:gap-4 md:grid-cols-3 md:grid-rows-3">
        <Image placeholder='blur' src={portrait1} alt="two people eating ice cream"></Image>
        <Image placeholder='blur' src={portrait2} alt="Two women in red light"></Image>
        <Image placeholder='blur' src={placeholderMiriam} alt="Young woman drinking from a glass"></Image>
        <Image placeholder='blur' src={placeholderMiriam} alt="Young woman drinking from a glass"></Image>
        <LightGalleryComponent
                onInit={() => {console.log('light gallery initialised')}}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                dynamic
                dynamicEl={[

                ]}
            />
      </div>
    </main>
  )
}
