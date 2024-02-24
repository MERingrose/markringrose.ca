import Image from 'next/image'
import Link from 'next/link'
import NavBar from './components/navigation/NavBar'
import { Console } from 'console';

export default async function Home() {

  interface quotation{
    text: string, 
    author: string
  };

  const key = "gWno1afgUHLXw2JN85O6QA==5jDaKRdeo28FGwBH";

  const quote = await fetch("https://api.api-ninjas.com/v1/quotes", {"headers" : { "X-Api-Key" : key}}).then(function(response) {
    return response.json();
  }).then((data)=>{return data});

  console.log(quote);

   return (
    <main className="flex flex-col items-center justify-between p-20">
      
      <div id="section1" className='mb-7 '>
        {/* <Image
        src="/images/rose_logo.svg"
        width={200}
        height={200}
        alt="A stylized ring and rose"
        className='flex animate-[floating_7s_ease-in-out_infinite] bg-black'
        /> */}
        <Image
          src="/images/meditation.jpg"
          width={400}
          height={400}
          alt="Meditating Humanoid"
          className='stroke-blue-500 stroke-2 animate-[floating_5s_ease-in-out_infinite] '
        />
        {/* <Link href='/users'>Users</Link> */}
      </div>
      <div id="section2" className='flex flex-col items-center justify-between mt-1'>
        <h2 className=' mt-40px'>&quot;{quote[0].quote}&quot;</h2>
        <h3 className='italic '>-{quote[0].author}</h3>
        
      </div>
    </main>
  )
}
