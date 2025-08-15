import React from 'react';

import img from '../../public/Header-img/top_nav1.png.png'

const Header = () => {
    return (
        <div className='bg-[#F1DC67] common_padding grid grid-cols-4 gap-x-6 items-center relative '>
              <div className="title py-4">
                   <h1 className='text-[36px] font-semibold capitalize leading-[36px] '>Convertible Cribs</h1>
                   <p className=' text-[13px] font-normal primay_paragrap_text_color '>Otto 3-in-1 Full-Size</p>
              </div>
              <div className="discount flex py-4 ">
                        <div className='flex gap-[6px] pr-4 border-r border-[#CCCCCC] '>
                            <h1 className='text-[40px] leading-12 text_red font-semibold'>10%</h1>
                            <p className='uppercase text-[16px]  accent_text_color'>  sale <br /> off </p>
                        </div>
                        <div className='pl-4'>
                             <p className='text-[12px] font-normal capitalize  primay_paragrap_text_color leading-[18px] '>Enter promotion code </p>
                             <h1 className='secondary_text_color text-[18px] font-semibold uppercase leading-[25.2px]'>SWAT10OFF</h1>
                        </div>
              </div>
              <div className="img ">

                    <img src={img} className='w-[320px] h-[71.2px] absolute bottom-0' alt="" />
              </div>
              <div className="heading_btn text-center py-4">
                 <div className="btn px-5 py-[10px] rounded-[8px] primary_bg_color uppercase text-white ">shop now </div>
              </div>
        </div>
    );
};

export default Header;