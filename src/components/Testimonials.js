import React from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useState } from "react";



function Testimonials({reviews}){

    const [i,setI] = useState(0);

    function genRandInt(){
        return Math.floor(Math.random()*(reviews.length));
    }

    function leftShiftHandler(){
        if( i === 0){
            setI(reviews.length - 1)
        }
        else{
            setI(i - 1)
        }
    }

    function rightShiftHandler(){
        if( i === reviews.length - 1){
            setI(0)
        }
        else{
            setI(i + 1)
        }
    }

    function surpriseHandler(){
        setI(genRandInt())
    }

    return(
        <div className="w-[85vw] md:w-[700px] max-h-[100vh] md:mt-10 bg-white flex flex-col justify-center items-center mt-10 mb-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md  ">

            <Card review={reviews[i]}/>

            <div className="flex mt-10 text-3xl gap-3 text-violet-400 font-bold justify-center">
                <button onClick={leftShiftHandler} className="hover:text-violet-500">
                    <FiChevronLeft/>
                </button>
                <button onClick={rightShiftHandler} className="hover:text-violet-500">
                    <FiChevronRight/>
                </button>
            </div>

            <div className="mt-5 ">
                <button onClick={surpriseHandler} className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 px-10 py-2 rounded-md font-bold text-white text-lg">
                    Surprise Me
                </button>
            </div>
        </div>
    );
}


export default Testimonials;