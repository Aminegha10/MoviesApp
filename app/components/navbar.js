"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const path = usePathname();
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="relative z-10">
      <nav
        className={`fixed flex justify-between top-0 left-0 right-0 bg-transparent px-4 py-2 z-20 transition-all duration-300 ${
          isScrolled
            ? "backdrop-brightness-75 backdrop-blur-md"
            : "bg-opacity-100"
        }`}
      >
        <ul className="flex md:gap-6 gap-2 items-center text-[14px] md:text-[20px]">
          <Link href="/">
            <img
              className="md:w-20 w-14 cursor-pointer"
              src="/LOGO.png"
              alt="Logo"
            />
          </Link>
          {["Home", "Movies", "Price", "Contact Us"].map((text, index) => {
            const href =
              text === "Home"
                ? "/"
                : `/${text.toLowerCase().replace(/\s+/g, "")}`;
            return (
              <li key={index} className="relative cursor-pointer">
                <Link
                  href={href}
                  className="relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[3px] after:bg-[#6366f1] after:transition-all after:duration-300 hover:after:w-full"
                >
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex gap-2 items-center">
          <input
            type="text"
            placeholder="Find Movies, TV shows and"
            className="md:flex hidden p-2 border bg-transparent placeholder:text-white rounded-xl"
          />
          <select
            name=""
            id=""
            className="text-white bg-transparent rounded-md "
          >
            <option value="">ENG</option>
            <option value="">FR</option>
            <option value="">AR</option>
            <option value="">DE</option>
          </select>
          <CgProfile className="text-[30px] " />
          <i className="fa-solid fa-globe" />
          {/* <button className="bg-gradient-to-tr from-purple-500 to-indigo-500 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-indigo-500 py-[10px] px-[31px] rounded-[30px]">
            Subscribe
          </button> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
