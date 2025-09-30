"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface BlogPostMeta {
  slug: string;
  title: string;
  excerpt: string;
  cover: string;
  category: string;
  date: string;
}

export default function BlogCard({
  post,
  className,
}: {
  post: BlogPostMeta;
  className?: string;
}) {
  return (
    <motion.article
      initial={{ y: 12, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-black/60 border border-white/10",
        "shadow-[0_0_0_1px_rgba(255,255,255,0.04)]",
        "hover:shadow-[0_0_0_1px_rgba(255,255,255,0.08)]",
        className
      )}
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden">
        <Image
          src={post.cover}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/30" />
        <span
          className="absolute left-3 top-3 z-10 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
          style={{ backgroundColor: "rgba(168,5,99,0.2)", color: "#fff" }}
        >
          {post.category}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-white/70 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-white/60">
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString()}
          </time>
          <Link
            href={`/blog/${post.slug}`}
            className="text-white hover:opacity-90"
            style={{ color: "#A80563" }}
          >
            Read more →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
