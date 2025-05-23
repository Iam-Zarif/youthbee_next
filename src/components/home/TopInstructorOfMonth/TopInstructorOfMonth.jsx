import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const instructors = [
  {
    id: 1,
    name: "Devon Lane",
    role: "Senior Developer",
    image: "https://i.ibb.co/PZTqxKM/test.jpg",
    rating: 4.6,
    students: 854,
  },
  {
    id: 2,
    name: "Leslie Alexander",
    role: "Lead UX Designer",
    image:
      "https://media.gettyimages.com/id/1317804578/photo/one-businesswoman-headshot-smiling-at-the-camera.jpg?s=612x612&w=gi&k=20&c=tFkDOWmEyqXQmUHNxkuR5TsmRVLi5VZXYm3mVsjee0E=",
    rating: 4.8,
    students: 920,
  },
  {
    id: 3,
    name: "Wade Warren",
    role: "Full Stack Engineer",
    image:
      "https://media.istockphoto.com/id/1292475584/photo/headshot-portrait-of-smiling-biracial-man-posing.jpg?s=612x612&w=0&k=20&c=C0VEM0BwVlbjn-W4avWRTD6byW8oOrHcNwYTAt6ob-E=",
    rating: 4.7,
    students: 789,
  },
  {
    id: 4,
    name: "Eleanor Pena",
    role: "Data Scientist",
    image:
      "https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=",
    rating: 4.9,
    students: 1024,
  },
  {
    id: 5,
    name: "Cody Fisher",
    role: "Cybersecurity Expert",
    image:
      "https://www.slazzer.com/blog/wp-content/uploads/2022/11/Professional-Profile-Picture-1.jpg",
    rating: 4.5,
    students: 678,
  },
];

const TopInstructorOfMonth = () => {
  return (
    <div className="mt-10 lg:mt-32">
      <p className="text-4xl font-semibold text-center">
        Top instructors of the month
      </p>
      <div className="mt-12 grid lg:w-full w-[80%] mx-auto lg:grid-cols-5 grid-cols-1 gap-6">
        {instructors?.map((instructor) => (
          <div
            key={instructor.id}
            className="border border-gray-100 bg-white rounded"
          >
            <Image
              src={instructor?.image}
              loading="lazy"
              width="100"
              height="100"
              className="h-[16rem]  lg:h-[15rem] object-cover object-top w-full"
              alt={instructor.name}
            />
            <p className="mt-3 text-center text-lg">{instructor.name}</p>
            <p className="text-center font-light text-gray-500 text-sm">
              {instructor.role}
            </p>
            <div className="h-[1px] w-full bg-gray-200 mt-3"></div>

            <div className="flex items-center py-4 px-5 justify-between w-full">
              <div className="flex items-center gap-1">
                <Rating style={{ maxWidth: 20 }} value={1} readOnly items={1} />
                <p className="text-sm font-light">{instructor.rating}</p>
              </div>
              <div className="text-sm">
                <p>
                  {instructor.students}{" "}
                  <span className="text-gray-600">Students</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10 flex lg:flex-row flex-col lg:w-full w-[80%] mx-auto items-center gap-2 text-sm justify-center text-center">
        <p className="font-thin">
          Thousands of students waiting for a instructor. Start teaching &
          earning now!.
        </p>
        <div className="flex items-center cursor-pointer text-[#F39200] gap-1">
          <span>Become Instructor</span> <FaArrowRightLong />
        </div>
      </div>
    </div>
  );
};

export default TopInstructorOfMonth;
