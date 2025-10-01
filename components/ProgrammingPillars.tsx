"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Radio, Film, Clock, Lightbulb, Globe } from "lucide-react";

const pillars = [
  {
    title: "REACH",
    color: "#ec4899",
    icon: Radio,
    description:
      "Millions of viewers tune in each night during primetime, supported by a fast-growing digital community that amplifies campaigns.",
  },
  {
    title: "SPECTRUM",
    color: "#14b8a6",
    icon: Film,
    description:
      "A complete mix of genres that spans dramas, movies, news, business, music, talk, health, kids, and flagship specials.",
  },
  {
    title: "CONSISTENCY",
    color: "#eab308",
    icon: Clock,
    description:
      "Over 30 hours of uneclipsed fresh content every week, including three hours of primetime dramas each evening, five nights a week. A fixed and predictable grid ensures audiences always know where to find their shows.",
  },
  {
    title: "INNOVATION",
    color: "#d946ef",
    icon: Lightbulb,
    description:
      "Large-scale studio productions and unique formats such as Zare Ke Kana bring fresh energy to Ethiopian television and anchor weekend family viewing.",
  },
  {
    title: "EXTENSION",
    color: "#3b82f6",
    icon: Globe,
    description:
      "High engagement on Facebook, YouTube, Instagram, and TikTok ensures that campaigns live well beyond the first broadcast.",
  },
];

// Individual pillar card component to fix hooks issue
const PillarCard = ({
  pillar,
  index,
}: {
  pillar: (typeof pillars)[0];
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;
    const icon = iconRef.current;

    if (!card || !content || !icon) return;

    const handleMouseEnter = () => {
      gsap.to(content, {
        backgroundColor: pillar.color,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(card, {
        scale: 1.05,
        y: -10,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(icon, {
        scale: 1.2,
        rotate: 10,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(content, {
        backgroundColor: "#1a1a1a",
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(card, {
        scale: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(icon, {
        scale: 1,
        rotate: 0,
        duration: 0.4,
        ease: "back.out(1.7)",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [pillar.color]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="group relative cursor-pointer"
      ref={cardRef}
    >
      <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 shadow-lg hover:shadow-xl">
        {/* Decorative gradient overlay */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, ${pillar.color}15 0%, transparent 100%)`,
          }}
        ></div>

        {/* Content Container */}
        <div
          ref={contentRef}
          className="relative h-full p-6 sm:p-8 flex flex-col justify-between bg-[#1a1a1a] transition-colors duration-400"
        >
          {/* Icon */}
          <div className="mb-4 sm:mb-6">
            <div
              ref={iconRef}
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-400"
              style={{
                backgroundColor: `${pillar.color}20`,
                boxShadow: `0 8px 25px ${pillar.color}30`,
              }}
            >
              <pillar.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
            </div>
          </div>

          {/* Title */}
          <div className="mb-3 sm:mb-4">
            <div
              className="w-12 h-0.5 sm:w-16 sm:h-1 mb-3 sm:mb-4 rounded-full"
              style={{ backgroundColor: pillar.color }}
            ></div>
            <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white leading-tight mb-2">
              {pillar.title}
            </h3>
          </div>

          {/* Description */}
          <p className="text-sm sm:text-base text-white/80 leading-relaxed group-hover:text-black transition-colors duration-400">
            {pillar.description}
          </p>

          {/* Decorative corner accent */}
          <div
            className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-bl-full opacity-10"
            style={{ backgroundColor: pillar.color }}
          ></div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ProgrammingPillars() {
  return (
    <section className="relative overflow-hidden bg-black w-full">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-tr from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-yellow-500/5 via-pink-500/5 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 py-16 sm:py-20 md:py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            5 CORE PROGRAMMING PILLARS
          </h2>
        </motion.div>

        {/* Pillars Grid */}
        <div className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
            {pillars.map((pillar, index) => (
              <PillarCard key={pillar.title} pillar={pillar} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom Section - Full Spectrum */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative px-4 sm:px-6 lg:px-8"
        >
          <div className="relative bg-gradient-to-br from-purple-600 via-purple-700 to-fuchsia-600 rounded-2xl sm:rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-black/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="w-16 h-1 bg-yellow-400 mb-6 sm:mb-8 rounded-full"></div>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white mb-3 sm:mb-4 leading-tight">
                    FULL SPECTRUM
                  </h3>
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-yellow-300 to-yellow-500 bg-clip-text text-transparent leading-tight">
                    TELEVISION
                  </h3>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-white/20">
                  <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed mb-4 sm:mb-6 font-medium">
                    Kana TV is Ethiopia&apos;s leading television network,
                    delivering world-class content across 5 core programming
                    pillars to millions of viewers nationwide.
                  </p>
                  <p className="text-white/90 text-base sm:text-lg md:text-xl leading-relaxed">
                    We combine international premium dramas, innovative local
                    productions, and cutting-edge business content to create
                    Ethiopia&apos;s most comprehensive entertainment ecosystem.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Decorative bottom elements */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 px-4 sm:px-6 lg:px-8 flex justify-center gap-3 sm:gap-4"
        >
          <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
          <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
          <div className="h-1 w-16 sm:w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
