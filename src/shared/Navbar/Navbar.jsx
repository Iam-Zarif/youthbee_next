"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoIosArrowDown } from "react-icons/io";
import { IoMenu, IoClose } from "react-icons/io5";
import Image from "next/image";
import logo from "../../../public/images/navbar/youthBeeLogo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setShowNavbar(currentScrollY <= lastScrollY);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const getLinkClass = (path) =>
    pathname === path ? "text-[#F39200] font-semibold" : "";

  return (
    <nav
      className={`2xl:px-0 px-5 w-full mx-auto left-0 z-[999999] fixed top-0 transition-all duration-300 ${
        showNavbar
          ? "opacity-100 lg:backdrop-blur-md translate-y-0"
          : "opacity-0 -translate-y-full"
      }`}
    >
      <div className="w-[90rem] text-sm lg:text-[15px] flex items-center justify-center mx-auto">
        <div className="flex w-full items-center justify-between">
          <IoMenu
            className="lg:hidden block text-3xl cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
          <Link href="/">
            <Image
              src={logo}
              className="lg:w-40 w-32"
              loading="lazy"
              alt="Logo"
            />
          </Link>
          <div className="lg:flex hidden items-center gap-10">
            <Link href="/" className={getLinkClass("/")}>
              Home
            </Link>
            <Link href="/courses" className={getLinkClass("/courses")}>
              Courses
            </Link>
            <Link
              href="/careerServices"
              className={`flex items-center gap-1.5 ${getLinkClass(
                "/careerServices"
              )}`}
            >
              <span>Career Services</span>
              <IoIosArrowDown />
            </Link>
            <Link
              href="/affiliateprograms"
              className={getLinkClass("/affiliateprograms")}
            >
              Affiliate Programs
            </Link>
            <Link href="/aboutUs" className={getLinkClass("/aboutUs")}>
              About Us
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <button className="text-[#F39200] border lg:block hidden px-5 py-2 rounded-md bg-[#FFEFD6] border-[#F39200]">
              Create Account
            </button>
            <button className="bg-[#F39200] text-white px-5 py-2 rounded-md">
              Sign In
            </button>
          </div>
        </div>

        {isOpen && (
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-md z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}

        <div
          className={`fixed top-0 left-0 w-[60%] h-full bg-white shadow-lg p-5 z-50 transition-transform duration-300 ease-in-out lg:hidden ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <IoClose
            className="text-[#F39200] text-3xl absolute top-4 right-4 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />

          <div className="flex flex-col items-start text-sm space-y-5 mt-10 text-gray-800">
            <Link
              href="/"
              className={getLinkClass("/")}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/course"
              className={getLinkClass("/course")}
              onClick={() => setIsOpen(false)}
            >
              Course
            </Link>
            <Link
              href="/careerServices"
              className={`flex items-center gap-1.5 ${getLinkClass(
                "/careerServices"
              )}`}
              onClick={() => setIsOpen(false)}
            >
              <span>Career Services</span>
              <IoIosArrowDown />
            </Link>
            <Link
              href="/affiliateprograms"
              className={getLinkClass("/affiliateprograms")}
              onClick={() => setIsOpen(false)}
            >
              Affiliate Programs
            </Link>
            <Link
              href="/aboutUs"
              className={getLinkClass("/aboutUs")}
              onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>

            <div className="mt-5 flex gap-3 flex-col items-start w-full">
              <button className="text-[#F39200] border px-5 py-2 rounded-md bg-[#FFEFD6] border-[#F39200] w-full">
                Create Account
              </button>
              <button className="bg-[#F39200] text-white px-5 py-2 rounded-md w-full">
                Sign In
              </button>
            </div>

            <Link
              href="/"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2"
            >
              <Image
                src={logo}
                className="lg:w-52 w-40"
                loading="lazy"
                alt="Logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
