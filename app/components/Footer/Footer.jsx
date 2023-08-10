// 'use client'
import logo from './images/logo.png'
import bgRight from './images/bg_right.png'
import { BiLogoTwitter } from 'react-icons/bi'
import { AiFillLinkedin, AiFillYoutube } from 'react-icons/ai'
import { IoMdSend } from 'react-icons/io'
import Link from 'next/link';

const Footer = () => {
    return (
        <div className='bg_footer relative text-white mt-[100px]'>
            <img className='absolute right-0 z-10' src={bgRight.src} alt="" />
            <div className='container pt-[100px] pb-[33px]'>
                <div className='grid grid-cols-5'>
                    <div className='grid justify-center z-10'>
                        <img className='mb-8' src={logo.src} alt="" />
                        <h3 className='mb-[25px] text-left'>Join a Newsletter</h3>
                        <div className='relative'>
                            <input className=' w-[308px] py-[17px] pl-4 pr-[60px] text-black border-0' type="text" placeholder='Input your email here' />
                            <div className='absolute top-0 right-0 bg-gradient-to-r from-[#FD8A5A] to-[#F44C46] p-[16.67px] cursor-pointer'>
                                <IoMdSend className='text-[25px]'></IoMdSend>
                            </div>
                        </div>
                    </div>
                    <div className='grid justify-center z-10'>
                        <h3 className='text-xl font-medium mb-[25px]'>Products</h3>
                        <div className='grid gap-4'>
                            <Link href='#' className='text-base'>Squat Rack</Link>
                            <Link href='#' className='text-base'>Power Tower</Link>
                            <Link href='#' className='text-base'>Explorer</Link>
                            <Link href='#' className='text-base'>Price</Link>
                            <Link href='#' 
                            className='text-base'>Institutional</Link>
                        </div>
                    </div>
                    <div className='grid justify-center z-10'>
                        <h3 className='text-xl font-medium mb-[25px]'>Resources</h3>
                        <div className='grid gap-4'>
                            <Link href='#' className='text-base'>APIs</Link>
                            <Link href='#' className='text-base'>Status</Link>
                            <Link href='#' className='text-base'>Open Source</Link>
                            <Link href='#' className='text-base'>Research</Link>
                            <Link href='#' className='text-base'>Security</Link>
                        </div>
                    </div>
                    <div className='grid justify-center z-10'>
                        <h3 className='text-xl font-medium mb-[25px]'>Company</h3>
                        <div className='grid gap-4'>
                            <Link href='#' className='text-base'>About</Link>
                            <Link href='#' className='text-base'>Careers Hiring</Link>
                            <Link href='#' className='text-base'>Press Center</Link>
                            <Link href='#' className='text-base'>Prime</Link>
                            <Link href='#' className='text-base'>Ventures</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-lg font-medium mb-[30px] text-center'>Our Social Media</h3>
                        <div className='flex items-center gap-[15px] justify-center z-20'>
                            <div className='bg-white p-[9px] rounded-full cursor-pointer z-10'>
                                <BiLogoTwitter className='text-[26px] text-black'></BiLogoTwitter>
                            </div>
                            <div className='bg-white p-[9px] rounded-full cursor-pointer z-10'>
                                <AiFillYoutube className='text-[26px] text-[#FF592C]'></AiFillYoutube>
                            </div>
                            <div className='bg-white p-[9px] rounded-full cursor-pointer z-10'>
                                <AiFillLinkedin className='text-[26px] text-black'></AiFillLinkedin>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='broder border-b mt-[43px] mb-[31px] border-[#FA8462]'></div>
                <div className='text-base flex justify-between'>
                    <h5>Copyright- 2021 CreativePeoples</h5>
                    <h5>Privacy Policy | Term of Use</h5>
                </div>
            </div>
        </div>
    );
};

export default Footer;