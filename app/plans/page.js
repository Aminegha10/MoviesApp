import React from "react";
import { IoIosCheckmarkCircle } from "react-icons/io";

const page = () => {
  return (
    <main className="min-h-screen font-mono flex flex-col items-center justify-center">
      <h1 className="text-3xl text-center mt-10">Premium Plans</h1>
      <section className="flex flex-col justify-center items-center flex-grow mx-auto container">
        <div className="md:flex space-x-6">
          <article className="border border-purple-600 p-4 rounded-lg flex flex-col justify-between ">
            <h4 className="text-center">Free Plan</h4>
            <h1 className="text-3xl text-center">
              <strong>£0.00/Mo</strong>
            </h1>
            <div className="flex justify-center">
              <button className="border border-purple-600 text-purple-800 bg-transparent px-10 py-3 rounded-lg">
                Choose Plan
              </button>
            </div>
            <div>
              <ul>
                <li role="listitem" className="flex items-center gap-2">
                  <IoIosCheckmarkCircle
                    aria-hidden="true"
                    className="text-purple-500"
                  />
                  Get unlimited access to thousands of shows and movies
                </li>
                <li role="listitem" className="flex items-center gap-2">
                  <IoIosCheckmarkCircle
                    aria-hidden="true"
                    className="text-purple-500"
                  />
                  <span>Watch on your favorite devices</span>
                </li>
                <li role="listitem" className="flex items-center gap-2">
                  <IoIosCheckmarkCircle
                    aria-hidden="true"
                    className="text-purple-500"
                  />
                  <span>Switch plans or cancel anytime</span>
                </li>
                <li role="listitem" className="flex items-center gap-2">
                  <IoIosCheckmarkCircle
                    aria-hidden="true"
                    className="text-purple-500"
                  />
                  <span>
                    Download from thousands of titles to watch offline
                  </span>
                </li>
              </ul>
            </div>
          </article>
          <article className="border border-purple-600 p-4 rounded-lg flex flex-col justify-between ">
            <h4 className="text-center">Premium Plan</h4>
            <h1 className="text-3xl text-center">
              <strong>£10.00/Mo</strong>
            </h1>
            <div className="flex justify-center">
              <button className="border border-purple-600 text-purple-800 bg-transparent px-10 py-3 rounded-lg">
                Choose Plan
              </button>
            </div>
            <div>
              <ul>
                <li role="listitem" className="flex items-center gap-2">
                  <IoIosCheckmarkCircle
                    aria-hidden="true"
                    className="text-purple-500"
                  />
                  Get unlimited access to thousands of shows and movies
                </li>
                <li role="listitem" className="flex items-center gap-2">
                  <IoIosCheckmarkCircle
                    aria-hidden="true"
                    className="text-purple-500"
                  />
                  <span>Watch on your favorite devices</span>
                </li>
                <li role="listitem" className="flex items-center gap-2">
                  <IoIosCheckmarkCircle
                    aria-hidden="true"
                    className="text-purple-500"
                  />
                  <span>Switch plans or cancel anytime</span>
                </li>
                <li role="listitem" className="flex items-center gap-2">
                  <IoIosCheckmarkCircle
                    aria-hidden="true"
                    className="text-purple-500"
                  />
                  <span>
                    Download from thousands of titles to watch offline
                  </span>
                </li>
                <li role="listitem" className="flex items-center gap-2">
                  <IoIosCheckmarkCircle
                    aria-hidden="true"
                    className="text-purple-500"
                  />
                  <span>HD available</span>
                </li>
              </ul>
            </div>
          </article>
          <article className="border border-purple-600 p-4 rounded-lg flex flex-col justify-between ">
            <h4 className="text-center">Diamond Plan</h4>
            <h1 className="text-3xl text-center">
              <strong>£50.00/Mo</strong>
            </h1>
            <div className="flex justify-center">
              <button className="border border-purple-600 text-purple-800 bg-transparent px-10 py-3 rounded-lg">
                Choose Plan
              </button>
            </div>
            <div>
              <ul>
                <li role="listitem" className="flex items-center gap-2">
                  <IoIosCheckmarkCircle
                    aria-hidden="true"
                    className="text-purple-500"
                  />
                  Get unlimited access to thousands of shows and movies
                </li>
                <li role="listitem" className="flex items-center gap-2">
                  <IoIosCheckmarkCircle
                    aria-hidden="true"
                    className="text-purple-500"
                  />
                  <span>Watch on your favorite devices</span>
                </li>
                <li role="listitem" className="flex items-center gap-2">
                  <IoIosCheckmarkCircle
                    aria-hidden="true"
                    className="text-purple-500"
                  />
                  <span>Switch plans or cancel anytime</span>
                </li>
                <li role="listitem" className="flex items-center gap-2">
                  <IoIosCheckmarkCircle
                    aria-hidden="true"
                    className="text-purple-500"
                  />
                  <span>
                    Download from thousands of titles to watch offline
                  </span>
                </li>
                <li role="listitem" className="flex items-center gap-2">
                  <IoIosCheckmarkCircle
                    aria-hidden="true"
                    className="text-purple-500"
                  />
                  <span>HD and Ultra HD available</span>
                </li>
              </ul>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default page;
