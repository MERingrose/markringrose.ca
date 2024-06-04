async function getData(){

    interface quotation { 
        content : string
        author : string
    }
    
    
    
    const data: quotation = await fetch('https://api.quotable.io/quotes/random').then((res) => {return res.json()}).then((response: quotation)=>{ return response});

    return data
}

export default getData