import React from "react";
import BoraBoraImg from '../assets/BoraBoraImg.jpg';
import Maldives4Img from '../assets/Maldives4Img.jpg';
import MaldivesImg from '../assets/MaldivesImg.jpg';
import MaldivesImg5 from '../assets/MaldivesImg5.jpg';
import MaldivesImg6 from '../assets/MaldivesImg6.jpg';

const Destinations=()=>{
    return(
        <div className="max-w-[1240px] mx-auto py-16 px-4 text-center">
            <h1>All-Inclusive Resorts</h1>
            <p className="py-4">On the Caribbean's Best Beaches</p>

            <div className="grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4">
                <img className="w-full h-full object-cover col-span-2 md:col-span-3 row-span-2" src={BoraBoraImg} alt="/"></img>
                <img className="w-full h-full object-cover" src={Maldives4Img} alt="/"></img>
                <img className="w-full h-full object-cover" src={MaldivesImg} alt="/"></img>
                <img className="w-full h-full object-cover" src={MaldivesImg5} alt="/"></img>
                <img className="w-full h-full object-cover" src={MaldivesImg6} alt="/"></img>

            </div>

        </div>
    )
}
export default Destinations