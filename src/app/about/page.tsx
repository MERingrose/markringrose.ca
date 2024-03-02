import React from 'react'
import NavBar from '../components/navigation/NavBar'

const about = () => {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            
            <div className='justify-center w-2/3 m-10'>
                <p className=' min-w-2/3 m-4'>Mark Ringrose is a creative and dynamic individual. He is a problem solver with human betterment in mind. Mark spent much of his work experience in the financial space, being one of the first investment advisors in Edmonton with a focus on ESG (Environmental, Social, Governance) investing - investing with purpose.
                </p>
                <p className=' min-w-2/3 m-4'>
                Being highly curious and always learning, Mark took interest in software development for the ability to create things that impact people in positive ways. In exploring the software industry Mark found a passion, and an excellent outlet for his boundless creativity.
                </p>
                <p className=' min-w-2/3 m-4'>  
                Personable, adaptable, an excellent communicator, and at the intersection of business and technology, Mark is focused on bringing human-centred design into the world.
                </p>
            </div>
        </main>
    )
}

export default about