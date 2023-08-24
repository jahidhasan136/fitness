'use client'

import logo from './images/logo.png'
import bell from './images/bell.png'
import profile from './images/profile.png'
import bg_right from './images/bg_right.png'
import { FaBars, FaTimesCircle } from 'react-icons/fa'
import { useState } from 'react'
import Link from 'next/link'

const Header = () => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = (e) => {
        // 👇️ toggle isActive state on click
        setIsActive(true);
    };

    const handleClose = (e) => {
        setIsActive(false);

    }
    return (
        <>
            <div className='relative'>
                <img className='absolute right-48' src={bg_right.src} alt="" />
                <div className='container'>
                    <div className='flex justify-between items-center py-10'>
                        <Link href="#">
                            <img className='z-10' src={logo.src} alt="" />
                        </Link>
                        <div className='md:flex gap-10 text-lg z-10 hidden'>
                            <Link href="#" className='hover:text-[#F6564A] transition-all'>Home</Link>
                            <Link href="#" className='hover:text-[#F6564A] transition-all'>About</Link>
                            <Link href="#" className='hover:text-[#F6564A] transition-all'>Features</Link>
                            <Link href="#" className='hover:text-[#F6564A] transition-all'>Service</Link>
                            <Link href="#" className='hover:text-[#F6564A] transition-all'>Pricing</Link>
                        </div>
                        <div className='md:flex gap-6 items-center hidden'>
                            <img className='cursor-pointer z-10' src={bell.src} alt="" />
                            <img className='cursor-pointer z-10' src={profile.src} alt="" />
                        </div>
                        <div className='md:hidden' onClick={handleClick}>
                            <FaBars className='text-[26px]'></FaBars>
                        </div>
                    </div>
                </div>
            </div>

            {/* mobile device */}

            <div className={`${isActive ? 'active' : 'closed'} offcanvas w-[250px] px-[15px] py-[20px] h-full fixed z-50 bg-black top-0 lg:hidden left-[-250px] transition-all`}>
                <FaTimesCircle className='absolute right-[15px] top-[25px] z-10 text-white text-[24px]' onClick={handleClose}></FaTimesCircle>
                <div className="logo mb-[30px]">
                    <Link href="/">
                        <img src={logo.src} alt="" />
                    </Link>
                </div>
                <ul className="space-y-[15px] text-[16px] font-medium text-white mb-[20px]">
                    <li><Link href='/' className='transition hover:text-[#F6564A]'>Home</Link></li>
                    <li><Link href='/' className='transition hover:text-[#F6564A]'>About</Link></li>
                    <li><Link href='/' className='transition hover:text-[#F6564A]'>Features</Link></li>
                    <li><Link href='/' className='transition hover:text-[#F6564A]'>Service</Link></li>
                    <li><Link href='/' className='transition hover:text-[#F6564A]'>Pricing</Link></li>
                </ul>
            </div>
        </>
    );
};

export default Header;