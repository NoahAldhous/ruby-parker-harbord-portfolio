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

    return <motion.main 
                className="flex flex-col space-y-8 sm:space-y-10 justify-center items-start space-around h-screen w-screen p-24 bg-primary dark:bg-dark"
                initial='initialState'
                animate='animateState'
                transition={{
                    duration: 0.3,
                    delay: 0.2
                }}
                variants={{
                    initialState: {
                        opacity:0,
                        transition: {
                            staggerChildren: 0.3,
                            },
                    },
                    animateState: {
                        opacity: 1
                    },
                }}
            >
            {contactItems.map((item) => (
                                        <ContactLink 
                                            firstLineText={item.firstLineText}
                                            secondLineText={item.secondLineText}
                                            url={item.url}
                                        />
                                    ))}
    </motion.main>
}