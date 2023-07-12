import Link from 'next/link';
import ContactLink from '../components/ContactLink';

export default function Page(){
    return <main className="flex flex-col space-y-8 sm:space-y-10 justify-center items-start border-2 space-around border-indigo-600 h-screen w-screen p-24 bg-primary dark:bg-dark">
        <ContactLink 
            firstLineText='Follow me on'
            secondLineText='Instagram'
            url='https://www.instagram.com/rubyparkerh/'
        />
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