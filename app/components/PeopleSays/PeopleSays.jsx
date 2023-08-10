import underline from './images/underline.png'
import bgLeft from './images/bg_left.png'
import profileOne from './images/profile_1.png'
import profileTwo from './images/profile_2.png'
import star from './images/star.png'
import starTwo from './images/starTwo.png'
import ear from './images/ear.png'

const PeopleSays = () => {
    return (
        <div className="mt-[169px] mb-[176px] relative">
            <img className='absolute right-0' src={ear.src} alt="" />
            <div className="container">
                <div className='relative'>
                    <h1 className="text-[50px] font-bold mb-[68px]">What peoples says <br /> about us</h1>
                    <img className='absolute top-14 left-[238px]' src={underline.src} alt="" />
                </div>
                <div className='relative'>
                    <div className="bg-[#4587D4] rounded-[40px] px-[68px] py-[72px] text-white font-medium relative w-3/4">
                        <img className='absolute top-6' src={bgLeft.src} alt="" />
                        <h2 className="text-[40px] mb-[44px] z-10">Start your learning yourney <br /> today!</h2>
                        <div className="text-base text-[#F8F7FC] flex gap-[43px]">
                            <button className="bg-gradient-to-r from-[#FD8A5A] to-[#F44C46] px-[30px] py-4 rounded-full z-10">Get Started</button>
                            <button className="border px-[30px] py-4 rounded-full z-10">Contact us</button>
                        </div>
                    </div>
                    <div className='absolute -bottom-20 right-0 grid gap-10'>
                        <div className='bg-white py-[55px] px-[51px] rounded-[35px]'>
                            <img className='mb-[27px]' src={profileOne.src} alt="" />
                            <h2 className="text-3xl font-bold mb-[9px]">Wade Warren</h2>
                            <h3 className='text-xl mb-4'>Medical Assistant</h3>
                            <h3 className='text-xl text-[#6A6464]'><q>Best gym in Savar environment is so <br /> so cool. I loved the services. The staff <br /> is cooperative and professional. Must <br /> go place every guys</q></h3>
                            <img className='ml-auto mt-[18px]' src={star.src} alt="" />
                        </div>
                        <div className='bg-white py-[21px] px-[27px] rounded-[35px] flex items-center gap-[36px]'>
                            <img className='mb-[27px]' src={profileTwo.src} alt="" />
                            <div className='grid'>
                                <h2 className="text-3xl font-bold mb-[9px]">Jenny Wilson</h2>
                                <h3 className='text-xl'>Dog Trainer</h3>
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