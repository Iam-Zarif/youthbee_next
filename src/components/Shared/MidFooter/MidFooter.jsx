import Image from "next/image";
import logo from "../../../../public/images/navbar/youthBeeLogo.png";
import { FaArrowRightLong } from "react-icons/fa6";

const MidFooter = () => {
  return (
    <div>
      <div className="w-full lg:px-0 px-5 bg-[#1D2026] py-6 lg:py-20">
        <div className="grid text-white grid-cols-4 lg:grid-cols-7 items-center lg:max-w-[1400px] mx-auto w-full">
          <div className="col-span-3 lg:mx-0 mx-auto lg:col-span-2">
            <Image width="100" height="100" src={logo} alt="Logo" />
            <p className="text-sm text-gray-500 -mt-7">
              Aliquam rhoncus ligula est, non pulvinar elit convallis nec. Donec
              mattis odio at.
            </p>
            <div className="flex mt-4 items-center">
              <div className="flex items-center gap-3">
                <Image width="100" height="10"
                  src="https://i.ibb.co/fzJfFfwQ/Social.jpg"
                  className="w-10"
                  loading="lazy"
                  alt="Social 1"
                />
                <Image width="100" height="100"
                  src="https://i.ibb.co/6JXShz0h/Social-4.jpg"
                  className="w-10"
                  loading="lazy"
                  alt="Social 3"
                />
                <Image width="100" height="100"
                  src="https://i.ibb.co/zLG3qDY/Social-3.jpg"
                  className="w-10"
                  loading="lazy"
                  alt="Social 4"
                />
                <Image width="100" height="100"
                  src="https://i.ibb.co/b4FgJV3/Social-1.jpg"
                  className="w-10"
                  loading="lazy"
                  alt="Social 5"
                />
                <Image width="100" height="100"
                  src="https://i.ibb.co/sdzydB3Y/Social-2.jpg"
                  className="w-12 mt-2"
                  loading="lazy"
                  alt="Social 2"
                />
              </div>
            </div>
          </div>

          <div className="hidden lg:block"></div>

          <div className="col-span-4 mt-8  lg:mt-0">
            <div className="lg:flex grid grid-cols-2 gap-6 items-start justify-between w-full">
              {[...Array(3)]?.map((_, index) => (
                <div key={index}>
                  <p className="font-light">Top 4 Category</p>
                  {[
                    "Development",
                    "Finance & Accounting",
                    "Business",
                    "Design",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex mt-3 group items-center gap-2"
                    >
                      <p className="text-sm text-gray-400 font-light py-1 cursor-pointer hover:border-b hover:border-red-500">
                        {item}
                      </p>
                      <FaArrowRightLong className="text-red-500 group-hover:block hidden" />
                    </div>
                  ))}
                </div>
              ))}

              <div>
                <p className="font-light">Download Our App</p>
                <div className="flex flex-col gap-3 mt-6">
                  <Image width="100" height="100"
                    src="https://i.ibb.co/rG6tcbH7/Download-our-app-1.jpg"
                    className="w-36 rounded-lg"
                    loading="lazy"
                    alt="Download 1"
                  />
                  <Image width="100" height="100"
                    src="https://i.ibb.co/TxBhXHgn/Download-our-app.jpg"
                    className="w-36 rounded-lg"
                    loading="lazy"
                    alt="Download 2"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-700"></div>
    </div>
  );
};

export default MidFooter;
