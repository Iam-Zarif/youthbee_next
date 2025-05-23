import Image from "next/image";
import logo from "../../../../public/images/navbar/youthBeeLogo.png";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaApple, FaGooglePlay } from "react-icons/fa";


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
                <FaFacebookF className="text-white text-4xl p-2.5 bg-[#363B4766] hover:bg-[#F39200] cursor-pointer shadow-sm shadoww-[#CC522B80]" />
                <FaInstagram className="text-white text-4xl p-2.5 bg-[#363B4766]  hover:bg-[#F39200] cursor-pointer shadow-sm shadoww-[#CC522B80]" />
                <FaLinkedinIn className="text-white text-4xl p-2.5 bg-[#363B4766]  hover:bg-[#F39200] cursor-pointer shadow-sm shadoww-[#CC522B80]" />
                <FaTwitter className="text-white text-4xl p-2.5 bg-[#363B4766]  hover:bg-[#F39200] cursor-pointer shadow-sm shadoww-[#CC522B80]" />
                <FaYoutube className="text-white text-4xl p-2.5 bg-[#363B4766]  hover:bg-[#F39200] cursor-pointer shadow-sm shadoww-[#CC522B80]" />
              </div>
            </div>
          </div>

          <div className="hidden lg:block"></div>

          <div className="col-span-4 mt-8  lg:mt-0">
            <div className="lg:flex grid grid-cols-2 gap-6 items-start justify-between w-full">
              <div>
                <p className="font-light">TOP 4 CATEGORY</p>
                {[
                  "Development",
                  "Finance & Accounting",
                  "Design",
                  "Business",
                ].map((item, idx) => (
                  <div key={idx} className="flex mt-3 group items-center gap-2">
                    <p className="text-sm text-gray-400 font-light py-1 cursor-pointer hover:border-b hover:border-red-500">
                      {item}
                    </p>
                    <FaArrowRightLong className="text-red-500 group-hover:block hidden" />
                  </div>
                ))}
              </div>

              <div>
                <p className="font-light">QUICK LINKS</p>
                {["About", "Become Instructor", "Contact", "Career"].map(
                  (item, idx) => (
                    <div
                      key={idx}
                      className="flex mt-3 group items-center gap-2"
                    >
                      <p className="text-sm text-gray-400 font-light py-1 cursor-pointer hover:border-b hover:border-red-500">
                        {item}
                      </p>
                      <FaArrowRightLong className="text-red-500 group-hover:block hidden" />
                    </div>
                  )
                )}
              </div>

              <div>
                <p className="font-light">SUPPORT</p>
                {[
                  "Help Center",
                  "FAQs",
                  "Terms & Condition",
                  "Privacy Policy",
                ].map((item, idx) => (
                  <div key={idx} className="flex mt-3 group items-center gap-2">
                    <p className="text-sm text-gray-400 font-light py-1 cursor-pointer hover:border-b hover:border-red-500">
                      {item}
                    </p>
                    <FaArrowRightLong className="text-red-500 group-hover:block hidden" />
                  </div>
                ))}
              </div>

              <div className="text-center ">
                <p className="text-white text-base font-semibold uppercase mb-6 tracking-widest">
                  Download our app
                </p>

                <div className="flex flex-col gap-4 items-center">
                  <a
                    href="#"
                    className="w-48 bg-[#2D2F36] border border-[#3A3C44] hover:border-[#F39200] transition-all rounded-lg px-5 py-3 flex items-center gap-4"
                  >
                    <div className="text-white text-4xl">
                      <FaApple />
                    </div>
                    <div className="text-left text-white">
                      <p className="text-xs font-light">Download now</p>
                      <p className="text-lg font-medium -mt-1">App Store</p>
                    </div>
                  </a>
                  <a
                    href="#"
                    className="w-48 bg-[#2D2F36] border border-[#3A3C44] hover:border-[#F39200] transition-all rounded-lg px-5 py-3 flex items-center gap-4"
                  >
                    <div className="text-white text-4xl">
                      <FaGooglePlay />
                    </div>
                    <div className="text-left text-white">
                      <p className="text-xs font-light">Download now</p>
                      <p className="text-lg font-medium -mt-1">Play Store</p>
                    </div>
                  </a>
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
