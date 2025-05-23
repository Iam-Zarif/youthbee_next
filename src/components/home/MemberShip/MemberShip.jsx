import tik from "../../../../public/images/membership/tik.png";
import cross from "../../../../public/images/membership/cross.png";
import Image from "next/image";
const MemberShip = () => {
  return (
    <div className="mt-20 ">
      <div className="grid lg:px-0 px-5 gap-5 lg:gap-0 grid-cols-12 items-center w-full">
        <div className="lg:col-span-7 col-span-12 w-full">
          <p className="text-4xl mavenPro font-semibold">MemberShip</p>
          <p className="jost mt-2 text-gray-700">
            Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget
            elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum
            eget habitasse in velit fringilla feugiat senectus in.
          </p>
        </div>
        <div className="lg:col-span-5 col-span-12 ml-auto">
          <div className="flex items-center text-sm">
            <button className="bg-[#F39200] border-[#F39200] border px-4 py-2 cursor-pointer text-white rounded-l-lg">
              Monthly
            </button>
            <button className="border-[#F39200] cursor-pointer text-gray-700 bg-white border px-4 py-2 rounded-r-lg">
              Yearly
            </button>
          </div>
        </div>
      </div>

      <div className="lg:mt-20 mt-6 lg:w-[90%] mx-auto w-full flex flex-col lg:flex-row gap-y-5 items-start gap-x-8">
        <div className="bg-[#FFFAF3] rounded-lg p-8 w-full">
          <p className="text-center w-full border border-[#FFEACC] py-2 rounded-lg">
            Free plan
          </p>
          <p className="text-center mt-10">
            <span className="text-5xl font-semibold">$0</span>
            <span className="text-sm">/month</span>
          </p>

          <div className="mt-8 border border-[#F1F1F3] pt-8 rounded-lg">
            <p className="text-center text-xl">Available Features</p>

            <div className="mt-8 flex flex-col lg:px-0 px-5 lg:w-[80%] w-full mx-auto items-start gap-y-4">
              <div className="border-[#FFEACC] border w-full p-2.5 rounded-md flex items-center gap-x-2">
                <Image src={tik} loading="lazy" alt="" />
                <p className="jost font-light">
                  Access to selected free courses.
                </p>
              </div>

              <div className="border-[#FFEACC] border w-full p-2.5 rounded-md flex items-center gap-x-2">
                <Image src={tik} loading="lazy" alt="" />
                <p className="jost font-light">
                  Limited course materials and resources.
                </p>
              </div>

              <div className="border-[#FFEACC] border w-full p-2.5 rounded-md flex items-center gap-x-2">
                <Image src={tik} loading="lazy" alt="" />
                <p className="jost font-light">Basic community support.</p>
              </div>

              <div className="border-[#FFEACC] border w-full p-2.5 rounded-md flex items-center gap-x-2">
                <Image src={tik} loading="lazy" alt="" />
                <p className="jost font-light">
                  No certification upon completion.
                </p>
              </div>

              <div className="border-[#FFEACC] border w-full p-2.5 rounded-md flex items-center gap-x-2">
                <Image src={tik} loading="lazy" alt="" />
                <p className="jost font-light">Ad-supported platform.</p>
              </div>

              <div className="border-[#FFEACC] border w-full p-2.5 rounded-md flex items-center gap-x-2">
                <Image src={cross} loading="lazy" alt="" />
                <p className="jost font-light">
                  Access to exclusive Pro Plan community forums.
                </p>
              </div>

              <div className="border-[#FFEACC] border w-full p-2.5 rounded-md flex items-center gap-x-2">
                <Image src={cross} loading="lazy" alt="" />
                <p className="jost font-light">
                  Early access to new courses and updates.
                </p>
              </div>
            </div>

            <div className="mt-6 flex w-full justify-center">
              <button className="bg-[#F39200] text-white w-full px-6 py-3 rounded-b-lg font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFAF3] rounded-lg p-8 w-full">
          <p className="text-center w-full border border-[#FFEACC] py-2 rounded-lg">
            Pro Plan
          </p>
          <p className="text-center mt-10">
            <span className="text-5xl font-semibold">৳500</span>
            <span className="text-sm">/month</span>
          </p>

          <div className="mt-8 border border-[#F1F1F3] pt-8 rounded-lg">
            <p className="text-center text-xl">Available Features</p>

            <div className="mt-8 flex flex-col lg:px-0 px-5 lg:w-[80%] w-full mx-auto items-start gap-y-4">
              <div className="border-[#FFEACC] border w-full p-2.5 rounded-md flex items-center gap-x-2">
                <Image src={tik} loading="lazy" alt="" />
                <p className="jost font-light">
                  Unlimited access to all courses.
                </p>
              </div>

              <div className="border-[#FFEACC] border w-full p-2.5 rounded-md flex items-center gap-x-2">
                <Image src={tik} loading="lazy" alt="" />
                <p className="jost font-light">
                  Unlimited course materials and resources.
                </p>
              </div>

              <div className="border-[#FFEACC] border w-full p-2.5 rounded-md flex items-center gap-x-2">
                <Image src={tik} loading="lazy" alt="" />
                <p className="jost font-light">
                  Priority support from instructors.
                </p>
              </div>

              <div className="border-[#FFEACC] border w-full p-2.5 rounded-md flex items-center gap-x-2">
                <Image src={tik} loading="lazy" alt="" />
                <p className="jost font-light">
                  Course completion certificates.
                </p>
              </div>

              <div className="border-[#FFEACC] border w-full p-2.5 rounded-md flex items-center gap-x-2">
                <Image src={tik} loading="lazy" alt="" />
                <p className="jost font-light">Ad-free experience.</p>
              </div>

              <div className="border-[#FFEACC] border w-full p-2.5 rounded-md flex items-center gap-x-2">
                <Image src={tik} loading="lazy" alt="" />
                <p className="jost font-light">
                  Access to exclusive Pro Plan community forums.
                </p>
              </div>

              <div className="border-[#FFEACC] border w-full p-2.5 rounded-md flex items-center gap-x-2">
                <Image src={tik} loading="lazy" alt="" />
                <p className="jost font-light">
                  Early access to new courses and updates.
                </p>
              </div>
            </div>

            <div className="mt-6 flex w-full justify-center">
              <button className="bg-[#F39200] text-white w-full px-6 py-3 rounded-b-lg font-semibold">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberShip;
