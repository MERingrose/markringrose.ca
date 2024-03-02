import React from 'react'
import ProductCard from '../components/ProductCard'

function work() {
    return (
        <main className='inline-block min-h-screen flex-col items-center justify-between p-24'>
            
            <div>
                <h1>SELECTED WORKS</h1>
                <br></br>
            </div>
            
                <ProductCard
                siteName="Stacie Paige Hair"
                imgSrc="/images/sphthumbnail.png"
                height={200}
                width ={500} 
                alt="Stacie Paige Hair Website Preview"
                link='http://www.staciepaigehair.ca'
                description='Professional website for Stacie Paige Hair Inc. Built using pure React with custom components and traditional routing. The build is ongoing and it is hosted on Netlify.'
                />
                <ProductCard
                siteName="Stacie Paige Hair"
                imgSrc="/images/sphthumbnail.png"
                height={200}
                width ={500} 
                alt="Stacie Paige Hair Website Preview"
                link='http://www.staciepaigehair.ca'
                description='Professional website for Stacie Paige Hair Inc. Built using pure React with custom components and traditional routing. The build is ongoing and it is hosted on Netlify.'
                />
            
        </main>
    )
}

export default work