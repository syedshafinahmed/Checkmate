"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/effect-fade";

const images = ["/banner1.jpg", "/banner2.jpg", "/banner3.jpg"];

const Banner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        loop
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="w-full h-full"
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="w-full h-full"
              initial={{ scale: 1 }}
              animate={{ scale: activeIndex === index ? 1.15 : 1 }}
              transition={{
                duration: 5,
                ease: "easeOut",
              }}
            >
              <img
                src={img}
                alt="banner"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute inset-0 bg-black/80 z-10" />

      <div className="absolute inset-0 z-20 flex items-center">
        <div className="max-w-4xl px-6 md:px-12 space-y-6 text-white">

          <span className="inline-flex px-4 py-1.5 rounded-full bg-orange-300/10 text-orange-300 text-xs font-extrabold uppercase tracking-[0.3em] border border-orange-300">
            Welcome to Checkmate
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
            From Opening Theory to <span className="text-orange-300">Winning Endgames</span>
          </h1>

          <p className="text-lg md:text-xl text-white max-w-2xl">
            Sharpen your tactics, analyze every move, and dominate the board
            with confidence and clarity.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button
              className="px-6 py-3 text-base font-semibold bg-orange-300 text-black rounded border border-transparent hover:bg-transparent hover:text-orange-300 hover:border-orange-300 transition"
            >
              Get Started
            </button>

            <div
              className="px-6 py-3 flex items-center gap-2 text-white font-semibold border border-white rounded hover:bg-white hover:text-black transition"
            >
              Learn More 
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;