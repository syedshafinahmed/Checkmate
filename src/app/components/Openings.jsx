"use client";

import React, { useState, useEffect } from "react";
import openings from "../data/openings.json";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import { Tooltip } from "@mui/material";

const filters = ["All", "Open", "Closed", "Semi-Open", "Hypermodern"];

export default function OpeningsPage() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? openings : openings.filter((o) => o.type === active);

  return (
    <section className="py-20 mt-10 px-6 md:px-0 bg-base-100">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <span className="inline-flex px-4 py-1.5 rounded-full bg-orange-300/10 text-orange-300 text-xs font-extrabold uppercase tracking-[0.3em] border border-orange-300">
            Chess Openings
          </span>

          <h1 className="mt-6 text-4xl md:text-5xl font-black text-base-content">
            Opening <span className="text-orange-300">Explorer</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mt-4">
            Discover classical, modern, and hypermodern chess openings with ECO
            codes and strategic classifications.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-6">
          {filtered.slice(0,6).map((opening) => (
            <div
              key={opening.id}
              className="group rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800 border border-black/20 dark:border-orange-300/10 shadow-md hover:shadow-2xl transition-all hover:-translate-y-1"
            >
              <img
                src={opening.image}
                className="h-46 w-full object-cover group-hover:scale-110 transition-transform duration-700"
              />

              <div className="p-5">
                <div className="flex justify-between items-start">
                  <h3 className="font-black text-sm line-clamp-1 leading-tight">
                    {opening.name}
                  </h3>
                  <Tooltip title="View Opening">
                    <Link
                      href={`/openings/${opening.id}`}
                      className="text-orange-300 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <GoArrowUpRight size={18} />
                    </Link>
                  </Tooltip>
                </div>

                <p className="text-xs text-gray-500 mt-1">
                  ECO {opening.eco}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
