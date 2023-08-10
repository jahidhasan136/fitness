import Link from 'next/link';
import image from './images/image.png'
import journy from './images/journey.png'
import { BsArrowRightCircle } from 'react-icons/bs'
import underline from './images/underline.png'
import bgRightTop from './images/bg_right_top.png'
import bgRightBottom from './images/bg_right_bottom.png'
import bgLeft from './images/bg_left.png'

const Workout = () => {
    return (
        <div className='mt-[50px] relative'>
            <img className='absolute left-0' src={bgLeft.src} alt="" />
            <img className='absolute right-0' src={bgRightTop.src} alt="" />
            <img className='absolute right-0 bottom-0' src={bgRightBottom.src} alt="" />
            <div className='container md:flex grid justify-center md:justify-between items-center'>
                <div className='relative '>
                    <img className='w-[340px] lg:w-[508px]' src={image.src} alt="" />
                    <img className=' absolute top-28 lg:-right-36 bg-white px-[17px] py-[15px] rounded-[15px] shadow-2xl shadow-[#c31b1b1a]' src={journy.src} alt="" />
                </div>
                <div className='md:mt-16 lg:mt-28'>
                    <div className='relative'>
                        <h1 className='text-[30px] lg:text-[40px] 2xl:text-[50px] font-bold mb-[55px]'>
                            Workout Program <br /> Made For You
                        </h1>
                        <img className='absolute -bottom-4 lg:right-28' src={underline.src} alt="" />
                    </div>
                    <div className='flex gap-1 2xl:gap-[63px]'>
                        <div className=''>
                            <h2 className='text-xl lg:text-[26px] font-semibold mb-3'>Get Inspired</h2>
                            <p className='text-sm lg:text-base 2xl:text-lg text-[#6A6464] mb-[27px]'>Work hard. Push yourself, <br /> because no one else is <br /> going to do it for you.</p>
                            <Link href='#' className='text-lg text-[#FF592C] flex items-center gap-[5px]'>Read more <BsArrowRightCircle /></Link>
                        </div>
                        <div className=''>
                            <h2 className='text-xl lg:text-[26px] font-semibold mb-3'>Others Inspired</h2>
                            <p className='text-sm lg:text-base 2xl:text-lg text-[#6A6464] mb-[27px]'>Believe you can and <br /> you're halfway there. <br /> When you have a dream.</p>
                            <Link href='#' className='text-lg text-[#FF592C] flex items-center gap-[5px]'>Read more <BsArrowRightCircle /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Workout;