import React from "react";
import budgetgif from "../assets/budgetgif.gif";

const Budget =()=>{
    return(

        <div className="w-full bg-white py-10">
        <div className="h-[90px]">
                <h1 className="md:max-w-[1028px] max-w-[600px]  m-auto border-b pb-5 text-[21px] font-medium">OUR WEB DEVELOPMENT SPECIALTIES</h1>
        </div>
        <div className="md:max-w-[1028px] max-w-[600px] m-auto grid md:grid-cols-2 pt-5 ">
            <div className="flex flex-col justify-start gap-2">
                <h1 className="md:text-base text-base text-center   font-semibold pb-5 ">Reach out to estimate the cost of your future digital solution.</h1>
                <p className="text-base text-center pb-5">At Axel Cyber, we offer a wide range of tailored web developmentnservices delivered by experienced specialists to streamline a business workflow, nail a startup, or build a best-seller product that is perfectly optimized in all the right places.</p>
                
                <button className=" w-[130px]  rounded-full bg-[#009387] text-white  self-center"><span className="text-sm text-center ">Get a quote</span></button>
            </div>
            <img className="md:order-first order-last shrink-0 w-[300px]" src={budgetgif}/>
        </div>

    </div>
    )
}

export default Budget;