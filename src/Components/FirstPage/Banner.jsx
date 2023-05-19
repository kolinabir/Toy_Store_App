import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Banner() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div class="relative">
            <img
              class="w-full h-[600px]"
              src="https://images.unsplash.com/photo-1617808654153-9b20f8728b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1023&q=80"
              alt=""
            />
            <div class="absolute top-28 left-0 transform -translate-y-1/2 text-left  px-4 md:ml-10">
              <h2 class="text-7xl  md:mt-60 font-bold mb-2">
                Race into Adventure: <br /> Explore our Toy Car Wonderland!
              </h2>
              <p class="text-lg w-[50%]">
                Discover a world of toy cars where adventure awaits at every
                turn. Explore our vast collection of toy cars and let your
                imagination speed into action.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="relative">
            <img
              class="w-full h-[600px]"
              src="https://images.unsplash.com/photo-1627326658069-fe8fcae04a76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1742&q=80"
              alt=""
            />
            <div class="absolute top-28 left-0 transform -translate-y-1/2 text-left  px-4 md:ml-10 text-white">
              <h2 class="text-7xl  md:mt-60 font-bold mb-2">
                Rev up the Fun: <br /> Discover a World of Toy Cars
              </h2>
              <p class="text-lg w-[50%]">
                Get ready to rev up the fun with our incredible selection of toy
                cars. From sleek sports cars to rugged off-roaders, there's a
                perfect ride for every young driver.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="relative">
            <img
              class="w-full h-[600px]"
              src="https://images.unsplash.com/photo-1618325366510-289151181310?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=882&q=80"
              alt=""
            />
            <div class="absolute top-28 left-0 transform -translate-y-1/2 text-left  px-4 md:ml-10 text-black">
              <h2 class="text-7xl  md:mt-60 font-bold mb-2">
                Zoom into Playtime: <br /> Unleash the Joy of Toy Cars
              </h2>
              <p class="text-lg w-[50%]">
                Zoom into playtime and unleash the joy of toy cars. Our wide
                range of cars guarantees endless entertainment and provides
                hours of fun for children of all ages.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
