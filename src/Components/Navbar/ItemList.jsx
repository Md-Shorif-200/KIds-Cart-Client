import React, { useState } from 'react';

import { MdMenu } from "react-icons/md";


import { IoIosArrowDown } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";








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








const ItemList = () => {

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
    );
};

export default ItemList;



    //  <div className="items_list">
    //             <div 
    //               className="w-[200px] h-[40px] bg-teal-700 rounded-[8px] flex justify-between items-center px-4 cursor-pointer"
    //               onClick={toggleDropdown}
    //             >
    //               <div className="menu_icon text-[12px] font-normal text-white">
    //                 <MdMenu></MdMenu>
    //               </div>
    //               <div>
    //                 <p className="text-[12px] font-normal text-white">
    //                   {selectedOption.length > 15 ? selectedOption.substring(0, 15) + '...' : selectedOption}
    //                 </p>
    //               </div>
    //               <div className={`arrow_icon text-[12px] font-normal text-white transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
    //                 <IoIosArrowDown></IoIosArrowDown>
    //               </div>
    //             </div>

    //             {isOpen && (
    //               <div className="select_list bg-white w-[200px] py-3 absolute top-[70px] right-3 shadow-lg z-20 rounded-lg">
    //                 <h2 className="text-[12px] uppercase text_red px-4 mb-2">
    //                   sale 40% off
    //                 </h2>
    //                 <ul>
    //                   {options.map((option, index) => {
    //                     return (
    //                       <li 
    //                         key={option.id}
    //                         className="flex justify-between text-[12px] font-medium py-2 hover:bg-gray-100 transition-all ease-in-out cursor-pointer px-4"
    //                         onClick={() => handleOptionSelect(option)}
    //                       >
    //                         {option.value} 
    //                         <span>{option.icon}</span>
    //                       </li>
    //                     );
    //                   })}
    //                 </ul>
    //               </div>
    //             )}
    //           </div>



