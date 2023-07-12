import Link from 'next/link';

export default function Page(){
    return <main className="flex min-h-screen flex-col justify-center items-center p-24 bg-primary dark:bg-dark">
        <div className="flex border-2 border-indigo-600">
            <Link href='https://www.instagram.com/rubyparkerh/' target="_blank">Instagram</Link>
            <Link href='mailto:rubyparkerphotography@gmail.com' target="_blank">Email</Link>
        </div>
    </main>
}