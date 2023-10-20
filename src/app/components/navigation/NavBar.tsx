'use client'

import { Component, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'


export function NavBar (){

    const [sidebar, setSidebar] = useState(false);
    return (
      
      <div>
        <nav className='w-full bg-transparent fixed top-0 left-0 right-0 z-10'>
            <div className='p-4'>
              <Image src="/images/mark_ringrose.svg"
              width={500}
              height={50}
              alt='Mark Ringrose'
            
               />  
            </div>
            <div className='right-10 top-0 fixed p-2 hover:cursor-pointer ' onClick={() => setSidebar(sidebar ? false : true)}>
              <Image src="/images/moon.jpg"
              width={100}
              height={100}
              alt='Moon'/
              >
            </div>
            <div id='sidebar' className={'min-h-[25vh] min-w-sm bg-slate-50 ' + (sidebar ? "visible" : "invisible") }>

            </div>
        </nav>

      </div>
    )
  }


export default NavBar