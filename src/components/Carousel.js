import React, {useState} from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const sliderData=[
    {
        url: 'https://media.istockphoto.com/photos/paradise-beach-picture-id509488176?b=1&k=20&m=509488176&s=170667a&w=0&h=2-1WrCRzQ_ZITAABManASs4tAVWrsU6veCiNWJIhm7s='
    },

    {
       url: 'https://media.istockphoto.com/photos/luxury-beach-resort-picture-id465375062?b=1&k=20&m=465375062&s=170667a&w=0&h=5lyfY1yhKm417dVS7BhdJvWtJJCcD0BoSJ6veZ1k7K4='
    },

    {
     url: 'https://media.istockphoto.com/photos/beautiful-summer-tropical-beach-landscape-wooden-pier-turquoise-sea-picture-id840269698?b=1&k=20&m=840269698&s=170667a&w=0&h=1rSGA7F0xTylqAQi4y7ZKma8QpU9_kFeTssDGi88bQE='
     
    },


];

const Carousel=()=>{
    const[slide, setSlide]=useState(0)
    const length = sliderData.length
    console.log(length)

    const prevSlide=()=>{
        setSlide(slide === length - 1 ? 0: slide + 1);
    };

    const nextSlide=()=>{
        setSlide(slide === 0 ? length -1 : slide -1);
    }


    return(
        <div className="max-w-[1240px] mx-auto py-16 relative justify-center items-center">
            <BsArrowLeftSquareFill onClick={prevSlide}  className="absolute top-[50%] text-3xl text-white cursor-pointer left-8"/>
            <BsArrowRightSquareFill onClick={nextSlide}  className="absolute top-[50%] text-3xl text-white cursor-pointer right-8"/>
            {sliderData.map((item, index)=>(
                <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
                    {index === slide && (<img className="w-full rounded-md" src={item.url} alt='/'></img>)}
                </div>
                
            ))}

        </div>
    );
};
export default Carousel;