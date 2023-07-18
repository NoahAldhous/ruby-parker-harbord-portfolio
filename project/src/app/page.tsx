'use client';
import MasonryGrid from './components/MasonryGrid';

import images from '../../public/images/home/export'

export default function Home() {

  return (  
    <main className="flex sm:h-screen sm:w-screen flex-col items-center pt-24 bg-primary dark:bg-dark overflow-y-auto overflow-x-hidden">
      <div className="w-full object-contain flex flex-col sm:grid gap-6 sm:gap-4 sm:grid-cols-3 sm:grid-rows-3">
        <MasonryGrid images={images}/>
      </div>
    </main>
  )
}
