"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "15+ HRS WEEKLY DRAMAS",
    subtitle: "Largest Drama Block",
    description:
      "Only network with 15+ hours/week of fresh episodic drama content",
    color: "from-white to-gray-100",
    textColor: "text-black",
    icon: "🎭",
    stat: "15+",
    unit: "HOURS/WEEK",
  },
  {
    title: "10+ HRS WEEKLY LOCAL",
    subtitle: "Most Diverse Local Content",
    description: "7 diverse full-spectrum genres of local content segments",
    color: "from-green-400 to-emerald-500",
    textColor: "text-black",
    icon: "🏛️",
    stat: "10+",
    unit: "HOURS/WEEK",
  },
  {
    title: "12-15 MILLION PRIMETIME",
    subtitle: "Primetime Dominance",
    description:
      "Biggest weekly primetime audience in Ethiopia with massive digital engagement",
    color: "from-yellow-400 to-orange-500",
    textColor: "text-black",
    icon: "👑",
    stat: "12-15M",
    unit: "VIEWERS",
  },
];

const keyOfferings = [
  "International premium dramas, innovative local productions, and cutting-edge business content",
  "Proven performance with 10 years of consistent audience growth and engagement",
];

export default function ContentStats() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-12">
      <div>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6">
            <span className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">
              Media Kit 2025
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            Content & Programming
          </h2>
          <p className="text-white/80 leading-relaxed max-w-3xl">
            Entertain, Engage, Inspire
          </p>
        </motion.div>

        {/* Key Offerings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 max-w-5xl">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">
              Key Offerings
            </h3>
            <div className="space-y-6">
              {keyOfferings.map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-6"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white font-bold text-sm">✓</span>
                  </div>
                  <p className="text-white/90 font-medium text-lg leading-relaxed">
                    {offering}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Content Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
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
                  className={`absolute inset-0 bg-gradient-to-br ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon and Stat */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {achievement.icon}
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-3xl font-black ${achievement.textColor} group-hover:scale-105 transition-transform duration-300`}
                      >
                        {achievement.stat}
                      </div>
                      <div className="text-sm font-semibold text-white/70 uppercase tracking-wider">
                        {achievement.unit}
                      </div>
                    </div>
                  </div>

                  {/* Title and Subtitle */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                    {achievement.title}
                  </h3>
                  <p className="text-cyan-400 font-semibold text-sm mb-4">
                    {achievement.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-white/80 leading-relaxed text-sm">
                    {achievement.description}
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600" />
            <div className="absolute inset-0 bg-black/20" />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-16">
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
                    Kana TV is Ethiopia&apos;s leading television network,
                    delivering world-class content across 5 core programming
                    pillars to millions of viewers nationwide.
                  </p>
                  <p className="text-white/90 text-lg leading-relaxed">
                    We combine international premium dramas, innovative local
                    productions, and cutting-edge business content to create
                    Ethiopia&apos;s most comprehensive entertainment ecosystem.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
