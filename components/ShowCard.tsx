"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface ShowMeta {
  id: string;
  title: string;
  cover: string;
  genre: string;
  dubbed: boolean;
}

export default function ShowCard({
  show,
  className,
  fullScreen,
}: {
  show: ShowMeta;
  className?: string;
  fullScreen?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10",
        fullScreen && "rounded-none border-0 h-screen w-full",
        className
      )}
    >
      <Link
        href={`/shows/${show.id}`}
        className={cn(
          "block focus:outline-none focus:ring-2 focus:ring-pink-600/60",
          fullScreen ? "rounded-none h-full" : "rounded-2xl"
        )}
      >
        <div
          className={cn(
            "relative w-full",
            fullScreen ? "h-full" : "aspect-[4/5]"
          )}
        >
          <Image
            src={show.cover}
            alt={show.title}
            fill
            className={cn(
              "object-cover transition-transform duration-500 group-hover:scale-105",
              fullScreen && "object-cover"
            )}
            sizes={
              fullScreen
                ? "100vw"
                : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            }
          />
          <div
            className={cn(
              "absolute inset-0",
              fullScreen
                ? "bg-gradient-to-t from-black/80 via-black/20 to-black/10"
                : "bg-gradient-to-t from-black/70 via-black/20 to-black/10"
            )}
          />
          <div
            className={cn(
              "absolute inline-flex items-center gap-2",
              fullScreen ? "top-5 left-5" : "top-3 left-3"
            )}
          >
            {show.dubbed && (
              <span className="rounded-full bg-pink-700/80 px-3 py-1 text-xs font-semibold">
                Dubbed
              </span>
            )}
            <span className="rounded-full bg-white/10 px-3 py-1 text-xs">
              {show.genre}
            </span>
          </div>
        </div>
        <div
          className={cn("p-4", fullScreen && "absolute bottom-6 left-6 p-0")}
        >
          <h3
            className={cn(
              "text-white font-semibold leading-tight",
              fullScreen
                ? "text-4xl md:text-6xl font-black drop-shadow-2xl"
                : "text-lg"
            )}
          >
            {show.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}
