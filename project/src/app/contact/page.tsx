'use client';

import Link from 'next/link';
import ContactLink from '../components/ContactLink';
import { Transition } from '@headlessui/react'

export default function Page(){
    return <main className="flex flex-col space-y-8 sm:space-y-10 justify-center items-start space-around h-screen w-screen p-24 bg-primary dark:bg-dark">
        <Transition 
          show={true}
          appear={true}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-all ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
        <ContactLink 
            firstLineText='Follow me on'
            secondLineText='Instagram'
            url='https://www.instagram.com/rubyparkerh/'
        />
        </Transition>
        <ContactLink 
            firstLineText='Send me an'
            secondLineText='Email'
            url='mailto:rubyparkerphotography@gmail.com'
        />
        <ContactLink 
            firstLineText='Download my'
            secondLineText='Portfolio'
            url='https://www.instagram.com/rubyparkerh/'
        />
    </main>
}