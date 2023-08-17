'use client'
import Image from 'next/image';
import { motion } from 'framer-motion';
import profilePicture from '../../../public/images/about/ruby-portrait.png';

export default function Page(){
    return <main className="justify-center flex min-h-screen flex-row items-center p-24 bg-primary dark:bg-dark">
     <section className='w-100 flex flex-row justify-between'>
        <motion.div
                className='w-1/3'
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
                    className="cursor-pointer"
                />
        </motion.div>
        <section className='flex flex-col w-1/2'>
            <h2 className='font-superRetro italic text-2xl'>
                Placeholder
            </h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec luctus, tortor id laoreet molestie, urna risus blandit est, at aliquet lorem justo id nisi. Nam et ultrices nunc. Integer eget sapien auctor, gravida nulla id, pellentesque tortor. Aliquam eu fringilla felis. Aliquam erat volutpat. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec et massa non mi pulvinar malesuada eu non eros. 
            <br/>
            <br/>
            Praesent lobortis tortor non tristique pellentesque. Donec a accumsan massa. Mauris eu est venenatis, tempus dolor vitae, pellentesque diam. Praesent sem lacus, dapibus id hendrerit eget, dignissim vel nulla. Etiam in tellus vel est mattis pulvinar. Etiam bibendum gravida magna, et sollicitudin est aliquet non. Aenean nec nibh vel magna placerat hendrerit a sed libero. Nullam orci turpis, sollicitudin sed urna quis, egestas egestas sapien.
            </p>
        </section>
     </section>
     
    </main>
}