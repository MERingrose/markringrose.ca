import { init } from 'next/dist/compiled/webpack/webpack'
import React, { useState } from 'react'

 function Quote() {

    type quotation ={ 
      0 :
      {
        content : string,
        author : string
      }
    }

    let initQuote: quotation = {"0":{"content" : "A man's job is to make the world a better place to live in, so far as he is able - always remembering the results will be infinitesimal - and to attend to his own soul.", "author" : "Leroy Percy"}}

  async function newQuote(){
    await fetch('https://api.quotable.io/quotes/random').then((res) => {return res.json()}).then((response: quotation)=>{  
    setQuote(response)})
  }
    
  const [quote, setQuote] = useState<quotation>(initQuote);

    
  return (
    <>
    <div>
        <h2 className=' mt-40px'>{quote[0].content}</h2>
        <h3 className='italic '>-{quote[0].author}</h3>
    </div>
    <div className=' mt-2'>
        <button className=' bg-white hover:bg-slate-400 rounded text-black p-1  ' onClick={() => newQuote()}>New Quote</button>
    </div>
    </>
  )
}

export default Quote