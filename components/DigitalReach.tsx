"use client";

import { motion } from "framer-motion";

const socialStats = [
  {
    platform: "FACEBOOK",
    followers: "1.8 MILLION",
    color: "text-green-500",
  },
  {
    platform: "YOUTUBE",
    followers: "1.6 MILLION",
    color: "text-pink-500",
  },
  {
    platform: "INSTAGRAM",
    followers: "430K",
    color: "text-purple-500",
  },
  {
    platform: "TIKTOK",
    followers: "400K",
    color: "text-yellow-500",
  },
];

export default function DigitalReach() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-16 relative overflow-hidden bg-black">
      <div className="relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            KANA&apos;S REACH EXTENDS WELL BEYOND SATELLITE.
          </h2>
          <p className="text-xl text-white/80 mb-8">
            OUR COMMUNITY NOW INCLUDES ≈
          </p>
        </motion.div>

        {/* Social Media Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {socialStats.map((stat, index) => (
            <motion.div
              key={stat.platform}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="text-center"
            >
              <div className="mb-4">
                <div className={`text-4xl md:text-5xl font-black ${stat.color} mb-2`}>
                  {stat.followers}
                </div>
                <div className="text-lg text-white font-semibold">
                  FOLLOWERS ON {stat.platform}
                </div>
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
          <p className="text-lg md:text-xl text-white leading-relaxed font-medium">
            ALL PLATFORMS GROWING AT A RAPID PACE WITH STRONG VIEWERSHIP AND ENGAGEMENT, GIVING ADVERTISERS THE ADVANTAGE OF BOTH NATIONAL PRIMETIME SCALE AND REPEAT DIGITAL VISIBILITY.
          </p>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex justify-center gap-8"
        >
          <div className="h-1 w-24 bg-purple-500" />
          <div className="h-1 w-24 bg-blue-500" />
        </motion.div>
      </div>
    </section>
  );
}
