import Image from "next/image";
import student from "../../../../public/images/homeCover/woman.svg";

const HomeCover = () => {
  return (
    <div className="pt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 items-center justify-center w-full">
        <div className="col-span-1 lg:col-span-5 text-center lg:text-left px-6">
          <p className="uppercase gradient-text leading-[3rem] lg:leading-[5rem] text-4xl lg:text-7xl font-bold">
            EMPOWERING MINDS IGNITING FUTURES
          </p>
          <p className="lg:mt-[6rem] lg:block hidden jost text-base lg:text-lg">
            Join as an EdTech provider or teacher, reach thousands of learners,
            and earn seamlessly.
          </p>
          <div className="mt-10 hidden  lg:flex flex-col lg:flex-row gap-7 items-center w-full">
            <button className="bg-[#F39200] text-white px-10 py-4 rounded-md cursor-pointer w-full lg:w-auto mb-4 lg:mb-0">
              List Your Courses
            </button>
            <button className="text-[#F39200] border px-10 py-4 rounded-md cursor-pointer bg-[#FFEFD6] border-[#F39200] w-full lg:w-auto">
              Explore Courses
            </button>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-7 w-full mt-10 lg:mt-0">
          <Image src={student} className="w-full" alt="Student Image" />
          <p className="lg:mt-[6rem] mt-4 text-center px-6 block lg:hidden jost text-base lg:text-lg">
            Join as an EdTech provider or teacher, reach thousands of learners,
            and earn seamlessly.
          </p>
          <div className="mt-8 flex flex-col lg:hidden w-[60%] gap-1 items-center mx-auto">
            <button className="bg-[#F39200] text-white px-10 py-4 rounded-md cursor-pointer w-full lg:w-auto mb-4 lg:mb-0">
              List Your Courses
            </button>
            <button className="text-[#F39200] border px-10 py-4 rounded-md cursor-pointer bg-[#FFEFD6] border-[#F39200] w-full lg:w-auto">
              Explore Courses
            </button>
          </div>
        </div>
      </div>

      <div className="lg:w-full w-[80%] mx-auto lg:mt-0 mt-6  flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="bg-[#FFE0C4] rounded-xl w-full py-12 px-10 text-center">
          <p className="text-4xl text-[#FF782D]">25k+</p>
          <p className="jost">Active Students</p>
        </div>
        <div className="bg-[#FFE0C4] rounded-xl w-full py-12 px-10 text-center">
          <p className="text-4xl text-[#FF782D]">1349</p>
          <p className="jost">Total Courses</p>
        </div>
        <div className="bg-[#FFE0C4] rounded-xl w-full py-12 px-10 text-center">
          <p className="text-4xl text-[#FF782D]">158</p>
          <p className="jost">Instructors</p>
        </div>
        <div className="bg-[#FFE0C4] rounded-xl w-full py-12 px-10 text-center">
          <p className="text-4xl text-[#FF782D]">100%</p>
          <p className="jost">Satisfaction Rate</p>
        </div>
      </div>
    </div>
  );
};

export default HomeCover;
