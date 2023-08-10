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
                        <img className='z-10' src={logo.src} alt="" />
                        <div className='md:flex gap-10 text-lg z-10 hidden'>
                            <h3>Home</h3>
                            <h3>About</h3>
                            <h3>Features</h3>
                            <h3>Service</h3>
                            <h3>Pricing</h3>
                        </div>
                        <div className='md:flex gap-6 items-center hidden'>
                            <img src={bell.src} alt="" />
                            <img src={profile.src} alt="" />
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
                    <li><Link href='/' className='transition hover:text-pink'>Home</Link></li>
                    <li><Link href='/' className='transition hover:text-pink'>About</Link></li>
                    <li><Link href='/' className='transition hover:text-pink'>Features</Link></li>
                    <li><Link href='/' className='transition hover:text-pink'>Service</Link></li>
                    <li><Link href='/' className='transition hover:text-pink'>Pricing</Link></li>
                </ul>
            </div>
        </>
    );
};

export default Header;