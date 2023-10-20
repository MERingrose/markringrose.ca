import Image from 'next/image'
import Link from 'next/link'
import NavBar from './components/navigation/NavBar'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar/>
      <div>
        <Image
          src="/images/meditation.jpg"
          width={500}
          height={500}
          alt="Meditating Humanoid"
          className='stroke-blue-500 stroke-2'
        />
        <Link href='/users'>Users</Link>
      </div>
      <div id="section2" className='min-h-screen'>

      </div>
    </main>
  )
}
