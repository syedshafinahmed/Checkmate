"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import players from "../../data/players.json";
import { FiArrowLeft } from "react-icons/fi";
import { GiAchievement } from "react-icons/gi";

const PlayerDetails = () => {
  const { id } = useParams();
  const router = useRouter();
  const player = players.find((p) => p.id === parseInt(id));

  if (!player) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        Player not found.
      </div>
    );
  }

  return (
    <div className="text-base-content bg-base-100 relative px-6 md:px-0 py-20">
      <div className="relative">
        <button
          onClick={() => router.push("/players")}
          className="flex absolute top-5 text-white right-5 items-center gap-2 px-4 py-2 bg-gray-900 backdrop-blur-md rounded-lg shadow-md"
        >
          <FiArrowLeft size={20} />
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
          <div className="flex flex-col text-gray-400 font-medium text-sm md:text-base">
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
          <p className="text-base-content leading-relaxed text-sm text-justify md:text-base">
            {player.biography}
          </p>
        </div>
        <div className="flex flex-col gap-2 mt-10">
          <span className="text-orange-300 font-black text-2xl">
            Achievements
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-4">
            {player.achievements.map((achieve, idx) => (
              <div
                key={idx}
                className="relative bg-gray-900 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-transform duration-300 overflow-hidden"
              >
                <p className="text-gray-200 text-sm font-black md:text-base leading-relaxed">
                  {achieve}.
                </p>
                <GiAchievement
                  className="absolute bottom-0 -right-5 text-orange-300 w-30 h-30 opacity-10 hover:opacity-80 transition-opacity duration-300 pointer-events-none"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerDetails;
