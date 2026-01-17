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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };


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

      <div className="absolute inset-0 z-20 flex items-center justify-center">
        <motion.div
          className="max-w-4xl mx-auto px-6 md:px-12 space-y-6 text-white text-center pt-15"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >

          <motion.span
            variants={itemVariants}
            className="inline-flex mx-auto px-4 py-1.5 rounded-full bg-orange-300/10 text-orange-300 text-xs font-extrabold uppercase tracking-[0.3em] border border-orange-300"
          >
            Welcome to Checkmate
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
          >
            From Opening Theory to{" "}
            <span className="text-orange-300">Winning Endgames</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl max-w-2xl mx-auto"
          >
            Sharpen your tactics, analyze every move, and dominate the board
            with confidence and clarity.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 pt-4"
          >
            <button className="px-6 py-3 text-base font-semibold bg-orange-300 text-black rounded border border-transparent hover:bg-transparent hover:text-orange-300 hover:border-orange-300 transition">
              Get Started
            </button>

            <div className="px-6 py-3 flex items-center gap-2 font-semibold border border-white rounded hover:bg-white hover:text-black transition">
              Learn More
            </div>
          </motion.div>

        </motion.div>
      </div>

    </div>
  );
};

export default Banner;