import equipment from './images/equipment.png'
import cardio from './images/cardio.png'
import time from './images/time.png'
import bgLeft from './images/bg_left.png'
import RevealAnimation from '../RevealAnimation/RevealAnimation';

const TrainingCenter = () => {
    return (
        <div className="mt-5 relative">
            <img className='absolute -top-32' src={bgLeft.src} alt="" />
            <div className="container">
                <RevealAnimation>
                    <div>
                        <h1 className="text-[30px] lg:text-[40px] 2xl:text-[50px] font-bold text-center">The greatest fitness <br /> <span className="bg-gradient-to-r from-[#FD8A5A] to-[#F44C46] text-transparent bg-clip-text">training center</span></h1>
                    </div>
                </RevealAnimation>
                <div className='grid md:grid-cols-2 gap-[31px] lg:grid-cols-3 items-center mt-10 xl:mt-[50px]'>
                    <div className='bg-white p-5 xl:p-[35px] rounded-[30px] shadow-2xl shadow-[#13277114] z-10'>
                        <img className='mb-[47px] bg-[#EDF5FF] py-[27px] px-[33px] rounded-[20px]' src={equipment.src} alt="" />
                        <RevealAnimation>
                            <h2 className='text-3xl font-bold mb-[30px]'>Pro Equipment</h2>
                            <p className=' xl:text-lg text-[#6A6464]'>Gym Pros offers great deals <br /> on new and used commercial <br /> gym equipment for your</p>
                        </RevealAnimation>
                    </div>
                    <div className='bg-white p-5 xl:p-[41px] rounded-[30px] shadow-2xl shadow-[#13277114] z-10'>
                        <img className='mb-[50px] bg-[#FFEFED] py-[38px] px-[26px] rounded-[20px]' src={cardio.src} alt="" />
                        <RevealAnimation>
                            <h2 className='text-[35px] font-bold mb-[30px]'>Cardio First</h2>
                            <p className='text-base xl:text-[21px] text-[#6A6464]'>Experts are split on this issue. <br /> The majority of fitness experts <br /> will advise you to do the</p>
                        </RevealAnimation>
                    </div>
                    <div className='bg-white p-5 xl:p-[35px] rounded-[30px] shadow-2xl shadow-[#13277114] z-10'>
                        <img className='mb-[47px] bg-[#F6EDFF] py-[24px] px-[22px] rounded-[20px]' src={time.src} alt="" />
                        <RevealAnimation>
                            <h2 className='text-3xl font-bold mb-[30px]'>Flexible Time</h2>
                            <p className='xl:text-lg text-[#6A6464]'>Flextime is a flexible hours <br /> schedule that allows workers <br /> to alter workday start</p>
                        </RevealAnimation>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingCenter;