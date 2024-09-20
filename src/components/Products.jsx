import React from 'react'
import Valentine from '../assets/Valentines01.jpg'

const Products = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[500px] mx-auto my-4 ' src={Valentine} alt='valentines' />
            <div className='flex flex-col justify-center'>
                <p className='text-[#0d5] font-bold'>DECORATION DASHBOARD</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Design Your Romantic Experience</h1>
                <p>Surprise your loved ones with a Luxury surprise birthday room decoration in nigeria. book now and experience luxury at its peak
                . A room decorated with balloons and decorations for a birthday or anniversary party, including exotic designs on the floor and surroundings..</p>
                <button className='font-bold bg-black w-[200px] rounded-md my-6 mx-auto md:mx-0 py-3 text-[#98df00]'>
                  Get Started
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default Products