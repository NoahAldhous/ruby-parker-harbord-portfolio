import Image from 'next/image';
import Link from 'next/link';
import placeholderMiriam from '../../assets/images/placeholder-miriam.jpg';
import portrait1 from '../../assets/images/portrait1.jpg';
import wedding1 from '../../assets/images/wedding1.jpg'

export default function Page(){
    return <main className="flex min-h-screen min-w-screen md:h-fit flex-col items-center pt-24 bg-primary dark:bg-dark">
     <div className="md:h-1/2 font-superRetro italic flex flex-col md:flex-row md:items-start items-center w-full">
        <div className="md:w-1/3 md:relative flex flex-col items-center justify-between bg-zinc-300 py-8 px-6">
            <Link className="flex flex-col items-center md:justify-center w-full cursor-pointer" href='/project/portraits'>
                <Image placeholder='blur' src={placeholderMiriam} alt='woman drinking from glass'></Image>
                <div className="hidden md:tracking-wider md:text-slate-300 md:absolute md:min-w-full md:min-h-full md:flex md:justify-center md:items-center md:bg-slate-900 md:opacity-0 md:hover:opacity-90 md:transition md:duration-200">Portraits</div>
            </Link>
            <div className="pt-4 md:hidden">
                Portraits
            </div>
        </div>
        <div className="md:w-1/3 md:relative flex flex-col items-center justify-between bg-zinc-400 py-8 px-6">
            <Link className="flex flex-col items-center md:justify-center w-full cursor-pointer" href='/project/headshots'>
                <Image placeholder='blur' src={portrait1} alt='woman drinking from glass'></Image>
                <div className="hidden md:tracking-wider md:text-slate-300 md:absolute md:min-w-full md:min-h-full md:flex md:justify-center md:items-center md:bg-slate-900 md:opacity-0 md:hover:opacity-90 md:transition md:duration-200">Headshots</div>
            </Link>
            <div className="pt-4 md:hidden">
                Headshots
            </div>
        </div>
        <div className="md:w-1/3 md:relative flex flex-col items-center justify-between bg-zinc-200 py-8 px-6">
            <Link className="flex flex-col items-center md:justify-center w-full cursor-pointer" href='/project/weddings'>
                <Image placeholder='blur' src={wedding1} alt='woman drinking from glass'></Image>
                <div className="hidden md:tracking-wider md:text-slate-300 md:absolute md:min-w-full md:min-h-full md:flex md:justify-center md:items-center md:bg-slate-900 md:opacity-0 md:hover:opacity-90 md:transition md:duration-200">Weddings</div>
            </Link>
            <div className="pt-4 md:hidden">
                Weddings
            </div>
        </div>
     </div>
    </main>
}