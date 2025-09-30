"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Story First",
    desc: "We champion local stories that reflect Ethiopia's voice and identity through premium content.",
    icon: "📖",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Audience Obsession",
    desc: "We build programming that entertains, informs, and brings people together across all platforms.",
    icon: "👥",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Creative Excellence",
    desc: "From dubbing to production, we aim for world-class quality in every frame and every format.",
    icon: "✨",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Digital Innovation",
    desc: "We extend our reach beyond television with massive digital engagement across social platforms.",
    icon: "🚀",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Consistent Delivery",
    desc: "Over 30 hours of fresh content weekly with zero repeats, ensuring audiences always have something new.",
    icon: "⏰",
    color: "from-yellow-500 to-orange-500",
  },
  {
    title: "Full Spectrum",
    desc: "Complete mix of genres spanning dramas, movies, news, business, music, talk, health, and kids content.",
    icon: "🌈",
    color: "from-indigo-500 to-purple-500",
  },
];

export default function AboutValues() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-12">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-6">
            Our Core Values
          </h2>
          <p className="text-white/80 leading-relaxed max-w-3xl mx-auto">
            The principles that guide our mission to deliver exceptional content
            and create meaningful connections with our audience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, i) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
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
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {value.title}
                    </h3>
                  </div>

                  <p className="text-white/80 leading-relaxed text-lg">
                    {value.desc}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border border-white/20 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-2xl md:text-3xl font-light text-white/90 italic leading-relaxed">
              "We are here to{" "}
              <span className="text-yellow-400 font-bold">entertain</span>. If
              we make you think, laugh, or feel inspired along the way, even
              better."
            </blockquote>
            <div className="mt-6 w-24 h-1 bg-gradient-to-r from-cyan-400 to-pink-400 rounded-full mx-auto" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
