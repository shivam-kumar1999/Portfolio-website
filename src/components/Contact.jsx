import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-[#FAFAFA] w-full h-screen flex justify-center items-center p-4'>

        <form method='POST' action="https://getform.io/f/33d38577-582f-43fd-8019-cd8bb510baf0" className="flex flex-col max-w-[700px] w-full">

             <div className='pb-8 mt-40'>

                <p className='text-5xl font-bold inline border-b-4 border-blue-500 mt-10 text-gray-500'>Contact</p>
                <p className='text-gray-500 py-4 text-xl'>Submit the form below or send me an email - shivamkumarhost@gmail.com</p>
             </div>

             <input type="text" placeholder='Name' name="name" className='bg-[#fafafa] my-2 p-2 border border-gray-500' />
             <input type="email" placeholder='Email' name="email"  className='my-2 p-2 bg-[#fafafa] border border-gray-500 '/>
              <textarea placeholder='Message' name="message" id="" cols="30" rows="10" className='my-2 p-2 bg-[#fafafa] border border-gray-500'></textarea>
                 
                 <button className='text-white font-semibold text-lg  border border-gray-500 bg-blue-500 px-4 py-2 my-8 mx-auto flex  '>Let's Collaborate</button>


        </form>






    </div>
  )
}

export default Contact