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
}: {
  show: ShowMeta;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10",
        className
      )}
    >
      <Link
        href={`/shows/${show.id}`}
        className="block focus:outline-none focus:ring-2 focus:ring-pink-600/60 rounded-2xl"
      >
        <div className="relative aspect-[4/5] w-full">
          <Image
            src={show.cover}
            alt={show.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10" />
          <div className="absolute top-3 left-3 inline-flex items-center gap-2">
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
        <div className="p-4">
          <h3 className="text-white font-semibold text-lg leading-tight">
            {show.title}
          </h3>
        </div>
      </Link>
    </motion.div>
  );
}
