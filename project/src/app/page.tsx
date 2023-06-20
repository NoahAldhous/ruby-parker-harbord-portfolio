import Image from 'next/image';
import placeholderMiriam from '../../public/pictures/placeholder-miriam.jpg'
import placeholderIceCream from '../../public/pictures/placeholder-iceCream.jpg'
import placeholderRed from '../../public/pictures/placeholder-red.jpg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center md:p-24 p-10 pt-24 bg-primary dark:bg-dark">
      <div className="w-fill object-contain flex flex-col md:grid gap-6 md:gap-4 md:grid-cols-3 md:grid-rows-3">
        <Image placeholder='blur' src={placeholderIceCream} alt="two people eating ice cream"></Image>
        <Image placeholder='blur' src={placeholderRed} alt="Two women in red light"></Image>
        <Image placeholder='blur' src={placeholderMiriam} alt="Young woman drinking from a glass"></Image>
        <Image placeholder='blur' src={placeholderRed} alt="Two women in red light"></Image>
        <Image placeholder='blur' src={placeholderMiriam} alt="Young woman drinking from a glass"></Image>
      </div>
    </main>
  )
}
