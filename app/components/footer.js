"use client";
import Download from "../Download.png";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const footer = () => {
  return (
    <>
      {/* Footer */}
      <footer className="bg-[#161934] text-white">
        {/* <!-- Main Footer --> */}
        <div className="flex justify-between px-20 py-16">
          {/* <!-- LOGO --> */}
          <div
            className="text-4xl font-bold"
            data-aos="zoom-in-up "
            data-aos-offset="-50"
          >
            LOGO
          </div>

          {/* <!-- CONNECT WITH US --> */}
          <div className="text-center">
            <h3 className="mb-4 text-xl font-semibold">Connect with us</h3>
            <div
              className="flex space-x-6 text-2xl"
              data-aos="zoom-in-up"
              data-aos-offset="-50"
              data-aos-once="false"
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
              <div data-aos="zoom-in-up " data-aos-offset="-100">
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
            <div data-aos="zoom-in-up" data-aos-offset="-50">
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
