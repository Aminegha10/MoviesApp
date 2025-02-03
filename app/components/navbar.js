"use client";

import Link from "next/link";

const navbar = () => {
  return (
    <>
      {" "}
      {/* NavBar */}
      <nav
        className=" bg-bgColor p-[15px] flex justify-between items-center shadow-2xl z-1 "
        style={{
          // boxShadow: "-19px 6px 18px 15px #000", // i  disabled this for now because it effects other pages
          position: "sticky",
          zIndex: 10,
          top: 0,
        }}
      >
        {/* LeftSide */}
        <ul className="flex gap-5 items-center text-[20px]">
          <li className="text-[2.5em]">LOGO</li>
          <li>Home</li>
          <li>Movies</li>
          <li>
            <Link href="/plans">Plans</Link>
          </li>
          <li>Contact Us</li>
        </ul>
        {/* RightSide */}
        <div className="flex gap-3 items-center">
          <input
            type="text"
            placeholder="Find Movies, TV shows and"
            className="p-2 border-none rounded-xl"
          />
          <select name="" id="" className="text-black bg-none rounded-md">
            <option value="">ENG</option>
            <option value="">ENG</option>
            <option value="">ENG</option>
            <option value="">ENG</option>
          </select>
          <i className="fa-solid fa-globe" />
          <button className="bg-gradient-to-tr from-purple-500 to-indigo-500 py-[15px] px-[31px] rounded-[30px]">
            Subscribe
          </button>
        </div>
      </nav>
    </>
  );
};

export default navbar;
