import underline from './images/underline.png'
import bgLeft from './images/bg_left.png'
import profileOne from './images/profile_1.png'
import profileTwo from './images/profile_2.png'
import star from './images/star.png'
import starTwo from './images/starTwo.png'
import ear from './images/ear.png'
import RevealAnimation from '../RevealAnimation/RevealAnimation'

const PeopleSays = () => {
    return (
        <div className="mt-[80px] md:mt-[120px] lg:mt-[210px] md:mb-[176px] relative">
            <img className='absolute right-0' src={ear.src} alt="" />
            <div className="container">
                <RevealAnimation>
                    <div className='relative'>
                        <h1 className="text-[30px] lg:text-[40px] xl:text-[50px] font-bold mb-8 md:mb-[68px]">What peoples says <br /> about us</h1>
                        <img className='absolute top-14 left-24 md:left-[238px]' src={underline.src} alt="" />
                    </div>
                </RevealAnimation>
                <div className='relative'>
                    <div className="bg-[#4587D4] rounded-[40px] px-10 md:px-[68px] py-14 lg:py-[72px] text-white font-medium relative md:w-3/4">
                        <img className='absolute md:-top-10 left-0' src={bgLeft.src} alt="" />
                        <RevealAnimation>
                            <h2 className="text-xl md:text-[30px] xl:text-[40px] mb-[44px] z-10 xl:leading-[50px]">Start your learning yourney <br /> today!</h2>
                        </RevealAnimation>
                        <div className="text-base text-[#F8F7FC] flex gap-5 lg:gap-[43px]">
                                <button className="bg-gradient-to-r from-[#FD8A5A] to-[#F44C46] px-[30px] py-4 rounded-full z-10 hover:scale-110 transition-all">Get Started</button>
                                <button className="border px-[30px] py-4 rounded-full z-10 hover:scale-110 transition-all">Contact us</button>
                        </div>
                    </div>
                    <div className='md:absolute -bottom-20 right-0 grid gap-5 lg:gap-10'>
                        <div className='bg-white py-8 lg:py-[55px] px-8 lg:px-[51px] rounded-[35px] z-10 shadow-xl'>
                            <img className='mb-4 lg:mb-[27px]' src={profileOne.src} alt="" />
                            <RevealAnimation>
                                <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold lg:mb-[9px]">Wade Warren</h2>
                            </RevealAnimation>
                            <RevealAnimation>
                                <h3 className='lg:text-lg xl:text-xl mb-2 lg:mb-4'>Medical Assistant</h3>
                            </RevealAnimation>
                            <RevealAnimation>
                                <h3 className='lg:text-lg xl:text-xl text-[#6A6464]'><q>Best gym in Savar environment is so <br /> so cool. I loved the services. The staff <br /> is cooperative and professional. Must <br /> go place every guys</q></h3>
                            </RevealAnimation>
                            <img className='ml-auto mt-[18px]' src={star.src} alt="" />
                        </div>
                        <div className='bg-white py-4 lg:py-[21px] px-5 lg:px-[27px] rounded-[35px] flex items-center gap-5 lg:gap-[36px] z-10 shadow-xl'>
                            <img className='mb-[27px]' src={profileTwo.src} alt="" />
                            <div className='grid'>
                                <RevealAnimation>
                                    <h2 className="text-xl lg:text-2xl xl:text-3xl font-bold mb-[9px]">Jenny Wilson</h2>
                                </RevealAnimation>
                                <RevealAnimation>
                                    <h3 className='lg:text-lg xl:text-xl'>Dog Trainer</h3>
                                </RevealAnimation>
                                <img className='ml-auto mt-[2px]' src={starTwo.src} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PeopleSays;