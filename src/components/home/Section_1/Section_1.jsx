import { Swiper, SwiperSlide } from "swiper/react";
import SectionHead from "../../SectionHead/SectionHead";
import SlideCards from "../../SlideCards/SlideCards";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const products = [
  {
    id: 2,
    name: "Burger",
    price: 10,
    image: "/assets/home/slide1.jpg",
  },
  {
    id: 3,
    name: "Burger",
    price: 10,
    image: "/assets/home/slide2.jpg",
  },
  {
    id: 4,
    name: "Burger",
    price: 10,
    image: "/assets/home/slide3.jpg",
  },
  {
    id: 5,
    name: "Burger",
    price: 10,
    image: "/assets/home/slide4.jpg",
  },
  {
    id: 6,
    name: "Burger",
    price: 10,
    image: "/assets/home/slide5.jpg",
  },
  {
    id: 7,
    name: "Burger",
    price: 10,
    image: "/assets/home/slide5.jpg",
  },
  {
    id: 8,
    name: "Burger",
    price: 10,
    image: "/assets/home/slide5.jpg",
  },
  {
    id: 9,
    name: "Burger",
    price: 10,
    image: "/assets/home/slide5.jpg",
  },
];

const Section_1 = () => {
  return (
    <div>
      <div className="">
        <div className=" flex justify-center items-center py-5">
          <SectionHead
            subtitle={"--From 10 A.M to 11 P.M ---"}
            title={"ORDER ONLINE"}
          />
        </div>
        <div className=" pb-10">
          <div className=" container mx-auto px-5 ">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              pagination={true}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination, Autoplay, Navigation]}
            >
              {products?.map((product, index) => (
                <SwiperSlide key={index}>
                  <SlideCards product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* ---------- */}
        <div className="container mx-auto px-5 pb-10">
          <div className=" relative flex justify-center items-center h-96 ">
            <img src="/assets/home/chef-service.jpg" alt="chef" className=" h-full w-full object-cover" />
            <div className=" absolute flex items-center justify-center bg-white overflow-hidden w-4/6 max-md:w-5/6 h-4/6 max-md:h-5/6  text-center">
              <div className=" p-5 max-sm:p-2">
                <h1 className=" text-4xl max-lg:text-3xl max-sm:text-2xl font-semibold mb-2">BISTRO BOSSS</h1>
                <p className=" w-5/6 max-md:w-full mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Expedita accusantium possimus repudiandae sit quas delectus in
                  labore, voluptatum nulla itaque facilis, iure repellat eum
                  error neque reprehenderit ullam deserunt! Quas?
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ------- */}
      </div>
    </div>
  );
};

export default Section_1;
