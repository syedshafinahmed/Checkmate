"use client";

import React,{ useEffect, useState }  from "react";
import { GoArrowUpRight } from "react-icons/go";
import players from "../data/players.json";
import { Tooltip } from "@mui/material";

const page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-20 px-6 md:px-0 bg-base-100">
      <div className="max-w-7xl mx-auto mt-10">

        {loading ? (
          <>
            <div className="text-center mb-10 animate-pulse">
              <div className="mx-auto h-6 w-48 rounded-full bg-gray-500 mb-6" />
              <div className="mx-auto h-10 w-105 bg-gray-500 rounded mb-4" />
              <div className="mx-auto h-4 w-105 bg-gray-500 rounded" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
              {Array.from({ length: 10 }).map((_, idx) => (
                <div
                  key={idx}
                  className="relative flex flex-col rounded-2xl overflow-hidden shadow-xl bg-gray-900 animate-pulse"
                >
                  <div className="w-full h-56 bg-gray-500" />

                  <div className="p-5 flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div className="h-4 w-28 bg-gray-500 rounded" />
                      <div className="h-4 w-4 bg-gray-500 rounded" />
                    </div>
                    <div className="h-3 w-24 bg-gray-500 rounded" />
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-10">
              <span className="inline-flex px-4 py-1.5 rounded-full bg-orange-300/10 text-orange-300 text-xs font-extrabold uppercase tracking-[0.3em] border border-orange-300">
                Grandmasters
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl font-black text-base-content">
                Top <span className="text-orange-300">Chess Players</span>
              </h1>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
                Explore the world’s strongest active chess players, their rankings, and countries.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
              {players.map((player) => (
                <div
                  key={player.id}
                  className="relative flex flex-col rounded-2xl overflow-hidden shadow-xl bg-gray-900 backdrop-blur-md hover:shadow-2xl"
                >
                  <img
                    src={player.image}
                    alt={player.name}
                    className="w-full h-56 object-cover transition-transform duration-500 hover:scale-105"
                  />

                  <div className="p-5 flex flex-col gap-2 relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <h2 className="text-sm font-bold text-white truncate">
                          {player.name}
                        </h2>
                        <img
                          src={player.flagImage}
                          alt={player.country}
                          className="w-4 h-3 object-cover"
                        />
                      </div>

                      <Tooltip title="View Player">
                        <a
                          href={`/players/${player.id}`}
                          className="text-orange-300 hover:scale-110 transform transition-all duration-100 z-10"
                        >
                          <GoArrowUpRight size={16} />
                        </a>
                      </Tooltip>
                    </div>

                    <span className="text-xs text-gray-400 font-medium">
                      <strong>Rating:</strong> {player.rating}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default page;
