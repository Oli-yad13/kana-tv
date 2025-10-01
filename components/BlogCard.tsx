"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { urlFor } from "@/lib/sanity/client";
import type { BlogPostMeta } from "@/types/blog";

export default function BlogCard({
  post,
  className,
}: {
  post: BlogPostMeta;
  className?: string;
}) {
  const coverImageUrl = post.cover ? urlFor(post.cover).width(800).height(450).url() : '/placeholder.jpg';
  const categoryColor = post.category?.color || '#A80563';

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
          src={coverImageUrl}
          alt={post.cover?.alt || post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/30" />
        {post.category && (
          <span
            className="absolute left-3 top-3 z-10 inline-flex items-center rounded-full px-3 py-1 text-xs font-medium"
            style={{ 
              backgroundColor: `${categoryColor}20`, 
              color: "#fff",
              borderColor: categoryColor
            }}
          >
            {post.category.title}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="text-lg md:text-xl font-semibold text-white leading-snug">
          <Link href={`/blog/${post.slug.current}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-sm text-white/70 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs text-white/60">
          <time dateTime={post.publishedAt}>
            {new Date(post.publishedAt).toLocaleDateString()}
          </time>
          <Link
            href={`/blog/${post.slug.current}`}
            className="text-white hover:opacity-90"
            style={{ color: categoryColor }}
          >
            Read more →
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
