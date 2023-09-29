import { useState } from "react";
import {FaBars, FaTimes, FaGithub, FaLinkedin} from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs'
import React from 'react'



const Navbar = () => {


      const [Nav, SetNav]=useState(false);

      const handleClick=()=>SetNav(!Nav)



  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#FAFAFA]
                     text-gray-300">
                        
        <div className="border-solid border-2 rounded-md border-gray-500 text-2xl px-2 text-black  font-semibold  ">Shivam Kumar</div>

              
              
                <ul className=" text-black text-lg font-semibold md:flex hidden ">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
              

              {/* //HAMBURGER MENU */}

              <div onClick={handleClick} className="md:hidden z-10 text-black text-2xl ">

                    {!Nav ? <FaBars/> : <FaTimes/>}
             </div>


              {/* //MOBILE MENU */}

              <ul className={!Nav ? 'hidden' : "absolute top-0 left-0 w-full h-screen bg-[#FAFAFA] flex flex-col justify-center items-center  text-black text-lg font-semibold "}>
                                 
                    <li className="py-6 text-4xl">Home</li>
                    <li className="py-6 text-4xl">About</li>
                    <li className="py-6 text-4xl">Skills</li>
                    <li className="py-6 text-4xl">Work</li>
                    <li className="py-6 text-4xl">Contact</li>
              </ul>

              

              {/* //SOcial icons */}
                 
                 <div className="hidden lg:flex flex-col fixed top-[35%] left-1">

                     <ul>

                         <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] transition-all duration-500ms">

                             <a className="flex justify-between items-center w-full text-black text-lg font-semibold"
                              href="https://www.linkedin.com/in/shivam-kumar-8b188721b/" target="blank">Linkedin <FaLinkedin size={40}/> </a>

                         </li>


                          <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] transition-all duration-500ms">

                             <a className="flex justify-between items-center w-full text-black text-lg font-semibold"
                              href="https://github.com/shivam-kumar1999" target="blank">Github <FaGithub size={40}/> </a>

                         </li>


                         <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] transition-all duration-500ms">

                             <a className="flex justify-between items-center w-full text-black text-lg font-semibold"
                              href="shivamkumarhost@gmail.com" target="blank">Email <HiOutlineMail size={40}/> </a>

                         </li>


                         <li className="w-[150px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] transition-all duration-500ms">

                             <a className="flex justify-between items-center w-full text-black text-lg font-semibold"
                              href="https://github.com/shivam-kumar1999" target="blank">Resume <BsFillPersonLinesFill size={40}/> </a>

                         </li>
                        
                     </ul>

                 </div>

    </div>
  )
}

export default Navbar;