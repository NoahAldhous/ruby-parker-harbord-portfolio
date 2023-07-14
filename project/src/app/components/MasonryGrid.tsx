import Masonry from 'react-masonry-css';
import Image, { StaticImageData } from 'next/image';
import { useRef } from 'react';

//light gallery
import type {LightGallery} from 'lightgallery/lightgallery';
//component import renamed to avoid conflict with type import on line above
import LightGalleryComponent from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

interface MasonryGridProps {
    images:{
        alt:string, 
        data:StaticImageData
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
            <Image 
                key={image.alt} 
                quality='40'
                placeholder="blur" 
                src={image.data} 
                alt={image.alt} 
                className="sm:mb-8 mb-12 cursor-pointer"
                onClick={() => {
                    lightboxRef.current?.openGallery(idx);
                }}
            />
        ))}
    </Masonry>
    <LightGalleryComponent
            onInit={(ref) => {
                if (ref) {
                    lightboxRef.current = ref.instance
                }
            }}
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            dynamic
            dynamicEl={images.map(image => ({
                src: image.data.src, 
                thumb: image.data.src
            }))}
        />
    </>
}