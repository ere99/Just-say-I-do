import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
            <div className='lg:col-span-2 my-4'>
            <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Would you like some tips about curating the perfect romantic experience?</h1>
            <p>Sign up to our newsletter and stay up to date</p>
            </div>
            <div className='my-4'>
                <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                    <input className='p-3 w-full rounded-md text-black' type="email" placeholder='Enter email'/>
                    <button className='font-medium bg-[#0a2827] w-[200px] rounded-md ml-4 my-6 mx-auto px-6 py-3 text-[#98df00]'>Notify me</button>
                </div>
                <p> Protecting your data is important to us. Read our <span className='text-[#231a48]'>Privacy Policy.</span></p>
            </div>
        </div>
    </div>
  )
}

export default Newsletter