"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import openings from "../../data/openings.json";
import { FiArrowLeft } from "react-icons/fi";
import { GiBoxTrap, GiTeacher } from "react-icons/gi";

export default function OpeningDetails() {
  const { id } = useParams();
  const router = useRouter();

  const opening = openings.find(o => o.id === parseInt(id));

  if (!opening) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Opening not found.
      </div>
    );
  }

  return (
    <section className="py-20 mt-5 px-6 bg-base-100">
      <div className="max-w-7xl mx-auto">
        <button
          onClick={() => router.push("/openings")}
          className="mb-10 flex items-center gap-2 text-sm font-bold text-base-content hover:text-orange-300 transition"
        >
          <FiArrowLeft />
          Back to Openings
        </button>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          <div className="rounded-2xl h-73 overflow-hidden shadow-xl border border-neutral-200 dark:border-neutral-700">
            <img
              src={opening.image}
              alt={opening.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="lg:w-1/2 flex flex-col gap-4">
            <span className="inline-flex w-max px-4 py-1.5 rounded-full bg-orange-300/10 text-orange-300 text-xs font-extrabold uppercase tracking-[0.3em] border border-orange-300">
              ECO {opening.eco}
            </span>

            <h1 className="text-4xl md:text-5xl font-black text-base-content">
              {opening.name}
            </h1>

            <p className="text-gray-400 leading-relaxed">
              {opening.description}
            </p>

            <div className="flex gap-6 text-sm text-gray-400 mt-2">
              <span>
                <strong className="text-base-content">Type:</strong>{" "}
                {opening.type}
              </span>
              <span>
                <strong className="text-base-content">Popularity:</strong>{" "}
                {opening.popularity}/5
              </span>
            </div>

            <div className="mt-4 p-4 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
              <p className="text-xs uppercase tracking-wider text-gray-400 mb-1">
                Main Line
              </p>
              <p className="font-bold text-base-content">
                {opening.mainMoves}
              </p>
            </div>
          </div>
        </div>

        <div className="w-full h-0.5 bg-linear-to-r from-transparent via-orange-300 to-transparent my-14" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h3 className="text-xl font-black text-orange-300 mb-4">
              Typical Plans
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {opening.plans.map((plan, idx) => (
                <div
                  key={idx}
                  className="relative bg-gray-900 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
                >
                  <p className="text-base-content text-sm font-medium md:text-base leading-relaxed">
                    {plan}.
                  </p>

                  <GiTeacher
                    className="absolute bottom-0 -right-5 text-orange-300 w-30 h-30 opacity-10 hover:opacity-80 transition-opacity duration-300 pointer-events-none rotate-45"
                  />
                </div>
              ))}
            </div>

          </div>
          <div>
            <h3 className="text-xl font-black text-orange-300 mb-4">
              Common Traps
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {opening.traps.map((trap, idx) => (
                <div
                  key={idx}
                  className="relative bg-gray-900 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
                >
                  <p className="text-base-content text-sm font-medium md:text-base leading-relaxed">
                    {trap}.
                  </p>

                  <GiBoxTrap
                    className="absolute bottom-0 -right-5 text-orange-300 w-30 h-30 opacity-10 hover:opacity-80 transition-opacity duration-300 pointer-events-none rotate-45"
                  />
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
