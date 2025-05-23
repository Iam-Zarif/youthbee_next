import Image1 from "../../../../public/images/partnerWith/image 1.svg";
import Image2 from "../../../../public/images/partnerWith/image 2.svg";
import Image3 from "../../../../public/images/partnerWith/image 3.svg";
import Image4 from "../../../../public/images/partnerWith/image 4.svg";
import Image6 from "../../../../public/images/partnerWith/image 6.svg";
import Image7 from "../../../../public/images/partnerWith/image 7.svg";
import Image7_1 from "../../../../public/images/partnerWith/image 7-1.svg";
import Image8 from "../../../../public/images/partnerWith/image 8.svg";
import Image9 from "../../../../public/images/partnerWith/image 9.svg";
import Image10 from "../../../../public/images/partnerWith/image 10.svg";
import Image11 from "../../../../public/images/partnerWith/image 11.svg";
import Image12 from "../../../../public/images/partnerWith/image 12.svg";
import Image14 from "../../../../public/images/partnerWith/image 14.svg";
import Image15 from "../../../../public/images/partnerWith/image 15.svg";
import Image16 from "../../../../public/images/partnerWith/image 16.svg";
import Image from "next/image";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image6,
  Image7,
  Image7_1,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
  Image14,
  Image15,
  Image16,
];

const WeParterWith = () => {
  return (
    <div className="lg:mt-32 mt-10">
      <p className="text-2xl font-semibold text-center mavenPro">
        We partner with Countries Top companies
      </p>
      <div className="w-full lg:px-0 px-8 grid grid-cols-2 justify-between lg:grid-cols-5  gap-y-4 lg:gap-y-8  gap-x-20 mt-12">
        {images?.map((image, index) => (
          <Image
            key={index}
            src={image}
            loading="lazy"
            alt={`Partner ${index + 1}`}
            className="w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default WeParterWith;
