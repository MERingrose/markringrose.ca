'use client'

import Image from 'next/image'
// import { useState, useEffect } from 'react';
import Quote from './components/Quote';


export default function Home(){



   return (
    <main className="flex flex-col items-center justify-between p-20">
      
      <div id="section1" className='mb-7 '>

        <Image
          src="/images/meditation.jpg"
          width={400}
          height={400}
          alt="Meditating Humanoid"
          className='stroke-blue-500 stroke-2 animate-[floating_5s_ease-in-out_infinite] '
        />
      </div>
      <div id="section2" className='flex flex-col items-center justify-between mt-5'>
      <Quote />
      </div>
    </main>
  )
}
