"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "15+ HRS WEEKLY DRAMAS",
    subtitle: "Largest Drama Block",
    description:
      "Only network with 15+ hours/week of fresh episodic drama content",
    gradient: "from-pink-500 to-rose-500",
    icon: "📺",
  },
  {
    title: "10+ HRS WEEKLY LOCAL",
    subtitle: "Most Diverse Local Content Segments",
    description: "7 diverse full-spectrum genres of local content",
    gradient: "from-purple-500 to-pink-500",
    icon: "🎭",
  },
  {
    title: "12-15 MILLION PRIMETIME",
    subtitle: "Primetime Dominance",
    description:
      "Kana delivers the biggest weekly primetime audience in Ethiopia and extends reach with massive digital engagement",
    gradient: "from-fuchsia-500 to-purple-500",
    icon: "👥",
  },
];

const keyOfferings = [
  {
    label: "CONTENT SPECTRUM",
    text: "International premium dramas, innovative local productions, and cutting-edge business content",
    icon: "🌟",
  },
  {
    label: "PROVEN TRACK RECORD",
    text: "10 years of consistent audience growth and engagement",
    icon: "🏆",
  },
];

const KeyOfferingCard = ({
  offering,
  index,
}: {
  offering: (typeof keyOfferings)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      whileHover={{ scale: 1.03, y: -8 }}
      className="group cursor-pointer"
    >
      <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-10 shadow-xl hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 border border-pink-500/20 hover:border-pink-500/40 overflow-hidden">
        {/* Decorative gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div className="relative z-10">
          {/* Icon */}
          <div className="mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl shadow-lg shadow-pink-500/30 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500">
              {offering.icon}
            </div>
          </div>

          {/* Content */}
          <h3 className="text-sm font-bold uppercase tracking-wider mb-4 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            {offering.label}
          </h3>
          <p className="text-white text-xl md:text-2xl font-semibold leading-relaxed">
            {offering.text}
          </p>
        </div>

        {/* Decorative corner element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-transparent rounded-bl-full"></div>
      </div>
    </motion.div>
  );
};

const AchievementCard = ({
  achievement,
  index,
}: {
  achievement: (typeof achievements)[0];
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      whileHover={{ scale: 1.05, y: -10 }}
      className="group relative cursor-pointer h-full"
    >
      <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 border border-pink-500/20 hover:border-pink-500/40">
        {/* Gradient accent bar */}
        <div className={`h-2 bg-gradient-to-r ${achievement.gradient}`}></div>

        {/* Content */}
        <div className="p-8">
          {/* Icon */}
          <div className="mb-6">
            <div
              className={`w-20 h-20 bg-gradient-to-br ${achievement.gradient} rounded-2xl flex items-center justify-center text-4xl shadow-lg shadow-pink-500/30 transform group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500`}
            >
              {achievement.icon}
            </div>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-white leading-tight">
            {achievement.title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm font-semibold mb-4 uppercase tracking-wider bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            {achievement.subtitle}
          </p>

          {/* Description */}
          <p className="text-gray-300 text-base leading-relaxed">
            {achievement.description}
          </p>
        </div>

        {/* Decorative gradient overlay */}
        <div
          className={`absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl ${achievement.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500 rounded-tl-full`}
        ></div>
      </div>
    </motion.div>
  );
};

export default function ContentStats() {
  return (
    <section className="relative overflow-hidden bg-black w-full">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-pink-500/15 via-purple-500/15 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 px-6 sm:px-10 lg:px-20 xl:px-32 py-24 md:py-32">
        <div className="w-full">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            {/* Decorative top line */}
            <div className="flex justify-center mb-10">
              <div className="w-32 h-1.5 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 rounded-full"></div>
            </div>

            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-8 leading-tight">
              KANA CONTENT &<br />
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                PROGRAMMING
              </span>
            </h2>
            <p className="text-2xl md:text-3xl text-white/90 font-semibold mb-6">
              Media Kit
            </p>
            <p className="text-xl text-white/70 font-medium max-w-2xl mx-auto">
              Entertain • Engage • Inspire
            </p>
          </motion.div>

          {/* Key Offerings */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-24"
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Key Offerings
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {keyOfferings.map((offering, index) => (
                <KeyOfferingCard
                  key={index}
                  offering={offering}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Content Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center mb-16">
              <h3 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase tracking-tight">
                Content Achievements
              </h3>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto rounded-full"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={achievement.title}
                  achievement={achievement}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </section>
  );
}
