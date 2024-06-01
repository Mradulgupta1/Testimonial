import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card({review}){
    return(
        <div className="flex flex-col relative">

            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img className="aspect-square rounded-full w-[140px] h-[140px] z-[25] bg-cover bg-center" src={review.image}/>
                <div className="w-[140px] h-[140px] rounded-full absolute bg-violet-500 top-[-6px] z-[-10] left-[10px]"></div>            
            </div>

            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize tracking-wider">{review.name}</p>
                <p className="text-violet-300 text-sm uppercase">{review.job}</p>

            </div>

            <div className="text-center mt-7">
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteLeft />
            </div>

            <div className="text-center mt-4 text-slate-500">
                <p>{review.text}</p>
            </div>

            <div className="text-violet-400 mx-auto mt-5">
                <FaQuoteRight />
            </div>

            

        </div>
    );
}


export default Card;