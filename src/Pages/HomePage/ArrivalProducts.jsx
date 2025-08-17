import React from "react";

import Rating from "../../Components/Rating";
import { FaRegHeart } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";


    // gift products image
import gift_Products_img_1 from "../../../public/arrival-products/prod11.jpg.png";
import gift_Products_img_2 from "../../../public/arrival-products/prod12.jpg.png";
import gift_box_img from "../../../public/arrival-products/gift.png.png";
// import gift_Products_img_4 from '../../../public/arrival-products/prod11.jpg.png'
// import gift_Products_img_5 from '../../../public/arrival-products/prod11.jpg.png'
// import gift_Products_img_6 from '../../../public/arrival-products/prod11.jpg.png'
// import gift_Products_img_7 from '../../../public/arrival-products/prod11.jpg.png'

// arrival products img
import img_1 from '../../../public/recomended-products/img-1 (2).png'
import img_2 from '../../../public/recomended-products/img-2.png'
import img_3 from '../../../public/recomended-products/img-3.png'
import img_4 from '../../../public/recomended-products/img-4.png'
import img_5 from '../../../public/recomended-products/img-5.png'

const productsCategory = [
  { id: 1, text: "Best Seller" },
  { id: 2, text: "Top Rated" },
  { id: 3, text: "Pregnancy & Postpartum" },
  { id: 4, text: "Milks and Foods" },
  { id: 5, text: "Diapers and Wipes" },
  { id: 6, text: "Infant" },
  { id: 7, text: "Stroller" },
  { id: 8, text: "Baby Out" },
];

// gift products data

const gift_arrival_products = [
  {
    id: 1,
    product_name: "KOBOO Stroller 3 In 1 Madrid Dark Grey Melange 2022",
    product_image: gift_Products_img_1,
    is_new: true,
    is_gift: true,
    rating: 4.5,
    number_of_ratings: 25,
    price: 559.0,
    number_of_purchases: 902,
    promotions: {
      image: gift_box_img,
      description_1: "Buy 02 boxes get a Snack Tray",
      condition_1: "Buy 2 boxes",
      description_2: "Buy 04 boxes get a free Block Toys",
      condition_2: "Buy 4 boxes",
      promotion_expiration: "9:00pm, 25/5/2024",
    },
  },
  {
    id: 2,
    product_name: "POPPER Baby Dry, 1-month Supply(4pc/pack)",
    product_image: gift_Products_img_2,
    is_new: true,
    is_gift: true,
    rating: 3,
    number_of_ratings: 15,
    price: 159.0,
    number_of_purchases: 245,
    promotions: {
      image: gift_box_img,
      description_1: " Buy 02 boxes get a Free Shipping",
      condition_1: "Buy 2 boxes",
      description_2: "Pay with Klarna, Price just $39.00",
      condition_2: "Buy 4 boxes",
      promotion_expiration: "9:00pm, 25/5/2024",
    },
  },
];

// arrival products
const arrival_products = [
  {
    id: 1,
    productName: "Choco Baby Bouncer Balloon",
    description: "up to a weight of 18 kg",
    rating: 4.5,
    reviewCount: 12,
    image: img_1,
    price: 129.0,
    oldPrice: 150.0,
    discount: "15% OFF",
    purchases: 1248,
    isWishlisted: false,
  },
  {
    id: 2,
    productName: "Gerber Lil' Crunchies, Ounce Canister",
    rating: 4,
    reviewCount: 17,
    image: img_2,
    price: 1258.0,
    oldPrice: null,
    discount: null,
    purchases: 93,
    isWishlisted: true,
  },
  {
    id: 3,
    productName: "Graco Slim Snacker High Chair Grey",
    label: "NEW",
    image: img_3,
    price: 29.0,
    oldPrice: 50.0,
    discount: "40% OFF",
    purchases: 256,
    isWishlisted: false,
  },
  {
    id: 4,
    productName: "Erve Breeze baby carrier",
    label: "NEW",
    image: img_4,
    price: 79.0,
    oldPrice: 100.0,
    discount: "21% OFF",
    purchases: 502,
    isWishlisted: false,
  },
  {
    id: 5,
    productName: 'Sharp 48" Class FHD 1080',
    image: img_5,
    priceRange: {
      min: 49.0,
      max: 99.0,
    },
    oldPrice: null,
    discount: null,
    purchases: 12,
    isWishlisted: false,
  },
];

const ArrivalProducts = () => {
  return (
    <div className="arrivalProducts_section common_padding my-6 sm:my-10 md:my-12 lg:my-16 xl:my-20">
      {/* section title  */}
      <div className="section_title text-center my-10">
        <h1 className="text-[30px] leading-[36px] text-black capitalize">
          {" "}
          <span className="primary_text_color font-semibold capitalize">
            new
          </span>{" "}
          arrival
        </h1>
      </div>

      {/* tabs */}
      <div className="products_category_tab my-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  gap-4 xl:flex  xl:justify-center gap-x-3">
        {productsCategory.map((catagory, index) => {
          return (
            <div className="catagory_tab px-5 rounded-md  py-2 flex justify-center items-center capitalize  primary_bg_color  text-white ">
              {catagory.text}
            </div>
          );
        })}
      </div>

      {/* products card section  */}
      <div className="product_cards lg:flex gap-6">
        <div className="gift_products_cards w-full xl:w-[40%]">
          {gift_arrival_products.map((product, index) => {
            return (
              <div className="card  xl:h-[390px] bg-white shadow-md border border-[#CCCCCC]  p-5 mb-6">
                <div className=" flex gap-5 ">
                  <div className="img">
                    <div className="product_badge flex gap-2">
                      <div
                        className={`badge_1 ${
                          product.is_new
                            ? " w-[41px] h-[21px] rounded-md flex justify-center items-center text-[12px] bg-black text-white uppercase "
                            : ""
                        }`}
                      >
                        {product.is_new ? "new" : ""}
                      </div>

                      <div
                        className={`badge_2 ${
                          product.is_gift
                            ? " w-[41px] h-[21px] rounded-md flex justify-center items-center text-[12px] bg-black text-white uppercase "
                            : ""
                        }`}
                      >
                        {product.is_gift ? "gift" : ""}
                      </div>
                    </div>

                    <img
                      src={product?.product_image}
                      className="w-full"
                      alt=""
                    />
                  </div>

                  <div className="products_details flex flex-col justify-between">
                    <h1 className="text-[14px] font-semibold capitalize text-black  ">
                      {" "}
                      {product?.product_name}{" "}
                    </h1>
                    {/* ratings */}
                    {/* <Rating value={product.rating || 0} ></Rating> */}

                    <div className="price">
                      <h1 className="text-[18px] font-bold ">
                        {" "}
                        ${product.price}{" "}
                      </h1>

                      <div className="flex justify-between items-center">
                        <p className="text-[12px] capitalize text-black font-semibold ">
                          {product.number_of_purchases}{" "}
                          <span className="font-normal text-gray-900">
                            Purchase
                          </span>{" "}
                        </p>

                        <FaRegHeart></FaRegHeart>
                      </div>
                    </div>
                  </div>
                </div>

                <hr className="text-[#CCCCCC] my-5" />

                {/* gift box */}

                <div className="gift_box secondary_bg_color p-[15px] sm:flex lg:block xl:flex gap-5">
                  <div className="img">
                    <img src={product.promotions.image} className="w-1/2 mx-auto sm:w-full lg:w-1/2 xl:w-full " alt="" />
                  </div>

                  <div className="details  ">
                    <h1 className="flex gap-1 items-center">
                      {" "}
                      <GoDotFill className="text-[8px] "></GoDotFill>{" "}
                      {product.promotions.description_1}{" "}
                    </h1>
                    <h1 className="flex gap-1 items-center mt-1">
                      {" "}
                      <GoDotFill className="text-[8px] "></GoDotFill>{" "}
                      {product.promotions.description_2}{" "}
                    </h1>

                    <p className="text-[12px] font-light text-[#666666] my-4 ">
                      {" "}
                      Promotion will expires in:{" "}
                      {product.promotions.promotion_expiration}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* arrival products  */}
        <div className="arrival_product_cards w-full xl:w-[60%] grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3  gap-3">
          {arrival_products.map((product, index) => {
            return (
              <div className="product_card    xl:h-[390px] bg-white shadow-sm border border-[#CCCCCC] rounded-lg p-4 ">
                <div className="product_title h-[60px]">
                  <h1 className="text-[14px]  leading-[21px] font-semibold capitalize ">
                    {" "}
                    {product.productName}{" "}
                  </h1>
                  <h1 className="text-[14px]  leading-[21px] font-semibold capitalize ">
                    {" "}
                    {product.description || "Bouncer Balloon"}{" "}
                  </h1>
                </div>
                {/* ratings  */}
                <div className="ratings mt-3 ">
                  {/* xs */}
                  <div className="rating rating-xs">
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="1 star"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="2 star"
                      defaultChecked
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="3 star"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="4 star"
                    />
                    <input
                      type="radio"
                      name="rating-5"
                      className="mask mask-star-2 bg-orange-400"
                      aria-label="5 star"
                    />
                  </div>
                </div>

                <div className="img">
                  <img src={product.image} className="w-[80%] mx-auto" alt="" />
                </div>
                {/* price and discount */}
                <div className="price_&_discount flex justify-between my-4">
                  <div className="flex items-center gap-x-4">
                    <p className="text-[18px] leading-[27px] text_red font-semibold ">
                      {" "}
                      ${product.price}{" "}
                    </p>
                    <p className="text-[13px] font-light primay_paragrap_text_color ">
                      {" "}
                      ${product.oldPrice || product.price + 10}{" "}
                    </p>
                  </div>
                  <p className="bg_red text-white rounded-md p-[2px] uppercase">
                    {" "}
                    {product.discount || "5% off"}{" "}
                  </p>
                </div>

                {/* total purchase and wishlist */}
                <div className="purchase_&_wishlist flex justify-between items-center mt-4">
                  <p className="text-[12px] leading-[18px] text-black ">
                    {" "}
                    {product.purchases}{" "}
                    <span className="primay_paragrap_text_color capitalize">
                      {" "}
                      purchase{" "}
                    </span>{" "}
                  </p>
                  <FaRegHeart className="text-xl"></FaRegHeart>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArrivalProducts;
