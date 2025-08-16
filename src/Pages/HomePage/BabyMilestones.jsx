import React from "react";

// bg image
import img_1 from "../../../public/baby-milestone/m1.png.png";
import img_2 from "../../../public/baby-milestone/m2.png.png";
import img_3 from "../../../public/baby-milestone/m3.png.png";
import img_4 from "../../../public/baby-milestone/m4.png.png";

const babyMilestones = [
  { id: 1, image: img_1, text: "Sleep Training", duration: "0-6 months" },
  { id: 2, image: img_2, text: "Starting Solids", duration: "6-12 months" },
  { id: 3, image: img_3, text: "On The Move", duration: "12-24 months" },
  { id: 4, image: img_4, text: "Potty Training", duration: "2-4 years" },
];

const BabyMilestones = () => {
  return (
    <div className="babyMilestone_section secondary_bg_color common_padding py-16 ">
      <div className="section_title text-center   ">
        <h1 className="text-[30px] leading-[36px] text-black capitalize ">
          {" "}
          <span className="primary_text_color font-semibold">
            Prepare for
          </span>{" "}
          baby milestones
        </h1>
      </div>
      {/* baby milestone cards */}
      <div className="milestone_cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6 my-8 ">
        {babyMilestones.map((milestone, index) => {
          return (
            <div className="milestone_card">
              <img
                src={milestone.image}
                className=" w-full rounded-lg"
                alt=""
              />
              {/* description  */}
              <div className="description bg-white  text-center py-[30px] ">
                <h2 className="text-[20px] font-semibold capitalize leading-[30px] ">
                  {" "}
                  {milestone.text}{" "}
                </h2>
                <p className="text-[13px] font-light leading-[20px] primay_paragrap_text_color ">
                  {" "}
                  {milestone.duration}{" "}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BabyMilestones;
