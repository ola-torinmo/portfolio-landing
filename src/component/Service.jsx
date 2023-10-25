import React from "react";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";



  const Service =()=>{
    return(
        <div className="w-full bg-white">
           <div className="h-[90px]">
                <h1 className="md:max-w-[1028px] max-w-[600px]  m-auto border-b pb-2 text-[21px] font-medium md:text-left text-center">OUR WEB DEVELOPMENT SPECIALTIES</h1>
           </div>
            <div className="md:max-w-[1028px] max-w-[600px]  m-auto md:flex flex-row gap-8">
                <div className="flex flex-col md:pl-0 pl-5">
                    <div className="md:w-[500px] w-[380px] pb-8">
                        <h1 className="text-lg pb-3">Turnkey web app development</h1>
                        <p className="text-sm">We handle full- cycle web solutions development, delivering everything from design and architecture prototyping to coding, optimization, and post release support/maintenance.</p>
                    </div>
                    <div className="md:w-[500px]  w-[380px] pb-8">
                        <h1 className="text-lg pb-3">CMS web development</h1>
                        <p className="text-sm">We build CMS solutions from scratch, we dispatch unique platforms to automate and streamline content management tasks effectively.</p>
                    </div>
                    <div className="md:w-[500px]  w-[380px] pb-8">
                        <h1 className="text-lg pb-3">Cloud-based web development</h1>
                        <p className="text-sm">We leverage cloud environments to offer unprecedented content and data storage flexibility. At Axel Cyber, we ensure this by building cloud- optimized web solutions.</p>
                    </div>
                    <div className="md:w-[500px]  w-[380px] pb-8">
                        <h1 className="text-lg pb-3">Back-end Development</h1>
                        <p className="text-sm">We have profiled specialists that build secure, high-performance backbone architectures that pledge software resilience even in the harshest conditions.</p>
                    </div>
                    <div className="md:w-[500px]  w-[380px] pb-8">
                        <h1 className="text-lg pb-3">Web testing</h1>
                        <p className="text-sm">By combining a variety of the best traditional manual and automated testing approaches, QA, and custom-written tests, we help polish out premium web products.</p>
                    </div>
                    <div className="md:w-[500px]  w-[380px] pb-8">
                        <h1 className="text-lg pb-3">Front-end Development</h1>
                        <p className="text-sm">We guarantee versatile products and websites built with the goal of creating modern client themed designs while tailoring User Interface and Experience functionality for the users. </p>
                    </div>
                    <div className="md:w-[500px]  w-[380px] pb-8">
                        <h1 className="text-lg pb-3">Web design and redesign </h1>
                        <p className="text-sm">Our specialists craft designs that emphasize accessibility and performance through intuitive interfaces, engaging user journeys and well researched UX.</p>
                    </div>
                    <div className="md:w-[500px]  w-[380px] pb-8">
                        <h1 className="text-lg pb-3">Web optimization </h1>
                        <p className="text-sm">Whether you need to optimize an existing solution or redesign a product completely - we have the extensive expertise required to point you in the most efficient dirrection.</p>
                    </div>
                    <div className="md:w-[500px]  w-[380px] pb-8">
                        <h1 className="text-lg pb-3">Web support and modernization</h1>
                        <p className="text-sm">Post release support and maintenance is the major part of any web solution development project - we continuously improve your products after the release.</p>
                    </div>
                    
                    
                </div>
                <div className="flex flex-col  md:pl-0 pl-5">
                    <img className="w-[440px]  pb-6 " src={service2}/>
                    <img className="w-[440px]  pt-" src={service1}/>

                </div>
                
            </div>
        </div>
        
    )

}

export default Service;