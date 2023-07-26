import Masonry from 'react-masonry-css';
import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


//light gallery
import type {LightGallery} from 'lightgallery/lightgallery';
//component import renamed to avoid conflict with type import on line above
import LightGalleryComponent from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';

interface MasonryGridProps {
    images:{
        alt:string, 
        src:string,
        staticImageData:StaticImageData,
        thumb:string
    }[]
}

export default function MasonryGrid({images}:MasonryGridProps){

    const lightboxRef = useRef<LightGallery | null>(null)

    const breakpointColumnsObj = {
        default: 3,
        1024: 3,
        768: 2,
        640: 1
      };

    return <>
    <Masonry 
        breakpointCols={breakpointColumnsObj} 
        className="flex gap-2 sm:gap-8" 
        columnClassName=""
    >
        {images.map((image, idx) => (
            <AnimatePresence mode="wait">
            <motion.div
            key={image.alt}
            initial='initialState'
            // animate='animateState'
            whileInView='inViewState'
            exit='exitState'
            viewport={{ once: true }}
            transition={{
                duration: 0.9,
                delay: 0.3 + ((Math.floor(Math.random() * 8)) / 10)
            }}
            variants={{
                initialState: {
                    opacity:0
                },
                animateState: {
                    opacity: 1
                },
                inViewState: {
                    opacity: 1
                },
                exitState: {
                    opacity: 0
                },
            }}
            >
            <Image 
                key={image.alt} 
                priority={true}
                quality={100}
                placeholder="blur" 
                src={image.staticImageData} 
                alt={image.alt} 
                className="sm:mb-8 mb-12 cursor-pointer"
                onClick={() => {
                    lightboxRef.current?.openGallery(idx);
                }}
            />
            </motion.div>
        </AnimatePresence>
        ))}
    </Masonry>
    <LightGalleryComponent
            onInit={(ref) => {
                if (ref) {
                    lightboxRef.current = ref.instance
                }
            }}
            speed={500}
            download={false}
            plugins={[lgThumbnail]}
            dynamic
            dynamicEl={images.map(image => ({
                src: image.src, 
                thumb: image.thumb
            }))}
        />
    </>
}