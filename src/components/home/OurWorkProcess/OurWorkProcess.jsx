import Image from "next/image";
import book from "../../../../public/images/workProcess/book.svg";
import certificate from "../../../../public/images/workProcess/certificate.jpg";
import course from "../../../../public/images/workProcess/course.jpg";
import job from "../../../../public/images/workProcess/job.jpg";

const OurWorkProcess = () => {
  return (
    <div className="mt-10 lg:mt-20">
      <div className="flex items-center justify-center gap-2 font-light">
        <Image src={book} className="w-3" loading="lazy" alt="" />
        <p className="text-[#F39200]">working strategy</p>
      </div>
      <p className="text-center text-4xl mt-4 font-bold mavenPro">
        our work process
      </p>

      <div className="mt-10 flex flex-col lg:flex-row items-center w-full gap-6 lg:px-0 px-5 lg:gap-x-8">
        <div className="w-full flex flex-col items-center gap-y-4 lg:gap-y-6 border-4 border-[#0E2A46] rounded-xl p-6 lg:p-20 border-dashed">
          <Image src={course} loading="lazy" className="rounded-full" alt="" />
          <p className="uppercase text-lg font-semibold">Start Course</p>
          <p className="jost text-center">
            Duis aute irure dolor reprehenderit in voluptate velit esse cillum
            dolore fugiat nulla pariatur. Excepteur
          </p>
        </div>
        <div className="w-full text-white flex flex-col items-center gap-y-4 lg:gap-y-6 border-4 bg-[#F39200] border-[#0E2A46] rounded-xl p-6 lg:p-20 border-dashed">
          <Image
            src={certificate}
            loading="lazy"
            className="rounded-full"
            alt=""
          />
          <p className="uppercase text-lg font-semibold">Get a Certificate</p>
          <p className="jost text-center">
            Duis aute irure dolor reprehenderit in voluptate velit esse cillum
            dolore fugiat nulla pariatur. Excepteur
          </p>
        </div>
        <div className="w-full flex flex-col items-center gap-y-4 lg:gap-y-6 border-4 border-[#0E2A46] rounded-xl p-6 lg:p-20 border-dashed">
          <Image src={job} loading="lazy" className="rounded-full" alt="" />
          <p className="uppercase text-lg font-semibold">Secure a job</p>
          <p className="jost text-center">
            Duis aute irure dolor reprehenderit in voluptate velit esse cillum
            dolore fugiat nulla pariatur. Excepteur
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurWorkProcess;
