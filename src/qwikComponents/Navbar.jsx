import React, { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi'
import logo from '../qwikAssets/qwikcountr.png';

export const Navbar = () => {
    const [navigationMenu, setNavigationMenu] = useState(false);
    const toggleMenu = () => setNavigationMenu(!navigationMenu);

  return (
    <div className='w-screen h-[80px] z-10 bg-white fixed'>
        <div className='px-2 flex justify-between items-center w-full h-full'>
            <div className='flex items-center px-5'>
                <img src={logo} alt="logo" className='w-15 h-7' />
                {/* <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Qwikcountr</h1> */}
                <ul className='hidden md:flex'>
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className='hidden md:flex pr-4'>
                <a href='#' className='px-7 py-2 text-blue-800 bg-transparent text-black'>Login</a>
                <button className='px-7 py-2'>Get Started</button>
            </div>
            <div className='md:hidden' onClick={toggleMenu}>
                {!navigationMenu ? <HiMenu className='w-5' /> : <HiX/>}
                
            </div>
        </div>

        <ul className={!navigationMenu ? 'hidden' : 'absolute bg-white w-full px-8'}>
            <li className='border-b-2 border-white w-full'>Home</li>
            <li className='border-b-2 border-white w-full'>Features</li>
            <li className='border-b-2 border-white w-full'>Pricing</li>
            <li className='border-b-2 border-white w-full'>Blog</li>
            <div className='flex flex-col my-4'>
                <a href='#' className='px-7 py-2 bg-transparent text-blue-600'>Login</a>
                <button className='px-7 py-2'>Get Started</button>
            </div>
        </ul>
     
    </div>
  )
}
