"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import players from "../data/players.json"; 

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Players = () => {
  return (
    <section id="players" className="relative py-20 px-4 max-w-7xl mx-auto">

      <div className="relative z-10">
        <div className="text-center mb-10">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-orange-300/10 text-orange-300 text-xs font-extrabold uppercase tracking-[0.3em] border border-orange-300">
            Masterminds
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-black text-base-content">
            Chess <span className="text-orange-300">Legends</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Learn from the masters — explore legendary players, their careers, and their countries.
          </p>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={players.length > 4}
          navigation={{
            nextEl: ".swiper-button-next-players",
            prevEl: ".swiper-button-prev-players",
          }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 16 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            768: { slidesPerView: 5, spaceBetween: 24 },
            1024: { slidesPerView: 5, spaceBetween: 24 },
            1280: { slidesPerView: 5, spaceBetween: 24 },
          }}
          className="players-swiper"
        >
          {players.map((player, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center rounded-2xl overflow-hidden group h-full">
                <div className="relative w-full h-44 rounded-2xl overflow-hidden backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl transition-all duration-500 group-hover:scale-[1.02] group-hover:border-orange-300/30">
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold text-white">{player.name}</h3>
                      <img
                        src={player.countryFlag}
                        alt={player.country}
                        className="w-6 h-6 rounded-full object-cover"
                      />
                    </div>

                    <p className="text-sm text-gray-200">{player.yearsActive}</p>
                  </div>

                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/10 to-transparent"></div>
                </div>

                <div className="mt-4 w-full text-center">
                  <div className="flex gap-2 items-center justify-center">
                    <p className="text-md font-semibold text-base-content group-hover:text-orange-300 transition-colors duration-300 line-clamp-2">
                      {player.name}
                    </p>
                    <img src={player.countryFlag}
                      alt={player.country}
                      className="w-4 h-4 rounded object-cover" />
                  </div>
                  <p className="text-xs text-gray-500 mt-1">{player.yearsActive}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="flex items-center justify-center gap-4 mt-8">
          <button className="group/prev swiper-button-prev-players relative w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 text-orange-300 hover:bg-orange-300/10 hover:border-orange-300/30 transition-all duration-300 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button className="group/next swiper-button-next-players relative w-12 h-12 rounded-full backdrop-blur-xl bg-white/5 border border-white/10 text-orange-300 hover:bg-orange-300/10 hover:border-orange-300/30 transition-all duration-300 flex items-center justify-center">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Players;
