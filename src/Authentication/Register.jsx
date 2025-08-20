import React from "react";
import register_img from "../../public/authentication/register.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className=" flex flex-col common_padding py-5 ">
      <div className="w-full mb-4">
        <div className="contact_heading bg-white shadow-md border border-gray-100 rounded-lg p-[30px] mb-4 ">
          <p className="text-[12px] lg:text-[14px] capitalize font-light ">
            home / page / <span className="font-semibold ">Register</span>
          </p>
        </div>
      </div>

      <div className="w-full bg-white shadow-md border border-gray-100  rounded-[10px] p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="hidden md:flex justify-center">
            <img
              src={register_img}
              alt="Login Illustration"
              className="max-w-[401px] h-[327px]"
            />
          </div>

          <div className="flex flex-col justify-center h-[695px]">
            <h1 className="text-[28px] font-bold primary_text_color mb-2">
              Register
            </h1>
            <p className="text-gray-500 text-sm font-normal tracking-wider mb-8">
              JOIN TO US
            </p>

            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="form_label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Jhon Deo"
                  className="form_input"
                />
              </div>
              <div>
                <label htmlFor="email" className="form_label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Example@gmail.com"
                  className="form_input"
                />
              </div>

              <div>
                <label htmlFor="confirm-password" className="form_label">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    placeholder="...."
                    className="form_input"
                  />
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-700 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <label htmlFor="password" className="form_label">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    placeholder="...."
                    className="form_input"
                  />
                  <div className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-700 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="1" x2="23" y2="23"></line>
                    </svg>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="primary_btn"
              >
                REGISTER
              </button>
            </form>

            <p className="text-left text-sm text-gray-400 mt-8">
              ALREADY USER?
              <Link to='/log-in'
               
                className="font-normal text-sm primary_text_color hover:underline ml-1"
              >
                LOGIN
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
