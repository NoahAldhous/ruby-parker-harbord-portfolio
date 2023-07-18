'use client';
import MasonryGrid from './components/MasonryGrid';

import images from './image-import'

export default function Home() {

  return (  
    <main className="flex sm:h-screen sm:w-screen flex-col items-center pt-24 bg-primary dark:bg-dark overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col items-center p-2 sm:p-12 w-full">
        <MasonryGrid images={images}/>
      </div>
    </main>
  )
}
