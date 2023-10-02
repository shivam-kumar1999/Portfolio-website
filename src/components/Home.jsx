import React from 'react';
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='bg-[#FAFAFA] w-full h-screen'>

           {/* //Container */}

           <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

                <p className='text-blue-500 font-semibold text-lg'>Hi, my name is</p>
                <h1 className='text-4xl sm:text-7xl font-bold'>Shivam Kumar</h1>
                <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Frontend Developer..</h2>
                <p className='text-[#8892b0] py-5 max-w-[900px] text-lg'>I'm a passionate frontend developer with a knack for crafting engaging and user-friendly web experiences.
                    With a diverse skill set and a commitment to clean, efficient code, I thrive in turning design concepts into pixel-perfect, responsive websites and web applications.
                </p>

                <div>
                  <button className='text-black font-semibold border-2 solid black px-6 py-3 my-2 flex items-center hover:bg-blue-500'>View Work <HiArrowNarrowRight className='ml-2'/> </button>
                </div>



                {/* <div>
                   <img  className='grayscale border-radius-[50%] flex flex-row ' src="https://avatars.githubusercontent.com/u/99277501?v=4" alt="" />
                </div> */}
               
           </div>

           

    </div>
  )
}

export default Home