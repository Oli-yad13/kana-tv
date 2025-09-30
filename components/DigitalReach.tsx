"use client";

import { motion } from "framer-motion";

const socialStats = [
  {
    platform: "FACEBOOK",
    followers: "1.8M",
    fullFollowers: "1.8 MILLION",
    color: "from-blue-600 to-blue-500",
    icon: "📘",
    growth: "+15%",
    engagement: "High",
  },
  {
    platform: "YOUTUBE",
    followers: "1.6M",
    fullFollowers: "1.6 MILLION",
    color: "from-red-600 to-red-500",
    icon: "📺",
    growth: "+22%",
    engagement: "Very High",
  },
  {
    platform: "INSTAGRAM",
    followers: "430K",
    fullFollowers: "430 THOUSAND",
    color: "from-pink-600 to-pink-500",
    icon: "📷",
    growth: "+35%",
    engagement: "High",
  },
  {
    platform: "TIKTOK",
    followers: "400K",
    fullFollowers: "400 THOUSAND",
    color: "from-purple-600 to-purple-500",
    icon: "🎵",
    growth: "+45%",
    engagement: "Very High",
  },
];

export default function DigitalReach() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
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
              Digital Presence
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            Reach Extends Well Beyond
            <br />
            <span className="text-cyan-400">Satellite</span>
          </h2>
          <p className="text-white/80 leading-relaxed max-w-3xl">
            Our community now includes millions of engaged followers across all
            major platforms
          </p>
        </motion.div>

        {/* Social Media Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {socialStats.map((stat, index) => (
            <motion.div
              key={stat.platform}
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
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
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Platform Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold text-white/60 uppercase tracking-wider">
                        {stat.platform}
                      </div>
                      <div className="text-xs text-green-400 font-bold">
                        {stat.growth} Growth
                      </div>
                    </div>
                  </div>

                  {/* Follower Count */}
                  <div className="mb-4">
                    <div className="text-4xl md:text-5xl font-black text-white group-hover:scale-105 transition-transform duration-300">
                      {stat.followers}
                    </div>
                    <div className="text-sm text-white/70 font-medium">
                      {stat.fullFollowers}
                    </div>
                  </div>

                  {/* Engagement */}
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-white/60">Engagement</div>
                    <div className="text-sm font-bold text-green-400">
                      {stat.engagement}
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border border-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center max-w-5xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Rapid Growth Across All Platforms
            </h3>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed font-medium">
              All platforms growing at a rapid pace with strong viewership and
              engagement, giving advertisers the advantage of both national
              primetime scale and repeat digital visibility.
            </p>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex justify-center gap-8"
        >
          <div className="h-1 w-24 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full" />
          <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
          <div className="h-1 w-24 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
