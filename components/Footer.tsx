"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Footer() {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: false, margin: "-100px" });

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const bottomBarVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        delay: 0.3,
      },
    },
  };

  return (
    <motion.footer
      ref={footerRef}
      className="bg-black border-t border-white/10 overflow-hidden"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="px-6 sm:px-10 lg:px-16 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <motion.div
            className="lg:col-span-2"
            variants={sectionVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className="flex items-center gap-3 mb-4"
              variants={linkVariants}
            >
              <motion.div
                className="relative h-12 w-16"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src="/Kana_TV.png"
                  alt="Kana TV Logo"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <motion.h3
                className="text-2xl font-bold text-white"
                variants={linkVariants}
              >
                KANA TV
              </motion.h3>
            </motion.div>
            <motion.p
              className="text-white/70 text-sm leading-relaxed max-w-md"
              variants={linkVariants}
            >
              Ethiopia&apos;s only full-spectrum TV — where we entertain,
              engage, and inspire through compelling drama, variety shows, and
              cultural programming.
            </motion.p>
            <motion.div className="mt-6" variants={linkVariants}>
              <motion.a
                href="https://www.youtube.com/@KanaTelevision/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-pink-700/20 hover:bg-pink-700/30 rounded-lg transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(190, 24, 93, 0.3)",
                  boxShadow: "0 4px 20px rgba(190, 24, 93, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <path
                    d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"
                    fill="#FF0000"
                  />
                  <path
                    d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"
                    fill="white"
                  />
                </motion.svg>
                <span className="text-white font-medium">
                  Subscribe on YouTube
                </span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={sectionVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.h4
              className="text-white font-semibold mb-4"
              variants={linkVariants}
            >
              Quick Links
            </motion.h4>
            <motion.ul
              className="space-y-3"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.7,
                  },
                },
              }}
            >
              {[
                { href: "/shows", text: "All Shows" },
                { href: "/blog", text: "Blog" },
                { href: "/about", text: "About Us" },
                { href: "/contact", text: "Contact" },
              ].map((link) => (
                <motion.li
                  key={link.href}
                  variants={linkVariants}
                  whileHover={{ x: 10, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-all duration-300 text-sm block py-1 hover:bg-white/5 rounded px-2 -mx-2"
                  >
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={sectionVariants}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <motion.h4
              className="text-white font-semibold mb-4"
              variants={linkVariants}
            >
              Contact
            </motion.h4>
            <motion.ul
              className="space-y-3 text-sm text-white/70"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.9,
                  },
                },
              }}
            >
              {[
                "Email: info@kanatv.et",
                "Press: press@kanatv.et",
                "Partnerships: partners@kanatv.et",
                "Addis Ababa, Ethiopia",
              ].map((contact) => (
                <motion.li
                  key={contact}
                  variants={linkVariants}
                  whileHover={{ x: 10, scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="block py-1 hover:bg-white/5 rounded px-2 -mx-2 transition-all duration-300 cursor-pointer">
                    {contact}
                  </span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/10"
          variants={bottomBarVariants}
        >
          <motion.div
            className="flex flex-col sm:flex-row justify-between items-center gap-4"
            variants={linkVariants}
          >
            <motion.p
              className="text-white/60 text-sm"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              © 2025 Kana TV. All rights reserved.
            </motion.p>
            <motion.div
              className="flex items-center gap-6 text-sm"
              variants={linkVariants}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/privacy"
                  className="text-white/60 hover:text-white transition-all duration-300 py-1 px-2 rounded hover:bg-white/5"
                >
                  Privacy Policy
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/terms"
                  className="text-white/60 hover:text-white transition-all duration-300 py-1 px-2 rounded hover:bg-white/5"
                >
                  Terms of Service
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
