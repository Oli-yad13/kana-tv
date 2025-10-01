"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const values = [
  {
    title: "STORY FIRST",
    desc: "We champion local stories that reflect Ethiopia's voice and identity through premium content.",
    color: "#3b82f6",
  },
  {
    title: "AUDIENCE OBSESSION",
    desc: "We build programming that entertains, informs, and brings people together across all platforms.",
    color: "#10b981",
  },
  {
    title: "CREATIVE EXCELLENCE",
    desc: "From dubbing to production, we aim for world-class quality in every frame and every format.",
    color: "#a855f7",
  },
  {
    title: "DIGITAL INNOVATION",
    desc: "We extend our reach beyond television with massive digital engagement across social platforms.",
    color: "#f97316",
  },
  {
    title: "CONSISTENT DELIVERY",
    desc: "Over 30 hours of fresh content weekly with zero repeats, ensuring audiences always have something new.",
    color: "#eab308",
  },
  {
    title: "FULL SPECTRUM",
    desc: "Complete mix of genres spanning dramas, movies, news, business, music, talk, health, and kids content.",
    color: "#ec4899",
  },
];

// Individual value card component
const ValueCard = ({ value, index }: { value: typeof values[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;

    if (!card || !content) return;

    const handleMouseEnter = () => {
      gsap.to(content, {
        backgroundColor: value.color,
        color: "#000000",
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(card, {
        scale: 1.02,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(content, {
        backgroundColor: "#000000",
        color: "#ffffff",
        duration: 0.3,
        ease: "power2.out"
      });
      gsap.to(card, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
      });
    };

    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [value.color]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="group relative cursor-pointer"
      ref={cardRef}
    >
      <div className="relative h-64 bg-black border-2 border-white overflow-hidden flex flex-col">
        {/* Title Bar */}
        <div className="bg-white text-black p-4 flex items-center justify-between flex-shrink-0">
          <h3 className="text-lg font-bold uppercase tracking-tight">
            {value.title}
          </h3>
          <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
            <span className="text-white text-sm font-bold">×</span>
          </div>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className="p-6 flex-1 bg-black text-white"
        >
          <p className="text-sm leading-relaxed">
            {value.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function AboutValues() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-16 bg-black">
      <div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-end mb-8">
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-black text-sm font-bold">×</span>
              </div>
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-black text-sm font-bold">⌄</span>
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase">
            OUR CORE VALUES
          </h2>
          <p className="text-lg text-white/80 uppercase">
            The principles that guide our mission
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {values.map((value, index) => (
            <ValueCard key={value.title} value={value} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
