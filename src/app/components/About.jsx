"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaChessKnight, FaChessBishop, FaChessRook, FaUsers } from "react-icons/fa";

const services = [
  {
    title: "Tactics & Training",
    description:
      "Sharpen your chess skills with puzzles, lessons, and interactive training sessions.",
    icon: FaChessKnight,
  },
  {
    title: "Opening Strategies",
    description:
      "Learn and master opening theories to gain a strong advantage from the first move.",
    icon: FaChessBishop,
  },
  {
    title: "Game Analysis",
    description:
      "Analyze your past games, identify mistakes, and improve your strategies.",
    icon: FaChessRook,
  },
  {
    title: "Community & Events",
    description:
      "Join tournaments, discussions, and connect with chess enthusiasts worldwide.",
    icon: FaUsers,
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

const About = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="relative py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={isClient ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative text-center mb-10"
        >
          <span className="inline-flex px-4 py-1.5 rounded-full bg-orange-300/10 text-orange-300 text-xs font-extrabold uppercase tracking-[0.3em] border border-orange-300">
            About Checkmate
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-black text-base-content">
            Our <span className="text-orange-300">Services</span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-base-content">
            Learn, play, and improve with our chess platform – everything you need to master the game.
          </p>
        </motion.div>

        {isClient && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25 }}
            className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                  className="
                    group relative
                    rounded-2xl p-8
                    bg-base-200/70 backdrop-blur-xl
                    border border-gray-200/10 dark:border-gray-700/10
                    shadow-xl
                    transition-all duration-300
                    cursor-pointer
                  "
                >
                  <div className="
                    absolute inset-0 rounded-2xl
                    opacity-0 group-hover:opacity-30
                    bg-linear-to-br from-orange-300/50 via-orange-300/20 to-transparent
                    transition
                  " />

                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="
                      relative z-10
                      w-16 h-16 mb-6
                      rounded-xl
                      bg-orange-300/10
                      flex items-center justify-center
                      text-orange-300
                      group-hover:bg-orange-300
                      group-hover:text-white
                      transition
                    "
                  >
                    <Icon size={28} />
                  </motion.div>

                  <h3 className="relative z-10 text-xl font-bold text-base-content mb-3">
                    {service.title}
                  </h3>

                  <p className="relative z-10 text-xs text-justify leading-relaxed text-base-content">
                    {service.description}
                  </p>

                  <div className="
                    absolute inset-0 rounded-2xl
                    ring-1 ring-transparent
                    group-hover:ring-orange-300/30
                    transition
                  " />
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default About;
