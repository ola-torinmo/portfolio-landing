import React from "react";
import heroImg from "../assets/heroani.gif"

const Hero =()=>{
    return(

        // <div className="w-full bg-white py-10">

        //     <div className="md:max-w-[1028px] m-auto grid md:grid-cols-2 max-w-[600px]  px-4 md:px-0">

        //         <p className='py-2 text-xl text-black font-medium'>WEBSITES THAT NOT ONLY CAPTIVATE BUT CONVERT</p>
        //         <h1 className='md:leading-[72px] py-2 md:text-4xl text-5xl font-semibold'>WEBSITES THAT NOT ONLY CAPTIVATE BUT CONVERT
        //         </h1>
        //         <p className='py-2 text-lg text-gray-600'>Various versions have evolved over the years, sometimes by accident.</p>

        //         <img src={heroImg}/>
                

        //     </div>
        // </div>

         <div className="w-full bg-white py-10">
            <div className="md:max-w-[1028px] max-w-[600px] m-auto grid md:grid-cols-2">
                <div className="flex flex-col justify-start gap-2">
                    <h1 className="md:text-3xl text-2xl md:w-[565px] md:text-left text-center  font-semibold pb-5 ">WEBSITES THAT NOT ONLY CAPTIVATE BUT CONVERT</h1>
                    <p className="md:w-[533px] w-[333px] text-lg pb-3 md:pl-0 pl-5">We specialize in creating websites for full scale organizations in industries such as:</p>
                    <div>
                        <ul className="text-lg font-medium pb-5 md:pl-0 pl-5">
                            <li>Real Estate</li>
                            <li>Healthcare</li>
                            <li>Construction</li>
                            <li>Digital Design/Marketing agencies</li>
                            <li>SAAS platforms</li>
                        </ul>
                    </div>
                    <button className=" w-[170px] py-1 rounded-full bg-[#009387] text-white text-center md:ml-0 ml-5"><span className="">Schedule a call</span></button>
                </div>
                <img className="md:order-last order-first " src={heroImg}/>
            </div>

        </div>
    )
}

export default Hero;