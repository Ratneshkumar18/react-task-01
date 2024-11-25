import React from 'react'
import FirstIMG from '../assets/First.png'
import Men from '../assets/men.jpg'
import Building from '../assets/building.jpg'
import Footer from '../components/FooterSection/footer'
function About() {
  return (
   <>
   <div>
   <div className="flex justify-around items-center bg-blue-300">
        <div className='w-[500px]'>
        <img src={FirstIMG} alt="" />
        </div>
        <div className="flex justify-center items-start flex-col">
            <h1 className='text-[50px] font-bold'>We Believe you</h1>
            <h1 className='text-[50px] font-bold'>Deserve <span className='text-blue-400'>Trustworthy</span></h1>
            <h1 className='text-[50px] font-bold'>& Best Services</h1>
            <p>
                We take pride in our customer service exprience .From the <br />
                moment you call for your free inspection to the copletion of <br />
                your project you be welcomed with respect & transparecy.
            </p>
            <div className='bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-md'>Get started</div>
        </div>
        
    </div>
    <div className='flex justify-around items-center mt-11'>
        <div className='w-[300px] flex'>
            <img src={Men} alt="" />
            <img src={Building} alt="" />
        </div>
        <div>
            <p className='text-red-500 text-[30px]'>Success Story</p>
            <h1 className='text-[50px]'>500 Companies Over 10 </h1>
            <h1 className='text-[50px]'>Countries keep Them</h1>
            <h1 className='text-[50px]'>Profitable safe</h1>
        </div>
    </div>
    <Footer/>
   </div>
   </>
  )
}

export default About
