import React from 'react'
import { data } from '../data/data';

const Work = () => {
  return (
    <div name='work' className='bg-[#FAFAFA] w-full md:h-screen text-gray-500 sm:pb-8 pl-4'>

       <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>

          <div className='pb-8 '>
             <p className='text-5xl font-bold mb-10 inline border-b-4  border-blue-500'>Work</p>
             <p className='text-2xl py-4 mb-10 mt-2 '>Check out some of my work</p>
          </div>

          
          <div className='grid sm:grid-cols-2 md:grid-cols3 gap-4'>
              <div className='shadow-lg shadow-gray-500 rounded-md flex justify-center items-center mx-auto '>
                  
                  
                  
                  
                  <div>
                      <span></span>
                      <div>

                         <a href="/">
                              <button></button>
                         </a>

                         <a href="/">
                              <button></button>
                         </a>

                      </div>
                  </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Work;