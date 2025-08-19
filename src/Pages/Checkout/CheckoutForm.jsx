import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

import product_img from "../../../public/Checkout/prod37.png";
import paypal_logo from "../../../public/Checkout/paypal_logo.png";

const CheckoutForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data) => {};

  return (
    <div className="checkout_form_section common_padding">
      {/*  heading  */}
      <div className="contact_heading bg-white shadow-md border border-gray-100 rounded-lg p-[30px] my-4 ">
        <p className="text-[12px] lg:text-[14px] capitalize font-light ">
          home / page / <span className="font-semibold ">checkout</span>
        </p>
      </div>
      {/* ------------- checkout form */}
      <div className="conatact_info px-3 sm:px-4 md::px-[30px] py-[30px]  bg-white shadow-md border border-gray-100 rounded-lg ">
        <div className="title text-[18px] uppercase font-semibold  ">
          checkout
        </div>
        {/*------------------  */}
        <div className="grid grid-cols-1 gap-6 lg:gap-12 mt-6 mb-11">
          <div className="returning_customer bg-[#E9E7E8] px-4 sm:px-6 md:px-8  lg:px-12 py-5 rounded-lg">
            <p className="text-[14px] capitalize  leading-[23px] text-black font-normal">
              {" "}
              Returning customer?{" "}
              <span className="text_red ml-1">Click here to log in</span>
            </p>
          </div>

          <div className="cupon bg-[#E9E7E8] px-4 sm:px-6 md:px-8  lg:px-12 py-5 rounded-lg">
            <p className="text-[14px] capitalize  leading-[23px] text-black font-normal">
              {" "}
              Have a coupon?{" "}
              <span className="text_red ml-1">
                {" "}
                Click here to enter your code
              </span>
            </p>
          </div>
        </div>

        {/* ------------ biling details and  order */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
          <div className="checkout_form">
            <div className="title text-[16px] capitalize font-semibold mb-6 ">
              billing details
            </div>
            {/* ------------ billing form  */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/*---------------  name input */}
              <div className="name_input grid grid-cols-1 sm:grid-cols-2 gap-2  sm:gap-3 lg:gap-[18px] my-4 ">
                {/* First Name */}
                <div>
                  <label className=" form_label  ">First Name</label>
                  <input
                    type="text"
                    className="form_input"
                    placeholder="Enter Your First Name"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <p className="input_error">{errors.firstName.message}</p>
                  )}
                </div>

                {/* last name */}

                <div>
                  <label className=" form_label  ">Last Name</label>
                  <input
                    type="text"
                    className="form_input"
                    placeholder="Enter Your Last Name"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <p className="input_error">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              {/* -------------- Company Name */}

              <div>
                <label className=" form_label  ">
                  Company Name{" "}
                  <span className="primay_paragrap_text_color">
                    {" "}
                    (optional){" "}
                  </span>{" "}
                </label>
                <input
                  type="text"
                  className="form_input"
                  placeholder="Company Name"
                  {...register("companyName")}
                />
                {errors.companyName && (
                  <p className="input_error">{errors.companyName.message}</p>
                )}
              </div>

              {/* --------------- country */}
              <div>
                <label className="form_label">Country / Region</label>
                <select
                  className="form_input "
                  defaultValue=""
                  {...register("country", { required: "Select a country" })}
                >
                  <option value="" disabled>
                    Select country
                  </option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
                {errors.country && (
                  <p className="input_error">{errors.country.message}</p>
                )}
              </div>

              {/* -------- street address */}

              <div className="street_address_input">
                <div>
                  <label className=" form_label  ">Street Address</label>
                  <input
                    type="text"
                    className="w-full text-[13px] rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#01A49E] mt-[8px] mb-2 bg-white border-[#CCCCCC]"
                    placeholder="House number and street name ..."
                    {...register("streetAddress_1", {
                      required: " This field is required",
                    })}
                  />
                  {errors.streetAddress_1 && (
                    <p className="input_error">
                      {errors.streetAddress_1.message}
                    </p>
                  )}
                </div>
                {/* ------  */}
                <div>
                  <input
                    type="text"
                    className="w-full text-[13px] rounded-lg border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#01A49E]  mb-2 bg-white border-[#CCCCCC]"
                    placeholder="Apartment, suite, unit, etc (Optional)"
                    {...register("streetAddress_2", {})}
                  />
                  {errors.streetAddress_2 && (
                    <p className="input_error">
                      {errors.streetAddress_2.message}
                    </p>
                  )}
                </div>
              </div>

              {/* -------------- town / city*/}

              <div>
                <label className=" form_label  ">Town / City</label>
                <input
                  type="text"
                  className="form_input"
                  placeholder="Your town / city name "
                  {...register("cityName")}
                />
                {errors.cityName && (
                  <p className="input_error">{errors.cityName.message}</p>
                )}
              </div>

              {/* --------------- state */}
              <div>
                <label className="form_label">State</label>
                <select
                  className="form_input "
                  defaultValue=""
                  {...register("state", { required: "Select a state" })}
                >
                  <option value="" disabled>
                    Select State
                  </option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="UK">UK</option>
                </select>
                {errors.state && (
                  <p className="input_error">{errors.state.message}</p>
                )}
              </div>

              {/* -------------- zip code  */}

              <div>
                <label className=" form_label  ">Zip Code</label>
                <input
                  type="text"
                  className="form_input"
                  placeholder="Zip code"
                  {...register("zipCode")}
                />
                {errors.zipCode && (
                  <p className="input_error">{errors.zipCode.message}</p>
                )}
              </div>

              {/* --------------- phone number  */}
              <div>
                <label className=" form_label  ">Phone Number </label>
                <input
                  type="tel"
                  className="form_input"
                  placeholder="Phone Number"
                  {...register("phoneNumber", {
                    required: "Phone Number is required",
                  })}
                />
                {errors.phoneNumber && (
                  <p className="input_error">{errors.phoneNumber.message}</p>
                )}
              </div>

              {/* --------------- email  */}
              <div>
                <label className=" form_label  ">Email</label>
                <input
                  type="text"
                  className="form_input"
                  placeholder="Enter Your Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/,
                      message: "Invalid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="input_error">{errors.email.message}</p>
                )}
              </div>

              {/* Terms */}
              <div className="flex items-start  gap-2">
                <input
                  id="terms"
                  type="checkbox"
                  className=" mt-1 h-4 w-4 rounded border-gray-300"
                  {...register("terms")}
                />
                <label
                  htmlFor="terms"
                  className="text-[14px] font-normal leading-[21px] mb-8 capitalize "
                >
                  creat an account
                </label>
              </div>
              {errors.terms && (
                <p className="text-sm text-red-600 -mt-2">
                  {errors.terms.message}
                </p>
              )}

              {/* ------------ Message */}
              <div>
                <label className=" text-[16px] mb-7 font-semibold capitalize block ">
                  Additional Information{" "}
                </label>
                <label className="form_label">
                  Order Notes{" "}
                  <span className="text-[10px] primay_paragrap_text_color">
                    {" "}
                    (optional){" "}
                  </span>{" "}
                </label>
                <textarea
                  rows="4"
                  className="form_input"
                  placeholder="Note about your order, e.g. special note for delivery "
                  {...register("message", {
                    minLength: { value: 10, message: "At least 10 characters" },
                  })}
                />
                {errors.message && (
                  <p className="input_error">{errors.message.message}</p>
                )}
              </div>

              {/* Actions */}
              {/* <button
                type="submit"
                disabled={isSubmitting}
                className="primary_btn"
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
              </button> */}
            </form>
          </div>

          {/* --------------  order details */}
          <div className="order_details flex flex-col justify-end">
            <div className="title text-[16px] capitalize font-semibold mb-6 ">
              Your Order
            </div>
            {/* -------- amount section */}
            <div className="total_amount_section bg-[#EDEFF5]  p-6 rounded-tr-lg rounded-tl-lg">
              <div className=" flex justify-between">
                <p className="text-[12px] uppercase leading-[14px]  primay_paragrap_text_color ">
                  product
                </p>
                <p className="text-[12px] uppercase leading-[14px]  primay_paragrap_text_color ">
                  {" "}
                  subtoal{" "}
                </p>
              </div>
              <hr className="secondary_paragrap_text_color my-[10px] " />

              <div className="product_name flex gap-2 items-center">
                <div className="img bg-white p-[6px] rounded-sm ">
                  <img src={product_img} alt="" />
                </div>

                <div className=" ">
                  <p className="text-[14px] capitalize font-normal">
                    Pinnaeple Macbook Pro 2022 M1/ 512GB
                  </p>
                  <p className="text-[13px] primay_paragrap_text_color ">x 3</p>
                </div>
              </div>

              <div className="shipping_cost flex justify-between mt-4 mb-2">
                <p className=" text-[14px] capitalize font-normal ">
                  {" "}
                  Worldwide Standard Shipping Free{" "}
                </p>
                <p className="text-[14px] capitalize font-normal text_red">
                  + $9.50
                </p>
              </div>
              <hr className="secondary_paragrap_text_color my-[10px] " />

              <div className="subtotal flex justify-between">
                <h2 className="text-[16px] capitalize leading-[24px] font-semibold ">
                  {" "}
                  order total
                </h2>
                <p className="text-[16px] capitalize leading-[24px] font-semibold primary_text_color">
                  $1746.00
                </p>
              </div>
            </div>
            {/* ----------- payment section  */}
            <div className="payment_method bg-[#DEE2E6] p-4 rounded-br-lg rounded-bl-lg">
              {/* bank transfer method */}
              <div className=" bank_transfer mt-4 flex items-start  gap-4">
                <input
                  id="terms"
                  type="checkbox"
                  className=" mt-1  rounded border-gray-300"
                />
                <div>
                  <h1 className="text-[14px] font-semibold capitalize ">
                    Direct Bank Transfer
                  </h1>
                  <p className="text-[13px] font-light my-[10px] primay_paragrap_text_color ">
                    Make your payment directly into our bank account. Please use
                    your Order ID as the payment reference. Your order will not
                    be shipped until the funds have cleared in our account.
                  </p>
                </div>
              </div>

              {/* cash on delivery */}
              <div className=" cashOn_delivery  flex items-start  gap-4">
                <input
                  id="terms"
                  type="checkbox"
                  className=" mt-1  rounded border-gray-300"
                />
                <div>
                  <h1 className="text-[14px] font-semibold  capitalize ">
                    cash on delivery
                  </h1>
                </div>
              </div>

              {/* paypal */}
              <div className=" paypal  flex items-start  gap-4 mt-5 mb-10">
                <input
                  id="terms"
                  type="checkbox"
                  className=" mt-1  rounded border-gray-300"
                />
                <div className=" w-full flex justify-between items-center">
                  <h1 className="text-[14px] font-semibold  capitalize ">
                    paypal{" "}
                    <span
                      className="text-[#0D6EFD] underline pl-1"
                    >
                      {" "}
                      What’s Paypal?{" "}
                    </span>
                  </h1>

                    <img src={paypal_logo} className="w-[59px] h-[15px] " alt="" />
                </div>
              </div>

                      {/* place order button */}
                            <div className="place_order_btn w-full">
                                <button className="  w-full text-[13px] font-semibold py-4 text-center rounded-[8px] bg-[#01A49E] uppercase text-white"> place order </button>
                            </div>
            </div>



          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
