"use client";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

export default function Home() {
  // Initialize AOS inside useEffect to ensure it runs only on the client-side
  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []); // Empty dependency array ensures it runs once when the component mounts
  return (
    <>
      <main className="bg-bgColor">
        {/* Hero Section */}
        <section>
          <Swiper
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            speed={2000} // Adjust the speed value according to your preference
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper z-[-10]"
          >
            <SwiperSlide>
              <div className="bg-[url('./strangerThings.jpg')] h-[80vh] bg-cover bg-center ">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="600"
                  data-aos-offset="0"
                  data-aos-delay="0"
                  data-aos-once="false"
                  className="h-full backdrop-blur-sm  flex flex-col items-start justify-center gap-3 p-5"
                >
                  {/* Title */}
                  <div className="text-[2rem]">Stranger Things</div>
                  {/* Rating */}
                  <div className="flex space-x-4 items-center">
                    <div className="flex items-center">
                      <FaStar className="mr-2 text-[24px] align-middle" />
                      <span className="align-middle">8.7</span>
                    </div>
                    <div>2016</div>
                    <div>51min</div>
                  </div>

                  {/* Paragraph */}
                  <div className="text-start">
                    When a young boy vanishes, a small town uncovers a mystery
                    involving <br />
                    secret experiments, terrifying supernatural forces and one
                    strange <br />
                    little girl.
                  </div>
                  {/* Buttons */}
                  <div className="space-x-3">
                    <button className="bg-gradient-to-tr from-purple-500 to-indigo-500 py-[15px] px-[31px] rounded-[30px]">
                      <i className="fa-solid fa-play mr-1" />
                      Streaming Now
                    </button>
                    <button className="bg-gradient-to-tr from-purple-500 to-indigo-500 py-[15px] px-[31px] rounded-[30px] mr-1">
                      <i className="fa-solid fa-bookmark" /> Watch Later
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
          </Swiper>
        </section>
        {/* Movies Section */}
        <section className="p-5 space-y-10 mb-10">
          {/* New */}

          <div>
            {/* newRelease */}
            <div className="flex text-[20px] justify-between py-8">
              <div>New release</div>
              <div>View All</div>
            </div>
            {/* Movies list */}
            <div className="flex gap-8" data-aos="fade-right">
              <div className="  h-[400px] w-[288px]">
                <img
                  className="h-full object-cover"
                  src="https://fr.web.img4.acsta.net/pictures/22/05/18/14/31/5186184.jpg"
                  alt=""
                />
              </div>
              <div className=" h-[400px] w-[288px]">
                <img
                  className="h-full object-cover"
                  src="https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
                  alt=""
                />
              </div>
              <div className=" h-[400px] w-[288px]">
                <img
                  className="h-full object-cover"
                  src="https://m.media-amazon.com/images/I/81MJv+WKb9L._AC_UF894,1000_QL80_.jpg"
                  alt=""
                />
              </div>
              <div className=" h-[400px] w-[288px]">
                <img
                  className="h-full object-cover"
                  src="https://m.media-amazon.com/images/I/91vya3UmldL._AC_UF894,1000_QL80_.jpg"
                  alt=""
                />
              </div>
              <div className=" h-[400px] w-[288px]">
                <img
                  className="h-full object-cover"
                  src="https://m.media-amazon.com/images/M/MV5BMTQ5ODMxNTIyNV5BMl5BanBnXkFtZTcwNjQ1ODgyNQ@@._V1_.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* New  */}

          {/* Featured */}

          <div>
            {/* featuredMovies */}
            <div className="flex text-[20px] justify-between py-8">
              <div>Featured Movies</div>
              <div>View All</div>
            </div>
            {/* Movies list */}
            <div className="flex gap-8" data-aos="fade-left">
              <div className=" h-[400px] w-[288px]">
                <img
                  className="h-full object-cover"
                  src="https://fr.web.img4.acsta.net/pictures/22/05/18/14/31/5186184.jpg"
                  alt=""
                />
              </div>
              <div className=" h-[400px] w-[288px]">
                <img
                  className="h-full object-cover"
                  src="https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
                  alt=""
                />
              </div>
              <div className=" h-[400px] w-[288px]">
                <img
                  className="h-full object-cover"
                  src="https://m.media-amazon.com/images/I/81MJv+WKb9L._AC_UF894,1000_QL80_.jpg"
                  alt=""
                />
              </div>
              <div className=" h-[400px] w-[288px]">
                <img
                  className="h-full object-cover"
                  src="https://m.media-amazon.com/images/I/91vya3UmldL._AC_UF894,1000_QL80_.jpg"
                  alt=""
                />
              </div>
              <div className=" h-[400px] w-[288px]">
                <img
                  className="h-full object-cover"
                  src="https://m.media-amazon.com/images/M/MV5BMTQ5ODMxNTIyNV5BMl5BanBnXkFtZTcwNjQ1ODgyNQ@@._V1_.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>

          {/* Featured  */}
        </section>

        {/* footer presection */}
        <section
          className="h-64 bg-black bg-[url('./preFooter.jpg')] "
          data-aos="fade-right"
        >
          <div className="h-full bg-gradient-to-bl from-purple-500 via-blue-500 to-green-50 opacity-20"></div>
        </section>
      </main>
    </>
  );
}
