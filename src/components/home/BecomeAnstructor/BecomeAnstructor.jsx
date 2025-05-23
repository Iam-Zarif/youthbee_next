import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const BecomeAnstructor = () => {
  return (
    <div className="mt-12 lg:mt-24">
      <div className="w-full pt-12 lg:pt-24 become-instructor lg:px-0 px-5 lg:pb-0 pb-8">
        <div className="grid grid-cols-12 lg:w-full lg:gap-x-12 lg:max-w-[75%] mx-auto">
          <div className="lg:col-span-7 col-span-12 text-white w-full">
            <p className="lg:text-7xl text-4xl font-bold ">
              Become an instructor
            </p>
            <p className="jost mt-6">
              Instructors from around the world teach millions of students on
              YouthBee. We provide the tools and skills to teach what you love.{" "}
              <br />
              <span className="hidden lg:block">
                {" "}
                Instructors from around the world teach millions of students on
                YouthBee. We provide the tools and skills to teach what you
                love.
              </span>
            </p>
            <button className="mt-10 flex items-center justify-center text-center mx-auto bg-white text-[#F39200] px-4 py-2.5 rounded cursor-pointer">
              <div className="flex  items-center cursor-pointer text-[#F39200] gap-1">
                <span className="text-sm font-bold">Start Teaching</span>{" "}
                <FaArrowRightLong />
              </div>
            </button>
          </div>
          <div className="col-span-5 hidden lg:block w-full">
            <Image
              width="100"
              height="100"
              src="https://i.ibb.co.com/Zz3m0ftQ/indicating-1.png"
              className="w-[50rem]"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeAnstructor;
