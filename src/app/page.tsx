import Image from 'next/image'
import Link from 'next/link'
import NavBar from './components/navigation/NavBar'
import { Console } from 'console';

export default async function Home() {

  interface quotation{
    text: string, 
    author: string
  }

  const quote = await fetch("https://type.fit/api/quotes").then(function(response) {
    return response.json();
  }).then((data)=>{return data});

  

   return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
      <div>
        <Image
          src="/images/meditation.jpg"
          width={500}
          height={500}
          alt="Meditating Humanoid"
          className='stroke-blue-500 stroke-2 animate-[floating_5s_ease-in-out_infinite] '
        />
        {/* <Link href='/users'>Users</Link> */}
      </div>
      <div id="section2" className='min-h-screen back'>
        <h2 className=' mt-10px'>{quote[Math.floor(Math.random()*10)].text}</h2>
        
      </div>
    </main>
  )
}
