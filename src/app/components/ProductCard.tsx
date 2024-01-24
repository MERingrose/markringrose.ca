import React, { PropsWithChildren } from 'react'
import Image from 'next/image'



function ProductCard(props : {siteName : String, imgSrc : string, height : number, width : number, alt : string, link : string, description: string}){
    return (
        <div className='inline-grid max-w-sm m-10  '>
            <a href={props.link}>
                <h1 className=''>{props.siteName}</h1>
                <Image 
                src={props.imgSrc}
                height={props.height}
                width={props.width}
                alt={props.alt}
                />
                <h2 className=' text-wrap '>{props.description}</h2>
            </a>
        </div>
    )
}

export default ProductCard;