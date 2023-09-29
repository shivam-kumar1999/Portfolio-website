import React from 'react'

const Home = () => {
  return (
    <div name='home' className='bg-[#FAFAFA] w-full h-screen'>

           {/* //Container */}

           <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>

                <p>Hi, my name is</p>
                <h1>Shivam Kumar</h1>
                <h2>I'm a Frontend Developer</h2>
                <p>I'm a passionate frontend developer with a knack for crafting engaging and user-friendly web experiences.
                    With a diverse skill set and a commitment to clean, efficient code, I thrive in turning design concepts into pixel-perfect, responsive websites and web applications.
                </p>



                {/* <div>
                   <img  className='grayscale border-radius-[50%] flex flex-row ' src="https://avatars.githubusercontent.com/u/99277501?v=4" alt="" />
                </div> */}
               
           </div>

           

    </div>
  )
}

export default Home