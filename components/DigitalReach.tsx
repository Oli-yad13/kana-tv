"use client";

import { motion } from "framer-motion";

// Social Media Icons as SVG components
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
  </svg>
);

const TiktokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
  </svg>
);

const socialStats = [
  {
    platform: "FACEBOOK",
    followers: "1.8M",
    fullText: "1.8 MILLION",
    color: "#10b981",
    icon: FacebookIcon,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    platform: "YOUTUBE",
    followers: "1.6M",
    fullText: "1.6 MILLION",
    color: "#ec4899",
    icon: YoutubeIcon,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    platform: "INSTAGRAM",
    followers: "430K",
    fullText: "430K",
    color: "#a855f7",
    icon: InstagramIcon,
    gradient: "from-purple-500 to-fuchsia-500",
  },
  {
    platform: "TIKTOK",
    followers: "400K",
    fullText: "400K",
    color: "#eab308",
    icon: TiktokIcon,
    gradient: "from-yellow-500 to-orange-500",
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

      <div className="relative z-10 py-24 md:py-32">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Minimalist line */}
          <div className="flex justify-center mb-12">
            <div className="w-1 h-20 bg-gradient-to-b from-transparent via-pink-500 to-transparent"></div>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight max-w-4xl mx-auto">
            KANA&apos;S REACH EXTENDS
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              WELL BEYOND SATELLITE
            </span>
          </h2>
          <p className="text-xl md:text-2xl text-white/60 font-light tracking-wider">
            OUR COMMUNITY ≈
          </p>
        </motion.div>

        {/* Social Media Stats - Minimalist Cards */}
        <div className="px-6 sm:px-10 lg:px-16 mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialStats.map((stat, index) => (
              <motion.div
                key={stat.platform}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group cursor-pointer"
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
              </motion.div>
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
        >
          <div className="relative bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-md rounded-3xl p-10 md:p-14 border border-white/10">
            {/* Decorative corner elements */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-pink-500/30 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-purple-500/30 rounded-br-3xl"></div>

            <div className="relative z-10 text-center">
              {/* Icon accent */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                  <div className="text-3xl">✨</div>
                </div>
              </div>

              <p className="text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed font-medium">
                <span className="text-white font-semibold">
                  ALL PLATFORMS GROWING AT A RAPID PACE
                </span>{" "}
                with strong viewership and engagement, giving advertisers the
                advantage of both{" "}
                <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-semibold">
                  national primetime scale
                </span>{" "}
                and{" "}
                <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent font-semibold">
                  repeat digital visibility
                </span>
                .
              </p>
            </div>
          </div>
        </motion.div>

        {/* Minimalist decorative elements */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="mt-20 flex justify-center items-center gap-3"
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
