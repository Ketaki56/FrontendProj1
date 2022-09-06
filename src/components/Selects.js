import React from "react";
import BoraBoraImg from '../assets/BoraBoraImg.jpg';
import Maldives4Img from '../assets/Maldives4Img.jpg';
import MaldivesImg from '../assets/MaldivesImg.jpg';
import MaldivesImg5 from '../assets/MaldivesImg5.jpg';
import MaldivesImg6 from '../assets/MaldivesImg6.jpg';
import MaldivesImg7 from '../assets/MaldivesImg7.jpg';

const Selects=()=>{
    return(
        <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">

            <div className="relative">
                <img src={BoraBoraImg} alt="/"></img>
                <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                    <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">Maldives</p>
               </div>
            </div>

            <div className="relative">
                <img src={Maldives4Img} alt="/"></img>
                <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                    <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">BoraBora</p>
               </div>
            </div>

            <div className="relative">
                <img src={MaldivesImg} alt="/"></img>
                <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                    <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">KeyWest</p>
               </div>
            </div>

            <div className="relative">
                <img src={MaldivesImg5} alt="/"></img>
                <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                    <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">Cozumel</p>
               </div>
            </div>

            <div className="relative">
                <img src={MaldivesImg6} alt="/"></img>
                <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                    <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">SevenMile</p>
               </div>
            </div>

            <div className="relative">
                <img src={MaldivesImg7} alt="/"></img>
                <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
                    <p className="left-4 bottom-4 text-2xl font-bold text-white absolute">Eagle</p>
               </div>
            </div>

            



        </div>
    )
}
export default Selects