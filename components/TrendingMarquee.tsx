'use client'

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import SimpleMarquee from "./simple-marquee"

interface Show {
  coverArt: string
  title: string
  genre: string
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
]

export default function TrendingMarquee() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  const firstRow = React.useMemo(() => shows.slice(0, Math.floor(shows.length / 2)), [])
  const secondRow = React.useMemo(() => shows.slice(Math.floor(shows.length / 2)), [])

  const variants = React.useMemo(() => ({
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
  }), [])

  const textVariants = React.useMemo(() => ({
    initial: { opacity: 0 },
    hover: {
      opacity: 1,
    },
  }), [])

  const imageVariants = React.useMemo(() => ({
    initial: { opacity: 1 },
    hover: {
      opacity: 0.45,
    },
  }), [])

  const MarqueeItem = React.memo(function MarqueeItem({ show }: { show: Show }) {
    const containerClasses = cn(
      "mx-1 sm:mx-1.5 md:mx-2 cursor-pointer",
      "h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80 2xl:h-96 2xl:w-96",
      "relative flex shadow-white/20 shadow-md",
      "overflow-hidden flex-col transform-gpu bg-black"
    )

    const textContainerClasses = cn(
      "justify-end p-2 sm:p-2.5 md:p-3 h-full flex items-start flex-col",
      "leading-tight"
    )

    const imageClasses = cn("object-cover w-full h-full shadow-2xl absolute")

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
    )
  })

  return (
    <div className="flex w-full h-screen relative justify-center items-center flex-col bg-white overflow-hidden">
      {loading ? (
        <div className="text-black">Loading shows...</div>
      ) : (
        <>
          <div
            className="absolute h-1/2 sm:h-full w-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 justify-center items-center flex flex-col space-y-2 sm:space-y-3 md:space-y-4"
            style={{
              transform: "rotateX(45deg) rotateY(-15deg) rotateZ(35deg) translateZ(-200px)",
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
  )
}