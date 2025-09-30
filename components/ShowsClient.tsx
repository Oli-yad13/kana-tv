"use client";

import { useMemo, useState } from "react";
import ShowCard, { type ShowMeta } from "@/components/ShowCard";
import ShowFilters, { type ShowFiltersState } from "@/components/ShowFilters";

export default function ShowsClient({ shows }: { shows: ShowMeta[] }) {
  const [filters, setFilters] = useState<ShowFiltersState>({
    category: "All",
    dubbedOnly: false,
  });

  const categories = useMemo(
    () => Array.from(new Set(shows.map((s) => s.genre))),
    [shows]
  );

  const filtered = useMemo(() => {
    return shows.filter((s) => {
      const byDubbed = filters.dubbedOnly ? s.dubbed : true;
      const byCat =
        filters.category === "All" ? true : s.genre === filters.category;
      return byDubbed && byCat;
    });
  }, [shows, filters]);

  return (
    <>
      {/* Filters bar */}
      <section className="px-6 sm:px-10 lg:px-16 py-6 border-b border-white/10 bg-gradient-to-r from-black via-black to-black/95">
        <ShowFilters
          categories={categories}
          value={filters}
          onChange={setFilters}
        />
      </section>

      {/* Featured Dubbed carousel */}
      <section className="relative px-6 sm:px-10 lg:px-16 py-10">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,5,99,0.25),transparent_60%)]" />
          </div>
        </div>
        <div className="flex items-end justify-between">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Featured Dubbed
          </h2>
          <span className="text-white/60 text-sm">
            {shows.filter((s) => s.dubbed).length} titles
          </span>
        </div>
        <div
          className="mt-5 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none]"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex gap-4 min-w-max pr-2">
            {shows
              .filter((s) => s.dubbed)
              .map((s) => (
                <div key={s.id} className="w-48 sm:w-56 md:w-64 shrink-0">
                  <ShowCard show={s} />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="relative px-6 sm:px-10 lg:px-16 py-10">
        <div className="absolute inset-0 -z-10">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 opacity-15">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,transparent_40%,transparent_60%,rgba(168,5,99,0.08)_100%)]" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {filtered.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center text-white/70 py-16">
            No shows match the current filters.
          </div>
        )}
      </section>
    </>
  );
}
