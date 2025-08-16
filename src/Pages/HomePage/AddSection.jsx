import React from "react";
import img from "../../../public/add-section/img.png";

const AddSection = () => {
  return (
    <div className=" common_padding primary_bg_color grid grid-cols-4 items-center  my-6 sm:my-8 mc:my-10 lg:my-16 xl:my-10 ">
      <div className="tilte capitalize text-4xl font-bold text-white">klarna</div>

     <div className="">
         <img src={img} alt="" />
     </div>

      <div className="details ">
        <p className=" text-[13px] font-light leading-[19px] text-white ">Pay with 4 installment, 0% interest</p>

        <h2 className="text-[30px] leading-[36px] text-white font-extralight ">
          {" "}
          <span className="font-semibold"> Buy Now, </span> Pay Later{" "}
        </h2>
      </div>

        <div className="text-end">
              <div className="secondary_btn">discover now</div>
        </div>
    </div>
  );
};

export default AddSection;
