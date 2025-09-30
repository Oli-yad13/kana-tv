import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import BlogCard, { type BlogPostMeta } from "@/components/BlogCard";

export const metadata: Metadata = {
  title: "Blog | Kana TV",
  description:
    "News, insights, and behind-the-scenes stories from Kana TV programming and team.",
};

const posts: BlogPostMeta[] = [
  {
    slug: "kana-content-universe-2025",
    title: "Inside Kana's 2025 Content Universe",
    excerpt:
      "A look at the programming slate shaping entertainment across Ethiopia—drama, music, and unscripted moments.",
    cover: "/27.jpg",
    category: "Announcements",
    date: "2025-09-30",
  },
  {
    slug: "studio-upgrades-and-future-tech",
    title: "Studio upgrades and the future of broadcast tech",
    excerpt:
      "How production workflows, motion graphics, and audio stacks are evolving at Kana TV.",
    cover: "/28.jpg",
    category: "Production",
    date: "2025-09-28",
  },
  {
    slug: "audience-stories-and-community",
    title: "Audience stories and community impact",
    excerpt:
      "Highlights from viewers and how local storytelling continues to resonate.",
    cover: "/29.jpg",
    category: "Community",
    date: "2025-09-26",
  },
  {
    slug: "music-nights-behind-the-scenes",
    title: "Music nights: behind the scenes",
    excerpt:
      "From stage to screen—capturing atmosphere, energy, and performance.",
    cover: "/zare ke kana.jpg",
    category: "Music",
    date: "2025-09-24",
  },
];

export default function BlogIndexPage() {
  const categories = [
    "All",
    ...Array.from(new Set(posts.map((p) => p.category))),
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/hero-page-1.jpg"
          alt="Kana Blog Hero"
          width={1920}
          height={1080}
          className="h-[40vh] w-full object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Kana TV Blog
            </h1>
            <p className="mt-3 text-white/80 max-w-2xl">
              Stories, announcements, and insights from Ethiopia's only
              full-spectrum TV.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 sm:px-10 lg:px-16 py-6 border-b border-white/10 bg-black">
        <div className="flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 transition-colors text-sm"
              // Placeholder only; no client filter state in this static page
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 sm:px-10 lg:px-16 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
