import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { RxEyeClosed } from "react-icons/rx";
import Select from "react-select";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaHeart, FaSearch } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import flugImg from '../../../public/navbar/flag.png'

const options = [
  { id: '1', value: "Pregnant & Postpartum", icon : <MdKeyboardArrowRight></MdKeyboardArrowRight> },
  { id: '2', value: "Milks & Foods", icon : <MdKeyboardArrowRight></MdKeyboardArrowRight> },
  { id: '3', value: "Diapers & Wipes", icon : <MdKeyboardArrowRight></MdKeyboardArrowRight> },
  { id: '4', value: "Infant", icon : <MdKeyboardArrowRight></MdKeyboardArrowRight> },
  { id: '5', value: "Eat & Drink Supplies", icon : <MdKeyboardArrowRight></MdKeyboardArrowRight> },
  { id: '6', value: "Baby Fashion", icon : <MdKeyboardArrowRight></MdKeyboardArrowRight> },
  { id: '7', value: "Baby Out", icon : <MdKeyboardArrowRight></MdKeyboardArrowRight> },
  { id: '8', value: "Toys & Study", icon : <MdKeyboardArrowRight></MdKeyboardArrowRight> },
  { id: '9', value: "Stroller, Crib, Chair", icon : <MdKeyboardArrowRight></MdKeyboardArrowRight> },
  { id: '10', value: "Washes & Bath", icon : <MdKeyboardArrowRight></MdKeyboardArrowRight> },
  { id: '11', value: "Homewares", icon : <MdKeyboardArrowRight></MdKeyboardArrowRight> },
  { id: '12', value: "Clearance", icon : <MdKeyboardArrowRight></MdKeyboardArrowRight> },
];

const navlinks = <>
        <li className="text-[14px] capitalize text-white flex gap-x-2 items-center font-normal ">  home  <IoIosArrowDown></IoIosArrowDown> </li>

        <li className="text-[14px] capitalize text-white flex gap-x-2 items-center font-normal ">  page  <IoIosArrowDown></IoIosArrowDown> </li>

        <li className="text-[14px] capitalize text-white flex gap-x-2 items-center font-normal ">  products  <IoIosArrowDown></IoIosArrowDown> </li>
       
  </>

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("List Category");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option.value);
    setIsOpen(false);
  };

  return (
    <div className="nav_section primary_bg_color common_padding pt-6 relative flex justify-between ">
                {/* nav logo and item list  */}
      <div className="nav_logo">
        <div className="w-[136px] h-[41px] flex gap-x-1 my-5">
          <div className="w-10 h-full bg-white rounded-lg flex justify-center items-center secondary_text_color">
            <RxEyeClosed className="primary_text_color text-lg"></RxEyeClosed>
          </div>
          <p className="text-[20px] capitalize text-white font-semibold leading-[20px]">
            swat <br /> babymall
          </p>
        </div>
                {/* item list */}
        <div className="items_list">
          <div 
            className="w-[280px] h-[51px] bg-teal-700 rounded-tl-[10px] rounded-tr-[10px] flex justify-between items-center px-6 cursor-pointer"
            onClick={toggleDropdown}
          >
            <div className="menu_icon text-[14px] font-normal text-white leading-[21px]">
              <MdMenu></MdMenu>
            </div>

            <div>
              <p className="text-[14px] font-normal text-white leading-[21px]">
                {selectedOption}
              </p>
            </div>

            <div className={`arrow_icon text-[14px] font-normal text-white leading-[21px] transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
              <IoIosArrowDown></IoIosArrowDown>
            </div>
          </div>

          {isOpen && (
            <div className="select_list bg-white w-[280px] py-4 absolute top-40 shadow-sm z-10">
              <h2 className="text-[14px] uppercase text_red leading-[21px] px-6">
                sale 40% off
              </h2>
              
              <ul>
                {options.map((option, index) => {
                  return (
                    <li 
                      key={option.id}
                      className="flex justify-between text-[14px] font-medium leading-[21px] py-[10px] hover:bg-gray-100 transition-all ease-in-out cursor-pointer px-6"
                      onClick={() => handleOptionSelect(option)}
                    >
                      {option.value} 
                      <span>{option.icon}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>

            {/* searh field and nav links */}
      <div className="nav_links_&_Search">
                {/* search */}
              <div className="search_field flex my-[15px]">
                <div className="relative">
                      <input type="search" className="bg-white w-[230px] text-[16px] primay_paragrap_text_color capitalize px-5 py-3 border-none outline-none  rounded-tl-full rounded-bl-full " placeholder="search anything"></input>
                      {/* search icon */}
                      <FaSearch className="text-[16px] text-black absolute top-1/2 right-4 transform -translate-y-1/2"></FaSearch>
                </div>
                 <div className="button  bg-white px-5 py-3 text-[14px] capitalize text-black flex gap-x-4 font-semibold justify-between items-center rounded-tr-full rounded-br-full border-l border-gray-200 ">
                     All Categories <IoIosArrowDown></IoIosArrowDown>
                 </div>
              </div>

              {/* nav links  */}
                <div className="nav_links mt-[25px]">
                    <ul className=" flex gap-x-[30px] ml-[15px] ">
                       {navlinks}
                    </ul>
                </div>


      </div>
              {/* user action  and contact */}
      <div className="user_action_&_contact mt-3 ">
              <div className="user_action  flex gap-x-[33px]">
                   <div className="flex gap-x-[13px]">
                   <div className="circel bg-white w-10 h-10 rounded-full "></div>
                   <div className="circel bg-white w-10 h-10 rounded-full flex justify-center items-center text-[14px] text-black  ">
                        <FiHeart></FiHeart> 
                   </div>
                   <div className="circel bg-white w-10 h-10 rounded-full "></div>
                      {/* user auth */}
                   <div className="user_auth ">
                        <p className="text-[16px] uppercase text-white font-light">welcome</p>
                        <Link className="text-[16px] uppercase text-white font-bold"> <h1> log in / Register</h1> </Link>
                   </div>
              </div>
                    {/* user cart */}
              <div className="user_cart flex gap-x-4">
                          <div className="cart bg-white w-10 h-10 rounded-full relative ">
                              <div className="total_cart w-5 h-5 rounded-full flex justify-center items-center bg-black text-white text-sm absolute bottom-0 -right-2">5</div>
                          </div>
                          <div>
                             <p className="text-[16px] uppercase text-white font-light" >cart</p>
                             <h1 className="text-[16px] uppercase text-white font-bold">$1,689.00</h1>
                          </div>
              </div>
              </div>
              
              {/* contact */}
              <div className="contact flex gap-x-[50px] mt-4">
                      <div className="hotline border border-white rounded-full pl-10 pr-6 py-3 text-[16px] capitalize font-light text-white ">
                        hotline 24/7 <span className="font-bold"> (025) 3886 25 16 </span>
                      </div>

                      <div className="flex items-center gap-x-2">
                        <p className="flex items-center gap-x-1 text-[18px] uppercase text-white font-light ">usd <IoIosArrowDown></IoIosArrowDown> </p>
                         <p  className="flex items-center gap-x-2 text-[18px] uppercase text-white font-light ">
                           <img src={flugImg} className="w-[15px] h-[15px] " alt="" />
                             usd 
                             <IoIosArrowDown></IoIosArrowDown>
                          </p>
                      </div>
              </div>
      </div>

    </div>
  );
};

export default Navbar;