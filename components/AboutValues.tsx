"use client";

import { motion } from "framer-motion";

const values = [
  {
    title: "Story First",
    desc: "We champion local stories that reflect Ethiopia's voice and identity.",
  },
  {
    title: "Audience Obsession",
    desc: "We build programming that entertains, informs, and brings people together.",
  },
  {
    title: "Creative Excellence",
    desc: "From dubbing to production, we aim for world-class quality in every frame.",
  },
];

export default function AboutValues() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="rounded-2xl bg-white/5 border border-white/10 p-6"
          >
            <h3 className="text-white text-xl font-semibold">{v.title}</h3>
            <p className="mt-2 text-white/75 text-sm leading-relaxed">
              {v.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
