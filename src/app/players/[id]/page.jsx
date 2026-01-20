"use client";

import React, { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import players from "../../data/players.json";
import { FiArrowLeft } from "react-icons/fi";
import { GiAchievement } from "react-icons/gi";

const PlayerDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const player = players.find((p) => p.id === parseInt(id));
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);
    return () => clearTimeout(timer);
  }, []);

  if (!player && !loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        Player not found.
      </div>
    );
  }

  return (
    <div className="text-base-content bg-base-100 relative px-6 md:px-0 py-20">


      {loading ? (
        <div className="max-w-7xl mx-auto animate-pulse">

          <div className="flex justify-start mb-10">
            <div className="h-10 w-24 bg-gray-500 rounded-lg" />
          </div>

          <div className="flex flex-col md:flex-row gap-5 items-start">
            <div className="w-40 h-36 bg-gray-500 rounded-2xl" />

            <div className="flex flex-col gap-4 flex-1">
              <div className="h-8 w-64 bg-gray-500 rounded" />
              <div className="h-4 w-40 bg-gray-500 rounded" />
              <div className="h-4 w-32 bg-gray-500 rounded" />
              <div className="h-6 w-32 bg-gray-500 rounded-full" />
            </div>
          </div>

          <div className="w-full h-0.5 bg-gray-500 mt-8 mb-6" />

          <div className="space-y-3">
            <div className="h-6 w-24 bg-gray-500 rounded" />
            <div className="h-4 w-full bg-gray-500 rounded" />
            <div className="h-4 w-full bg-gray-500 rounded" />
            <div className="h-4 w-5/6 bg-gray-500 rounded" />
          </div>

          <div className="mt-10">
            <div className="h-6 w-40 bg-gray-500 rounded mb-4" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Array.from({ length: 3 }).map((_, idx) => (
                <div
                  key={idx}
                  className="h-24 bg-gray-500 rounded-2xl"
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <>

          <div className="relative max-w-7xl mx-auto">
            <button
              onClick={() => router.back()}
              className="mb-10 flex items-center gap-2 text-sm font-bold text-base-content hover:text-orange-300 transition"
            >
              <FiArrowLeft />
              Back
            </button>
          </div>

          <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-5 items-start mt-12">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-700 hover:shadow-2xl transition-shadow duration-500">
              <img
                src={player.image}
                alt={player.name}
                className="w-40 h-36 object-cover"
              />
            </div>

            <div className="md:w-2/3 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <h1 className="text-3xl md:text-4xl font-bold truncate">
                  {player.name}
                </h1>
                <img
                  src={player.flagImage}
                  alt={player.country}
                  className="w-12 h-8 rounded-sm object-cover"
                />
              </div>

              <div className="flex flex-col text-base-content font-medium text-sm md:text-base">
                <span>{player.age} years old</span>
                <span>Rating: {player.rating}</span>
              </div>

              <span className="inline-flex px-4 py-1.5 rounded-full bg-orange-300/10 text-orange-300 text-xs font-extrabold uppercase tracking-[0.3em] border border-orange-300 w-max">
                {player.title}
              </span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="w-full h-0.5 bg-linear-to-r mt-5 mb-5 from-transparent via-orange-300 to-transparent my-2"></div>

            <div className="flex flex-col gap-2">
              <span className="text-orange-300 font-black text-2xl">
                Bio
              </span>
              <p className="text-base-content leading-relaxed text-md text-justify md:text-base">
                {player.biography}
              </p>
            </div>

            <div className="flex flex-col gap-2 mt-10">
              <span className="text-orange-300 font-black text-2xl">
                Achievements
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
                {player.achievements.map((achieve, idx) => (
                  <div
                    key={idx}
                    className="relative bg-gray-900 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
                  >
                    <p className="text-base-content text-sm font-medium md:text-base leading-relaxed">
                      {achieve}.
                    </p>

                    <GiAchievement
                      className="absolute bottom-0 -right-5 text-orange-300 w-30 h-30 opacity-10 hover:opacity-80 transition-opacity duration-300 pointer-events-none rotate-45"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default PlayerDetails;
