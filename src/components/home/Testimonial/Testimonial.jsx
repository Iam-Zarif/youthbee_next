import Image from "next/image";
import book from "../../../../public/images/workProcess/book.svg";
import { Rating } from "@smastrom/react-rating";

const Testimonial = () => {
  return (
    <>
      <div className="mt-12">
        <div className="flex items-center justify-center gap-2 font-light ">
          <Image width="100" height="100" src={book} className="w-3" loading="lazy" alt="" />
          <p className="text-[#F39200]">testimonial</p>
        </div>
        <p className="text-center mavenPro lg:px-0 px-5 text-4xl mt-4 font-bold">
          Our Beloved Students
        </p>

        <div className="mt-12 w-full grid lg:px-0 px-5 grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="w-full rounded-xl border-2 border-[#F39200] border-dashed p-8">
            <Rating
              style={{ maxWidth: 100 }}
              value={5}
              readOnly
              name="simple-controlled"
            />
            <p className="jost mt-5 leading-[2.2rem]">
              “Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Orci nulla
              pellentesque dignissim enim. Amet consectetur adipiscing”
            </p>
            <div className="mt-6 flex items-center gap-2">
              <Image width="100" height="100"
                src="https://i.ibb.co.com/PZTqxKM/test.jpg"
                loading="lazy"
                className="w-10 h-10 rounded-full object-cover object-top"
                alt=""
              />
              <div className="">
                <p className="text-md font-semibold">Shakib Ahmed</p>
                <p className="text-xs text-[#00BEAE]">
                  Designer at company name
                </p>
              </div>
            </div>
          </div>
          <div className="w-full rounded-xl border-2 border-[#F39200] border-dashed p-8">
            <Rating
              style={{ maxWidth: 100 }}
              value={5}
              readOnly
              name="simple-controlled"
            />
            <p className="jost mt-5 leading-[2.2rem]">
              “Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Orci nulla
              pellentesque dignissim enim. Amet consectetur adipiscing”
            </p>
            <div className="mt-6 flex items-center gap-2">
              <Image width="100" height="100"
                src="https://i.ibb.co.com/PZTqxKM/test.jpg"
                loading="lazy"
                className="w-10 h-10 rounded-full object-cover object-top"
                alt=""
              />
              <div className="">
                <p className="text-md font-semibold">Rakib Hossain</p>
                <p className="text-xs text-[#00BEAE]">
                  Designer at company name
                </p>
              </div>
            </div>
          </div>
          <div className="w-full rounded-xl border-2 border-[#F39200] border-dashed p-8">
            <Rating
              style={{ maxWidth: 100 }}
              value={5}
              readOnly
              name="simple-controlled"
            />
            <p className="jost mt-5 leading-[2.2rem]">
              “Lorem ipsum dolor sit amet, elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Orci nulla
              pellentesque dignissim enim. Amet consectetur adipiscing”
            </p>
            <div className="mt-6 flex items-center gap-2">
              <Image width="100" height="100"
                src="https://i.ibb.co.com/PZTqxKM/test.jpg"
                loading="lazy"
                className="w-10 h-10 rounded-full object-cover object-top"
                alt=""
              />
              <div className="">
                <p className="text-md font-semibold">Nazmul Hasan</p>
                <p className="text-xs text-[#00BEAE]">
                  Designer at company name
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
