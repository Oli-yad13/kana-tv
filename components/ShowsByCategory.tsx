"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import ShowCard from "@/components/ShowCard";
import { showCategories } from "@/lib/showsData";

export default function ShowsByCategory() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const categoryRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = categoryRefs.current[categoryId];
    if (element) {
      const navHeight = 80; // Approximate height of sticky nav
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Category Navigation */}
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-white/10">
        <div className="px-6 sm:px-10 lg:px-16 py-4">
          <div className="flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {showCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => scrollToCategory(category.id)}
                className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all whitespace-nowrap ${
                  activeCategory === category.id
                    ? "bg-pink-700 text-white"
                    : "bg-white/5 text-white/70 hover:bg-white/10"
                }`}
              >
                {category.title}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Category Sections */}
      <div>
        {showCategories.map((category, index) => (
          <section
            key={category.id}
            ref={(el) => {
              if (el) categoryRefs.current[category.id] = el;
            }}
            className="py-12"
          >
            {/* Category Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 px-6 sm:px-10 lg:px-16"
            >
              <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
                {category.title}
              </h2>
              <p className="text-white/70 text-lg max-w-3xl">
                {category.description}
              </p>
              <div className="mt-2 text-pink-700 text-sm font-medium">
                {category.shows.length} {category.shows.length === 1 ? "show" : "shows"}
              </div>
            </motion.div>

            {/* Shows - Full Screen Cards */}
            <div className="flex flex-col">
              {category.shows.map((show, showIndex) => (
                <motion.div
                  key={show.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: showIndex * 0.05 }}
                >
                  <ShowCard show={show} fullScreen />
                </motion.div>
              ))}
            </div>

            {/* Divider */}
            {index < showCategories.length - 1 && (
              <div className="mt-12 border-t border-white/10 mx-6 sm:mx-10 lg:mx-16" />
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
