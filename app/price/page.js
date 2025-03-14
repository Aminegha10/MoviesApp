"use client";
import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
const page = () => {
  useEffect(() => {
    AOS.init({
      offset: 40, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);
  return (
    <section className="bg-white pt-4 md:pt-0 font-normal dark:bg-gray-900">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:pb-24 lg:pt-[10rem] lg:px-6">
        <div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
          <h2 className="hidden md:block  mb-4 text-3xl  tracking-tight text-gray-900 dark:text-white">
            Plans
          </h2>
          <p className="hidden md:block mb-5 font-light text-gray-500 sm:text-xl dark:text-gray-400">
            Choose the plan that's right for you
          </p>
        </div>
        <div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
          <div
            data-aos="zoom-in-right"
            className=" flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition-transform duration-300 hover:scale-105"
          >
            <h3 className="mb-4 text-2xl font-semibold">Basic </h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Best option for personal &amp; Basic <br /> Use
            </p>
            <div className="flex items-baseline justify-center my-8">
              <span className="mr-2 text-5xl font-extrabold">$29</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <IoIosCheckmarkCircle />

                <span>Unlimited access to thousands of movies & TV shows</span>
              </li>
              <li className="flex items-center space-x-3">
                <IoIosCheckmarkCircle />

                <span>HD streaming on one device</span>
              </li>
              <li className="flex items-center space-x-3">
                <IoIosCheckmarkCircle />

                <span> Ad-supported experience</span>
              </li>
              <li className="flex items-center space-x-3">
                <IoIosCheckmarkCircle />

                <span>Watch on mobile, tablet, and desktop devices</span>
              </li>
              <li className="flex items-center space-x-3">
                <IoIosCheckmarkCircle />

                <span>Download up to 5 titles for offline viewing</span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
            >
              Get started
            </a>
          </div>

          <div
            data-aos="zoom-in"
            className=" flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition-transform duration-300 hover:scale-105"
          >
            <h3 className="mb-4 text-2xl font-semibold">Plus</h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Relevant for multiple users &amp; premium support.
            </p>
            <div className="flex items-baseline justify-center my-8">
              <span className="mr-2 text-5xl font-semibold">$50</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <IoIosCheckmarkCircle />

                <span>
                  <span className="font-semibold">
                    {" "}
                    Everything in Basic, plus:
                  </span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <IoIosCheckmarkCircle />

                <span>Full HD (1080p) streaming on up to 4 devices</span>
              </li>
              <li className="flex items-center space-x-3">
                <IoIosCheckmarkCircle />

                <span> No ads for an uninterrupted experience</span>
              </li>
              <li className="flex items-center space-x-3">
                <IoIosCheckmarkCircle />

                <span>
                  <span className="font-semibold">
                    Download up to 25 titles for offline viewing
                  </span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <IoIosCheckmarkCircle />

                <span>
                  <span className="font-semibold">
                    Family profiles with personalized recommendations
                  </span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
            >
              Get started
            </a>
          </div>
          {/* test */}

          <div
            data-aos="zoom-in-left"
            className=" flex flex-col max-w-lg p-6 mx-auto text-center text-gray-900 bg-white border border-gray-100 rounded-lg shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transition-transform duration-300 hover:scale-105"
          >
            <h3 className="mb-4 text-2xl font-semibold">Ultimate </h3>
            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
              Best for large scale uses and extended
            </p>
            <div className="flex items-baseline justify-center my-8">
              <span className="mr-2 text-5xl font-semibold">$65</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>

            <ul role="list" className="mb-8 space-y-4 text-left">
              <li className="flex items-center space-x-3">
                <span>Everything in Plus Subscription, plus:</span>
              </li>
              <li className="flex items-center space-x-3">
                <IoIosCheckmarkCircle />
                <span>Ultra HD (4K) streaming on up to 10 devices</span>
              </li>
              <li className="flex items-center space-x-3">
                <IoIosCheckmarkCircle />

                <span>
                  Team size:{" "}
                  <span className="font-semibold">
                    Early access to exclusive content & new releases
                  </span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <IoIosCheckmarkCircle />

                <span>
                  <span className="font-semibold">
                    Unlimited downloads for offline viewing
                  </span>
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <IoIosCheckmarkCircle />

                <span>
                  <span className="font-semibold">Premium Dolby Atmos</span>
                </span>
              </li>
            </ul>
            <a
              href="#"
              className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-4 focus:ring-purple-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-purple-900"
            >
              Get started
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
