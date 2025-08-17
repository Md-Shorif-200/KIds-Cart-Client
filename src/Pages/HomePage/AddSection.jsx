import React from "react";
import img from "../../../public/add-section/img.png";

const AddSection = () => {
  return (
  <div className="common_padding">
      <div className="  primary_bg_color  items-center grid grid-cols-1 lg:grid-cols-2 my-6 sm:my-8 mc:my-10 lg:my-16 xl:my-10 px-5 rounded-lg ">

     <div className=" img_title  items-center justify-between">
      <div className="tilte capitalize text-4xl font-bold text-white">klarna</div>
         <img src={img} className=" my-4 lg:my-0" alt="" />
     </div>

     <div className="details lg:flex items-center justify-between">
          <div className=" my-4 ">
        <p className=" text-[13px] font-light leading-[19px] text-white ">Pay with 4 installment, 0% interest</p>

        <h2 className="text-[30px] leading-[36px] text-white font-extralight ">
          {" "}
          <span className="font-semibold"> Buy Now, </span> Pay Later{" "}
        </h2>
      </div>

        <div className="lg:text-end">
              <div className="secondary_btn">discover now</div>
        </div>
     </div>
    </div>
  </div>
  );
};

export default AddSection;
