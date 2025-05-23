import thumb from "../../../../public/images/featuredCourses/course.jpg";
import time from "../../../../public/images/featuredCourses/time.svg";
import students from "../../../../public/images/featuredCourses/students.svg";
import Image from "next/image";

const FeaturedCourses = () => {
  return (
    <div className="lg:px-0 px-5">
      <div className="flex items-center mt-10 justify-between w-full">
        <div>
          <p className="lg:text-[2.2rem] mavenPro text-2xl font-semibold ">
            Featured courses
          </p>
          <p className="font-thin mt-2">Explore our Popular Courses</p>
        </div>
        <button className="border-[#F39200] px-4 py-1.5 rounded-3xl border cursor-pointer text-[#F39200]">
          All Courses
        </button>
      </div>
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="border-2 border-gray-300 rounded-2xl">
              <div className="relative">
                <Image src={thumb} className="w-full rounded-t-2xl" alt="" />
                <p className="absolute top-4 left-4 bg-gray-800 text-white px-3 py-2.5 text-sm rounded-lg">
                  IT & Software
                </p>
                <p className="text-center absolute top-2 text-lg left-0 right-0 mx-auto">
                  Create an LMS Website with
                  <span className="block text-sm text-center font-thin">
                    Learn Press Plugin
                  </span>
                </p>
              </div>
              <div className="p-5">
                <p className="mt-2 jost">by Instructor or Company Name</p>
                <p className="font-semibold text-lg mt-3">
                  Create an LMS Website with React JS
                </p>

                <div className="flex font-light items-center gap-6 mt-3">
                  <div className="flex items-center gap-2 ">
                    <Image src={time} className="w-4" loading="lazy" alt="" />
                    <p>2 weeks</p>
                  </div>
                  <div className="flex items-center gap-2 ">
                    <Image src={students} className="w-5" loading="lazy" alt="" />
                    <p>156 Students</p>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-gray-300 mt-4"></div>
                <div className="mt-8">
                  <div className="w-full flex justify-between items-center">
                    <div className="flex text-lg items-center gap-1">
                      <p className="font-light text-gray-400 line-through">
                        $29.0
                      </p>
                      <p className="text-green-600">Free</p>
                    </div>
                    <button className="cursor-pointer text-lg font-semibold">
                      View More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
