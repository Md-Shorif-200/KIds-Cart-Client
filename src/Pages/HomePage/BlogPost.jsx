import React from "react";

// images

import img_1 from "../../../public/News-feed/img-1.png";
import img_2 from "../../../public/News-feed/img-2.png";
import img_3 from "../../../public/News-feed/img-3.png";
import img_4 from "../../../public/News-feed/img-4.png";
import img_5 from "../../../public/News-feed/img-5.png";
import { Link } from "react-router-dom";

const blog_posts = [
  {
    id: "blog_post_1",
    image: img_2,
    title: "Omicron in Kids: Here's what parents should know",
    time_ago: "45 Minutes ago",
    category: "Experience",
  },
  {
    id: "blog_post_2",
    image: img_3,
    title: "Insight into dadliness",
    time_ago: "2 Days ago",
    category: "Infant",
  },
  {
    id: "blog_post_3",
    image: img_4,
    title: "Fun facts about January Babies",
    time_ago: "1 Day ago",
    category: "Life Style",
  },
  {
    id: "blog_post_4",
    image: img_5,
    title: "Your handy guide to revamp the nursery",
    time_ago: "2 Days ago",
    category: "Pregnancy & Postpartum",
  },
];

const BlogPost = () => {
  return (
    <div className="blog_post_section  common_padding ">
       {/* title */}
              <div className="title sm:flex justify-between items-center">
                <h1 className="text-[30px] leading-[36px] text-black capitalize primary_text_color font-semibold mb-3 lg:mb-0 ">
                  {" "}
              What’s New  <span className="text-black">Today</span>
                </h1>
                <Link className="capitalize text-[14px] lg:text-[16px] font-semibold primary_text_color underline   ">
             
                  view more article{" "}
                </Link>
              </div>
      {/* ----------------- blogs   */}
      <div className=" blogs  lg:flex  gap-7 mt-10 mb-[60px] ">
                  {/* main blog post */}
        <div className="new_blog grid  w-full lg:w-[30%] h-[260px]  bg-black/15     rounded-lg p-5  "
          style={{
            backgroundImage: `url(${img_1})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "",
            backgroundBlendMode: "multiply",
          }}
        >
            <div className="self-end ">
                     <h2 className="text-[18px] text-white font-semibold ">
            {" "}
            Babies in Winter: How to protect your newborn in cold weather{" "}
          </h2>
          <p className="text-[15px] font-normal text-gray-200 mt-[15px] ">45 Minutes ago in Experience</p>
            </div>
        </div>

              {/* updated blogs */}

        <div className="blogs w-full lg:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-7 mt-6 lg:mt-0">
               {
                blog_posts.map((blog,index) => {
                   return (
                        <div key={index} className="blog_post_card w-full flex gap-6 shadow-sm bg-white p-2 rounded-lg">
                              <div className="img">
                                      <img src={blog.image} className="w-[158px] h-[100px] rounded-lg" alt="" />
                              </div>
                              <div className="details flex flex-col justify-between">
                                           <h1 className="text-[18px] font-bold capitalize  "> {blog.title} </h1>

                                           <p className="text-[14px] capitalize text-gray-800"> {blog.time_ago}  <span className="font-semibold">{blog.category}</span> </p>
                                     </div>

                                  
                        </div>  
                   )
                })
               }
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
