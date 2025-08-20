import React from "react";

import about_banner_img from "../../../public/about-section/div.about-banner.png";
import showreel_img from "../../../public/about-section/about2.png.png";
import mission_vission_img from "../../../public/about-section/about3.png.png";
import freeShiping_img from "../../../public/about-section/about-shiping.png";
import star_icon from "../../../public/about-section/start_icon.png";

// leaders image
import img_1 from "../../../public/about-section/Link → mem1.png.png";
import img_2 from "../../../public/about-section/Link → mem2.png.png";
import img_3 from "../../../public/about-section/Link → mem3.png.png";
import img_4 from "../../../public/about-section/Link → mem4.png.png";
import img_5 from "../../../public/about-section/Link → mem5.png.png";
import { Link } from "react-router-dom";

// company timeline
const companyTimeline = [
  {
    year: 1997,
    description: "A small store located in Brooklyn Town, USA",
  },
  {
    year: 1998,
    description:
      "It is a long established fact that a reader will be distracted by the readable",
  },
  {
    year: 2000,
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  },
  {
    year: 2002,
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since",
  },
  {
    year: 2004,
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text",
  },
  {
    year: 2005,
    description:
      "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here'",
  },
  {
    year: 2006,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable",
  },
  {
    year: 2010,
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined",
  },
  {
    year: 2013,
    description: "Lorem Ipsum comes from sections 1.10.32",
  },
  {
    year: 2014,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
  {
    year: 2016,
    description:
      "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
  },
  {
    year: 2020,
    description: "Lorem Ipsum comes from sections 1.10.32",
  },
  {
    year: 2021,
    description: "Making this the first true generator on the Internet",
  },
  {
    year: 2022,
    description:
      "Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour",
  },
  {
    year: 2023,
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
  },
];

// company leaders
const leaderhipData = [
  {
    name: "Henry Avery",
    position: "Chairman",
    image: img_1,
  },
  {
    name: "Michael Edward",
    position: "Vice President",
    image: img_2,
  },
  {
    name: "Eden Hazard",
    position: "CEO",
    image: img_3,
  },
  {
    name: "Robert Downey Jr",
    position: "CEO",
    image: img_4,
  },
  {
    name: "Nathan Drake",
    position: "Strategic Director",
    image: img_5,
  },
];

const About = () => {
  return (
    <div className=" bg-[#E2E4EB] common_padding py-5">
      <div className="contact_heading bg-white shadow-md border border-gray-100 rounded-lg p-[30px] mb-10  ">
        <p className="text-[12px] lg:text-[14px] capitalize font-light ">
          home / page / <span className="font-semibold ">about</span>
        </p>
      </div>
      {/* about section */}
      <div className="about_section">
        {/* ABOUT BANNER         */}
        <div
          className="about_banner w-full h-[325px] rounded-lg lg:py-[70px] lg:pl-[96px] p-2 mb-12 lg:mb-0"
          style={{
            backgroundImage: `url(${about_banner_img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <div className="banner_cnt lg:w-[356px] ">
            <h1 className="text-[35px] md::text-[45px] md:leading-[54px] capitalize font-semibold  ">
              {" "}
              Best experience <br />{" "}
              <span className="font-light lowercase"> always wins </span>{" "}
            </h1>
            <p className=" text-[14px] font-light mt-5 text-black lg:primay_paragrap_text_color ">
              #1 Online Marketplace for Electronic & Technology in Mahanttan, CA
            </p>
          </div>
        </div>

        {/* purpose counter  */}
        <div className="purpose_counter md:flex lg:p-[60px] ">
          <div className="w-full md:w-[30%] lg:w-[40%] ">
            <p className=" lg:w-[250px] text-[18px] font-semibold capitalize lg:leading-[32px] my-5 lg:my-0 ">
              our purpose is to{" "}
              <span className="primary_text_color ">enrich and enhance</span>{" "}
              lives through technology
            </p>
          </div>
          <div className="counter w-full md:w-[70%] lg:w-[60%]  grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-2 ">
            <div className="w-[145px]">
              <h2 className=" text-[30px] lg:text-[40px] lg:leading-[48px] font-semibold ">
                $12.5 M
              </h2>
              <p className="text-[12px] font-light leading-[20px] primay_paragrap_text_color  capitalize ">
                total revenue from 2001 - 2023
              </p>
            </div>
            <div className="w-[145px]">
              <h2 className=" text-[30px] lg:text-[40px] lg:leading-[48px] font-semibold ">
                12k+
              </h2>
              <p className="text-[12px] font-light leading-[20px] primay_paragrap_text_color  capitalize ">
                orders delivered successful on everyday
              </p>
            </div>
            <div className="w-[145px]">
              <h2 className=" text-[30px] lg:text-[40px] lg:leading-[48px] font-semibold ">
                725+
              </h2>
              <p className="text-[12px] font-light leading-[20px] primay_paragrap_text_color  capitalize ">
                store and office in U.S and worldwide
              </p>
            </div>
          </div>
        </div>

        {/* showreel section  */}
        <div className="showreel grid grid-cols-1 lg:grid-cols-2 items-end gap-5 md:gap-[100px] my-12">
          <div className="img">
            <img src={showreel_img} alt="" />
          </div>

          <div>
            <p className="text-[16px] capitalize font-semibold ">
              We connect millions of buyers and sellers around the world,
              empowering people & creating economic opportunity for all.
            </p>

            <p className="text-[16px] capitalize font-light primay_paragrap_text_color my-7 ">
              Within our markets, millions of people around the world connect,
              both online and offline, to make, sell and buy unique goods. We
              also offer a wide range of Seller Services and tools that help
              creative entrepreneurs start, manage & scale their businesses.
            </p>
            {/*  button  */}
            <div className="primary_btn">showreel</div>
          </div>
        </div>

        {/* featured */}

        <div className="featured_cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-3">
          {/* card -1 */}
          <div className="featured_card   bg-white rounded-lg px-7 py-4 h">
            <div className="flex justify-between">
              <h2 className="text-[18px]  font-semibold capitalize leading-[21px] ">
                100% authentic products
              </h2>
              <div className="circel w-[30px] h-[30px] primary_bg_color rounded-full "></div>
            </div>
            <p className="text-[13px] font-light primay_paragrap_text_color leading-[21px] mt-[50px] ">
              Swoo Tech Mart just distribute 100% authorized products &
              guarantee quality. Nulla porta nulla nec orci vulputate, id rutrum
              sapien varius.
            </p>
          </div>

          {/* card -2 */}
          <div className="featured_card   bg-white rounded-lg px-7 py-4 h">
            <div className="flex justify-between">
              <h2 className="text-[18px]  font-semibold capitalize leading-[21px] ">
                fast delivery
              </h2>
              <div className="circel w-[30px] h-[30px] primary_bg_color rounded-full "></div>
            </div>
            <p className="text-[13px] font-light primay_paragrap_text_color leading-[21px] mt-[50px] ">
              Fast shipping with a lots of option to delivery. 100% guarantee
              that your goods alway on time and perserve quality.
            </p>
          </div>

          {/* card -1 */}
          <div className="featured_card   bg-white rounded-lg px-7 py-4 h">
            <div className="flex justify-between">
              <h2 className="text-[18px]  font-semibold capitalize leading-[21px] ">
                affordable price
              </h2>
              <div className="circel w-[30px] h-[30px] primary_bg_color rounded-full "></div>
            </div>
            <p className="text-[13px] font-light primay_paragrap_text_color leading-[21px] mt-[50px] ">
              We offer an affordable & competitive price with a lots of special
              promotions.
            </p>
          </div>
        </div>

        {/* mission and vissin */}
        <div className="mission_vission bg-white shadow-md p-7 my-4 rounded-lg">
          <h2 className="text-[18px]  font-semibold capitalize leading-[21px] ">
            our mission and vision
          </h2>

          <p className="text-[14px] font-normal my-[30px] leading-[25px] ">
            Nam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras
            non elit vel magna molestie pellentesque in eu dui. Donec laoreet
            quis erat vitae finibus. Vestibulum enim eros, porta eget quam et,
            euismod dictum elit. Nullam eu tempus magna. Fusce malesuada nisi id
            felis placerat porta vel sed augue. Vivamus mollis mauris vitae
            rhoncus egestas. Pellentesque habitant morbi tristique senectus et
            netus et malesuada fames ac turpis egestas.
          </p>
          {/* img */}
          <div className="img w-full h-[180px] sm:h-[280px] md:h-[380px] ">
            <img src={mission_vission_img} className=" w-full h-full rounded-lg object-cover" alt="" />
          </div>

          <hr className="secondary_paragrap_text_color my-7" />

          <h2 className="text-[18px]  font-semibold capitalize leading-[21px] ">
            from a retail store to the global chain of stores
          </h2>

          <p className="text-[14px] font-normal my-[30px] leading-[25px] ">
            Pellentesque laoreet justo nec ex sodales euismod. Aliquam orci
            tortor, bibendum nec ultricies ac, auctor nec purus. Maecenas in
            consectetur erat.
          </p>

          {/* company timeline */}
          <div className="company_timeline grid grid-cols-1 lg:grid-cols-2 gap-x-7">
            {/* timeline 1 */}
            <div className="timeline_1">
              {companyTimeline.slice(0, 8).map((timeline, index) => {
                return (
                  <div key={index}>
                    <ul>
                      <li className="text-[14px] primay_paragrap_text_color flex gap-2 my-2">
                        {" "}
                        <span className=" font-semibold   text-black ">
                          {" "}
                          {timeline.year}:{" "}
                        </span>{" "}
                        {timeline.description}{" "}
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>

            {/* timeline 2 */}
            <div className="timeline_2">
              {companyTimeline.slice(9, 15).map((timeline, index) => {
                return (
                  <div key={index}>
                    <ul>
                      <li className="text-[14px] primay_paragrap_text_color flex gap-2 my-2">
                        {" "}
                        <span className=" font-semibold   text-black ">
                          {" "}
                          {timeline.year}:{" "}
                        </span>{" "}
                        {timeline.description}{" "}
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          <hr className="secondary_paragrap_text_color my-7" />

          {/* leaderhip section */}

          <div className="leadership">
            <div className="flex justify-between mb-10">
              <h2 className="text-[18px]  font-semibold uppercase leading-[21px] ">
                leadership
              </h2>
              <Link className="text-[13px] capitalize primary_text_color font-semibold ">
                view all
              </Link>
            </div>

            {/* leaders details */}
            <div className="leaders_details grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 justify-center gap-2">
              {leaderhipData.map((data, index) => {
                return (
                  <div key={index} className="leaders_card w-full grid justify-center sm:justify-start ">
                    <div className="img  w-[253px]  sm:w-full  ">
                      <img src={data.image} className="rounded-lg w-[253px]  sm:w-full " alt="" />
                    </div>
                    <div className="my-[14px] w-[253px]  sm:w-full  ">
                      <h2 className="text-[16px] font-semibold  capitalize ">
                        {" "}
                        {data.name}{" "}
                      </h2>
                      <p className="text-[12px] primay_paragrap_text_color uppercase font-light ">
                        {" "}
                        {data.position}{" "}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* free shiping */}

      <div
        className="free_shipping w-full py-8 rounded-lg mt-6 sm:mt-12 md:mt-16 lg:mt-20"
        style={{
          backgroundImage: `url(${freeShiping_img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="details sm:flex justify-center gap-2 p-2">
          <div className="img">
            <img src={star_icon} className=" w-[30px] h-[30px] " alt="" />
          </div>
          <div className="info ">
            <p className="text-white text-[18px] capitalize  ">
              member to get{" "}
              <span className="uppercase text-[#FFE400]">free shipping*</span>{" "}
              with no order minimum!. *restriction apply{" "}
              <Link className="text-[14px] underline lowercase">
                try free 30-days trial!
              </Link>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
