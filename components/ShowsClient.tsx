"use client";

import { useMemo, useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import ShowCard, { type ShowMeta } from "@/components/ShowCard";
import ShowFilters, { type ShowFiltersState } from "@/components/ShowFilters";

export default function ShowsClient({ shows }: { shows: ShowMeta[] }) {
  const [filters, setFilters] = useState<ShowFiltersState>({
    category: "All",
    dubbedOnly: false,
  });

  const carouselRef = useRef<HTMLDivElement>(null);

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

  const featuredShows = useMemo(() => shows.slice(0, 5), [shows]);

  useEffect(() => {
    if (!carouselRef.current) return;

    const carousel = carouselRef.current;
    const cardWidth = 320; // w-80 = 320px
    const gap = 16; // gap-4 = 16px
    const totalWidth = (cardWidth + gap) * featuredShows.length;

    gsap.to(carousel, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    return () => {
      gsap.killTweensOf(carousel);
    };
  }, [featuredShows]);

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

      {/* Featured carousel */}
      <section className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(168,5,99,0.25),transparent_60%)]" />
          </div>
        </div>
        <div className="px-6 sm:px-10 lg:px-16">
          <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
            Featured
          </h2>
        </div>
        <div className="mt-5 relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-4"
          >
            {featuredShows
              .concat(featuredShows)
              .concat(featuredShows)
              .map((s, idx) => (
                <div key={`${s.id}-${idx}`} className="w-80 shrink-0">
                  <ShowCard show={s} />
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Full-screen grid */}
      <section className="relative px-0 py-0">
        <div className="absolute inset-0 -z-10">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 opacity-15">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.05)_0%,transparent_40%,transparent_60%,rgba(168,5,99,0.08)_100%)]" />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          {filtered.map((show) => (
            <ShowCard key={show.id} show={show} fullScreen />
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
