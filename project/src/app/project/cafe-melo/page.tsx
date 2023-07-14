'use client';

//masonry grid component
import MasonryGrid from '@/app/components/MasonryGrid';

//image import
import images from '../../../assets/images/projects/cafe-melo/export';

export default function Page(){

    return <main className="flex sm:h-screen sm:w-screen flex-col items-center pt-24 bg-primary dark:bg-dark overflow-y-auto overflow-x-hidden">
     <div className="flex flex-col items-center p-2 sm:p-12 w-full">
        <MasonryGrid 
            images={images}
        />
     </div>
    </main>
}