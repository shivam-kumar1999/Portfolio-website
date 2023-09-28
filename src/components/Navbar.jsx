
import {FaBars, FaTimes} from "react-icons/fa";
import React from 'react'

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#FAFAFA]
                     text-gray-300">
                        
             <div className="border-solid border-2 rounded-md border-gray-500 text-2xl px-2 text-black   ">Shivam Kumar</div>

              
              <div>
                <ul className="flex">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
                </ul>
              </div>

              {/* //HAMBURGER MENU */}

              <div className="hidden">  <FaBars/>  </div>


              {/* //MOBILE MENU */}

              <ul className="hidden">
                    <li>Home</li>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Work</li>
                    <li>Contact</li>
              </ul>

              

              {/* //SOcial icons */}

    </div>
  )
}

export default Navbar;