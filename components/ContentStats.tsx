"use client";

import { motion } from "framer-motion";

const achievements = [
  {
    title: "15+ HRS WEEKLY DRAMAS",
    subtitle: "Largest Drama Block",
    description:
      "Only network with 15+ hours/week of fresh episodic drama content",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    title: "10+ HRS WEEKLY LOCAL",
    subtitle: "Most Diverse Local Content Segments",
    description: "7 diverse full-spectrum genres of local content",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "12-15 MILLION PRIMETIME",
    subtitle: "Primetime Dominance",
    description:
      "Kana delivers the biggest weekly primetime audience in Ethiopia and extends reach with massive digital engagement",
    gradient: "from-fuchsia-500 to-purple-500",
  },
];

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
      <div className="relative h-full bg-gradient-to-br from-gray-900 to-black rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl hover:shadow-pink-500/20 transition-all duration-500 border border-pink-500/20 hover:border-pink-500/40">
        {/* Gradient accent bar */}
        <div
          className={`h-1.5 sm:h-2 bg-gradient-to-r ${achievement.gradient}`}
        ></div>

        {/* Content */}
        <div className="p-4 sm:p-6 md:p-8">
          {/* Title */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 text-white leading-tight">
            {achievement.title}
          </h3>

          {/* Subtitle */}
          <p className="text-sm sm:text-base font-semibold mb-3 sm:mb-4 uppercase tracking-wider bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            {achievement.subtitle}
          </p>

          {/* Description */}
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
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

      <div className="relative z-10 py-24 md:py-32">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 px-4 sm:px-6 lg:px-8"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight">
            KANA CONTENT &<br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              PROGRAMMING
            </span>
          </h2>
        </motion.div>

        {/* Content Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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

      {/* Bottom decorative wave */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>
    </section>
  );
}
