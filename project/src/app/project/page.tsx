import Image from 'next/image';
import Link from 'next/link';
import placeholderMiriam from '../../assets/images/placeholder-miriam.jpg';
import portrait1 from '../../assets/images/portrait1.jpg';
import wedding1 from '../../assets/images/wedding1.jpg'

export default function Page(){
    return <main className="flex min-h-screen min-w-screen sm:h-fit flex-col items-center pt-24 bg-primary dark:bg-dark">
     <div className="sm:h-1/2 font-superRetro italic flex flex-col sm:flex-row sm:items-start items-center w-full">
        <div className="sm:flex-col sm:flex sm:w-1/2">
            <div className="sm:w-full flex flex-col items-center justify-between bg-zinc-300 p-8 sm:p-24">
                <Link className="flex flex-col relative items-center sm:justify-center w-full cursor-pointer" href='/project/portraits'>
                    <Image placeholder='blur' src={placeholderMiriam} alt='woman drinking from glass'></Image>
                    <div className="hidden sm:tracking-wider sm:text-slate-300 sm:absolute sm:min-w-full sm:min-h-full sm:flex sm:justify-center sm:items-center sm:bg-slate-900 sm:opacity-0 sm:hover:opacity-90 sm:transition sm:duration-200">Portraits</div>
                </Link>
                <div className="pt-4 md:hidden">
                    Portraits
                </div>
            </div>
            <div className="sm:w-full flex flex-col items-center justify-between bg-zinc-400 p-8 sm:p-24">
                <Link className="flex flex-col relative items-center sm:justify-center w-full cursor-pointer" href='/project/headshots'>
                    <Image placeholder='blur' src={portrait1} alt='woman drinking from glass'></Image>
                    <div className="hidden sm:tracking-wider sm:text-slate-300 sm:absolute sm:min-w-full sm:min-h-full sm:flex sm:justify-center sm:items-center sm:bg-slate-900 sm:opacity-0 sm:hover:opacity-90 sm:transition sm:duration-200">Headshots</div>
                </Link>
                <div className="pt-4 md:hidden">
                    Headshots
                </div>
            </div>
            <div className="sm:w-full flex flex-col items-center justify-between bg-zinc-300 p-8 sm:p-24">
                <Link className="flex flex-col relative items-center sm:justify-center w-full cursor-pointer" href='/project/weddings'>
                    <Image placeholder='blur' src={wedding1} alt='woman drinking from glass'></Image>
                    <div className="hidden sm:tracking-wider sm:text-slate-300 sm:absolute sm:min-w-full sm:min-h-full sm:flex sm:justify-center sm:items-center sm:bg-slate-900 sm:opacity-0 sm:hover:opacity-90 sm:transition sm:duration-200">Weddings</div>
                </Link>
                <div className="pt-4 md:hidden">
                    Weddings
                </div>
            </div>
        </div>
        <div className="sm:flex-col sm:flex sm:w-1/2">
            <div className="sm:w-full flex flex-col items-center justify-between bg-zinc-300 p-8 sm:p-24">
                <Link className="flex flex-col relative items-center sm:justify-center w-full cursor-pointer" href='/project/portraits'>
                    <Image placeholder='blur' src={placeholderMiriam} alt='woman drinking from glass'></Image>
                    <div className="hidden sm:tracking-wider sm:text-slate-300 sm:absolute sm:min-w-full sm:min-h-full sm:flex sm:justify-center sm:items-center sm:bg-slate-900 sm:opacity-0 sm:hover:opacity-90 sm:transition sm:duration-200">Portraits</div>
                </Link>
                <div className="pt-4 md:hidden">
                    Portraits
                </div>
            </div>
            <div className="sm:w-full flex flex-col items-center justify-between bg-zinc-400 p-8 sm:p-24">
                <Link className="flex flex-col relative items-center sm:justify-center w-full cursor-pointer" href='/project/headshots'>
                    <Image placeholder='blur' src={portrait1} alt='woman drinking from glass'></Image>
                    <div className="hidden sm:tracking-wider sm:text-slate-300 sm:absolute sm:min-w-full sm:min-h-full sm:flex sm:justify-center sm:items-center sm:bg-slate-900 sm:opacity-0 sm:hover:opacity-90 sm:transition sm:duration-200">Headshots</div>
                </Link>
                <div className="pt-4 md:hidden">
                    Headshots
                </div>
            </div>
            <div className="sm:w-full flex flex-col items-center justify-between bg-zinc-300 p-8 sm:p-24">
                <Link className="flex flex-col relative items-center sm:justify-center w-full cursor-pointer" href='/project/weddings'>
                    <Image placeholder='blur' src={wedding1} alt='woman drinking from glass'></Image>
                    <div className="hidden sm:tracking-wider sm:text-slate-300 sm:absolute sm:min-w-full sm:min-h-full sm:flex sm:justify-center sm:items-center sm:bg-slate-900 sm:opacity-0 sm:hover:opacity-90 sm:transition sm:duration-200">Weddings</div>
                </Link>
                <div className="pt-4 md:hidden">
                    Weddings
                </div>
            </div>
        </div>
     </div>
    </main>
}