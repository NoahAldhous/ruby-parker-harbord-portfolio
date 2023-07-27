'use client';

import ContactLink from '../components/ContactLink';
import { motion } from 'framer-motion';

export default function Page(){

    const contactItems = [
        {
            firstLineText:'Follow me on',
            secondLineText:'Instagram',
            url:'https://www.instagram.com/rubyparkerh/'  
        },
        {
            firstLineText:'Send me an',
            secondLineText:'Email',
            url:'mailto:rubyparkerphotography@gmail.com'
        },
        {
            firstLineText:'Download my',
            secondLineText:'Portfolio',
            url:'https://www.instagram.com/rubyparkerh/'
        }
    ];

    const mainVariant = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                delay: 0.5,
                when: "beforeChildren", //use this instead of delay
                staggerChildren: 0.2, //apply stagger on the parent tag
            },
        },
    };

    const divVariant = {
        hidden: {
            x:-20
        },
        visible: {
            x:0
        },
    }

    return <motion.main 
                className="flex flex-col space-y-8 sm:space-y-10 justify-center items-start space-around h-screen w-screen p-24 bg-primary dark:bg-dark"
                initial='hidden'
                animate='visible'
                variants={mainVariant}
            >
            {contactItems.map((item) => (
                                        <motion.div
                                            variants={divVariant}>
                                                <ContactLink 
                                                    firstLineText={item.firstLineText}
                                                    secondLineText={item.secondLineText}
                                                    url={item.url}
                                                />
                                        </motion.div> 
                                    ))}
    </motion.main>
}