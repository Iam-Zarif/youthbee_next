import React from "react";
import topCategory1 from "../../../../public/images/topCategory/topCategory1.svg";
import topCategory2 from "../../../../public/images/topCategory/topCategory2.svg";
import topCategory3 from "../../../../public/images/topCategory/topCategory3.svg";
import topCategory4 from "../../../../public/images/topCategory/topCategory4.svg";
import topCategory5 from "../../../../public/images/topCategory/topCategory5.svg";
import topCategory6 from "../../../../public/images/topCategory/topCategory6.svg";
import topCategory7 from "../../../../public/images/topCategory/topCategory7.svg";
import topCategory8 from "../../../../public/images/topCategory/topCategory8.svg";
import topCategory9 from "../../../../public/images/topCategory/topCategory9.svg";
import topCategory10 from "../../../../public/images/topCategory/topCategory10.svg";
import topCategory11 from "../../../../public/images/topCategory/topCategory11.svg";
import topCategory12 from "../../../../public/images/topCategory/topCategory12.svg";
import bg1 from "../../../../public/images/topCategory/bg1.png";
import bg2 from "../../../../public/images/topCategory/bg2.png";
import bg3 from "../../../../public/images/topCategory/bg3.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";

const backgroundImages = [bg1, bg2, bg3];

const categories = [
  { name: "Artificial Intelligence", courses: 176, img: topCategory1 },
  { name: "Business", courses: 322, img: topCategory2 },
  { name: "Finance & Accounting", courses: 241, img: topCategory3 },
  { name: "IT & Software", courses: 649, img: topCategory4 },
  { name: "Personal Development", courses: 126, img: topCategory5 },
  { name: "Office Productivity", courses: 332, img: topCategory6 },
  { name: "Marketing", courses: 268, img: topCategory7 },
  { name: "Photography & Video", courses: 196, img: topCategory8 },
  { name: "Lifestyle", courses: 36, img: topCategory9 },
  { name: "Design", courses: 600, img: topCategory10 },
  { name: "Health & Fitness", courses: 178, img: topCategory11 },
  { name: "Music", courses: 59, img: topCategory12 },
];

const BrowseTopCategory = () => {
  return (
    <div className="mt-10">
      <p className="lg:text-[3rem] mavenPro text-3xl font-semibold text-center">
        Browse top category
      </p>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 text-white sm:grid-cols-1 mt-10 gap-6 w-[80%] mx-auto lg:w-full">
        {categories?.map((category, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl relative flex items-center gap-3 bg-cover bg-center min-h-[120px] overflow-hidden"
            style={{
              backgroundImage: `url(${
                backgroundImages[index % backgroundImages.length].src
              })`,
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60 rounded-2xl z-0"></div>

            <Image
              src={category.img}
              className="w-12 rounded-lg z-10"
              alt={category.name}
            />

            <div className="z-10">
              <p className="font-semibold text-white">{category.name}</p>
              <p className="text-sm text-gray-300">
                {category.courses} Courses
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center gap-2 text-sm justify-center text-center">
        <p className="font-thin">We have more category & subcategory.</p>
        <div className="flex items-center cursor-pointer text-[#F39200] gap-1">
          <span>Browse All</span> <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default BrowseTopCategory;
