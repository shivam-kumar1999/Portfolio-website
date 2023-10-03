import React from 'react'
import pic1 from '../assets/1.png';
import pic2 from '../assets/2.png';
import pic3 from '../assets/3.png'



const Work = () => {
  return (
    <div name='work' className='h-full bg-[#FAFAFA] w-full  text-gray-500 flex justify-center sm:w-full px-2'>

       <div className='max-w-[1000px] mx-auto flex flex-col justify-center  w-full h-full'>

          <div className='pb-6    pl-4  '>
             <p className='text-5xl font-bold mb-10 inline border-b-4  border-blue-500'>Work</p>
             <p className='text-2xl py-4 mb-6 mt-2 '>Check out some of my work</p>
          </div>

         

            {/* ////////Projects Cards/////// */}


               <div className='flex gap-5  flex-wrap justify-center items-center     '>

                    <div className='mobile h-full w-[32%] py-10 pb-6 px-4 shadow-md shadow-gray-500 bg-gray-100 hover:scale-110 transition-all duration-200'>
                          
                          <div className='rounded-sm'>
                             <img className='rounded-lg' src={pic1} alt="" />
                          </div>

                          <h1 className='font-semibold text-2xl py-2'>Techstar</h1>
                          <p>I created this project using React, JavaScript, and SCSS. It's a straightforward practice app with route navigation—a simple React application.</p>
                    
                           <div className='flex justify-between py-2'>
                               <button className=' text-white font-semibold border-2 solid black px-6 py-3 my-2 flex items-center bg-blue-500  hover:bg-blue-600 transition-all duration-200 '><a href="https://techstar-reactapp.netlify.app/" target='blank'>Live Link</a></button>
                                <button className=' text-white font-semibold border-2 solid black px-5 py-3 my-2 flex items-center bg-blue-500  hover:bg-blue-600 transition-all duration-200 '><a href="https://github.com/shivam-kumar1999/TechStar-basicReactApp" target='blank'>Source Code</a></button>
                           </div>
                    </div>


                     <div className='mobile h-full w-[32%] py-10 pb-6 px-4 shadow-md shadow-gray-500 bg-gray-100 hover:scale-110 transition-all duration-200'>
                          
                          <div className='rounded-sm'>
                             <img className='rounded-lg' src={pic2} alt="" />
                          </div>

                          <h1 className='font-semibold text-2xl py-2'>Apple Vision Pro</h1>
                          <p> Apple's Vision Pro website using HTML, CSS, and JavaScript.I integrated the GSAP animation library along with ScrollTrigger for smooth scrolling.</p>
                           <div className='flex justify-between py-2'>
                               <button className=' text-white font-semibold border-2 solid black px-6 py-3 my-2 flex items-center bg-blue-500  hover:bg-blue-600 transition-all duration-200 '><a href="https://shivam-kumar1999.github.io/Apple-Vision-Pro-with-GSAP/" target='blank'>Live Link</a></button>
                                <button className=' text-white font-semibold border-2 solid black px-5 py-3 my-2 flex items-center bg-blue-500  hover:bg-blue-600 transition-all duration-200 '><a href="https://github.com/shivam-kumar1999/Apple-Vision-Pro-with-GSAP" target='blank'>Source Code</a></button>
                           </div>
                    </div> 


                     <div className= 'mobile h-full w-[32%] py-10 pb-6 px-4 shadow-md shadow-gray-500 bg-gray-100 hover:scale-110 transition-all duration-200'>
                          
                          <div className='rounded-sm'>
                             <img className='rounded-lg' src={pic3} alt="" />
                          </div>

                          <h1 className='font-semibold text-2xl py-2'>Tour with me</h1>
                          <p>This is a basic project I built using React. It's a simple practice project where I learned how to work with the useState hook.</p>
                    
                           <div className='flex justify-between py-2'>
                               <button className=' text-white font-semibold border-2 solid black px-6 py-3 my-2 flex items-center bg-blue-500  hover:bg-blue-600 transition-all duration-200 '><a href="https://toursiite.netlify.app/" target='blank'>Live Link</a></button>
                                <button className=' text-white font-semibold border-2 solid black px-5 py-3 my-2 flex items-center bg-blue-500  hover:bg-blue-600 transition-all duration-200 '><a href="https://github.com/shivam-kumar1999/Tour-with-me-BasicReactApp" target='blank'>Source Code</a></button>
                           </div>
                    </div>

                     


                 



                  




                      





                      


                    

               </div>

          


          
          


        </div>
    </div>
  )
}

export default Work;