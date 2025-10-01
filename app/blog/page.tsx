import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";
import { client } from "@/lib/sanity/client";
import { postsQuery, categoriesQuery } from "@/lib/sanity/queries";
import type { BlogPostMeta, Category } from "@/types/blog";

export const metadata: Metadata = {
  title: "Blog | Kana TV",
  description:
    "News, insights, and behind-the-scenes stories from Kana TV programming and team.",
};

async function getPosts(): Promise<BlogPostMeta[]> {
  try {
    const posts = await client.fetch(postsQuery);
    return posts;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
}

async function getCategories(): Promise<Category[]> {
  try {
    const categories = await client.fetch(categoriesQuery);
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

export default async function BlogIndexPage() {
  const [posts, categories] = await Promise.all([
    getPosts(),
    getCategories()
  ]);

  const categoryNames = [
    "All",
    ...categories.map(c => c.title)
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
              Stories, announcements, and insights from Ethiopia&apos;s only
              full-spectrum TV.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="px-6 sm:px-10 lg:px-16 py-6 border-b border-white/10 bg-black">
        <div className="flex flex-wrap gap-2">
          {categoryNames.map((categoryName) => (
            <button
              key={categoryName}
              className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 transition-colors text-sm"
              // Placeholder only; no client filter state in this static page
            >
              {categoryName}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="px-6 sm:px-10 lg:px-16 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
        {posts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-white/60 text-lg">No blog posts found. Check back soon!</p>
          </div>
        )}
      </section>
    </main>
  );
}
