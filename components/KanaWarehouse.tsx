"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const warehouseGallery = [
  {
    id: 1,
    image: "/warehouse/crowd.jpg",
    title: "Main Event Space",
    description: "2,000+ capacity for standing events",
  },
  {
    id: 2,
    image: "/warehouse/concert.jpg",
    title: "Concert & Performance",
    description: "Full stage visibility and professional lighting",
  },
  {
    id: 3,
    image: "/warehouse/stage.jpg",
    title: "Versatile Setup",
    description: "Adaptable for concerts, festivals, and corporate events",
  },
];

const events = [
  "Concerts & Music Festivals",
  "Addis FotoFest",
  "Cupping Ceremonies",
  "Corporate Events (Heineken, Unilever, etc.)",
  "Award Shows & Galas",
  "Product Launches",
  "Community Gatherings",
];

export default function KanaWarehouse() {
  return (
    <section className="relative py-16 px-6 sm:px-10 lg:px-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,5,99,0.3),transparent_70%)]" />
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-5xl font-black tracking-tight">
          Kana Events Warehouse
        </h2>
        <p className="mt-4 text-white/80 max-w-3xl mx-auto text-lg">
          Multi-purpose event & concert space in the heart of Addis Ababa
        </p>
      </motion.div>

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="text-4xl font-black text-pink-700 mb-2">
            13m
          </div>
          <div className="text-white/60 text-sm">High ceiling, column-free space</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="text-4xl font-black text-pink-700 mb-2">
            2,000+
          </div>
          <div className="text-white/60 text-sm">Standing capacity / 1,000 seated</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <div className="text-4xl font-black text-pink-700 mb-2">
            1,200m²
          </div>
          <div className="text-white/60 text-sm">Expansive indoor space</div>
        </motion.div>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {warehouseGallery.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="relative aspect-[4/3]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                <p className="text-white/70 text-sm">{item.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* About & Events */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8"
        >
          <h3 className="text-2xl font-semibold mb-4">About the Venue</h3>
          <p className="text-white/80 leading-relaxed mb-4">
            Kana Warehouse is Addis Ababa&apos;s most versatile event and concert venue.
            The 13-meter-high, column-free hall spans 1,200 square meters indoors,
            with a compact capacity of 2,000 for standing (1,000 for seated).
          </p>
          <p className="text-white/80 leading-relaxed mb-4">
            The venue spans 7,500 square meters, making it ideal for large-format
            activations. We set the bar for live-concert experiences by hosting
            Mahmoud Ahmed, setting the tone for world-class performances.
          </p>
          <p className="text-white/80 leading-relaxed">
            More than Kana Warehouse has hosted recurring concerts, Addis FotoFest,
            cupping ceremonies, and corporate events for Heineken, Unilever, and more.
          </p>
        </motion.div>

        {/* Events Hosted */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-white/10 bg-white/5 p-8"
        >
          <h3 className="text-2xl font-semibold mb-4">Events We Host</h3>
          <ul className="space-y-3">
            {events.map((event, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-white/80"
              >
                <span className="text-pink-700 mt-1">✓</span>
                <span>{event}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 pt-6 border-t border-white/10">
            <p className="text-sm text-white/60 mb-4">
              Inaugurated with a landmark concert by Mahmoud Ahmed
            </p>
            <a
              href="/contact"
              className="inline-block px-5 py-3 rounded-xl bg-pink-700/90 hover:bg-pink-700 transition-colors"
            >
              Book the Venue
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
