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

export default function Home() {
  return (
    <div className="">
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
