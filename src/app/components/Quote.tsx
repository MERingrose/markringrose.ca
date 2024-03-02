import React, { useState, useEffect } from 'react'

 function Quote() {

    type quotation ={ 
      0 :
      {
        content : string,
        author : string
      }
    }

  async function newQuote(){
    await fetch('https://api.quotable.io/quotes/random').then((res) => {return res.json()}).then((response: quotation)=>{  
    setQuote(response)})
  }
    
  const [quote, setQuote] = useState<quotation>({"0": {"content" : "This is a quote", "author" : "Some guy"}});
    
  return (
    <>
    <div>
        <h2 className=' mt-40px'>&quot;{quote[0].content}&quot;</h2>
        <h3 className='italic '>-{quote[0].author}</h3>
    </div>
    <div className=' mt-2'>
        <button className=' bg-white hover:bg-slate-400 rounded text-black p-1  ' onClick={() => newQuote()}>New Quote</button>
    </div>
    </>
  )
}

export default Quote