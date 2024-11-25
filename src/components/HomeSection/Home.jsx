import React from 'react'
import FirstIMG from '../../assets/First.png'
import Google from '../../assets/google.png'
import Amazon from '../../assets/amazon.png'
import Flipkart from '../../assets/flipkart.png'
import Airbnd from '../../assets/airbnd.png'


function Home() {
  return (
    <>
    <div>
    <div className='w-full h-[100vh] flex justify-around items-center'>
        <div className='flex justify-start items-start flex-col '>
            <h1 className='text-[50px] font-bold'>Best Place For</h1>
            <h1 className='text-[50px] font-bold'><span className='text-blue-500'>Growth</span>Your</h1>
            <h1 className='text-[50px] font-bold'>Busineess</h1>
            <p>Learn About How to Monetize a Blog see</p>
            <p>How you can Implement these Methods</p>
            <div  className='bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-2 rounded-md'>Get Started</div>
        </div>
        <div className='w-[500px]'>
            <img src={FirstIMG} alt="" />
        </div>
    </div>
    <div className='flex justify-around items-center'>
        <div className='w-[200px]'><img src={Google}alt="" /></div>
        <div className='w-[200px]'><img src={Amazon} alt="" /></div>
        <div className='w-[200px]'><img src={Flipkart} alt="" /></div>
        <div className='w-[200px]'><img src={Airbnd} alt="" /></div>
       
    </div>
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
    </div>
    </>
  )
}

export default Home
