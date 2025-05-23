import BecomeAnstructor from "@/components/home/BecomeAnstructor/BecomeAnstructor";
import BrowseTopCategory from "@/components/home/BrowseTopCategory/BrowseTopCategory";
import FeaturedCourses from "@/components/home/FeaturedCourses/FeaturedCourses";
import HomeCover from "@/components/home/HomeCover/HomeCover";
import MemberShip from "@/components/home/MemberShip/MemberShip";
import OurWorkProcess from "@/components/home/OurWorkProcess/OurWorkProcess";
import Testimonial from "@/components/home/Testimonial/Testimonial";
import TopInstructorOfMonth from "@/components/home/TopInstructorOfMonth/TopInstructorOfMonth";
import WeParterWith from "@/components/home/WeParterWith/WeParterWith";
import PrimaryContainer from "@/Containers/PrimaryContainer";

export const metadata = {
  title: "Home | YouthBees",
  description:
    "Explore top categories, instructors, and start learning with YouthBees today.",
};

export default function Home() {
  return (
    <div className="w-full">
      <PrimaryContainer>
        <HomeCover />
        <BrowseTopCategory />
        <FeaturedCourses />
        <OurWorkProcess />
        <WeParterWith />
        <MemberShip />
        <TopInstructorOfMonth />
      </PrimaryContainer>

      <BecomeAnstructor />

      <PrimaryContainer>
        <Testimonial />
      </PrimaryContainer>
    </div>
  );
}
