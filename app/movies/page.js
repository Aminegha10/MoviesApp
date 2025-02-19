"use client";
import React, { useEffect } from "react";
import { FaEye } from "react-icons/fa";
import { LiaCommentSolid } from "react-icons/lia";
import { AiOutlineLike } from "react-icons/ai";
import { FaShare } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { FaDownload } from "react-icons/fa6";
import { FaPlayCircle } from "react-icons/fa";
import { MdOutlineSave } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
const page = () => {
  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 40, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1500, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  });
  return (
    <div className="text-white  ">
      <main
        className="px-5 pb-72 pt-40 bg-cover bg-no-repeat relative"
        style={{
          backgroundImage: `linear-gradient(to top , #00031c, transparent), linear-gradient(to right, #00031c, transparent), url('/moviesPics/bg.jpg')`,
        }}
      >
        <div className="flex gap-x-4 ">
          <div data-aos="fade-right" className="w-72">
            <img
              src="https://www.ecran-et-toile.com/uploads/5/5/8/7/55875205/published/the-end-of-poster.jpg?1517256366"
              className="w-full rounded-lg object-cover"
            />
          </div>
          <div
            data-aos="fade-left"
            className="flex flex-col  gap-3 text-gray-300"
          >
            <div className="text-[40px] font-bold">
              The End Of The F***ing World
            </div>
            <div className="flex items-center  space-x-4 ">
              <div className="flex items-center">
                <svg
                  width="35"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/1500/svg"
                  stroke="white"
                  className="mr-2"
                >
                  <defs>
                    <linearGradient
                      id="grad"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        style={{
                          stopColor: "rgb(168,85,247)",
                          stopOpacity: 1,
                        }}
                      />{" "}
                      <stop
                        offset="100%"
                        style={{
                          stopColor: "rgb(99,102,241)",
                          stopOpacity: 1,
                        }}
                      />
                    </linearGradient>
                  </defs>
                  <path
                    d="M12 2L14.09 8.26H20.18L15.09 12.74L17.18 19L12 15.52L6.82 19L8.91 12.74L3.82 8.26H9.91L12 2Z"
                    fill="url(#grad)"
                  />
                </svg>
                <span className="text-purple-400">8.2/10</span>
              </div>
              <div className="flex items-center">
                <FaEye className="mr-2" />
                3231 Views
              </div>
              <div className="flex items-center">
                <LiaCommentSolid className="mr-2" />0
              </div>
            </div>
            <div>
              <span className="mr-4">2023 - 1 hr 25 mins</span>
              <span className="bg-purple-500 px-2 py-1 rounded">TV-MA</span>
            </div>
            <div className="text-gray-400">Action - Thriller</div>
            <div className="flex gap-2">
              <button className=" p-2 rounded-lg flex items-center ">
                13
                <AiOutlineLike className="ml-1 mr-1" />
                likes
              </button>
              <button className=" p-2 rounded-lg flex items-center ">
                8
                <FaShare className="ml-1 mr-1" />
                Share
              </button>
              <button className=" p-2 rounded-lg flex items-center">
                22
                <CiBoxList className="ml-1 mr-1" /> Watchlist
              </button>
            </div>
            <button className=" rounded-lg justify-center px-6 py-2 flex items-center bg-[#6366f1] ">
              <span className="mr-2">Download Videos</span> <FaDownload />
            </button>
            <p className="max-w-2xl">
              a 17-year-old boy named James believes he is a psychopath and
              plans to kill someone. He targets Alyssa, a rebellious and moody
              classmate. However, as they embark on a road trip together, their
              relationship evolves in unexpected ways.
            </p>
            <div className="text-sm text-purple-400">
              Show more <i className="fa-solid fa-chevron-down" />
            </div>
            <div>
              <strong>Cast</strong>: Brooke Mulford
            </div>
            <div>
              <strong>Crew</strong>: Alaya Pacheco, Ricky Aleman, Sarah Neal
            </div>
            <div className="flex gap-2">
              <button className="bg-[#6366f1]  rounded-lg px-6 py-2 flex items-center">
                <span className="mr-2">Play Now</span> <FaPlayCircle />
              </button>
              <button className="bg-[#6366f1]  rounded-lg px-6 py-2 flex items-center">
                <span className="mr-2"> Watch Later</span>
                <MdOutlineSave />
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-2xl absolute bottom-0 left-0 w-full h-36 bg-gradient-to-b from-transparent to-[#00031c]"></div>

        {/* <div className="grid grid-cols-7 gap-2">
          <img
            src="https://www.ecran-et-toile.com/uploads/5/5/8/7/55875205/published/the-end-of-poster.jpg?1517256366"
            className="col-span-2 rounded-lg"
          />
          <img
            src="https://thedailytexan.com/2018/01/26/the-end-of-the-fing-world-sheds-a-dark-light-on-teenage-strife/"
            className="col-span-3 rounded-lg"
          />
          <img
            src="https://static.wikia.nocookie.net/teotfw/images/a/ac/Alyssa.JPG/revision/latest?cb=20190813031512"
            className="col-span-2 rounded-lg"
          />
          <img
            src="https://www.indiewire.com/wp-content/uploads/2018/01/1389398-715980-zoomed.jpg"
            className="col-span-2 rounded-lg"
          />
          <img
            src="https://filmdaze.net/wp-content/uploads/2018/01/1_j00wrvycq4wpiv5u7xoupw.jpeg"
            className="col-span-3 rounded-lg"
          />
        </div> */}
      </main>
      {/* Pictures section */}
      <section className=" bg-bgColor px-11  pb-36">
        <div
          className="grid grid-cols-12 grid-rows-6 gap-4 h-[500px]"
          data-aos-duration="2000"
        >
          <div data-aos="fade-right" className="col-span-3 row-span-6">
            <img
              className="h-full w-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105 "
              src="moviesPics/5.jpg"
            />
          </div>
          <div
            data-aos="fade-down"
            className="col-span-6 row-span-3 col-start-4"
          >
            <img
              className="w-full h-full object-cover object-[center_10%] cursor-pointer transition-transform duration-300 hover:scale-105"
              src="moviesPics/3.jpg"
            />
          </div>
          <div
            data-aos="fade-left"
            className="col-span-3 row-span-3 col-start-10"
          >
            <img
              className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              src="moviesPics/6.jpg"
            />
          </div>
          <div
            data-aos="fade-up"
            className="col-span-3 row-span-3 col-start-4 row-start-4"
          >
            <img
              className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
              src="moviesPics/4.jpg"
            />
          </div>
          <div
            data-aos="fade-up"
            className="col-span-6 row-span-3 col-start-7 row-start-4"
          >
            <img
              className="w-full h-full object-cover object-[10%_30%] cursor-pointer transition-transform duration-300 hover:scale-105   "
              src="moviesPics/7.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
