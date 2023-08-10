import equipment from './images/equipment.png'
import cardio from './images/cardio.png'
import time from './images/time.png'
import bgLeft from './images/bg_left.png'

const TrainingCenter = () => {
    return (
        <div className="mt-5 relative">
            <img className='absolute -top-32' src={bgLeft.src} alt="" />
            <div className="container">
                <div>
                    <h1 className="text-[50px] font-bold text-center">The greatest fitness <br /> <span className="bg-gradient-to-r from-[#FD8A5A] to-[#F44C46] text-transparent bg-clip-text">training center</span></h1>
                </div>
                <div className='flex justify-between items-center mt-[50px]'>
                    <div className='bg-white p-[35px] rounded-[30px] shadow-2xl shadow-[#13277114] z-10'>
                        <img className='mb-[47px] bg-[#EDF5FF] py-[27px] px-[33px] rounded-[20px]' src={equipment.src} alt="" />
                        <h2 className='text-3xl font-bold mb-[30px]'>Pro Equipment</h2>
                        <p className='text-lg text-[#6A6464]'>Gym Pros offers great deals <br /> on new and used commercial <br /> gym equipment for your</p>
                    </div>
                    <div className='bg-white p-[41px] rounded-[30px] shadow-2xl shadow-[#13277114] z-10'>
                        <img className='mb-[50px] bg-[#FFEFED] py-[38px] px-[26px] rounded-[20px]' src={cardio.src} alt="" />
                        <h2 className='text-[35px] font-bold mb-[30px]'>Cardio First</h2>
                        <p className='text-[21px] text-[#6A6464]'>Experts are split on this issue. <br /> The majority of fitness experts <br /> will advise you to do the</p>
                    </div>
                    <div className='bg-white p-[35px] rounded-[30px] shadow-2xl shadow-[#13277114] z-10'>
                        <img className='mb-[47px] bg-[#F6EDFF] py-[24px] px-[22px] rounded-[20px]' src={time.src} alt="" />
                        <h2 className='text-3xl font-bold mb-[30px]'>Flexible Time</h2>
                        <p className='text-lg text-[#6A6464]'>Flextime is a flexible hours <br /> schedule that allows workers <br /> to alter workday start</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainingCenter;