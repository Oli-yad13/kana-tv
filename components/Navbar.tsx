"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Bell, Star, TrendingUp, Film, Tv } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const categories = [
    { name: "Trending", icon: TrendingUp, href: "/trending" },
    { name: "Movies", icon: Film, href: "/movies" },
    { name: "TV Shows", icon: Tv, href: "/tv-shows" },
    { name: "New Releases", icon: Star, href: "/new-releases" },
    { name: "Drama", icon: Film, href: "/drama" },
    { name: "Comedy", icon: Tv, href: "/comedy" },
    { name: "Documentary", icon: Film, href: "/documentary" },
    { name: "Music", icon: Star, href: "/music" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-black/90 via-black/85 to-black/90 backdrop-blur-lg border-b border-white/10">
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .custom-purple:hover {
          color: #a80563 !important;
        }
        .custom-purple-bg:hover {
          background-color: rgba(168, 5, 99, 0.2) !important;
        }
      `}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-10 w-12 mr-3">
              <Image
                src="/Kana_TV.png"
                alt="Kana TV Logo"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <h1 className="text-3xl font-bold text-white custom-purple transition-colors duration-300">
              KANA TV
            </h1>
          </Link>

          {/* Desktop Navigation - Scrollable */}
          <div className="hidden lg:flex items-center space-x-6 overflow-x-auto scrollbar-hide">
            {categories.map((category) => (
              <Link
                key={category.name}
                href={category.href}
                className="flex items-center gap-2 text-base font-medium text-white/80 hover:text-white transition-colors duration-300 group whitespace-nowrap"
              >
                <category.icon
                  size={18}
                  className="custom-purple transition-colors duration-300"
                />
                {category.name}
              </Link>
            ))}
          </div>

          {/* Right side - Actions */}
          <div className="flex items-center space-x-3">
            {/* Notifications */}
            <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-white/10 custom-purple-bg transition-colors duration-300 group relative">
              <Bell
                size={20}
                className="text-white custom-purple transition-colors duration-300"
              />
              <span
                className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                style={{ backgroundColor: "#A80563" }}
              ></span>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-full bg-white/10 custom-purple-bg transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={20} className="text-white" />
              ) : (
                <Menu size={20} className="text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-white/10 pt-4 pb-4"
            >
              <div className="flex flex-col space-y-4">
                {/* Mobile Categories */}
                <div className="grid grid-cols-2 gap-3">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="flex items-center gap-3 px-4 py-3 bg-white/10 custom-purple-bg rounded-lg transition-colors duration-300 group"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <category.icon
                        size={20}
                        className="text-white custom-purple transition-colors duration-300"
                      />
                      <span className="text-white font-medium text-base">
                        {category.name}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
