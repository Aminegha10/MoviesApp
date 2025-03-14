"use client";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
// import AOS from "aos";
// import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect, useState } from "react";
import { MdSaveAlt } from "react-icons/md";
import Link from "next/link";
import Button from "./components/Button";
import { FaPlay } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 500) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const movies = [
    {
      title: "Stranger Things",
      rating: 8.7,
      year: 2016,
      duration: "51min",
      description:
        "Set in the 1980s, 'Stranger Things' follows the residents of Hawkins, Indiana, as they confront supernatural forces and secret government experiments after a young boy's disappearance.",
      image: "/strangerThings.jpg",
    },
    {
      title: "Mad Max",
      rating: 8.1,
      year: 2015,
      duration: "120min",
      description:
        " It follows Max Rockatansky, a stoic police officer played by Mel Gibson, who struggles to survive in a lawless world ruled by violent gangs. After his family is brutally murdered, Max embarks on a path of vengeance, transforming into a lone warrior. The film became the foundation of an iconic franchise, known for its intense car chases and dystopian setting.",
      image: "/MadMax.jpg",
    },
    {
      title: "Drive (2011)",
      rating: 7.8,
      year: 2011,
      duration: "100min",
      description:
        "follows a skilled stuntman and getaway driver (Ryan Gosling) who gets caught in a deadly heist while trying to protect his neighbor and her son. As the job goes wrong, he’s hunted by ruthless criminals, forcing him into a brutal fight for survival. Stylish, intense, and atmospheric, the film blends neo-noir with explosive action. ",
      image: "/Drive.jpg",
    },
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }

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
    console.log("AOS initialized");
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <>
      <main className="bg-bgColor">
        {/* Hero Section */}
        <section>
          <Swiper
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            speed={2000}
            pagination={{ clickable: true }}
            modules={[Pagination, Autoplay]}
            spaceBetween={0}
            className="mySwiper z-[-10]"
          >
            {movies.map((movie, index) => (
              <SwiperSlide key={index}>
                <div
                  style={{ backgroundImage: `url(${movie.image})` }}
                  className="h-[80vh] bg-cover bg-center relative"
                >
                  <div className="h-full  backdrop-brightness-50 flex flex-col items-start justify-center gap-3 px-5 pb-5 pt-24">
                    {/* Movie Title */}
                    <div className="font-bold text-[2rem] md:text-[3rem]">{movie.title}</div>
                    {/* Description */}
                    <div className="text-start md:text-[16px] text-[16px] max-w-2xl text-gray-300">
                      {movie.description}
                    </div>
                    {/* Buttons */}
                    <div className="flex h-12 justify-center gap-x-6 dark:text-white">
                      <a
                        className="group flex h-min ring-none items-center justify-center hover:opacity-95 disabled:opacity-50 rounded-lg py-2 px-4 font-dm focus:outline-none !ring-transparent text-[#6366f1]   hover:border active:border bg-white hover:text-violet-900 hover:bg-gray-50 active:bg-gray-100 active:text-violet-600 focus-visible:outline-violet-600 focus-visible:ring-violet-700 text-sm sm:text-base  "
                        href=""
                      >
                        <svg
                          aria-hidden="true"
                          className="h-3 w-3 flex-none fill-violet-600 group-active:fill-current"
                        >
                          <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z"></path>
                        </svg>
                        <span className="ml-3">Watch Movie</span>
                      </a>
                      <a
                        className="group flex h-min  items-center disabled:opacity-50 disabled:hover:opacity-50 hover:opacity-95 justify-center ring-none rounded-lg shadow-lg font-semibold py-2 px-4 font-dm focus:outline-none hover:border focus-visible:outline-2 focus-visible:outline-offset-2 bg-[#6366f1]  disabled:bg-violet-500 disabled:text-white  text-white  hover:border-0 active:border-0 hover:text-gray-100 active:bg-violet-800 active:text-gray-300 focus-visible:outline-violet-500 text-sm sm:text-base "
                        href=""
                      >
                        <span className="mr-3"> More Info</span>
                        <FaArrowRightLong />
                      </a>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-36 bg-gradient-to-b from-transparent to-[#00031c]"></div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
        {/* Movies Section */}
        <section className="p-5 space-y-10 md:pb-24">
          {/* New */}

          {/* Movies list */}
          <div>
            {/* newRelease */}
            {/* <div className="flex text-[20px] justify-between py-8">
              <div>
                <span className="border border-solid border-white p-2">
                  New release
                </span>
              </div>
              <div>
                <span className="border border-solid border-white p-2">
                  View All
                </span>
              </div>
            </div> */}
            {/* Movies list */}
            <div
              className="flex gap-8 overflow-auto py-5 scrollbar-hide"
              data-aos="zoom-in-up"
            >
              <div className="shrink-0">
                <img
                  className="h-[400px] rounded-md w-[270px] object-cover cursor-pointer transition-transform duration-300 md:hover:scale-105"
                  src="https://fr.web.img4.acsta.net/pictures/22/05/18/14/31/5186184.jpg"
                  alt=""
                />
                <div className="pt-4 pb-2">Stranger Things</div>
                <div className="text-gray-500 ">Action - Thriller</div>
              </div>
              <div className=" shrink-0">
                <img
                  className="h-[400px] rounded-lg w-[270px] object-cover cursor-pointer transition-transform duration-300 md:hover:scale-105 "
                  src="https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
                  alt=""
                />
                <div className="pt-4 pb-2">Howl's Moving Castle</div>
                <div className="text-gray-500 ">Action - Thriller</div>
              </div>
              <div className="shrink-0">
                <img
                  className="h-[400px] rounded-lg w-[270px] object-cover cursor-pointer transition-transform duration-300 md:hover:scale-105 "
                  src="https://m.media-amazon.com/images/I/81MJv+WKb9L._AC_UF894,1000_QL80_.jpg"
                  alt=""
                />
                <div className="pt-4 pb-2">Mad Max</div>
                <div className="text-gray-500 ">Action - Thriller</div>
              </div>
              <div className="shrink-0">
                <img
                  className="h-[400px] rounded-lg w-[270px] object-cover cursor-pointer transition-transform duration-300 md:hover:scale-105"
                  src="https://m.media-amazon.com/images/I/91vya3UmldL._AC_UF894,1000_QL80_.jpg"
                  alt=""
                />
                <div className="pt-4 pb-2">Drive</div>
                <div className="text-gray-500 ">Action - Thriller</div>
              </div>
              <div className="shrink-0">
                <img
                  className="h-[400px] rounded-lg w-[270px] object-cover cursor-pointer transition-transform duration-300 md:hover:scale-105"
                  src="https://m.media-amazon.com/images/M/MV5BMTQ5ODMxNTIyNV5BMl5BanBnXkFtZTcwNjQ1ODgyNQ@@._V1_.jpg"
                  alt=""
                />
                <div className="pt-4 pb-2">Submarine</div>
                <div className="text-gray-500 ">Action - Thriller</div>
              </div>
              <div className="shrink-0">
                <img
                  className="h-[400px] rounded-lg w-[270px] object-cover cursor-pointer transition-transform duration-300 md:hover:scale-105"
                  src="https://m.media-amazon.com/images/M/MV5BMTQ5ODMxNTIyNV5BMl5BanBnXkFtZTcwNjQ1ODgyNQ@@._V1_.jpg"
                  alt=""
                />
                <div className="pt-4 pb-2">Submarine</div>
                <div className="text-gray-500 ">Action - Thriller</div>
              </div>{" "}
              <div className="shrink-0">
                <img
                  className="h-[400px] rounded-lg w-[270px] object-cover cursor-pointer transition-transform duration-300 md:hover:scale-105"
                  src="https://m.media-amazon.com/images/M/MV5BMTQ5ODMxNTIyNV5BMl5BanBnXkFtZTcwNjQ1ODgyNQ@@._V1_.jpg"
                  alt=""
                />
                <div className="pt-4 pb-2">Submarine</div>
                <div className="text-gray-500 ">Action - Thriller</div>
              </div>
            </div>
          </div>

          {/* New  */}

          {/* Featured */}

          {/* featuredMovies */}
          <div className="flex text-[20px] justify-between py-8">
            <div className="glass">Featured Movies</div>
            <div>View All</div>
          </div>
          {/* Movies list */}

          <div>
            {/* newRelease */}
            {/* <div className="flex text-[20px] justify-between py-8">
              <div>
                <span className="border border-solid border-white p-2">
                  New release
                </span>
              </div>
              <div>
                <span className="border border-solid border-white p-2">
                  View All
                </span>
              </div>
            </div> */}
            {/* Movies list */}
            <div
              className="flex gap-8 py-5 overflow-x-auto scrollbar-hide w-full"
              data-aos="fade-right"
            >
              <div className="shrink-0">
                <img
                  className="h-[400px] rounded-md w-[270px] object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                  src="https://fr.web.img4.acsta.net/pictures/22/05/18/14/31/5186184.jpg"
                  alt=""
                />
                <div className="pt-4 pb-2">Stranger Things</div>
                <div className="text-gray-500 ">Action - Thriller</div>
              </div>
              <div className=" shrink-0">
                <img
                  className="h-[400px] rounded-lg w-[270px] object-cover cursor-pointer transition-transform duration-300 hover:scale-105 "
                  src="https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
                  alt=""
                />
                <div className="pt-4 pb-2">Howl's Moving Castle</div>
                <div className="text-gray-500 ">Action - Thriller</div>
              </div>
              <div className="shrink-0">
                <img
                  className="h-[400px] rounded-lg w-[270px] object-cover cursor-pointer transition-transform duration-300 hover:scale-105 "
                  src="https://m.media-amazon.com/images/I/81MJv+WKb9L._AC_UF894,1000_QL80_.jpg"
                  alt=""
                />
                <div className="pt-4 pb-2">Mad Max</div>
                <div className="text-gray-500 ">Action - Thriller</div>
              </div>
              <div className="shrink-0">
                <img
                  className="h-[400px] rounded-lg w-[270px] object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                  src="https://m.media-amazon.com/images/I/91vya3UmldL._AC_UF894,1000_QL80_.jpg"
                  alt=""
                />
                <div className="pt-4 pb-2">Drive</div>
                <div className="text-gray-500 ">Action - Thriller</div>
              </div>
              <div className="shrink-0">
                <img
                  className="h-[400px] rounded-lg w-[270px] object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                  src="https://m.media-amazon.com/images/M/MV5BMTQ5ODMxNTIyNV5BMl5BanBnXkFtZTcwNjQ1ODgyNQ@@._V1_.jpg"
                  alt=""
                />
                <div className="pt-4 pb-2">Submarine</div>
                <div className="text-gray-500 ">Action - Thriller</div>
              </div>
              <div className="shrink-0">
                <img
                  className="h-[400px] rounded-lg w-[270px] object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                  src="https://m.media-amazon.com/images/M/MV5BMTQ5ODMxNTIyNV5BMl5BanBnXkFtZTcwNjQ1ODgyNQ@@._V1_.jpg"
                  alt=""
                />
                <div className="pt-4 pb-2">Submarine</div>
                <div className="text-gray-500 ">Action - Thriller</div>
              </div>{" "}
              <div className="shrink-0">
                <img
                  className="h-[400px] rounded-lg w-[270px] object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
                  src="https://m.media-amazon.com/images/M/MV5BMTQ5ODMxNTIyNV5BMl5BanBnXkFtZTcwNjQ1ODgyNQ@@._V1_.jpg"
                  alt=""
                />
                <div className="pt-4 pb-2">Submarine</div>
                <div className="text-gray-500 ">Action - Thriller</div>
              </div>
            </div>
          </div>
          {/* Featured  */}
        </section>

        {/* Footer Presection */}

        {isScrolled && (
          <div
            data-aos-duration="500"
            data-aos="zoom-in-down"
            className="fixed bottom-0 right-0 p-4"
          >
            <button
              className="bg-gray-800 text-white rounded-full w-10 h-10 flex items-center justify-center"
              onClick={backToTop}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </button>
          </div>
        )}
      </main>
    </>
  );
}
