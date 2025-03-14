"use client";
import Download from "@/public/Download.png";
import Image from "next/image";
import { FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

const footer = () => {
  return (
    <>
      {/* Footer Presection */}
      <section className="relative md:h-64 h-48  bg-[url('../public/preFooter.jpg')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-bl from-black via-gray-900 to-transparent opacity-70"></div>

        {/* Contenu avec disposition flex */}
        <div className="relative z-10 flex gap-2 items-center justify-between h-full text-white px-2 md:px-16">
          {/* Texte à gauche */}
          <div className="w-[65%]">
            <h1 className="text-xl md:text-4xl font-bold">
              Start your free trial today!
            </h1>
            <p className="text-[8px] md:text-lg mt-2 text-gray-300">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>

          {/* Bouton à droite */}
          <button className="text-sm py-2 px-2 bg-gradient-to-tr from-purple-500 to-indigo-500 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-indigo-500 text-white  md:py-2 md:px-6 rounded-lg shadow-lg transition">
            Start a Free Trial
          </button>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#161934] text-white md:block hidden">
        {/* <!-- Main Footer --> */}
        <div className="flex justify-between px-2 py-6 gap-2 md:px-20 md:py-16">
          {/* <!-- LOGO --> */}
          <div
            className="text-md flex flex-col justify-center font-bold md:block"
            data-aos="zoom-in-up "
            data-aos-offset="-50"
            data-aos-duration="1500"
          >
            <img
              data-aos="flip-left"
              data-aos-duration="1500"
              className="w-10 md:w-28 cursor-pointer"
              src="/LOGO.png"
            />
          </div>

          {/* <!-- CONNECT WITH US --> */}
          <div className="text-center ">
            <h3 className="mb-4 md:text-xl text-sm font-semibold">
              Connect with us
            </h3>
            <div
              className="flex flex-col items-center md:flex-row md:space-x-6 space-y-2 md:justify-center  md:text-2xl"
              data-aos="zoom-in-up"
              data-aos-offset="-50"
              data-aos-once="false"
              data-aos-duration="1500"
            >
              <FaFacebook className="md:text-xl text-sm" />
              <FaTwitter className="md:text-xl text-sm" />
              <FaGithub className="md:text-xl text-sm" />
            </div>
          </div>

          {/* <!-- HELP --> */}
          <div className="text-center md:text-left">
            <ul>
              <li className="mb-4 md:text-xl text-sm font-semibold">Help</li>
              <div
                className="text-[8px] md:text-[16px]"
                data-aos="zoom-in-up "
                data-aos-offset="-100"
                data-aos-duration="1500"
              >
                <li className="mb-2">My Account</li>
                <li className="mb-2">Customer Support</li>
                <li className="mb-2">Contact Us</li>
                <li className="mb-2">Advertise</li>
                <li>Jobs</li>
              </div>
            </ul>
          </div>

          {/* <!-- DOWNLOAD --> */}
          <div className="flex flex-col items-center  md:block ">
            <div className="text-center mb-4 md:text-xl text-sm font-semibold">
              Download Streamvid mobile app
            </div>
            <div
              data-aos="zoom-in-up"
              data-aos-offset="-50"
              data-aos-duration="1500"
            >
              <Image src={Download} className="w-[100px] md:w-[200px]" alt="okay lets go" />
            </div>
          </div>
        </div>

        {/* <!-- Copyright --> */}
        <div className="border-t border-gray-500 flex justify-between px-2 py-2 md:px-20 md:py-4 text-sm">
          <h6>Copyright All Rights Reserved</h6>
          <h6>Privacy Policy Terms of Service</h6>
        </div>
      </footer>
      <footer className="md:hidden bg-bgColor p-4 space-y-3">
        {/* contactUs */}
        <div>
          <h3 className="mb-4 border-t border-gray-500 pt-4 md:text-xl text-xl font-semibold">
            Connect with us
          </h3>
          <div
            className="flex space-x-2 text-gray-500"
            data-aos="zoom-in-up"
            data-aos-offset="-50"
            data-aos-once="false"
            data-aos-duration="1500"
          >
            <FaFacebook className="md:text-md text-2xl" />
            <FaTwitter className="md:text-md text-2xl" />
            <FaGithub className="md:text-md text-2xl" />
          </div>
        </div>
        {/* Help */}
        <div>
          <ul>
            <h3 className="mb-4 md:text-xl text-xl font-semibold">Help</h3>
            <div
              className="text-md md:text-[16px] text-gray-500"
              data-aos="zoom-in-up "
              data-aos-offset="-100"
              data-aos-duration="1500"
            >
              <li className="mb-2">My Account</li>
              <li className="mb-2">Customer Support</li>
              <li className="mb-2">Contact Us</li>
              <li className="mb-2">Advertise</li>
              <li>Jobs</li>
            </div>
          </ul>
        </div>
        <div className=" items-center md:block mb-7">
          <div className=" mb-4 md:text-xl text-sm font-semibold">
            Download Streamvid mobile app
          </div>
          <div
            data-aos="zoom-in-up"
            data-aos-offset="-50"
            data-aos-duration="1500"
          >
            <Image
              src={Download}
              className="w-[120px] mb-7"
              alt="okay lets go"
            />
          </div>
        </div>
        {/* <!-- Copyright --> */}
        <div className="border-t border-gray-500 flex justify-between px-2 py-2   text-[10px]">
          <h6>Copyright All Rights Reserved</h6>
          <h6>Privacy Policy Terms of Service</h6>
        </div>
      </footer>
    </>
  );
};

export default footer;
