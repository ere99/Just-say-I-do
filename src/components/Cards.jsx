import React from 'react'
import Romantic from '../assets/romantic01.jpg'
import Home from '../assets/home01.jpg'

const Cards = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Romantic} alt='/' />
                <h2 className='text-2xl font-bold text-center py-8'>Level 1 Romance</h2>
                <p className='text-center text-4xl font-sans font-bold'>$50</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Money-Bouquet</p>
                    <p className='py-2 border-b mx-8'>Decoration</p>
                    <p className='py-2 border-b mx-8'>Serene Environment</p>
                </div>
                <button className='font-medium bg-[#0a2827] w-[200px] rounded-md my-5 mx-auto px-6 py-3 text-[#98df00]'>Book Appointment</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Home} alt='/' />
                <h2 className='text-2xl font-bold text-center py-8'>Level 2 Romance</h2>
                <p className='text-center text-4xl font-sans font-bold'>$250</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Money-Bouquet</p>
                    <p className='py-2 border-b mx-8'>Decoration</p>
                    <p className='py-2 border-b mx-8'>Serene Environment</p>
                    <p className='py-2 border-b mx-8'>Rose Petals</p>
                </div>
                <button className='font-medium bg-[#0a2827] w-[200px] rounded-md my-5 mx-auto px-6 py-3 text-[#98df00]'>Book Appointment</button>
            </div>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-110 duration-300'>
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Romantic} alt='/' />
                <h2 className='text-2xl font-bold text-center py-8'>Level 3 Romance</h2>
                <p className='text-center text-4xl font-sans font-bold'>$1000</p>
                <div className='text-center font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'>Money-Bouquet</p>
                    <p className='py-2 border-b mx-8'>Rose petal design</p>
                    <p className='py-2 border-b mx-8'>Serene Environment</p>
                    <p className='py-2 border-b mx-8'>Decoration</p>
                    <p className='py-2 border-b mx-8'>Live Music Performance</p>
                </div>
                <button className='font-medium bg-[#0a2827] w-[200px] rounded-md my-5 mx-auto px-6 py-3 text-[#98df00]'>Book Appointment</button>
            </div>

        </div>
    </div>
  )
}

export default Cards