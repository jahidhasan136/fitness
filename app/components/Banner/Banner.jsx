import videoIcon from './images/video_icon.png'
import banner from './images/banner.png'
import bannerMobile from './images/banner_mobile.png'
import dumbble from './images/dumbble.png'
import heartRate from './images/heart_rate.png'
import underline from './images/underline.png'
import emoji from './images/emoji.png'

const Banner = () => {
    return (
        <div className='container'>
            <div className='md:flex justify-between'>
                <div className='md:mt-[60px] lg:mt-[109px]'>
                    <div className='relative mb-[63px]'>
                        <h1 className='text-[40px] md:text-[40px] lg:text-6xl font-bold capitalize lg:leading-[70px]'>Come & make <br /> your dream body <br /> with GYMC</h1>
                        <img className='absolute -bottom-10 right-14 lg:right-36' src={underline.src} alt="" />
                        <img className='absolute right-0 lg:right-10 xl:right-[70px] bottom-4' src={emoji.src} alt="" />
                    </div>
                    <div className='hidden md:flex items-center gap-[30px] mb-8'>
                        <button className='primary-button text-xs md:text-base z-10'>Get Started</button>
                        <div className='flex items-center gap-[15px]'>
                            <img className='bg-white p-[20px] rounded-full z-10 shadow-2xl shadow-[#f04d2933]' src={videoIcon.src} alt="" />
                            <h3 className='text-xs md:text-base lg:text-lg z-10'>Watch Video</h3>
                        </div>
                    </div>
                    <h2 className='hidden md:flex text-xl text-[#6A6464] font-semibold relative z-10'>Already member of our communtiy? <span className='text-[#FF592C] cursor-pointer'>Sign in</span></h2>
                </div>
                <div className='relative'>
                    <img className='hidden md:flex' src={banner.src} alt="" />
                    <img className='mx-auto md:hidden' src={bannerMobile.src} alt="" />
                    <img className='hidden md:flex absolute top-20 right-2 bg-[#FFFFFF] py-3 px-2 rounded-[14px]' src={dumbble.src} alt="" />
                    <img className='absolute top-[47%] left-5' src={heartRate.src} alt="" />
                </div>
                
                <div className='grid justify-center md:hidden items-center gap-[30px] mb-8'>
                        <button className='primary-button text-lg z-10'>Get Started</button>
                        <div className='flex items-center gap-[15px]'>
                            <img className='bg-white p-[20px] rounded-full z-10 shadow-2xl shadow-[#f04d2933]' src={videoIcon.src} alt="" />
                            <h3 className='text-lg z-10 font-medium'>Watch Video</h3>
                        </div>
                    </div>
                <div className='hidden md:block mt-[60px] lg:mt-[109px] z-10'>
                    <div className='text-center mb-[42px]'>
                        <h1 className='text-2xl md:text-[30px] lg:text-[44px] font-bold bg-gradient-to-r from-[#FD8A5A] to-[#F44C46] text-transparent bg-clip-text'>120k</h1>
                        <h2 className='text-xs md:text-base lg:text-xl font-medium text-[#6A6464]'>Happy Clients</h2>
                    </div>
                    <div className='text-center mb-[42px]'>
                        <h1 className='text-2xl md:text-[30px] lg:text-[44px] font-bold bg-gradient-to-r from-[#FD8A5A] to-[#F44C46] text-transparent bg-clip-text'>24</h1>
                        <h2 className='text-xs md:text-base lg:text-xl font-medium text-[#6A6464]'>Years Experinece</h2>
                    </div>
                    <div className='text-center mb-[42px]'>
                        <h1 className='text-2xl md:text-[30px] lg:text-[44px] font-bold bg-gradient-to-r from-[#FD8A5A] to-[#F44C46] text-transparent bg-clip-text'>45+</h1>
                        <h2 className='text-xs md:text-base lg:text-xl font-medium text-[#6A6464]'>Expert Trainer</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;