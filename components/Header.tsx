"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAVIGATION_ITEMS } from "@/constants";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
        // Close mobile menu when navbar is hidden
        setIsMenuOpen(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="sticky top-0 z-50 w-full bg-gradient-to-r from-black/95 via-black/90 to-black/95 backdrop-blur-md border-b border-white/10"
    >
      <style jsx>{`
        .custom-purple:hover {
          color: #a80563 !important;
        }
        .custom-purple-bg:hover {
          background-color: rgba(168, 5, 99, 0.2) !important;
        }
        .custom-purple-underline::after {
          background-color: #a80563 !important;
        }
      `}</style>
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between relative">
          {/* Logo - Left aligned */}
          <Link href="/" className="flex items-center group">
            <div className="relative h-12 w-16 mr-3">
              <Image
                src="/Kana_TV.png"
                alt="Kana TV Logo"
                fill
                className="object-contain group-hover:scale-105 transition-transform duration-300"
                priority
              />
            </div>
            <span className="text-3xl font-bold text-white custom-purple transition-colors duration-300">
              KANA TV
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center space-x-8">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group text-base font-medium text-white/80 hover:text-white transition-colors duration-300"
              >
                {item.name}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: "#A80563" }}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Right side - YouTube Link */}
          <div className="flex items-center">
            <a
              href="https://www.youtube.com/@KanaTelevision/featured"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-white/10 custom-purple-bg rounded-full transition-colors duration-300 group"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="group-hover:scale-110 transition-transform duration-300"
              >
                <path
                  d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
                  fill="#FF0000"
                />
                <path
                  d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                  fill="white"
                />
              </svg>
              <span className="text-base font-medium text-white custom-purple transition-colors duration-300">
                YouTube
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-full bg-white/10 custom-purple-bg transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden border-t border-white/10 pt-6 pb-6"
            >
              <div className="flex flex-col space-y-6">
                {/* Mobile Navigation Links */}
                <div className="flex flex-col space-y-4">
                  {NAVIGATION_ITEMS.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="relative group text-xl font-medium text-white/80 hover:text-white transition-colors duration-300 text-left"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                      <span
                        className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                        style={{ backgroundColor: "#A80563" }}
                      ></span>
                    </Link>
                  ))}
                </div>

                {/* Mobile YouTube Link */}
                <div className="flex flex-col space-y-4 pt-4 border-t border-white/10">
                  <a
                    href="https://www.youtube.com/@KanaTelevision/featured"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-3 bg-white/10 custom-purple-bg rounded-lg transition-colors duration-300 group"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:scale-110 transition-transform duration-300"
                    >
                      <path
                        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
                        fill="#FF0000"
                      />
                      <path
                        d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                        fill="white"
                      />
                    </svg>
                    <span className="text-white font-medium text-lg custom-purple transition-colors duration-300">
                      YouTube
                    </span>
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
