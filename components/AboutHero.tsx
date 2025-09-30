"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutHero() {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/hero-page-1.jpg"
        alt="Kana TV About"
        width={1920}
        height={1080}
        className="h-[45vh] w-full object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
      <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white">
            About Kana TV
          </h1>
          <p className="mt-3 max-w-2xl text-white/85">
            Ethiopia's only full-spectrum TV — where we entertain, engage, and
            inspire.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
