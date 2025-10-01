"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";
import SimpleMarquee from "./simple-marquee";
import { gsap } from "gsap";

interface Show {
  coverArt: string;
  title: string;
  genre: string;
}

const shows: Show[] = [
  {
    coverArt: "/yewef gojo.jpg",
    title: "Yewef Gojo",
    genre: "Drama",
  },
  {
    coverArt: "/lijes.png",
    title: "Lijes",
    genre: "Drama",
  },
  {
    coverArt: "/27.jpg",
    title: "Zare Ke Kana",
    genre: "Variety",
  },
  {
    coverArt: "/28.jpg",
    title: "Megenagna",
    genre: "Talk Show",
  },
  {
    coverArt: "/29.jpg",
    title: "Ezel",
    genre: "Drama",
  },
  {
    coverArt: "/zare ke kana.jpg",
    title: "Kana Jams",
    genre: "Music",
  },
];

export default function TrendingMarquee() {
  const [loading, setLoading] = useState(true);
  const horizontalLinesRef = useRef<(HTMLDivElement | null)[]>([]);
  const verticalLinesRef = useRef<(HTMLDivElement | null)[]>([]);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoading(false);

    // GSAP animations for horizontal lines with pinkish flow
    if (horizontalLinesRef.current.length > 0) {
      horizontalLinesRef.current.forEach((line, index) => {
        if (line) {
          // Create a timeline for smooth color transition
          const tl = gsap.timeline({ repeat: -1 });
          
          tl.to(line, {
            opacity: 0.2,
            scaleX: 1.02,
            backgroundColor: "rgba(236, 72, 153, 0.08)", // pink-500 with low opacity
            duration: 4 + index * 0.5,
            ease: "power1.inOut",
            delay: index * 0.8
          })
          .to(line, {
            opacity: 0.05,
            scaleX: 1,
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            duration: 4 + index * 0.5,
            ease: "power1.inOut"
          });
        }
      });
    }

    // GSAP animations for vertical lines with pinkish flow
    if (verticalLinesRef.current.length > 0) {
      verticalLinesRef.current.forEach((line, index) => {
        if (line) {
          // Create a timeline for smooth color transition
          const tl = gsap.timeline({ repeat: -1 });
          
          tl.to(line, {
            opacity: 0.2,
            scaleY: 1.02,
            backgroundColor: "rgba(219, 39, 119, 0.08)", // pink-600 with low opacity
            duration: 4.5 + index * 0.5,
            ease: "power1.inOut",
            delay: index * 1
          })
          .to(line, {
            opacity: 0.05,
            scaleY: 1,
            backgroundColor: "rgba(0, 0, 0, 0.05)",
            duration: 4.5 + index * 0.5,
            ease: "power1.inOut"
          });
        }
      });
    }

    // Subtle animation for the entire grid with pink tint
    if (gridRef.current) {
      gsap.to(gridRef.current, {
        opacity: 0.4,
        filter: "hue-rotate(5deg)",
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }
  }, []);

  const firstRow = React.useMemo(
    () => shows.slice(0, Math.floor(shows.length / 2)),
    []
  );
  const secondRow = React.useMemo(
    () => shows.slice(Math.floor(shows.length / 2)),
    []
  );

  const variants = React.useMemo(
    () => ({
      initial: {
        y: "0px",
        x: "0px",
        scale: 1,
        opacity: 1,
      },
      hover: {
        y: "-12px",
        x: "-12px",
        scale: 1.05,
      },
    }),
    []
  );

  const textVariants = React.useMemo(
    () => ({
      initial: { opacity: 0 },
      hover: {
        opacity: 1,
      },
    }),
    []
  );

  const imageVariants = React.useMemo(
    () => ({
      initial: { opacity: 1 },
      hover: {
        opacity: 0.45,
      },
    }),
    []
  );

  const MarqueeItem = React.memo(function MarqueeItem({
    show,
  }: {
    show: Show;
  }) {
    const containerClasses = cn(
      "mx-1 sm:mx-1.5 md:mx-2 cursor-pointer",
      "h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96",
      "relative flex shadow-white/20 shadow-md",
      "overflow-hidden flex-col transform-gpu bg-black"
    );

    const textContainerClasses = cn(
      "justify-end p-2 sm:p-2.5 md:p-3 h-full flex items-start flex-col",
      "leading-tight"
    );

    const imageClasses = cn("object-cover w-full h-full shadow-2xl absolute");

    return (
      <motion.div
        className={containerClasses}
        initial="initial"
        whileHover="hover"
        variants={variants}
      >
        <motion.div className={textContainerClasses} variants={textVariants}>
          <h3 className="text-white text-sm sm:text-base md:text-lg font-medium z-30">
            {show.title}
          </h3>
          <p className="text-neutral-200 text-xs sm:text-sm md:text-base z-30">
            {show.genre}
          </p>
        </motion.div>
        <motion.img
          src={show.coverArt}
          alt={`${show.title}`}
          draggable={false}
          className={imageClasses}
          variants={imageVariants}
        />
      </motion.div>
    );
  });

  return (
    <div className="flex w-full h-screen relative justify-center items-center flex-col overflow-hidden bg-white">
      {/* Swiss Style Brutal Grid Background */}
      <div className="absolute inset-0 z-0">
        {/* Large brutal grid boxes */}
        <div 
          ref={gridRef}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.08) 2px, transparent 2px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 2px, transparent 2px)
            `,
            backgroundSize: '200px 200px',
            opacity: 0.3
          }}
        />
        
        {/* Medium grid for more structure */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.04) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px'
          }}
        />

        {/* GSAP Animated brutal horizontal lines */}
        <div
          ref={(el) => { horizontalLinesRef.current[0] = el; }}
          className="absolute top-[20%] left-0 right-0 h-[2px] bg-black/5"
          style={{ transformOrigin: "center" }}
        />
        <div
          ref={(el) => { horizontalLinesRef.current[1] = el; }}
          className="absolute top-[40%] left-0 right-0 h-[2px] bg-black/5"
          style={{ transformOrigin: "center" }}
        />
        <div
          ref={(el) => { horizontalLinesRef.current[2] = el; }}
          className="absolute top-[60%] left-0 right-0 h-[2px] bg-black/5"
          style={{ transformOrigin: "center" }}
        />
        <div
          ref={(el) => { horizontalLinesRef.current[3] = el; }}
          className="absolute top-[80%] left-0 right-0 h-[2px] bg-black/5"
          style={{ transformOrigin: "center" }}
        />

        {/* GSAP Animated brutal vertical lines */}
        <div
          ref={(el) => { verticalLinesRef.current[0] = el; }}
          className="absolute top-0 bottom-0 left-[20%] w-[2px] bg-black/5"
          style={{ transformOrigin: "center" }}
        />
        <div
          ref={(el) => { verticalLinesRef.current[1] = el; }}
          className="absolute top-0 bottom-0 left-[40%] w-[2px] bg-black/5"
          style={{ transformOrigin: "center" }}
        />
        <div
          ref={(el) => { verticalLinesRef.current[2] = el; }}
          className="absolute top-0 bottom-0 left-[60%] w-[2px] bg-black/5"
          style={{ transformOrigin: "center" }}
        />
        <div
          ref={(el) => { verticalLinesRef.current[3] = el; }}
          className="absolute top-0 bottom-0 left-[80%] w-[2px] bg-black/5"
          style={{ transformOrigin: "center" }}
        />

        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/20 via-transparent to-gray-50/20" />
      </div>

      {loading ? (
        <div className="text-black relative z-10 font-bold">Loading shows...</div>
      ) : (
        <>
          <div
            className="absolute h-1/2 sm:h-full w-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center flex flex-col space-y-2 sm:space-y-3 md:space-y-4 z-10"
            style={{
              transform:
                "rotateX(45deg) rotateY(-15deg) rotateZ(35deg) translateZ(-200px)",
            }}
          >
            <SimpleMarquee
              className="w-full"
              baseVelocity={6}
              repeat={5}
              draggable={false}
              slowDownFactor={0.3}
              slowdownOnHover
              direction="left"
              useScrollVelocity={false}
            >
              {firstRow.map((show, i) => (
                <MarqueeItem key={i} show={show} />
              ))}
            </SimpleMarquee>

            <SimpleMarquee
              className="w-full"
              baseVelocity={6}
              repeat={5}
              draggable={false}
              slowDownFactor={0.3}
              slowdownOnHover
              direction="right"
              useScrollVelocity={false}
            >
              {secondRow.map((show, i) => (
                <MarqueeItem key={i} show={show} />
              ))}
            </SimpleMarquee>
          </div>
        </>
      )}
    </div>
  );
}
