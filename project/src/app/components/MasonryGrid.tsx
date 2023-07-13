import Masonry from 'react-masonry-css';
import Image, { StaticImageData } from 'next/image';

interface MasonryGridProps {
    images:{
        src:StaticImageData,
        alt:string
    }[]
}

export default function MasonryGrid({images}:MasonryGridProps){

    const breakpointColumnsObj = {
        default: 3,
        1024: 3,
        768: 2,
        640: 1
      };

    return <Masonry 
        breakpointCols={breakpointColumnsObj} 
        className="flex gap-2 sm:gap-8" 
        columnClassName=""
    >
        {images.map((image) => (
            <Image 
                key={image.alt} 
                placeholder="blur" 
                src={image.src} 
                alt={image.alt} 
                className="sm:mb-8 mb-12 cursor-pointer"
            />
        ))}
    </Masonry>
}