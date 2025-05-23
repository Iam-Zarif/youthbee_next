
import { IoIosArrowDown } from "react-icons/io";

const BottomFooter = () => {
  return (
    <div>
      <div className="w-full bg-[#1D2026] py-5 flex lg:flex-row flex-col lg:gap-y-0 gap-y-4 lg:px-0 px-5 items-center justify-evenly">
        <p className="text-sm font-light text-gray-500">
          © 2025 - YouthBee. Designed by A.R. Doha. All rights reserved
        </p>
        <div className="border text-gray-500 border-gray-500 px-3 py-2 w-36 justify-between rounded flex items-center gap-2">
          <p className="text-sm font-light ">English</p>
          <IoIosArrowDown />
        </div>
      </div>
    </div>
  );
}

export default BottomFooter