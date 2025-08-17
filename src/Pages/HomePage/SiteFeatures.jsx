import React from "react";
import { FaShippingFast, FaMoneyBillWave, FaCertificate, FaCreditCard, FaLocationArrow } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const SiteFeatures = () => {
  return (
    <div className="features-section w-full primary_bg_color common_padding text-white mb-[60px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 text-center py-8">
        
        {/* Feature 1 */}
        <div className="flex gap-4 items-center">
          <FaLocationArrow className=" text-2xl "/>
          <h2 className="text-sm sm:text-base md:text-lg font-medium">
            Free Shipping Over $98
          </h2>
        </div>

        {/* Feature 2 */}
        <div className="flex gap-4 items-center">
          <FaMoneyBillTransfer className=" text-2xl "/>
          <h2 className="text-sm sm:text-base md:text-lg font-medium">
            30 Days Money Back
          </h2>
        </div>

        {/* Feature 3 */}
        <div className="flex gap-4 items-center">
          <FaCertificate className=" text-2xl "/>
          <h2 className="text-sm sm:text-base md:text-lg font-medium">
            100% Authentic Products
          </h2>
        </div>

        {/* Feature 4 */}
        <div className="flex gap-4 items-center">
          <FaCreditCard className=" text-2xl "/>
          <h2 className="text-sm sm:text-base md:text-lg font-medium">
            Flexible Payment Options
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SiteFeatures;
