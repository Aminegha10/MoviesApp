"use client";
import Download from "@/public/Download.png";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { useEffect } from "react";
const footer = () => {
  return (
    <>
      {/* Footer Presection */}
      <section className="relative h-64  bg-[url('../public/preFooter.jpg')] bg-cover bg-center">
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-bl from-black via-gray-900 to-transparent opacity-70"></div>

        {/* Contenu avec disposition flex */}
        <div className="relative z-10 flex items-center justify-between h-full text-white px-8 md:px-16">
          {/* Texte à gauche */}
          <div className="">
            <h1 className="text-2xl md:text-4xl font-bold">
              Start your free trial today!
            </h1>
            <p className="text-sm md:text-lg mt-2 text-gray-300">
              This is a clear and concise call to action that encourages users
              to sign up for a free trial of StreamVibe.
            </p>
          </div>

          {/* Bouton à droite */}
          <button className="bg-gradient-to-tr from-purple-500 to-indigo-500 hover:bg-gradient-to-tr hover:from-purple-600 hover:to-indigo-500 text-white  py-2 px-6 rounded-lg shadow-lg transition">
            Start a Free Trial
          </button>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-[#161934] text-white">
        {/* <!-- Main Footer --> */}
        <div className="flex justify-between px-20 py-16">
          {/* <!-- LOGO --> */}
          <div
            className="text-4xl font-bold"
            data-aos="zoom-in-up "
            data-aos-offset="-50"
            data-aos-duration="1500"
          >
            <img
              data-aos="flip-left"
              data-aos-duration="1500"
              className="w-28 cursor-pointer"
              src="/LOGO.png"
            />
          </div>

          {/* <!-- CONNECT WITH US --> */}
          <div className="text-center">
            <h3 className="mb-4 text-xl font-semibold">Connect with us</h3>
            <div
              className="flex space-x-6 text-2xl"
              data-aos="zoom-in-up"
              data-aos-offset="-50"
              data-aos-once="false"
              data-aos-duration="1500"
            >
              <FaFacebook />
              <FaTwitter />
              <FaGithub />
            </div>
          </div>

          {/* <!-- HELP --> */}
          <div>
            <ul>
              <li className="mb-4 text-xl font-semibold">Help</li>
              <div
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
          <div className="text-right">
            <div className="text-xl mb-2">Download Streamvid mobile app</div>
            <div
              data-aos="zoom-in-up"
              data-aos-offset="-50"
              data-aos-duration="1500"
            >
              <Image src={Download} className="w-[200px]" alt="okay lets go" />
            </div>
          </div>
        </div>

        {/* <!-- Copyright --> */}
        <div className="border-t border-gray-500 flex justify-between px-20 py-4 text-sm">
          <h6>Copyright All Rights Reserved</h6>
          <h6>Privacy Policy Terms of Service</h6>
        </div>
      </footer>
    </>
  );
};

export default footer;
