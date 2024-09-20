import React from 'react'
import {
   FaDribbble,
   FaDribbbleSquare,
   FaFacebook,
   FaFacebookSquare,
   FaGithubSquare,
   FaInstagram,
   FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>I DO DECOR</h1>
            <p className='py-4'>Check out our surprise party decor selection for the very best in unique or custom, handmade pieces from our invitations shops.</p>
        <div className='flex md:w-[75%] my-6 justify-between'>
            <FaFacebookSquare size={30}/>
            <FaInstagram size={30} />
            <FaTwitterSquare size={30}/>
            <FaGithubSquare size={30}/>
            <FaDribbbleSquare size={30}/>

        </div>
        </div>
        <div className='lg:col-span-2 flex justify justify-between mt-6'>
        <div>
            <h6 className='font-medium text-gray-400'>Curated Packages</h6>
            <ul>
                <li className='py-2 text-sm'>Valentines</li>
                <li className='py-2 text-sm'>Wedding Proposal</li>
                <li className='py-2 text-sm'>Romantic Gesture</li>
                <li className='py-2 text-sm'>Event Planning</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Guides </li>
                <li className='py-2 text-sm'>Documents</li>
                <li className='py-2 text-sm'>Customer Service</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'> Blog</li>
                <li className='py-2 text-sm'>Job Openings</li>
                <li className='py-2 text-sm'>Legal </li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default Footer