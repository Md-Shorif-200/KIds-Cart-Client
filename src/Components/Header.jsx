import React from 'react';

import img from '../../public/Header-img/top_nav1.png.png'

const Header = () => {
    return (
        <div className='header_section bg-[#F1DC67] common_padding flex flex-col sm:justify-between    xl:grid grid-cols-4 relative overflow-x-hidden'>
              <div className="title py-2 lg:py-4">
                   <h1 className='text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-semibold capitalize leading-tight lg:leading-[36px] '>Convertible Cribs</h1>
                   <p className=' text-[13px] font-normal primay_paragrap_text_color '>Otto 3-in-1 Full-Size</p>
              </div>

              <div className="discount flex items-center pt-0 pb-2 lg:pb-0 md:py-2 xl:py-4 ">
                        <div className='flex items-center gap-x-1 lg:gap-[6px] pr-4 lg:border-r border-[#CCCCCC] '>
                            <h1 className=' text-2xl md:text-3xl lg:text-[40px] leading-12 text_red font-semibold'>10%</h1>
                            <p className='uppercase text-[10px] md:text-[12px] lg:text-[16px]  accent_text_color'>  sale <br /> off </p>
                        </div>
                        <div className='pl-4'>
                             <p className='text-[12px] font-normal capitalize  primay_paragrap_text_color leading-tight lg:leading-[18px] '>Enter promotion code </p>
                             <h1 className='secondary_text_color text-base lg:text-[18px] font-semibold uppercase leading-tight lg:leading-[25.2px]'>SWAT10OFF</h1>
                        </div>
              </div>



              <div className="img hidden xl:block ">

                    <img src={img} className='max-w-[320px] h-auto absolute bottom-0 ' alt="" />
              </div>
              <div className="heading_btn text-center py-4 hidden ">
                 <div className="btn px-5 py-[10px] rounded-[8px] primary_bg_color uppercase text-white ">shop now </div>
              </div>
        </div>
    );
};

export default Header;