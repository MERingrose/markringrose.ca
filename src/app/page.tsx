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
      <div id="section2" className='min-h-screen back mt-40px '>
        <h2 className=' mt-40px'>"{quote[0].quote}"</h2>
        <h3 className=' '>-{quote[0].author}</h3>
        
      </div>
    </main>
  )
}
