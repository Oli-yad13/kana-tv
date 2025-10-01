"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const achievements = [
  {
    title: "15+ HRS WEEKLY DRAMAS",
    subtitle: "Largest Drama Block",
    description:
      "Only network with 15+ hours/week of fresh episodic drama content",
    color: "#ffffff",
    textColor: "text-black",
  },
  {
    title: "10+ HRS WEEKLY LOCAL",
    subtitle: "Most Diverse Local Content Segments",
    description: "7 diverse full-spectrum genres of local content",
    color: "#4ade80",
    textColor: "text-black",
  },
  {
    title: "12-15 MILLION PRIMETIME",
    subtitle: "Primetime Domance",
    description:
      "Kana delivers the biggest weekly primetime audience in Ethiopia and extends reach with massive digital engagement",
    color: "#facc15",
    textColor: "text-black",
  },
];

const keyOfferings = [
  "International premium dramas, innovative local productions, and cutting-edge business content",
  "Proven performance with 10 years of consistent audience growth and engagement",
];

// Individual card components to fix hooks issue
const KeyOfferingCard = ({ offering, index }: { offering: string; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    
    if (!card) return;

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.02,
        backgroundColor: "#f3f4f6",
        duration: 0.3,
        ease: "power2.out"
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        backgroundColor: "white",
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
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
      className="bg-white p-6 border-2 border-black flex items-center justify-between cursor-pointer"
      ref={cardRef}
    >
      <p className="text-black font-bold text-lg leading-relaxed">
        {offering}
      </p>
      <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
        <span className="text-white text-sm font-bold">×</span>
      </div>
    </motion.div>
  );
};

const AchievementCard = ({ achievement, index }: { achievement: typeof achievements[0]; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const content = contentRef.current;

    if (!card || !content) return;

    const handleMouseEnter = () => {
      gsap.to(content, {
        backgroundColor: achievement.color,
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
  }, [achievement.color]);

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
      <div className="relative h-80 bg-black border-2 border-white overflow-hidden flex flex-col">
        {/* Title Bar */}
        <div className="bg-white text-black p-4 flex items-center justify-between flex-shrink-0">
          <h3 className="text-lg font-bold uppercase tracking-tight">
            {achievement.title}
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
          <p className="text-sm font-bold mb-2">
            {achievement.subtitle}
          </p>
          <p className="text-sm leading-relaxed">
            {achievement.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default function ContentStats() {
  return (
    <section className="px-6 sm:px-10 lg:px-16 py-16 bg-black">
      <div>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-2">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-black text-sm font-bold">×</span>
              </div>
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-black text-sm font-bold">⌄</span>
              </div>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            KANA CONTENT & PROGRAMMING MEDIA KIT
          </h2>
          <p className="text-lg text-white/80">
            Entertain, Engage, Inspire
          </p>
        </motion.div>

        {/* Key Offerings */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="space-y-4">
            {keyOfferings.map((offering, index) => (
              <KeyOfferingCard key={index} offering={offering} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Content Achievements */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
          {achievements.map((achievement, index) => (
            <AchievementCard key={achievement.title} achievement={achievement} index={index} />
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative"
        >
          <div className="bg-purple-600 p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight">
                  FULL SPECTRUM
                  <br />
                  <span className="text-yellow-400">TELEVISION</span>
                </h3>
              </div>
              <div>
                <p className="text-white text-xl leading-relaxed mb-8">
                  Kana TV is Ethiopia&apos;s leading television network, delivering world-class content across 5 core programming pillars to millions of viewers nationwide.
                </p>
                <p className="text-white/90 text-lg leading-relaxed">
                  We combine international premium dramas, innovative local productions, and cutting-edge business content to create Ethiopia&apos;s most comprehensive entertainment ecosystem.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
