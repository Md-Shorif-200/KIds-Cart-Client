import React from "react";

import logo_1 from "../../../public/producs_category/cat1.png.png";
import logo_2 from "../../../public/producs_category/cat2.png.png";
import logo_3 from "../../../public/producs_category/cat3.png.png";
import logo_4 from "../../../public/producs_category/cat4.png.png";
import logo_5 from "../../../public/producs_category/cat5.png.png";
import logo_6 from "../../../public/producs_category/cat6.png.png";
import logo_7 from "../../../public/producs_category/cat7.png.png";
import logo_8 from "../../../public/producs_category/cat8.png.png";

// products card image
import card_img_1 from "../../../public/producs_category/banner1.png.png";
import card_img_2 from "../../../public/producs_category/banner2.png.png";
import { Link } from "react-router-dom";

const catagories = [
  { id: "1", text: "NewArrivals ", logo: logo_1 },
  { id: "2", text: "Clearance", logo: logo_1 },
  { id: "3", text: "Pregnancy & Postpartum", logo: logo_1 },
  { id: "4", text: "Milks and Foods", logo: logo_2 },
  { id: "5", text: "Diapers andWipes", logo: logo_3 },
  { id: "6", text: "Infant", logo: logo_4 },
  { id: "7", text: "Eat & Drink Supplies", logo: logo_5 },
  { id: "8", text: "Stroller, Crib, Chair", logo: logo_6 },
  { id: "9", text: "Washes & Bath", logo: logo_7 },
  { id: "10", text: "Baby Fashion", logo: logo_8 },
];

const ProductsCatagory = () => {
  return (
    <div className="catagory-section common_padding py-[60px]">
      <div className="section_title text-center">
        <h1 className="text-[30px] leading-[36px] text-black capitalize">
          {" "}
          <span className="primary_text_color font-semibold">
            Most popular categories
          </span>{" "}
          for baby products
        </h1>
      </div>

      {/* category tab */}

      <div className="catagory_tabs grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7  xl:grid-cols-10 gap-2 my-10">
        {catagories.map((catagory, index) => {
          return (
            <div className="catagory_tab xl:text-center">
              <div className="icon w-[70px]  xl:w-[90px] h-[70px] xl:h-[90px]  bg-[#E2F1F0] rounded-full flex justify-center items-center">
                <img
                  src={catagory?.logo}
                  className="w-[30px] xl:w-[35px] h-[30px] xl:h-[35px]"
                  alt=""
                />
              </div>
              <p className="text-[12px] xl:text-[14px] font-semibold leading-[21px] mt-[15px] ">
                {" "}
                {catagory?.text}{" "}
              </p>
            </div>
          );
        })}
      </div>

      {/* product-cards */}
      <div className="product_cards  grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* card -1  */}
        <div
          className="card_1 w-full h-auto p-10 rounded-lg"
          style={{
            backgroundImage: `url(${card_img_1})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* price */}
          <div className="price flex gap-7 items-center ">
            <p className="text-[18px] leading-[21px] font-normal uppercase text-white ">
              best <br /> price
            </p>
            <h1 className="text-[45px] leading-[54px] font-semibold text-white ">
              $69
            </h1>
          </div>
          {/* details */}
          <div className="details my-4">
            <p className="text-[13px] font-light leading-[22px] text-white ">
              3-Pack Cotton Rib Bodysuits
            </p>
          </div>
          {/* button */}
          <div className="secondary_btn">shop now</div>
        </div>

        {/* card -2 */}
        <div
          className="card_2 w-full h-auto p-10 rounded-lg text-right "
          style={{
            backgroundImage: `url(${card_img_2})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* title */}
          <div className="card_title flex justify-end">
            <h1 className="w-[172px] rounded-md p-1 bg-white text-black text-4xl uppercase font-bold ">10% off </h1>
          </div>
            <h2 className="text-3xl font-bold mt-1  ">for Diapers</h2>

          <div className="details  flex justify-end">
            <p className="w-[200px] text-[14px] font-light  primay_paragrap_text_color mt-5  ">Earn 10% Cash back on Swatbabymall.  <Link className="text-black font-semibold ">Expore Now!</Link> </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsCatagory;
