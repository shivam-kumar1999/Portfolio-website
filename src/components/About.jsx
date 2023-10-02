import React from 'react'

const About = () => {
  return (
    <div name='about' className=' bg-[#FAFAFA] w-full h-screen text-gray-500'>
           <div className=' flex flex-col justify-center items-center w-full h-full'>

            <div className='max-w-[1000px] w-full '>

                <div className='sm:pb-8 pl-4'>
                      
                      <p className='text-5xl  font-bold inline border-b-4 border-blue-500 items-center'>About</p>
                </div>

                <div></div>

                <div className='max-w-[1000px] w-full h-full   '>

                      <div>
                        <p className='text-4xl font-bold px-4 mt-6'>Hi. I'm Shivam Kumar, nice to meet you. Please take a look around.</p>
                      </div>

                      <div>
                        <p className='text-2xl px-4 py-4'>I am passionate about building excellent software that improves
                            the lives of those around me. I specialize in creating software
                            for clients ranging from individuals and small-businesses all the
                            way to large enterprise corporations. What would you do if you had
                            a software expert available at your fingertips</p>
                      </div>

                </div>

            </div>

           </div>
   
    </div>
  )
}

export default About;