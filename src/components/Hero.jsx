import React from 'react'
import { ReactTyped } from 'react-typed';


const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
          <p className='text-[#00df9a] font-bold p-2'>COLORING MOMENTS </p>  
          <h1 className='md:text-7xl sm:text:6xl text-4xl font-bold md:py-6'>Light up their faces with...</h1>
          <div>
            <p className='md:text-3xl sm:text-2xl text-xl font-bold py-4'>Joy, Smiles and Moments that make 
            {<ReactTyped className= 'md:text-3xl sm:text-2xl text-xl font-bold md:pl-4 pl-2' 
            strings={[ 'Life', 'Hearts', 'Homes']} typeSpeed={150} backSpeed={100} loop   />} beautiful</p> 
          </div>
          <p className='md:text-2xl text-xl font-bold text-gray-500'>Curate the perfect surprise experience for those you love</p>
          <button className='font-bold bg-[#98df00] w-[200px] rounded-md my-6 mx-auto py-3 text-black'>Get Started</button>
        </div>
    </div>
  )
}

export default Hero