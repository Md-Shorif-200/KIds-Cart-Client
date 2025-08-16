import React from 'react';
import banner_img from '../../../public/banner/Group - 2 _ 2 → head2.png.png'

const Banner = () => {
    return (
        <div className='banner_section  h-auto lg:h-[460px]  secondary_bg_color common_padding flex flex-col-reverse md:flex-row items-center gap-14 py-10'>
                    <div className="banner_cnt w-full md:w-1/2 ">
                                <h2 className='text-[18px] font-semibold leading-[21px] capitalize '>Bobolax</h2>
                                <h1 className='text-[35px] font-semibold leading-[42px] capitalize  mt-[14px] mb-6'> Nutri 7-In-1 <span className='font-normal'>Base On Formula 400g</span> </h1>
                                <p className='text-[14px] font-normal leading-[25px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores iure repudiandae quae tempore consequuntur.</p>

                                  <div className="banner_btn  py-4">
                 <div className="btn px-6 py-6 rounded-[8px] primary_bg_color uppercase text-white ">shop now </div>
              </div>

                    </div>

                     {/* banner image */}
                    <div className="banner_img w-full md:w-1/2 ">
                          <img src={banner_img} className='w-[80%] sm:w-[60%] md:w-full lg:w-[70%] mx-auto' alt="banner image" />
                    </div>
        </div>
    );
};

export default Banner;