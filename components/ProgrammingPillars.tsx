"use client";

import { motion } from "framer-motion";

const pillars = [
  {
    title: "REACH",
    subtitle: "Massive Audience",
    color: "from-pink-500 to-pink-600",
    description:
      "Millions of viewers tune in each night during primetime, supported by a fast-growing digital community that amplifies campaigns.",
    icon: "📡",
    stat: "12-15M",
    unit: "Viewers",
  },
  {
    title: "SPECTRUM",
    subtitle: "Complete Mix",
    color: "from-teal-500 to-teal-600",
    description:
      "A complete mix of genres that spans dramas, movies, news, business, music, talk, health, kids, and flagship specials.",
    icon: "🌈",
    stat: "7+",
    unit: "Genres",
  },
  {
    title: "CONSISTENCY",
    subtitle: "Fresh Content",
    color: "from-orange-500 to-orange-600",
    description:
      "Over 30 hours of uneclipsed fresh content every week, including three hours of primetime dramas each evening, five nights a week.",
    icon: "⏰",
    stat: "30+",
    unit: "Hours/Week",
  },
  {
    title: "INNOVATION",
    subtitle: "Creative Formats",
    color: "from-purple-500 to-purple-600",
    description:
      "Large-scale studio productions and unique formats such as Zare Ke Kana bring fresh energy to Ethiopian television.",
    icon: "✨",
    stat: "100%",
    unit: "Original",
  },
  {
    title: "EXTENSION",
    subtitle: "Digital Reach",
    color: "from-blue-500 to-blue-600",
    description:
      "High engagement on Facebook, YouTube, Instagram, and TikTok ensures that campaigns live well beyond the first broadcast.",
    icon: "📱",
    stat: "5.2M+",
    unit: "Digital",
  },
];

export default function ProgrammingPillars() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              Core Programming
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            5 Core Programming
            <br />
            <span className="text-cyan-400">Pillars</span>
          </h2>
          <p className="text-white/80 leading-relaxed max-w-4xl">
            The Kana Advantage for Audiences and Their Advertisers
          </p>
          <p className="text-white/60 mt-4">
            Television That Reaches Millions and Lives On Across Digital
          </p>
        </motion.div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
              }}
              className="group relative"
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 overflow-hidden">
                {/* Background Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Header with Icon and Stat */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {pillar.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-black text-white group-hover:scale-105 transition-transform duration-300">
                        {pillar.stat}
                      </div>
                      <div className="text-xs font-semibold text-white/70 uppercase tracking-wider">
                        {pillar.unit}
                      </div>
                    </div>
                  </div>

                  {/* Title and Subtitle */}
                  <h3 className="text-2xl font-black text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {pillar.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold text-sm mb-4">
                    {pillar.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed text-sm">
                    {pillar.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border border-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 max-w-4xl">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              The Complete Entertainment Ecosystem
            </h3>
            <p className="text-lg text-white/80 leading-relaxed">
              These five pillars work together to create Ethiopia&apos;s most
              comprehensive entertainment platform, delivering unmatched value
              to both audiences and advertisers through consistent, innovative,
              and engaging content across all platforms.
            </p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-12 flex justify-center gap-4"
        >
          <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full" />
          <div className="h-1 w-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full" />
          <div className="h-1 w-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full" />
          <div className="h-1 w-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-full" />
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
