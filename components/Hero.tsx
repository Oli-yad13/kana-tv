"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <motion.section
      className="relative w-full overflow-hidden mt-24"
      style={{
        fontFamily: "Helvetica, Arial, sans-serif",
        height: "calc(100vh - 6rem)",
      }}
    >
      {/* Hero Image - First page of PDF */}
      <div className="absolute inset-0">
        <Image
          width={1920}
          height={1080}
          src="/hero-page-1.jpg"
          alt="Kana TV 2025 Programming"
          className="w-full h-full object-cover"
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/20 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Kana TV Logo - Right side near DRAMA text */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 pointer-events-none z-10">
          <motion.div
            className="relative w-32 h-32 md:w-40 md:h-40"
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 0.4, scale: 1, x: 0 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <Image
              src="/Kana_TV.png"
              alt="Kana TV Logo"
              fill
              className="object-contain drop-shadow-2xl"
              style={{
                filter: "blur(0.5px)",
              }}
            />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/15 via-purple-500/15 to-blue-500/15 rounded-full blur-lg"></div>
          </motion.div>
        </div>

        {/* Interactive mouse-following elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Dynamic floating orbs that follow mouse */}
          <motion.div
            className="absolute w-4 h-4 bg-gradient-to-r from-pink-400/40 to-rose-400/40 rounded-full blur-sm"
            animate={{
              x: mousePosition.x * 0.5 - 8,
              y: mousePosition.y * 0.3 - 8,
            }}
            transition={{ type: "spring", stiffness: 50, damping: 15 }}
          />
          <motion.div
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-400/50 to-cyan-400/50 rounded-full blur-sm"
            animate={{
              x: mousePosition.x * 0.3 + 20,
              y: mousePosition.y * 0.4 + 15,
            }}
            transition={{ type: "spring", stiffness: 30, damping: 20 }}
          />
          <motion.div
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400/60 to-violet-400/60 rounded-full blur-sm"
            animate={{
              x: mousePosition.x * 0.4 - 15,
              y: mousePosition.y * 0.5 - 10,
            }}
            transition={{ type: "spring", stiffness: 40, damping: 18 }}
          />

          {/* Additional floating orbs for more depth */}
          <motion.div
            className="absolute w-6 h-6 bg-gradient-to-r from-yellow-400/30 to-orange-400/30 rounded-full blur-md"
            animate={{
              x: mousePosition.x * 0.2 + 50,
              y: mousePosition.y * 0.6 - 20,
              scale: [1, 1.2, 1],
            }}
            transition={{
              x: { type: "spring", stiffness: 25, damping: 20 },
              y: { type: "spring", stiffness: 25, damping: 20 },
              scale: { duration: 3, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute w-5 h-5 bg-gradient-to-r from-green-400/35 to-teal-400/35 rounded-full blur-sm"
            animate={{
              x: mousePosition.x * 0.6 - 30,
              y: mousePosition.y * 0.2 + 40,
              rotate: [0, 180, 360],
            }}
            transition={{
              x: { type: "spring", stiffness: 35, damping: 18 },
              y: { type: "spring", stiffness: 35, damping: 18 },
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            }}
          />

          {/* Animated light rays with mouse interaction */}
          <motion.div
            className="absolute top-0 left-1/4 w-0.5 h-40 bg-gradient-to-b from-pink-400/40 via-white/20 to-transparent transform -rotate-12 blur-sm"
            animate={{
              opacity: [0.3, 0.7, 0.3],
              scaleY: [1, 1.2, 1],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-0 right-1/3 w-0.5 h-32 bg-gradient-to-b from-blue-400/40 via-white/15 to-transparent transform rotate-12 blur-sm"
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scaleY: [1, 1.3, 1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />

          {/* Floating geometric shapes */}
          <motion.div
            className="absolute top-1/6 right-1/6 w-16 h-16 border border-white/10 rounded-full"
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              scale: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          <motion.div
            className="absolute bottom-1/6 left-1/6 w-12 h-12 border border-white/8 rounded-full"
            animate={{
              rotate: -360,
              scale: [1, 0.9, 1],
            }}
            transition={{
              rotate: { duration: 25, repeat: Infinity, ease: "linear" },
              scale: {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              },
            }}
          />

          {/* Enhanced particle system */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-1 h-1 bg-white/30 rounded-full"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 60, 0],
              opacity: [0, 1, 0.5, 0],
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/3 left-1/3 w-1 h-1 bg-pink-400/40 rounded-full"
            animate={{
              x: [0, -80, 120, 0],
              y: [0, 100, -40, 0],
              opacity: [0, 0.8, 0.3, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
          <motion.div
            className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-cyan-400/50 rounded-full"
            animate={{
              x: [0, 60, -90, 0],
              y: [0, -120, 80, 0],
              opacity: [0, 0.9, 0.4, 0],
              scale: [0.5, 1.5, 0.8, 0.5],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-purple-400/60 rounded-full"
            animate={{
              x: [0, -60, 90, 0],
              y: [0, 80, -60, 0],
              opacity: [0, 0.7, 0.2, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4,
            }}
          />

          {/* Floating text particles */}
          <motion.div
            className="absolute top-1/4 right-1/4 text-white/20 text-xs font-bold"
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.6, 0.2],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            TV
          </motion.div>
          <motion.div
            className="absolute bottom-1/3 right-1/5 text-white/15 text-xs font-bold"
            animate={{
              y: [0, 15, 0],
              opacity: [0.15, 0.5, 0.15],
              rotate: [0, -3, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            CONTENT
          </motion.div>

          {/* Dynamic connection lines */}
          <motion.div
            className="absolute top-1/2 left-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-pink-400/30 to-transparent"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/3 w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400/30 to-transparent transform rotate-45"
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5,
            }}
          />

          {/* Mini video screens floating around */}
          <motion.div
            className="absolute top-1/4 left-1/6 w-16 h-12 bg-black/80 rounded-lg border border-white/20 backdrop-blur-sm"
            animate={{
              y: [0, -10, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">KANA</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute top-2/3 right-1/4 w-20 h-14 bg-black/80 rounded-lg border border-white/20 backdrop-blur-sm"
            animate={{
              y: [0, 8, 0],
              opacity: [0.6, 0.9, 0.6],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">TV</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-1/3 left-1/3 w-18 h-12 bg-black/80 rounded-lg border border-white/20 backdrop-blur-sm"
            animate={{
              x: [0, 5, 0],
              y: [0, -5, 0],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-yellow-500/30 to-orange-500/30 rounded-lg flex items-center justify-center">
              <span className="text-white text-xs font-bold">2025</span>
            </div>
          </motion.div>

          {/* Floating show thumbnails */}
          <motion.div
            className="absolute top-1/6 right-1/6 w-14 h-10 bg-black/70 rounded border border-pink-400/40 backdrop-blur-sm"
            animate={{
              rotate: [0, 2, 0],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-pink-500/40 to-rose-500/40 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">DRAMA</span>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 right-1/5 w-16 h-11 bg-black/70 rounded border border-blue-400/40 backdrop-blur-sm"
            animate={{
              rotate: [0, -1, 0],
              scale: [1, 1.03, 1],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded flex items-center justify-center">
              <span className="text-white text-xs font-bold">NEWS</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
        {/* Left side - Logo and Text content */}
        <div className="text-white max-w-4xl sm:max-w-5xl lg:max-w-6xl relative pl-8 sm:pl-12 lg:pl-16 pr-8 sm:pr-12 lg:pr-16">
          {/* Logo positioned to overlap with text */}
          <div className="hidden sm:block absolute -top-4 -right-4 z-20">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 opacity-0">
              <Image
                src="/Kana_TV.png"
                alt="Kana TV Logo"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </div>

          <motion.div
            className="space-y-2 relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
              style={{ fontWeight: "900", letterSpacing: "-0.03em" }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="relative inline-block"
                whileHover={{ rotateY: 5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-white via-gray-50 to-white bg-clip-text text-transparent drop-shadow-2xl"
                  animate={{
                    backgroundPosition: ["0%", "100%", "0%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  KANA
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-rose-400/20 to-red-400/20 blur-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-pink-400/10 via-rose-400/10 to-red-400/10 blur-2xl"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.span>
            </motion.h1>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
              style={{ fontWeight: "900", letterSpacing: "-0.03em" }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.span
                className="relative inline-block group"
                whileHover={{ scale: 1.1, rotate: 1, y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-white to-gray-50 text-black px-4 py-2 rounded-2xl shadow-2xl inline-block border border-white/20"
                  animate={{
                    boxShadow: [
                      "0 10px 30px rgba(0,0,0,0.3)",
                      "0 20px 40px rgba(0,0,0,0.4)",
                      "0 10px 30px rgba(0,0,0,0.3)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  CONTENT
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-2xl blur-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-2xl blur-xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.5,
                  }}
                />
              </motion.span>
            </motion.h2>
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
              style={{ fontWeight: "900", letterSpacing: "-0.03em" }}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.span
                className="relative inline-block"
                whileHover={{ rotateY: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.span
                  className="bg-gradient-to-r from-white via-gray-50 to-white bg-clip-text text-transparent drop-shadow-2xl"
                  animate={{
                    backgroundPosition: ["100%", "0%", "100%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                >
                  UNIVERSE
                </motion.span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-violet-400/20 to-indigo-400/20 blur-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute -inset-2 bg-gradient-to-r from-purple-400/10 via-violet-400/10 to-indigo-400/10 blur-2xl"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.2, 0.5, 0.2],
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  }}
                />
              </motion.span>
            </motion.h2>
          </motion.div>
          <motion.div
            className="mt-6 space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.div
              className="relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide w-full leading-relaxed"
                style={{
                  fontWeight: "600",
                  lineHeight: "1.5",
                  fontFamily: "Helvetica, Arial, sans-serif",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <motion.span
                  className="relative inline-block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="bg-gradient-to-r from-white via-gray-50 to-white bg-clip-text text-transparent drop-shadow-2xl">
                    ETHIOPIA&apos;S ONLY FULL-SPECTRUM TV
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-teal-400/20 blur-lg"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.span>
              </motion.div>
              <motion.div
                className="w-32 h-1 bg-gradient-to-r from-pink-400/60 via-rose-400/40 to-red-400/60 mt-2 rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              />
            </motion.div>
            <motion.div
              className="flex flex-wrap gap-3 text-sm md:text-base lg:text-lg font-bold tracking-wider"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.span
                className="relative group bg-gradient-to-r from-pink-500/25 via-rose-500/20 to-red-500/25 backdrop-blur-md text-pink-100 px-4 py-2 rounded-xl border border-pink-400/40"
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  boxShadow: "0 20px 40px rgba(236, 72, 153, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span
                  className="relative z-10 font-extrabold"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  ENTERTAIN
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-xl blur"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
              <motion.span
                className="relative group bg-gradient-to-r from-blue-500/25 via-cyan-500/20 to-teal-500/25 backdrop-blur-md text-blue-100 px-4 py-2 rounded-xl border border-blue-400/40"
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span
                  className="relative z-10 font-extrabold"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  ENGAGE
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-xl blur"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
              <motion.span
                className="relative group bg-gradient-to-r from-purple-500/25 via-violet-500/20 to-indigo-500/25 backdrop-blur-md text-purple-100 px-4 py-2 rounded-xl border border-purple-400/40"
                whileHover={{
                  scale: 1.1,
                  y: -4,
                  boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span
                  className="relative z-10 font-extrabold"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  INSPIRE
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl blur"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Top right - Hero cover image with enhanced animations */}
      <motion.div
        className="absolute -top-32 -right-32 z-20 hidden sm:block"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
        whileHover={{ scale: 1.05, rotate: 2 }}
      >
        <motion.div
          className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[500px] lg:h-[500px]"
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Image
            src="/hero-cover.png"
            alt="Hero Cover"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
          {/* Enhanced glowing effect around the image */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-blue-400/20 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-cyan-400/15 via-pink-400/15 to-purple-400/15 rounded-full blur-2xl"
            animate={{
              scale: [1.1, 1.3, 1.1],
              opacity: [0.2, 0.4, 0.2],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
          <motion.div
            className="absolute -inset-4 bg-gradient-to-r from-yellow-400/10 via-pink-400/10 to-cyan-400/10 rounded-full blur-xl"
            animate={{
              scale: [0.8, 1.1, 0.8],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          />
        </motion.div>
      </motion.div>

      {/* Mobile centered layout */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:hidden">
        <div
          className="text-center text-white w-full"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          <div className="space-y-2">
            <h1
              className="text-4xl font-black tracking-tight leading-tight"
              style={{ fontWeight: "900", letterSpacing: "-0.03em" }}
            >
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-white via-gray-50 to-white bg-clip-text text-transparent drop-shadow-2xl">
                  KANA
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-rose-400/20 to-red-400/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
              </span>
            </h1>
            <h2
              className="text-4xl font-black tracking-tight leading-tight"
              style={{ fontWeight: "900", letterSpacing: "-0.03em" }}
            >
              <span className="relative inline-block group">
                <span className="bg-gradient-to-r from-white to-gray-50 text-black px-3 py-1 rounded-xl shadow-2xl transform hover:scale-110 hover:rotate-1 transition-all duration-500 inline-block hover:shadow-3xl border border-white/20">
                  CONTENT
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </span>
            </h2>
            <h2
              className="text-4xl font-black tracking-tight leading-tight"
              style={{ fontWeight: "900", letterSpacing: "-0.03em" }}
            >
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-white via-gray-50 to-white bg-clip-text text-transparent drop-shadow-2xl">
                  UNIVERSE
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-violet-400/20 to-indigo-400/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
              </span>
            </h2>
          </div>
          <div className="mt-6 space-y-4">
            <div className="relative">
              <div
                className="text-lg font-semibold tracking-wide w-full leading-relaxed"
                style={{
                  fontWeight: "600",
                  lineHeight: "1.5",
                  fontFamily: "Helvetica, Arial, sans-serif",
                }}
              >
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-white via-gray-50 to-white bg-clip-text text-transparent drop-shadow-2xl">
                    ETHIOPIA&apos;S ONLY FULL-SPECTRUM TV
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-teal-400/20 blur-lg opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
                </span>
              </div>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400/60 via-rose-400/40 to-red-400/60 mt-2 mx-auto rounded-full"></div>
            </div>
            <div className="flex flex-wrap gap-2 text-sm font-bold tracking-wider justify-center">
              <span className="relative group bg-gradient-to-r from-pink-500/25 via-rose-500/20 to-red-500/25 backdrop-blur-md text-pink-100 px-3 py-1.5 rounded-lg border border-pink-400/40 hover:from-pink-500/35 hover:via-rose-500/30 hover:to-red-500/35 hover:text-white transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-pink-500/30 hover:-translate-y-1">
                <span
                  className="relative z-10 font-extrabold"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  ENTERTAIN
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </span>
              <span className="relative group bg-gradient-to-r from-blue-500/25 via-cyan-500/20 to-teal-500/25 backdrop-blur-md text-blue-100 px-3 py-1.5 rounded-lg border border-blue-400/40 hover:from-blue-500/35 hover:via-cyan-500/30 hover:to-teal-500/35 hover:text-white transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1">
                <span
                  className="relative z-10 font-extrabold"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  ENGAGE
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </span>
              <span className="relative group bg-gradient-to-r from-purple-500/25 via-violet-500/20 to-indigo-500/25 backdrop-blur-md text-purple-100 px-3 py-1.5 rounded-lg border border-purple-400/40 hover:from-purple-500/35 hover:via-violet-500/30 hover:to-indigo-500/35 hover:text-white transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-1">
                <span
                  className="relative z-10 font-extrabold"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  INSPIRE
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
