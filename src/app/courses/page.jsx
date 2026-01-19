"use client";

import React from "react";
import { FaChessKnight, FaStar } from "react-icons/fa";
import { GoArrowUpRight } from "react-icons/go";

const courses = [
  {
    id: 1,
    title: "Chess Foundations",
    level: "Beginner",
    description:
      "Learn the fundamentals of chess including piece movement, basic tactics, and essential checkmate patterns.",
    duration: "6 Weeks",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=958&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Tactical Mastery",
    level: "Intermediate",
    description:
      "Sharpen your tactical vision with forks, pins, skewers, sacrifices, and calculation techniques.",
    duration: "8 Weeks",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1596507457972-0ab33221e1cf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Positional Play & Strategy",
    level: "Advanced",
    description:
      "Understand pawn structures, piece activity, space, and long-term planning like elite grandmasters.",
    duration: "10 Weeks",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1611195974226-a6a9be9dd763?q=80&w=1200",
  },
  {
    id: 4,
    title: "Endgame Excellence",
    level: "Mastery",
    description:
      "Convert advantages with confidence. Master theoretical and practical endgames used at top level.",
    duration: "6 Weeks",
    rating: 5.0,
    image:
      "https://plus.unsplash.com/premium_photo-1670429843981-b48b9133556e?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CoursesPage = () => {
  return (
    <section className="py-20 px-6 md:px-0 mt-10 bg-base-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-orange-300/10 text-orange-300 text-xs font-extrabold uppercase tracking-[0.3em] border border-orange-300">
            Learn Chess
          </span>
          <h1 className="mt-6 text-4xl md:text-5xl font-black text-base-content">
            Chess <span className="text-orange-300">Courses</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Structured learning paths designed by professionals to elevate your
            chess understanding at every level.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="group relative rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
            >              <div className="relative h-44 overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent"></div>

                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-extrabold uppercase rounded-full bg-orange-300 text-black tracking-wider">
                  {course.level}
                </span>
              </div>
              <div className="p-5 flex flex-col gap-3">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-black text-base-content leading-tight">
                    {course.title}
                  </h3>
                  <GoArrowUpRight className="text-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <p className="text-xs text-justify text-base-content leading-tight line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-400 mt-2">
                  <span className="flex items-center gap-1">
                    <FaChessKnight className="text-orange-300" />
                    {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <FaStar className="text-orange-300" />
                    {course.rating}
                  </span>
                </div>
                <button className="mt-2 btn w-full text-xs btn-sm rounded-lg bg-orange-300 text-black font-bold">
                  View Course
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesPage;
