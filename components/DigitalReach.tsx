"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Social Media Icons using external sources
const FacebookIcon = () => (
  <Image
    width={32}
    height={32}
    src="/facebook.png"
    alt="Facebook"
    className="w-8 h-8"
  />
);

const YoutubeIcon = () => (
  <Image
    width={32}
    height={32}
    src="/youtube.png"
    alt="YouTube"
    className="w-8 h-8"
  />
);

const InstagramIcon = () => (
  <Image
    width={32}
    height={32}
    src="/instagram.png"
    alt="Instagram"
    className="w-8 h-8"
  />
);

const TiktokIcon = () => (
  <Image
    width={32}
    height={32}
    src="/tik-tok.png"
    alt="TikTok"
    className="w-8 h-8"
  />
);

const socialStats = [
  {
    platform: "FACEBOOK",
    followers: "1.8M",
    fullText: "1.8 MILLION",
    color: "#10b981",
    icon: FacebookIcon,
    gradient: "from-green-500 to-emerald-500",
    url: "https://web.facebook.com/kanatelevision/?_rdc=1&_rdr",
  },
  {
    platform: "YOUTUBE",
    followers: "1.6M",
    fullText: "1.6 MILLION",
    color: "#ec4899",
    icon: YoutubeIcon,
    gradient: "from-pink-500 to-rose-500",
    url: "https://www.youtube.com/channel/UCvgODwKEq2GS7zxacxvYa6Q",
  },
  {
    platform: "INSTAGRAM",
    followers: "430K",
    fullText: "430K",
    color: "#a855f7",
    icon: InstagramIcon,
    gradient: "from-purple-500 to-fuchsia-500",
    url: "https://www.instagram.com/kanatelevision?igsh=aGF3a2l3eWFuYmJm",
  },
  {
    platform: "TIKTOK",
    followers: "400K",
    fullText: "400K",
    color: "#eab308",
    icon: TiktokIcon,
    gradient: "from-yellow-500 to-orange-500",
    url: "https://www.tiktok.com/@kanatelevision",
  },
];

export default function DigitalReach() {
  return (
    <section className="relative overflow-hidden bg-black w-full">
      {/* Minimalist background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-pink-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-purple-500/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10  ">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight max-w-4xl mx-auto">
            KANA&apos;S REACH EXTENDS
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              WELL BEYOND SATELLITE
            </span>
          </h2>
        </motion.div>

        {/* Social Media Stats - Minimalist Cards */}
        <div className="px-6 sm:px-10 lg:px-16 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialStats.map((stat, index) => (
              <motion.a
                key={stat.platform}
                href={stat.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer block"
              >
                <div className="relative h-full bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm rounded-3xl p-8 border border-white/5 hover:border-white/20 transition-all duration-500 overflow-hidden">
                  {/* Gradient overlay on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  ></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6">
                      <div
                        className="w-16 h-16 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500"
                        style={{
                          backgroundColor: `${stat.color}15`,
                          boxShadow: `0 10px 30px ${stat.color}20`,
                          color: stat.color,
                        }}
                      >
                        <stat.icon />
                      </div>
                    </div>

                    {/* Follower Count */}
                    <div className="mb-4">
                      <div
                        className="text-5xl md:text-6xl font-black mb-2 bg-gradient-to-br bg-clip-text text-transparent transition-all duration-500"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${stat.color}, ${stat.color}aa)`,
                        }}
                      >
                        {stat.followers}
                      </div>
                      <div className="text-xs text-white/40 font-medium uppercase tracking-widest mb-3">
                        Followers
                      </div>
                    </div>

                    {/* Platform Name */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-bold uppercase tracking-wider text-white/70 group-hover:text-white transition-colors duration-300">
                        {stat.platform}
                      </h3>
                      <div
                        className="w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: `${stat.color}20` }}
                      >
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: stat.color }}
                        ></div>
                      </div>
                    </div>

                    {/* Minimalist line accent */}
                    <div
                      className="mt-6 h-1 w-0 group-hover:w-full rounded-full transition-all duration-500"
                      style={{ backgroundColor: stat.color }}
                    ></div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Key Message Section - Minimalist Design */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="px-6 sm:px-10 lg:px-16"
        ></motion.div>

        {/* Minimalist decorative elements */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="my-7 flex justify-center items-center gap-3"
        >
          <div className="w-2 h-2 rounded-full bg-pink-500/60"></div>
          <div className="h-px w-32 bg-gradient-to-r from-pink-500/60 to-purple-500/60"></div>
          <div className="w-3 h-3 rounded-full bg-purple-500/60"></div>
          <div className="h-px w-32 bg-gradient-to-r from-purple-500/60 to-blue-500/60"></div>
          <div className="w-2 h-2 rounded-full bg-blue-500/60"></div>
        </motion.div>
      </div>
    </section>
  );
}
