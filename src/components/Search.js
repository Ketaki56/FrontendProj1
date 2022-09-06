import React from "react";
import {RiCustomerService2Full, RiCustomerServiceFill} from 'react-icons/ri'
import {MdOutlineTravelExplore} from 'react-icons/md'

const Search=()=>{
    return(
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
            <div className="lg:col-span-2 flex flex-col justify-evenly">
                <h2>LUXURY INCLUDED VACATIONS FOR TWO PEOPLE</h2>
                <p className="py-4">
                Miles away from the world's cares lies a private
                playground for adults and children. Whatever your
                heart desires, consider it done on these extraordinary 
                islands in the necklace of jewels known as the Maldives. 
                Seclude yourself, unforgettably, under a cabana overlooking
                the white-sand beach or on the private deck of your overwater
                villa.Share it all on these magical islands, where we elevate
                your oceanic escape to a new level.
                </p>
            

            <div className="grid sm:grid-cols-2 gap-8 py-4">
                <div className="flex flex-col lg:flex-row items-center text-center">
                    <button>
                        <RiCustomerServiceFill size={50}/>
                    </button>
                    <div>
                        <h3 className="py-2">LEADING SERVICE</h3>
                        <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                </div>
            
                <div className="flex flex-col lg:flex-row items-center text-center">
                    <button>
                        <MdOutlineTravelExplore size={50}/>
                    </button>
                    <div>
                        <h3 className="py-2">AUTOMATED BOOKINGS</h3>
                        <p className="py-1">ALL-INCLUSIVE COMPANY FOR 20 YEARS IN-A-ROW</p>
                    </div>
                </div>
             </div>
        </div>
             
            
            <div>
               <div className="border text-center">
                <p className="pt-2">GET ADDITIONAL 15% OFF </p>
                <p className="py-4">12 HOURS LEFT</p>
                <p className="bg-gray-800 text-gray-200 py-2">BOOK NOW AND SAFE</p>
               </div>
               <form className="w-full">
                <div className="flex flex-col my-2">
                    <label className="font-bold">Destination</label>
                    <select className="border rounded-md p-2">
                        <option>Maldive</option>
                        <option>BoraBora</option>
                        <option>KeyWest</option>
                        <option>Cozumel</option>
                    </select>
                </div>

                <div className="flex flex-col my-4">
                    <label className="font-bold">Check-In</label>
                    <input className="border rounded-md p-2" type="date"></input>
                </div>

                <div className="flex flex-col my-4">
                    <label className="font-bold">Ckeck-Out</label>
                    <input className="border rounded-md p-2" type="date"></input>
                </div>
                <button className="w-full my-4">Rates & Availabilities</button>
               </form>
            </div>

        </div>
    )
}
export default Search