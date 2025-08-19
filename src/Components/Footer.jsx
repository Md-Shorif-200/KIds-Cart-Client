import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaCcPaypal, FaCcVisa, FaCcStripe } from "react-icons/fa6";
import { SiKlarna } from "react-icons/si";
import { AiFillApple } from "react-icons/ai";
import { FaGooglePlay } from "react-icons/fa";

export default function FooterExact() {
  return (
    <footer className="bg-white text-black common_padding">
      {/* TOP: Link columns + Subscribe */}
      <div className="   pt-10 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left: 4 columns */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-[12px]">
              <div>
                <h4 className="text-[14px] font-bold mb-3">Top Categories</h4>
                <ul className="space-y-2 text-[#555]">
                  <li>Pregnant & Postpartum</li>
                  <li>Milk & Foods</li>
                  <li>Diapers & Wipes</li>
                  <li>Infant</li>
                  <li>Eat & Drink Supplies</li>
                  <li>Baby Fashion</li>
                  <li>Baby Out</li>
                  <li>Toys & Study</li>
                  <li>Strollers, Car, Chair</li>
                  <li>Washers & Bath</li>
                  <li>Homewares</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[14px] font-bold mb-3">Company</h4>
                <ul className="space-y-2 text-[#555]">
                  <li>About SmileyNash</li>
                  <li>Contact</li>
                  <li>Career</li>
                  <li>Blog</li>
                  <li>Sitemap</li>
                  <li>Store Locations</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[14px] font-bold mb-3">Help Center</h4>
                <ul className="space-y-2 text-[#555]">
                  <li>Customer Service</li>
                  <li>Policy</li>
                  <li>Terms & Conditions</li>
                  <li>Track Order</li>
                  <li>FAQs</li>
                  <li>My Account</li>
                  <li>Product Support</li>
                </ul>
              </div>

              <div>
                <h4 className="text-[14px] font-bold mb-3">Partner</h4>
                <ul className="space-y-2 text-[#555]">
                  <li>Become Seller</li>
                  <li>Affiliate</li>
                  <li>Advertise</li>
                  <li>Partnership</li>
                  <li>Care Services</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right: Subscribe + contacts */}
          <div className="lg:col-span-4">
            <h4 className="text-[14px] font-bold mb-3">
              Subscribe & Get <span className="text-[#ff3b30]">10% OFF</span>
            </h4>

            <form className="w-full max-w-[420px]">
              <div className="flex rounded-md overflow-hidden border border-gray-300">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-2 text-[13px] outline-none"
                />
                <button
                  type="button"
                  className="px-4 py-2 bg-[#2CC3B5] text-white text-[12px] tracking-wide"
                >
                  SUBSCRIBE
                </button>
              </div>
            </form>

            <p className="text-[13px] text-[#888] mt-2">
              By subscribing, you accept the <a className="underline" href="#">Privacy Policy</a>
            </p>

            {/* Contact links */}
            <div className="my-[30px] text-[14px] space-y-1">
               <p className="text-[14px] text-black font-semibold  ">Hotline 24/7 : <span className="primary_text_color"> (+325) 365 25 36</span> </p>
               <p className="text-[14px] text-black font-semibold my-2 ">Work Hours :  <span> Mon-Sat : 9.00 am - 5.00 pm </span> </p>
               <p className="text-[14px] text-black font-semibold  ">Mail : <span> coantact@gmail.com </span> </p>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2 mt-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaTiktok].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
                  aria-label="social"
                >
                  <Icon className="text-[12px]" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* MIDDLE: payments + language/currency + app badges */}
      <div className="">
        <div className=" px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-5 text-[12px]">
          {/* Currency & Lang */}
          <div className="flex items-center gap-2">
            <div className="relative">
              <select className="appearance-none border border-gray-300 rounded-md pl-3 pr-7 py-1.5 bg-white">
                <option>USD</option>
                <option>EUR</option>
                <option>BDT</option>
              </select>
              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500">▾</span>
            </div>
            <div className="relative">
              <select className="appearance-none border border-gray-300 rounded-md pl-3 pr-7 py-1.5 bg-white">
                <option>Eng</option>
                <option>Ban</option>
              </select>
              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500">▾</span>
            </div>
          </div>

          {/* Payments */}
          <div className="flex items-center gap-4 text-[22px]">
            <FaCcPaypal />
            <FaCcVisa />
            <FaCcStripe />
            <SiKlarna className="text-[20px]" />
          </div>

          {/* App badges */}
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-[#666] mr-1">Download App</span>
            <a className="inline-flex items-center gap-2 bg-black text-white rounded-md px-3 py-2" href="#" aria-label="App Store">
              <AiFillApple className="text-[18px]" />
              <div className="leading-tight">
                <div className="text-[9px]">Download on the</div>
                <div className="text-[12px] font-semibold">App Store</div>
              </div>
            </a>
            <a className="inline-flex items-center gap-2 bg-black text-white rounded-md px-3 py-2" href="#" aria-label="Google Play">
              <FaGooglePlay className="text-[14px]" />
              <div className="leading-tight">
                <div className="text-[9px]">GET IT ON</div>
                <div className="text-[12px] font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM: copyright */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center text-[12px] text-[#777]">
          © 2024 Shoronets24 . All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
