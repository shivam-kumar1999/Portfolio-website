import React from 'react'

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';


import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';


const Skills = () => {
  return (
    <div name="skills" className='bg-[#FAFAFA] text-gray-500 sm:pb-8 pl-4 w-full h-screen '>

        {/* //container... */}

         <div className='max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full'>



               <div>
                   <p className='text-5xl font-bold mb-10 inline border-b-4 border-blue-500'>Skills</p>
                   <p className='text-2xl py-4 mb-10 mt-2' >These are the technologies I've worked with.</p>
               </div>



         
         <div className='w-full flex flex-wrap gap-20 text-center items-center justify-center '>

             <div className='  hover:scale-110 transition-all duration-400 '>
                <img className='w-20 mx-auto  ' src={HTML} alt="html" />
                <p className=''>HTML</p>
             </div>

              <div className=' hover:scale-110 transition-all duration-400'>
                <img className='w-20 mx-auto ' src={CSS} alt="css" />
                <p>CSS</p>
             </div>

              <div className=' hover:scale-110 transition-all duration-400'>
                <img className='w-20 mx-auto ' src={Tailwind} alt="tailwind" />
                <p>TAILWIND</p>
             </div>

              <div className=' hover:scale-110 transition-all duration-400'>
                <img className='w-20 mx-auto ' src={JavaScript} alt="js" />
                <p>JAVASCRIPT</p>
             </div>

              <div className=' hover:scale-110 transition-all duration-400'>
                <img className='w-20 mx-auto ' src={ReactImg} alt="react" />
                <p>REACT</p>
             </div>

              <div className=' hover:scale-110 transition-all duration-400'>
                <img className='w-20 mx-auto ' src={GitHub} alt="html" />
                <p>GITHUB</p>
             </div>





    </div>
    </div>

    </div>
  )
}

export default Skills;