import React from "react";

// products image
import img_1 from "../../../public/clearance-sale/img-1.png";
import img_2 from "../../../public/clearance-sale/img-2.png";
import img_3 from "../../../public/clearance-sale/img-3.png";
import img_4 from "../../../public/clearance-sale/img-4.png";
import img_5 from "../../../public/clearance-sale/img-5.png";
import { FaRegHeart } from "react-icons/fa";

const products = [
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

const ClearanceSale = () => {
  return (
    <div className="clearanceSale_section common_padding">
      {/*  section title */}
      <div className="section_title flex justify-between mb-10   ">
        <h1 className="text-[30px] leading-[36px] text-black capitalize ">
          {" "}
          <span className="primary_text_color font-semibold">
            Clearance
          </span>{" "}
          Sale | Up to 70% OFF
        </h1>
        <p className="text-[13px] leading-[21px] primary_text_color ">
          View All
        </p>
      </div>

      {/*products section  */}

      <div className="product_cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-3">
        {products.map((product, index) => {
          return (
            <div className="product_card bg-white shadow-sm border border-[#CCCCCC] rounded-lg p-4 ">
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
  );
};

export default ClearanceSale;
