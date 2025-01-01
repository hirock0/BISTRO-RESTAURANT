// ThumbsGallery.jsx
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import NavBar from "../../NavBar/NavBar";
import SlideCards from "../../SlideCards/SlideCards";

const Banner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  console.log(thumbsSwiper);
  const images = [
    {
      id: 0,
      image: "/assets/home/01.jpg",
    },
    {
      id: 1,
      image: "/assets/home/02.jpg",
    },
    {
      id: 2,
      image: "/assets/home/03.png",
    },
    {
      id: 3,
      image: "/assets/home/04.jpg",
    },
  ];

  return (
    <div className="">
      <div className=" fixed z-50 top-0 right-0 left-0 text-white backdrop:filter backdrop-blur-sm">
        <NavBar />
      </div>
      {/* Main Gallery */}
      <div className="">
        <Swiper
          thumbs={{ swiper: thumbsSwiper }}
          spaceBetween={10}
          slidesPerView={1}
          autoplay={true}
          loop={true}
          modules={[Navigation, Autoplay, Thumbs]}
          className="main-swiper"
        >
          {images.map((product, index) => (
            <SwiperSlide key={index} className=" bg-black h-[600px]">
              <SlideCards product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className=" flex items-center justify-center mt-10 container mx-auto px-5">
          <div className=" w-5/6 max-md:w-full">
            {/* Thumbnails */}
            <Swiper
              onSwiper={(swiper) => setThumbsSwiper(swiper)}
              spaceBetween={10}
              slidesPerView={2}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              freeMode={true}
              watchSlidesProgress
              modules={[Thumbs]}
              className="thumbs-swiper"
            >
              {images.map((product, index) => (
                <SwiperSlide key={index}>
                  <SlideCards product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
