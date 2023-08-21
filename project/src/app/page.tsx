'use client';
import Image from 'next/image';
import { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

//image import
import home1 from '../../public/images/film/film7.jpg';
import home2 from '../../public/images/home-page/home18.jpg';
import home3 from '../../public/images/film/film64.jpg';
import home4 from '../../public/images/projects/engagements/engagements9.jpg';
import home5 from '../../public/images/film/film9.jpg';
import home6 from '../../public/images/film/film37.jpg';
import home7 from '../../public/images/home-page/home19.jpg';
import home8 from '../../public/images/home-page/home4.jpg';
import home9 from '../../public/images/projects/names-band/names4.jpg';
import home10 from '../../public/images/home-page/home11.jpg';
import home11 from '../../public/images/home-page/home15.jpg';
import home12 from '../../public/images/home-page/home16.jpg';
import home13 from '../../public/images/home-page/home17.jpg';

//light gallery
import type {LightGallery} from '../app/dependencies/lightgallery/lightgallery';
//component import renamed to avoid conflict with type import on line above
import LightGalleryComponent from '../app/dependencies/lightgallery/react';

// import styles
import '../app/dependencies/lightgallery/css/lightgallery.css';
import '../app/dependencies/lightgallery/css/lg-thumbnail.css';

// import plugins
import lgThumbnail from '../app/dependencies/lightgallery/plugins/thumbnail';

export default function homepage() {

  const images = [
  {
    src:  '/images/film/film7.jpg',
    thumb:  '/images/film/film7.jpg'
  },
  {
    src:  '/images/film/film18.jpg',
    thumb:  '/images/film/film18.jpg'
  },
  {
    src:  '/images/film/film64.jpg',
    thumb:  '/images/film/film64.jpg'
  },
  {
    src:  '/images/projects/engagements/engagements9.jpg',
    thumb:  '/images/projects/engagements/engagements9.jpg'
  },
  {
    src:  '/images/film/film37.jpg',
    thumb:  '/images/film/film37.jpg'
  },
  {
    src:  '/images/film/film9.jpg',
    thumb:  '/images/film/film9.jpg'
  },
  {
    src:  '/images/home-page/home19.jpg',
    thumb:  '/images/home-page/home19.jpg'
  },
  {
    src:  '/images/home-page/home4.jpg',
    thumb:  '/images/home-page/home4.jpg'
  },
  {
    src:  '/images/projects/names-band/names4.jpg',
    thumb:  '/images/projects/names-band/names4.jpg'
  },
  {
    src: 'images/home-page/home11.jpg',
    thumb: '/images/home-page/home11.jpg'
  },
  {
    src: '/images/home-page/home15.jpg',
    thumb: '/images/home-page/home15.jpg'
  },
  {
    src: '/images/home-page/home16.jpg',
    thumb: '/images/home-page/home16.jpg'
  },
  {
    src: '/images/home-page/home17.jpg',
    thumb: '/images/home-page/home17.jpg'
  },
  ]

  const lightboxRef = useRef<LightGallery | null>(null)

  const divVariants = {
    initialState: {
        opacity:0,
        y:15   
    },
    inViewState: {
        opacity: 1,
        y:0
    },
    exitState: {
        opacity: 0,
        y:15   
    },
}

  return (  
    <main className="flex sm:h-screen sm:w-screen flex-col items-center pt-24 bg-primary dark:bg-dark overflow-y-auto overflow-x-hidden">
      <section className="flex h-full flex-col justify-start items-start p-2 sm:p-8 w-full h-full ">
        <AnimatePresence mode="wait">
          <div className='w-full flex-col flex sm:flex-row sm:justify-end'>
            <motion.div 
              className='p-8 flex flex-col justify-end mb-24'
              initial='initialState'
              whileInView='inViewState'
              exit='exitState'
              viewport={{ once: true }}
              variants={divVariants}
              transition={{
                  duration: 0.7,
                  delay: 0.1 + ((Math.floor(Math.random() * 7)) / 10)
              }}
            >
              <Image
                onClick={() => {
                    lightboxRef.current?.openGallery(0);
                }}
                placeholder='blur' 
                src={home1} 
                alt='home1'
                className='cursor-pointer'
              />
            </motion.div>
            <motion.div 
              className='flex flex-col sm:items-end items-center'
              initial='initialState'
              whileInView='inViewState'
              exit='exitState'
              viewport={{ once: true }}
              variants={divVariants}
              transition={{
                  duration: 0.7,
                  delay: 0.1 + ((Math.floor(Math.random() * 7)) / 10)
              }}
            >
              <Image
                onClick={() => {
                    lightboxRef.current?.openGallery(1);
                }}
                placeholder='blur' 
                src={home2} 
                alt='home2'
                className='cursor-pointer mb-24 sm:w-11/12'
              />
              <Image
                onClick={() => {
                    lightboxRef.current?.openGallery(2);
                }}
                placeholder='blur' 
                src={home3} 
                alt='home3'
                className='cursor-pointer mt-24 sm:pr-8 sm:pl-2'
              />
            </motion.div>
          </div>
          <motion.div 
            className='w-full flex justify-center'
            initial='initialState'
            whileInView='inViewState'
            exit='exitState'
            viewport={{ once: true }}
            variants={divVariants}
            transition={{
                duration: 0.7,
                delay: 0.1 + ((Math.floor(Math.random() * 7)) / 10)
            }}
          >
            <Image
              onClick={() => {
                    lightboxRef.current?.openGallery(3);
                }}
              placeholder='blur' 
                src={home4} 
                alt='home4'
                className='cursor-pointer mt-24'
            />
          </motion.div>
          <motion.div 
            className='w-full flex flex-col sm:flex-row items-center pt-12 justify-between'
            initial='initialState'
            whileInView='inViewState'
            exit='exitState'
            viewport={{ once: true }}
            variants={divVariants}
            transition={{
                duration: 0.7,
                delay: 0.1 + ((Math.floor(Math.random() * 7)) / 10)
            }}
          >
            <Image
              onClick={() => {
                    lightboxRef.current?.openGallery(4);
                }}
              placeholder='blur' 
                src={home6} 
                alt='home6'
                className='cursor-pointer sm:w-1/2'
            />
            <Image
              onClick={() => {
                    lightboxRef.current?.openGallery(5);
                }}
              placeholder='blur' 
                src={home5} 
                alt='home5'
                className='cursor-pointer sm:w-5/12'
            />
          </motion.div>
          <motion.div 
            className='w-full flex justify-center'
            initial='initialState'
            whileInView='inViewState'
            exit='exitState'
            viewport={{ once: true }}
            variants={divVariants}
            transition={{
                duration: 0.7,
                delay: 0.1 + ((Math.floor(Math.random() * 7)) / 10)
            }}
          >
            <Image
              onClick={() => {
                    lightboxRef.current?.openGallery(6);
                }}
              placeholder='blur' 
                src={home7} 
                alt='home7'
                className='cursor-pointer mt-24'
            />
          </motion.div>
          <motion.div 
            className='w-full flex justify-end'
            initial='initialState'
            whileInView='inViewState'
            exit='exitState'
            viewport={{ once: true }}
            variants={divVariants}
            transition={{
                duration: 0.7,
                delay: 0.1 + ((Math.floor(Math.random() * 7)) / 10)
            }}
          >
            <Image
              onClick={() => {
                    lightboxRef.current?.openGallery(7);
                }}
              placeholder='blur' 
                src={home8} 
                alt='home8'
                className='cursor-pointer mt-24 pr-2 w-5/6'
            />
          </motion.div>
          <motion.div 
            className='w-full flex sm:flex-row flex-col justify-between items-center sm:items-end'
            initial='initialState'
            whileInView='inViewState'
            exit='exitState'
            viewport={{ once: true }}
            variants={divVariants}
            transition={{
                duration: 0.7,
                delay: 0.1 + ((Math.floor(Math.random() * 7)) / 10)
            }}
          >
            <Image
              onClick={() => {
                    lightboxRef.current?.openGallery(8);
                }}
              placeholder='blur' 
                src={home9} 
                alt='home9'
                className='cursor-pointer mt-24 sm:ml-4 mb-24 sm:mb-36 sm:pr-2 sm:w-1/2'
            />
            <Image
              onClick={() => {
                    lightboxRef.current?.openGallery(9);
                }}
              placeholder='blur' 
                src={home10} 
                alt='home10'
                className='cursor-pointer mt-24 sm:mr-6 sm:w-5/12'
            />
          </motion.div>
          <motion.div 
            className='w-full flex justify-center'
            initial='initialState'
            whileInView='inViewState'
            exit='exitState'
            viewport={{ once: true }}
            variants={divVariants}
            transition={{
                duration: 0.7,
                delay: 0.1 + ((Math.floor(Math.random() * 7)) / 10)
            }}
          >
            <Image
              onClick={() => {
                    lightboxRef.current?.openGallery(10);
                }}
              placeholder='blur' 
                src={home11} 
                alt='home11'
                className='cursor-pointer mt-24 sm:w-9/12'
            />
          </motion.div>
          <motion.div 
            className='w-full flex sm:flex-row flex-col justify-between sm:items-end items-center'
            initial='initialState'
            whileInView='inViewState'
            exit='exitState'
            viewport={{ once: true }}
            variants={divVariants}
            transition={{
                duration: 0.7,
                delay: 0.1 + ((Math.floor(Math.random() * 7)) / 10)
            }}
          >
            <Image
              onClick={() => {
                    lightboxRef.current?.openGallery(11);
                }}
              placeholder='blur' 
                src={home12} 
                alt='home12'
                className='cursor-pointer mt-24 sm:ml-4 mb-4 sm:pr-2 sm:w-1/2'
            />
            <Image
              onClick={() => {
                    lightboxRef.current?.openGallery(12);
                }}
              placeholder='blur' 
                src={home13} 
                alt='home13'
                className='cursor-pointer sm:mt-24 sm:mr-2 mb-32 sm:w-5/12'
            />
          </motion.div>
        </AnimatePresence>
      </section>
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
    </main>
  )
}
