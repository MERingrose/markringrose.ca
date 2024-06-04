import React from 'react'
import NavBar from '../components/navigation/NavBar'

function contact() {
    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
           
            <div className=''>
                {/* Contact submission form  */}
                <form className='flex flex-col items-center justify-between'>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" autoFocus={true} className='text-black '/>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" className='text-black '/>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message" rows={10} cols={50} className='text-black '  ></textarea>
                    <button type="submit" className='bg-transparent hover:bg-white mt-4 font-bold text-white hover:text-black border-gray-200 p-4'>SUBMIT</button>
                </form>
            </div>
        </main>
    )
}

export default contact