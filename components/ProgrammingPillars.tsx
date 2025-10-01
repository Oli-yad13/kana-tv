"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const pillars = [
  {
    title: "REACH",
    color: "#ec4899",
    description:
      "Millions of viewers tune in each night during primetime, supported by a fast-growing digital community that amplifies campaigns.",
  },
  {
    title: "SPECTRUM",
    color: "#14b8a6",
    description:
      "A complete mix of genres that spans dramas, movies, news, business, music, talk, health, kids, and flagship specials.",
  },
  {
    title: "CONSISTENCY",
    color: "#eab308",
    description:
      "Over 30 hours of uneclipsed fresh content every week, including three hours of primetime dramas each evening, five nights a week. A fixed and predictable grid ensures audiences always know where to find their shows.",
  },
  {
    title: "INNOVATION",
    color: "#d946ef",
    description:
      "Large-scale studio productions and unique formats such as Zare Ke Kana bring fresh energy to Ethiopian television and anchor weekend family viewing.",
  },
  {
    title: "EXTENSION",
    color: "#3b82f6",
    description:
      "High engagement on Facebook, YouTube, Instagram, and TikTok ensures that campaigns live well beyond the first broadcast.",
  },
];

// Individual pillar card component to fix hooks issue
const PillarCard = ({ pillar, index }: { pillar: typeof pillars[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;

    if (!card || !content) return;

    const handleMouseEnter = () => {
      gsap.to(content, {
        backgroundColor: pillar.color,
        color: "#000000",
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(card, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(content, {
        backgroundColor: "#000000",
        color: "#ffffff",
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [pillar.color]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="group relative cursor-pointer"
      ref={cardRef}
    >
      <div className="relative h-[500px] bg-black border-2 border-white overflow-hidden flex flex-col">
        {/* Title Bar */}
        <div className="bg-white text-black p-5 flex items-center justify-between flex-shrink-0">
          <h3 className="text-2xl font-bold uppercase tracking-tight">
            {pillar.title}
          </h3>
          <div className="w-7 h-7 bg-black rounded flex items-center justify-center">
            <span className="text-white text-base font-bold">+</span>
          </div>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="p-8 flex-1 bg-black text-white"
        >
          <p className="text-xl md:text-2xl leading-relaxed">
            {pillar.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProgrammingPillars() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-16 relative overflow-hidden bg-black">
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-black text-sm font-bold">×</span>
              </div>
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-black text-sm font-bold">⌄</span>
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            5 CORE PROGRAMMING PILLARS - THE KANA ADVANTAGE FOR AUDIENCES AND THEIR ADVERTISERS
          </h2>
          <p className="text-lg text-white/80">
            Television That Reaches Millions and Lives On Across Digital.
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-16">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.title} pillar={pillar} index={index} />
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="relative"
        >
          <div className="bg-purple-600 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                  FULL SPECTRUM
                  <br />
                  <span className="text-yellow-400">TELEVISION</span>
                </h3>
              </div>
              <div>
                <p className="text-white text-xl leading-relaxed mb-8">
                  Kana TV is Ethiopia&apos;s leading television network, delivering world-class content across 5 core programming pillars to millions of viewers nationwide.
                </p>
                <p className="text-white/90 text-lg leading-relaxed">
                  We combine international premium dramas, innovative local productions, and cutting-edge business content to create Ethiopia&apos;s most comprehensive entertainment ecosystem.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-8 flex justify-center gap-8"
        >
          <div className="h-1 w-24 bg-pink-500" />
          <div className="h-1 w-24 bg-blue-500" />
        </motion.div>
      </div>
    </section>
  );
}
