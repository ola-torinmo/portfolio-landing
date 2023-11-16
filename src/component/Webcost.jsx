import React from "react";
import handshake from "../assets/handshake.svg";
import scope from "../assets/scope.svg";
import time from "../assets/time.svg";
import team from "../assets/team.svg";
import tcom from "../assets/t-com.svg";
import specialist from "../assets/specialist.svg";


const Webcost =()=>{
    return(
        <div>
            <div className="md:max-w-[1028px] max-w-[600px]  m-auto w-full bg-white py-10">
            <div className="h-[90px]">
                <h1 className=" border-b pb-2 text-[21px] font-medium md:text-left text-center">WEB DEVELOPMENT COST</h1>
            </div>
            <div className="  pb-2 text-[#121212BF] md:pl-0 pl-5 ">
                        <h1 className="text-[18px] pb-5 ">The ultimate cost of your web solution development project is defined by a number of factors:</h1>
                        
            </div>
            <div className="  m-auto grid md:grid-cols-3 grid-cols-1 md:py-10 py-2 md:pl-0 pl-5">
                <div className="py-6 flex">
                    <img src={handshake} className="shrink-0 w-[30px]"/>
                    <h1 className="pl-4 pt-1">Co-operation model</h1>
                </div>
                <div className="py-6 flex">
                    <img src={scope} className="shrink-0 w-[30px]"/>
                    <h1 className="pl-4 pt-1">Scope of work</h1>
                </div>
                <div className="py-6 flex">
                    <img src={time} className="shrink-0 w-[30px]"/>
                    <h1 className="pl-4 pt-1">Project duration</h1>
                </div>
                <div className="py-6 flex">
                    <img src={team} className="shrink-0 w-[30px]"/>
                    <h1 className="pl-4 pt-1">Team composition</h1>
                </div>

                <div className="py-6 flex">
                    <img src={tcom} className="shrink-0 w-[30px]"/>
                    <h1 className="pl-4 pt-1">Team composition</h1>
                </div>
                <div className="py-6 flex">
                    <img src={specialist} className="shrink-0 w-[30px]"/>
                    <h1 className="pl-4 pt-1">Level of specialists</h1>
                </div>
                
                
            </div>
            <div className="  m-auto pb-2 text-[#121212BF] md:pl-0 pl-5 ">
                        <h1 className="text-[18px] pb-5 ">We help tailor expenses to your particular financial capabilities and avoid hidden costs due to well-adjusted processes.</h1>
                        
            </div>
            </div>
        </div>
    )
}

export default Webcost;