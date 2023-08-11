import running from './images/running.png'
import yoga from './images/yoga.png'
import lifting from './images/lifting.png'
import RevealAnimation from '../RevealAnimation/RevealAnimation';

const Exercises = () => {
    return (
        <div className="container md:-mt-16 lg:-mt-52 xl:-mt-72">
            <RevealAnimation>
                <div className="flex items-center gap-[7px]">
                    <div className="w-12  border-b border h-1 bg-red-500"></div>
                    <h2 className="text-[28px] font-semibold">Popular Exercises</h2>
                </div>
            </RevealAnimation>
            <div className='lg:flex justify-between md:mt-8'>
                <div className='grid grid-cols-2 md:gap-[30px]'>
                    <div className='flex items-center gap-[23px] bg-[#FFFFFF] py-[34px] px-8 rounded-lg'>
                        <img className='bg-[#F2E8FF] rounded-full p-3' src={running.src} alt="" />
                        <RevealAnimation>
                            <div>
                                <h5 className="lg:text-xl font-bold">Running</h5>
                                <p className="text-xs lg:text-sm">Running tips for every type</p>
                            </div>
                        </RevealAnimation>
                    </div>
                    <div className='flex items-center gap-[23px] bg-[#FFFFFF] py-[34px] px-8 rounded-lg'>
                        <img className='bg-[#E8FFF2] rounded-full p-3' src={yoga.src} alt="" />
                        <RevealAnimation>
                            <div>
                                <h5 className="lg:text-xl font-bold">Yoga</h5>
                                <p className="text-xs lg:text-sm">Yet Another Great Ontology</p>
                            </div>
                        </RevealAnimation>
                    </div>
                </div>
                <div className='flex items-center gap-[23px] bg-[#FFFFFF] py-[34px] px-8 rounded-lg'>
                    <img className='bg-[#FFEDE8] rounded-full p-3' src={lifting.src} alt="" />
                    <RevealAnimation>
                        <div>
                            <h5 className="lg:text-xl font-bold">Lifting</h5>
                            <p className="text-xs lg:text-sm">Manual handling of loads</p>
                        </div>
                    </RevealAnimation>
                </div>
            </div>
        </div>
    );
};

export default Exercises;