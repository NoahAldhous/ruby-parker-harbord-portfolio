import Image from 'next/image'
import placeholderMiriam from '../../../public/static/images/placeholder-miriam.jpg'

export default function Page(){
    return <main className="flex min-h-screen flex-col items-center pt-24 bg-primary dark:bg-dark">
     <div className="flex flex-col items-center p-6 bg-red-500 w-full cursor-pointer">
        <Image placeholder='blur' src={placeholderMiriam} alt='woman drinking from glass'></Image>
        <div>Beer</div>
     </div>
    </main>
}