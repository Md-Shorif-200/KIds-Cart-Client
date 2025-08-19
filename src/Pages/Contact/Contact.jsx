import React from "react";
import { useForm } from "react-hook-form";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { Link } from "react-router-dom";

import img from '../../../public/Contact/contact.png.png'

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = (data) => {

  };

  return (
    <div className="contact_section common_padding ">
      {/*  heading  */}
      <div className="contact_heading bg-white shadow-md border border-gray-100 rounded-lg p-[30px] my-4 ">
        <p className="text-[14px] capitalize font-light ">
          home / shop / <span className="font-semibold ">contact</span>{" "}
        </p>
      </div>

      <div className="conatact_info px-[30px] py-[30px]  bg-white shadow-md border border-gray-100 rounded-lg ">
        <div className="title text-[18px] uppercase font-semibold mb-12 ">
          ready to work with us
        </div>
        {/* ------------- contact form and address  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="contact_form">
            <p className="text-[16px] capitalize primay_paragrap_text_color font-light mb-8">
              Contact us for all your questions and opinions
            </p>

            {/* contact form  */}
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              {/*---------------  name input */}
              <div className="name_input grid grid-cols-2 gap-[18px] my-4 ">
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

              {/* --------------- phone number  */}
              <div>
                <label className=" form_label  ">
                  Phone Number{" "}
                  <span className="primay_paragrap_text_color">
                    {" "}
                    (optional){" "}
                  </span>{" "}
                </label>
                <input
                  type="tel"
                  className="form_input"
                  placeholder="Phone Number"
                  {...register("phoneNumber")}
                />
                {errors.phoneNumber && (
                  <p className="input_error">{errors.phoneNumber.message}</p>
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

              {/* -------------- subject */}

              <div>
                <label className=" form_label  ">
                  Subject{" "}
                  <span className="primay_paragrap_text_color">
                    {" "}
                    (optional){" "}
                  </span>{" "}
                </label>
                <input
                  type="text"
                  className="form_input"
                  placeholder="Subject"
                  {...register("subject")}
                />
                {errors.subject && (
                  <p className="input_error">{errors.subject.message}</p>
                )}
              </div>

              {/* ------------ Message */}
              <div>
                <label className="form_label">Message</label>
                <textarea
                  rows="4"
                  className="form_input"
                  placeholder="Write your message..."
                  {...register("message", {
                    minLength: { value: 10, message: "At least 10 characters" },
                  })}
                />
                {errors.message && (
                  <p className="input_error">{errors.message.message}</p>
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
                  className="text-[14px] font-light leading-[21px] mb-8 capitalize "
                >
                  I want to receive news and updates once in a while. By
                  submitting, I’m agreed to the{" "}
                  <Link className="primary_text_color font-semibold underline">
                    Terms & Conditons{" "}
                  </Link>
                </label>
              </div>
              {errors.terms && (
                <p className="text-sm text-red-600 -mt-2">
                  {errors.terms.message}
                </p>
              )}

              {/* Actions */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="primary_btn"
              >
                {isSubmitting ? "Submitting..." : "Send Message"}
              </button>
            </form>
          </div>
          {/* --------------  address */}
          <div className="address">
            <div className="address_details bg-[#EDEFF6]  p-[30px] rounded-lg ">
              {/* usa  */}
              <div className="usa mb-10">
                <h2 className=" text-[12px] font-light uppercase primay_paragrap_text_color ">united states (head quater) </h2>

                <p className=" text-[14px] capitalize font-normal text-black mt-5 mb-2  ">
                  152 Thatcher Road St, Mahattan, 10463, US (+025) 3886 25 16
                </p>

                <p className="text-[14px] capitalize font-normal primary_text_color ">hello@swattechmart.com </p>
              </div>

              {/* uk */}
              <div className="uk mb-[50px] ">
                <h2 className="text-[12px] font-light uppercase primay_paragrap_text_color">united kingdom (branch) </h2>

                <p className="text-[14px] capitalize font-normal text-black mt-5 mb-2  ">
                  12 Buckingham Rd, Thornthwaite, HG3 4TY, UK (+718) 895-5350
                </p>

                <p className="text-[14px] capitalize font-normal primary_text_color">contact@swattechmart.co.uk </p>
              </div>


                   {/* socail links  */}
                    <div className="soical_links flex gap-3 ">
                          <div className="twiter w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center ">  <FaTwitter></FaTwitter>   </div>
                          <div className="facebook w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center ">  <FaFacebook></FaFacebook>   </div>
                          <div className="instaram w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center ">  <FaInstagram></FaInstagram>   </div>
                          <div className="youtube w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center ">  <FaYoutube></FaYoutube>   </div>
                          <div className="Pinterest w-[35px] h-[35px] rounded-full bg-white flex justify-center items-center  ">  <FaPinterest></FaPinterest>   </div>
                    </div>



            </div>
                    {/* contact image  */}
              <div className="contact_img mt-4 ">
                        <img src={img} className="w-full h-full" alt="" />
              </div>

          
          </div>
        </div>

   
      </div>

           {/* google map */}

                <div className="google_map bg-white shadow-md border border-gray-100 rounded-lg  p-[30px] my-4">
                         <div className="title text-[18px] uppercase font-semibold  ">
          finds on google map

                                        <div className="w-full h-[416px] mt-10">
                                         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12189.401829414623!2d90.38626405219566!3d23.77889464001167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c77094eace8b%3A0x1cd8c2d9239b6cb7!2sMohakhali%2C%20Dhaka%201212!5e1!3m2!1sen!2sbd!4v1755594438049!5m2!1sen!2sbd"  className="w-full h-full border-0"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                        </div>
        </div>
                </div>



    </div>
  );
};

export default Contact;
