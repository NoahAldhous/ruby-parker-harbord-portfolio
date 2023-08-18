'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import profilePicture from '../../../public/images/about/ruby-portrait.png';

export default function Page(){

    function handleClick(){
        window.open('https://www.instagram.com/rubyparkerh/','_blank')
    }

    return <main className="justify-center flex h-screen flex-row items-center p-4 md:p-16 xl:p-24 pt-20 xl:pt-24 bg-primary dark:bg-dark">
     <section className='w-full h-full flex lg:flex-row flex-col items-center md:justify-start lg:justify-evenly'>
        <motion.div
                className='w-7/12 sm:w-2/3 md:w-1/2 lg:w-1/3 mb-4 mt-8 md:mt-6 lg:mt-0 lg:mb-0'
                initial='initialState'
                whileInView='inViewState'
                exit='exitState'
                viewport={{ once: true }}
                transition={{
                    duration: 0.7,
                    delay: 0.1
                }}
                variants={{
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
                }}
                >
                <Image 
                    priority={true}
                    quality={100}
                    placeholder="blur" 
                    src={profilePicture} 
                    alt='ruby in profile'
                    className="cursor-pointer hover:scale-105 transition duration-300 ease-in-out"
                    onClick={handleClick}
                />
        </motion.div>
        <section className='flex flex-col w-10/12 sm:w-2/3 md:w-2/3 lg:w-1/2 text-xs sm:text-xs md:text-base lg:text-base xl:text-lg'>
        <motion.div
                className='w-full'
                initial='initialState'
                whileInView='inViewState'
                exit='exitState'
                viewport={{ once: true }}
                transition={{
                    duration: 0.7,
                    delay: 0.1
                }}
                variants={{
                    initialState: {
                        opacity:0,
                        x:15
                    },
                    inViewState: {
                        opacity: 1,
                        x:0
                    },
                    exitState: {
                        opacity: 0,
                        x:15
                    },
                }}
                >
            <h2 className='font-superRetro italic text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl'>
                Placeholder
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, tortor id laoreet molestie, urna risus blandit est, at aliquet lorem justo id nisi. Nam et ultrices nunc. Integer eget sapien auctor, gravida nulla id, pellentesque tortor. Aliquam eu fringilla felis. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et massa non mi pulvinar malesuada eu non eros. 
            <br/>
            <br/>
            Praesent lobortis tortor non tristique pellentesque. Donec a accumsan massa. Mauris eu est venenatis, tempus dolor vitae, pellentesque diam. Praesent sem lacus, dapibus id hendrerit eget, dignissim vel nulla. Etiam in tellus vel est mattis pulvinar. Etiam bibendum gravida magna, et sollicitudin est aliquet non. Aenean nec nibh vel magna placerat hendrerit a sed libero. Nullam orci turpis, sollicitudin sed urna quis, egestas egestas sapien.
            </p>
            </motion.div>
        </section>
     </section>
     
    </main>
}