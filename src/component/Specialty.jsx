import React from "react";
import tick from "../assets/tick.svg";
import shield from "../assets/shield.svg";

const Specialty=()=>{
    return(
        <div className="w-full bg-white py-10">
            <div className="h-[90px]">
                <h1 className="md:max-w-[1028px] max-w-[600px]  m-auto border-b pb-2 text-[21px] md:text-left text-center  font-medium">OUR SPECIALTIES</h1>
            </div>
            <div className=" md:max-w-[1028px] max-w-[600px]  m-auto pb-2 md:pl-0 pl-5 ">
                        {/* <h1 className="text-[18px] pb-5">Full scale organization website</h1> */}
                        <h1 className="text-lg pb-5 text-[18px]">Full scale organization website - <span className="text-[#121212B2] text-[15px]">we provide a wide range of web solutions development opportunities that help streamline processes, boost productivity, and accelerate the overall success in most essential fields, industries, and niches.</span></h1>
                        
            </div>
            <div className=" md:max-w-[1028px] max-w-[600px]  m-auto pb-4 ">
                <div className="flex">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5   "><img src={shield}/></span>
                    <h3 className="pb-5 pt-1 text-[#121212B2] text-[15px]   "> Creation of systems from scratch.</h3>
                </div>

                <div className="flex">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5 "><img src={shield}/></span>
                    <h3 className="pb-5 pt-1 text-[#121212B2] text-[15px]   "> Using low-code and n0-code website SAAS tools such as (Wordpress, Webflow, Framer, Wix, and more).</h3>
                </div>

                <div className="flex">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5  "><img src={shield}/></span>
                    <h3 className="pb-5 pt-1 text-[#121212B2] text-[15px]   ">Custom plugin development and third-party integrations.</h3>
                </div>

                <div className="flex">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5  "><img src={shield}/></span>
                    <h3 className="pb-5 pt-1 text-[#121212B2] text-[15px]   "> Customization and migration of existing systems.</h3>
                </div>

                <div className="flex">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5  "><img src={shield}/></span>
                    <h3 className="pb-5 pt-1 text-[#121212B2] text-[15px]   "> Working with inhouse team of IT support professionals to improve existing solutions.</h3>
                </div>

                <div className="flex">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5 "><img src={shield}/></span>
                    <h3 className="pb-5 pt-1 text-[#121212B2] text-[15px]   "> In-depth optimization and system upgrades.</h3>
                </div>


            </div>
            <div className=" md:max-w-[1028px] max-w-[600px]  m-auto pb-2 pt-5 md:pl-0 pl-5 ">
                        {/* <h1 className="text-[18px] pb-5">Full scale organization website</h1> */}
                        <h1 className="text-lg pb-5 text-[18px]">E-commerce websites - <span className="text-[#121212B2] text-[15px]">we harness years of field experience and expertise to dispatch top-tier digital commerce solutions and start accumulating sales across multiple channels with:</span></h1>
                        
            </div>
            <div className=" md:max-w-[1028px] max-w-[600px]  m-auto pb-4 ">
                <div className="flex">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5 "><img src={tick}/></span>
                    <h3 className="pb-5 pt-1 text-[#121212B2] text-[15px]   "> Dedicated E-commerce web development services.</h3>
                </div>

                <div className="flex">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5 "><img src={tick}/></span>
                    <h3 className="pb-5 pt-1 text-[#121212B2] text-[15px]   "> Optimization and enhancement of online stores.</h3>
                </div>

                <div className="flex">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5  "><img src={tick}/></span>
                    <h3 className="pb-5 pt-1 text-[#121212B2] text-[15px]   "> Migration and modernization of existing solutions.</h3>
                </div>

                <div className="flex">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5  "><img src={tick}/></span>
                    <h3 className="pb-5 pt-1 text-[#121212B2] text-[15px]   "> Intuitive E-commerce web designs tailored to your needs.</h3>
                </div>

                <div className="flex">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5  "><img src={tick}/></span>
                    <h3 className="pb-5 pt-1 text-[#121212B2] text-[15px]   "> We utilize the most powerful and up-to-date technologies such as Magento, Shopify, WooCommerce, Prestashop and more.</h3>
                </div>

                <div className="flex">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5 "><img src={tick}/></span>
                    <h3 className="pb-5 pt-1 text-[#121212B2] text-[15px]   "> Web portals</h3>
                </div>

                <div className="flex">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5 "><img src={tick}/></span>
                    <h3 className="pb-5 pt-1 text-[#121212B2] text-[15px]   "> Landing page.</h3>
                </div>

                <div className="flex">
                    <span className="pr-3 sticky top-0 shrink-0 md:pl-0 pl-5  "><img src={tick}/></span>
                    <h3 className="pb-5 pt-1 text-[#121212B2] text-[15px]   ">Content management systems.</h3>
                </div>

            </div>
        </div>
    )
}

export default Specialty;