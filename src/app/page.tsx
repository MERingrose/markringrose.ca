import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Image src="/images/mark_ringrose.svg"
          width={500}
          height={50}
          alt='Mark Ringrose'
          />
        {/* <h1 className="text-center justify-between text-3xl font-bold ">MARK RINGROSE</h1> */}
        {/* <Image
          className='justify-center'
          src="/images/rose_logo.jpg"
          width={200}
          height={200}
          alt="A Rose By Any Other Name"
        /> */}
        <Image
          src="/images/meditation.jpg"
          width={500}
          height={500}
          alt="Meditating Humanoid"
          className='stroke-blue-500 stroke-2'
        />
        <Link href='/users'>Users</Link>
      </div>
    </main>
  )
}
