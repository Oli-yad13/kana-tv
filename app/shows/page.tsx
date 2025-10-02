import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import ShowsByCategory from "@/components/ShowsByCategory";

export const metadata: Metadata = {
  title: "Shows | Kana TV",
  description: "Browse Kana TV shows by category - Dubbed Dramas, Original Content, News, Music, and more.",
};

export default function ShowsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/hero-page-1.jpg"
          alt="Shows"
          width={1920}
          height={600}
          className="h-[40vh] w-full object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 flex items-end px-6 sm:px-10 lg:px-16 pb-10">
          <div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tight">
              Shows
            </h1>
            <p className="mt-3 text-lg text-white/90 max-w-2xl">
              Ethiopia's full-spectrum TV - Dubbed dramas, original content, news, documentaries, music, and more
            </p>
          </div>
        </div>
      </section>

      {/* Shows by Category */}
      <ShowsByCategory />
    </main>
  );
}
