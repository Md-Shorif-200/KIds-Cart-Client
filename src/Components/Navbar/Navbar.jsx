
import React, { useState } from "react";
import { MdMenu } from "react-icons/md";
import { RxEyeClosed } from "react-icons/rx";
import Select from "react-select";
import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaHeart, FaSearch } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
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
        <li className="text-[14px] capitalize text-white lg:text-white text-black flex gap-x-2 items-center font-normal hover:text-teal-600 transition-colors">  
          home  <IoIosArrowDown></IoIosArrowDown> 
        </li>
        <li className="text-[14px] capitalize text-white lg:text-white text-black flex gap-x-2 items-center font-normal hover:text-teal-600 transition-colors">  
          page  <IoIosArrowDown></IoIosArrowDown> 
        </li>
        <li className="text-[14px] capitalize text-white lg:text-white text-black flex gap-x-2 items-center font-normal hover:text-teal-600 transition-colors">  
          products  <IoIosArrowDown></IoIosArrowDown> 
        </li>
  </>

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("List Category");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option.value);
    setIsOpen(false);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="nav_section primary_bg_color common_padding pt-6 relative">
        
        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-between">
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
                className="w-[220px] xl:w-[280px] h-[51px] bg-teal-700 rounded-tl-[10px] rounded-tr-[10px] flex justify-between items-center px-6 cursor-pointer"
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
                <div className="select_list bg-white w-[220px] xl:w-[280px] py-4 absolute top-40 shadow-sm z-10">
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
                <input type="search" className="bg-white w-[180px] xl:w-[230px] text-[12px] xl:text-[16px] primay_paragrap_text_color capitalize px-5 py-3 border-none outline-none  rounded-tl-full rounded-bl-full " placeholder="search anything"></input>
                <FaSearch className="text-[12px] xl:text-[16px] text-black absolute top-1/2 right-4 transform -translate-y-1/2"></FaSearch>
              </div>
                    {/* search category button */}
              <div className="button  bg-white px-5 py-3 text-[11px] xl:text-[14px] capitalize text-black flex gap-x-4 font-semibold justify-between items-center rounded-tr-full rounded-br-full border-l border-gray-200 ">
                <span className="hidden xl:block">All</span> Categories <IoIosArrowDown></IoIosArrowDown>
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
                <div className="circel bg-white w-10 h-10 rounded-full hidden xl:block "></div>
                <div className="circel bg-white w-10 h-10 rounded-full flex justify-center items-center text-[14px] text-black  ">
                  <FiHeart></FiHeart> 
                </div>
                <div className="circel bg-white w-10 h-10 rounded-full hidden xl:block "></div>
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
            <div className="contact flex justify-between mt-4">
              <div className="hotline border border-white rounded-full pl-4 xl:pl-10 pr-2 xl:pr-6 py-3  text-[12px] xl:text-[16px] capitalize font-light text-white ">
                hotline 24/7 <span className="font-bold"> (025) 3886 25 16 </span>
              </div>
              <div className="flex items-center gap-x-2">
                <p className="flex items-center gap-x-1 text-[16px] xl:text-[18px] uppercase text-white font-light ">usd <IoIosArrowDown></IoIosArrowDown> </p>
                <p  className="flex items-center gap-x-2 text-[16px] xl:text-[18px] uppercase text-white font-light ">
                  <img src={flugImg} className="w-[15px] h-[15px] " alt="" />
                  Eng 
                  <IoIosArrowDown></IoIosArrowDown>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className=" mobail_layout pb-4  ">
       
          <div className="flex items-center gap-x-1 mb-4">

              {/* Item List Dropdown */}
              <div className="items_list">
                <div 
                  className="w-[200px] h-[40px] bg-teal-700 rounded-[8px] flex justify-between items-center px-4 cursor-pointer"
                  onClick={toggleDropdown}
                >
                  <div className="menu_icon text-[12px] font-normal text-white">
                    <MdMenu></MdMenu>
                  </div>
                  <div>
                    <p className="text-[12px] font-normal text-white">
                      {selectedOption.length > 15 ? selectedOption.substring(0, 15) + '...' : selectedOption}
                    </p>
                  </div>
                  <div className={`arrow_icon text-[12px] font-normal text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    <IoIosArrowDown></IoIosArrowDown>
                  </div>
                </div>

                {isOpen && (
                  <div className="select_list bg-white w-[200px] py-3 absolute top-[70px] right-3 shadow-lg z-20 rounded-lg">
                    <h2 className="text-[12px] uppercase text_red px-4 mb-2">
                      sale 40% off
                    </h2>
                    <ul>
                      {options.map((option, index) => {
                        return (
                          <li 
                            key={option.id}
                            className="flex justify-between text-[12px] font-medium py-2 hover:bg-gray-100 transition-all ease-in-out cursor-pointer px-4"
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

            {/* Mobile Menu Button */}
            <button 
              onClick={toggleSidebar}
              className="text-white text-2xl p-2"
            >
              <MdMenu />
            </button>
          </div>

                      {/* search input */}
       <div className="search_field flex w-full sm:w-[50%] h-10 sm:h-11 md:h-12 s">
  {/* Input */}
  <div className="relative flex-1">
    <input
      type="search"
      className="w-full h-full px-4 text-sm outline-none rounded-tl-full rounded-bl-full bg-white"
      placeholder="Search anything"
    />
    <FaSearch className="absolute top-1/2 right-3 transform -translate-y-1/2 text-sm text-black" />
  </div>

  {/* Button */}
  <div className="bg-white h-full px-4 text-sm flex items-center gap-x-2 font-semibold rounded-tr-full rounded-br-full border-l border-gray-200 cursor-pointer hover:bg-gray-50">
    Categories <IoIosArrowDown className="text-sm" />
  </div>
</div>

        </div>
      </div>

      {/* Mobile Sidebar */}
      <div className={`fixed inset-0 z-50 lg:hidden transition-all duration-300 ease-in-out ${
        isSidebarOpen ? 'visible opacity-100' : 'invisible opacity-0'
      }`}>
        {/* Overlay */}
        <div 
          className={`absolute inset-0 bg-black transition-opacity duration-300 ease-in-out ${
            isSidebarOpen ? 'opacity-50' : 'opacity-0'
          }`}
          onClick={toggleSidebar}
        />
        
        {/* Sidebar */}
        <div className={`absolute left-0 top-0 h-full w-[70%] bg-white 
          transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}>
          <div className="p-6 h-full overflow-y-auto">
            {/* Close Button */}
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-gray-800">Menu</h2>
              <button 
                onClick={toggleSidebar}
                className="text-2xl text-gray-600 hover:text-gray-800"
              >
                <IoClose />
              </button>
            </div>

            {/* Nav Links */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-4">Navigation</h3>
              <ul className="space-y-3">
                {React.Children.map(navlinks.props.children, (child, index) => (
                  <li key={index} className="border-b border-gray-100 pb-2">
                    {React.cloneElement(child, {
                      className: "text-[14px] capitalize text-black flex gap-x-2 items-center font-normal hover:text-teal-600 transition-colors"
                    })}
                  </li>
                ))}
              </ul>
            </div>

            {/* User Auth */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-4">Account</h3>
              <div className="user_auth space-y-2">
                <p className="text-[14px] uppercase text-gray-600 font-light">welcome</p>
                <Link className="text-[16px] uppercase text-teal-600 font-bold hover:text-teal-700 transition-colors">
                  <h1>log in / Register</h1>
                </Link>
              </div>
            </div>

            {/* User Actions */}
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-gray-600 uppercase mb-4">Quick Actions</h3>
              <div className="flex gap-x-4 mb-4">
                <div className="circel bg-gray-100 w-10 h-10 rounded-full"></div>
                <div className="circel bg-gray-100 w-10 h-10 rounded-full flex justify-center items-center text-[14px] text-black">
                  <FiHeart></FiHeart> 
                </div>
                <div className="circel bg-gray-100 w-10 h-10 rounded-full"></div>
              </div>
              
              {/* Cart Info */}
              <div className="user_cart flex gap-x-4 items-center">
                <div className="cart bg-teal-600 w-10 h-10 rounded-full relative">
                  <div className="total_cart w-5 h-5 rounded-full flex justify-center items-center bg-black text-white text-sm absolute bottom-0 -right-2">5</div>
                </div>
                <div>
                  <p className="text-[14px] uppercase text-gray-600 font-light">cart</p>
                  <h1 className="text-[16px] uppercase text-gray-800 font-bold">$1,689.00</h1>
                </div>
              </div>
            </div>

            {/* Contact & Currency */}
            <div className="space-y-4 pb-6">
              <h3 className="text-sm font-semibold text-gray-600 uppercase">Contact & Settings</h3>
              
              {/* Hotline */}
              <div className="hotline border border-teal-600 rounded-full px-4 py-2 text-[13px] capitalize font-light text-teal-600 text-center">
                hotline 24/7 <br />
                <span className="font-bold">(025) 3886 25 16</span>
              </div>

              {/* Currency */}
              <div className="flex flex-col gap-y-2 p-3 bg-gray-50 rounded-lg">
                <p className="flex items-center gap-x-1 text-[14px] uppercase text-gray-600 font-light hover:text-teal-600 transition-colors cursor-pointer">
                  usd <IoIosArrowDown />
                </p>
                <p className="flex items-center gap-x-2 text-[14px] uppercase text-gray-600 font-light hover:text-teal-600 transition-colors cursor-pointer">
                  <img src={flugImg} className="w-[15px] h-[15px]" alt="" />
                  language 
                  <IoIosArrowDown />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;


