import React from "react";
import { Link } from "react-router-dom";

// bedroom essential image
import img_1 from "../../../public/Essential-Products/bedroom-essential/img-1.png";
import img_2 from "../../../public/Essential-Products/bedroom-essential/img-2.png";
import img_3 from "../../../public/Essential-Products/bedroom-essential/img-3.png";
import img_4 from "../../../public/Essential-Products/bedroom-essential/img-4.png";
import img_5 from "../../../public/Essential-Products/bedroom-essential/img-5.png";
import img_6 from "../../../public/Essential-Products/bedroom-essential/img-6.png";

//   feeding essential image
import img_7 from "../../../public/Essential-Products/Feedig-essential/img-1.png";
import img_8 from "../../../public/Essential-Products/Feedig-essential/img-2.png";
import img_9 from "../../../public/Essential-Products/Feedig-essential/img-3.png";
import img_10 from "../../../public/Essential-Products/Feedig-essential/img-4.png";
import img_11 from "../../../public/Essential-Products/Feedig-essential/img-5.png";
import img_12 from "../../../public/Essential-Products/Feedig-essential/img-6.png";
import { IoIosLogIn } from "react-icons/io";

const EssentialProducts = () => {
  return (
    <div className="essectial_products grid grid-cols-1 lg:grid-cols-2 gap-4 common_padding my-[60px] ">
      {/* ------------------------- bed room essential products  */}
      <div className="beedroom_essential px-4 lg:px-10 py-7 bg-[#E8F2F2] rounded-lg ">
        {/* title */}
        <div className="title sm:flex justify-between items-center">
          <h1 className="text-[22px] md:text-[26px] lg:text-[30px] lg:leading-[36px] font-semibold capitalize ">
            {" "}
            <span className="primary_text_color">Bedroom</span> Essentials{" "}
          </h1>
          <Link className="capitalize text-[13px] font-normal primay_paragrap_text_color underline ">
       
            view all{" "}
          </Link>
        </div>
        {/* essential products  */}
        <div className="products grid grid-cols-2 sm:grid-cols-4 gap-3 my-7">
          <div className="text-center">
            <img
              src={img_1}
              className="w-1/2 mx-auto"
              alt="essentail products"
            />
            <h2 className="text-[14px] font-semibold text-black leading-[21px] ">
              Beach & Water
            </h2>
          </div>
          <div className="text-center">
            <img
              src={img_2}
              className="w-1/2 mx-auto"
              alt="essentail products"
            />
            <h2 className="text-[14px] font-semibold text-black leading-[21px] ">
              Trampolines
            </h2>
          </div>
          <div className="text-center">
            <img
              src={img_3}
              className="w-1/2 mx-auto"
              alt="essentail products"
            />
            <h2 className="text-[14px] font-semibold text-black leading-[21px] ">
              Ride ons
            </h2>
          </div>
          <div className="text-center">
            <img
              src={img_4}
              className="w-1/2 mx-auto"
              alt="essentail products"
            />
            <h2 className="text-[14px] font-semibold text-black leading-[21px] ">
              Outdoor Games
            </h2>
          </div>
        </div>

        {/* special products */}

        <div className="speacial_products  grid grid-cols-1 sm:grid-cols-2 gap-2">
          {/* special   products-1  */}
          <div
            className=" products-1 w-full h-[150px] sm:h-[130px] px-5 py-4  rounded-lg"
            style={{
              backgroundImage: `url(${img_5})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {/* cnt */}
            <div className=" xl:w-[40%] ">
              <h1 className="text-[19px] text-white font-light leading-[21px] ">
                {" "}
                <span className="font-bold">OKO</span> Beeze <br /> Baby Carrier{" "}
              </h1>
              <div className="price flex gap-3  items-center my-5">
                <p className="text-[14px] font-light text-white uppercase ">
                  {" "}
                  price <br /> just
                </p>
                <p className="text-[30px] font-semibold text-white ">$119</p>
              </div>
            </div>
          </div>

          {/*  special  products-2 */}

          <div
            className=" products-2 w-full h-[150px] sm:h-[130px] px-5 py-4  rounded-lg flex lg:justify-end"
            style={{
              backgroundImage: `url(${img_6})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {/* cnt */}
            <div className="xl:w-[40%]">
              <h1
                className="text-[19px] text-white font
                      font-semibold leading-[21px] "
              >
                {" "}
                Kindergo Uniq Balance Bike
              </h1>
              <div className="button mt-3 lg:mt-10">
                <Link className="text-[14px] uppercase text-white underline font-normal ">
                  shop now{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*---------------------- feeding essential  */}
  <div className="feeding_essential px-10 py-7 bg-[#F6F1E9] rounded-lg ">
        {/* title */}
        <div className="title sm:flex justify-between items-center">
          <h1 className="text-[22px] md:text-[26px] lg:text-[30px] lg:leading-[36px] font-semibold capitalize  ">
            {" "}
            <span className="primary_text_color">feeding</span> Essentials{" "}
          </h1>
          <Link className="capitalize text-[13px] font-normal primay_paragrap_text_color ">
            view all{" "}
          </Link>
        </div>
        {/* essential products  */}
        <div className="products grid grid-cols-2 sm:grid-cols-4 gap-3 my-7">
          <div className="text-center">
            <img
              src={img_9}
              className="w-1/2 mx-auto"
              alt="essentail products"
            />
            <h2 className="text-[14px] font-semibold text-black leading-[21px] ">
              Breast Feeding
            </h2>
          </div>
          <div className="text-center">
            <img
              src={img_10}
              className="w-1/2 mx-auto"
              alt="essentail products"
            />
            <h2 className="text-[14px] font-semibold text-black leading-[21px] ">
              Bottle Feeding
            </h2>
          </div>
          <div className="text-center">
            <img
              src={img_11}
              className="w-1/2 mx-auto"
              alt="essentail products"
            />
            <h2 className="text-[14px] font-semibold text-black leading-[21px] ">
              Pacifiers
            </h2>
          </div>
          <div className="text-center">
            <img
              src={img_12}
              className="w-1/2 mx-auto"
              alt="essentail products"
            />
            <h2 className="text-[14px] font-semibold text-black leading-[21px] ">
              Bibs
            </h2>
          </div>
        </div>

        {/*-------------- special products */}

        <div className="speacial_products  grid grid-cols-1 sm:grid-cols-2 gap-2">
          {/* special   products-1  */}
          <div
            className=" products-1 w-full h-[130px] px-5 py-4  rounded-lg flex justify-end"
            style={{
              backgroundImage: `url(${img_7})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          >
            {/* cnt */}
            <div className="w-[40%] h-full flex flex-col justify-between">
              <p className="text-white ">MUM</p>
              <h1 className="text-[19px] text-white font-light leading-[21px] ">
                Baby High Chair
              </h1>
            </div>
          </div>

          {/*  special  products-2 */}

          <div
            className=" products-2 w-full h-[130px] px-5 py-4  rounded-lg flex justify-end"
            style={{
              backgroundImage: `url(${img_8})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "",
            }}
          >
            {/* cnt */}
            <div className="">
              <h1
                className="text-[21px] text-white font
                      font-semibold leading-[16px] capitalize tracking-[3px] "
              >
                mealtime <span className="font-light ">essentials</span>
              </h1>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
};

export default EssentialProducts;

    
