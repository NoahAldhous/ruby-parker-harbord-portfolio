import Image from 'next/image';
import Link from 'next/link';
import placeholderMiriam from '../../assets/images/placeholder-miriam.jpg';

export default function Page(){
    return <main className="flex min-h-screen flex-col items-center pt-24 bg-primary dark:bg-dark">
     <div className="flex flex-col items-center bg-red-500 w-full cursor-pointer">
        <Link className="flex flex-col items-center pt-8 w-full bg-zinc-500 p-6" href='/project/beer'>
            <Image placeholder='blur' src={placeholderMiriam} alt='woman drinking from glass'></Image>
        </Link>
            <div>Beer</div>
        <Link className="flex flex-col items-center pt-8 w-full bg-zinc-300 p-6" href='/project/beer'>
            <Image placeholder='blur' src={placeholderMiriam} alt='woman drinking from glass'></Image>
        </Link>
            <div>Beer</div>
        <Link className="flex flex-col items-center pt-8 w-full bg-zinc-400 p-6" href='/project/beer'>
            <Image placeholder='blur' src={placeholderMiriam} alt='woman drinking from glass'></Image>
        </Link>
            <div>Beer</div>
     </div>
    </main>
}