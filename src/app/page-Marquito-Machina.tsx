import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <h1 className="text-center justify-between">Hello! Welcome to Mark&apos;s World.</h1>
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
          className=''
        />
        <Link href='/users'>Users</Link>
      </div>
    </main>
  )
}
