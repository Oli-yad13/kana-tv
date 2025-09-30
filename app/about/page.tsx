import type { Metadata } from "next";
import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import AboutValues from "@/components/AboutValues";
import ProgrammingPillars from "@/components/ProgrammingPillars";
import DigitalReach from "@/components/DigitalReach";
import ContentStats from "@/components/ContentStats";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About | Kana TV",
  description:
    "Learn about Kana TV's mission, values, programming pillars, and digital reach. Ethiopia's leading private broadcaster with 5 core programming pillars and millions of viewers.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />
      <AboutHero />

      {/* Programming Pillars */}
      <ProgrammingPillars />

      {/* Content Statistics */}
      <ContentStats />

      {/* Digital Reach */}
      <DigitalReach />

      {/* Mission Section */}
      <section className="px-6 sm:px-10 lg:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
              Our Mission
            </h2>
            <p className="mt-4 text-white/80 leading-relaxed max-w-3xl">
              We exist to elevate Ethiopian storytelling. Through premium
              dubbing, original productions, and curated international hits,
              Kana TV brings audiences together around shared moments—where
              entertainment meets culture and community. We deliver the widest
              spectrum of premium Amharic content with zero repeats.
            </p>
          </div>
          <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 w-full rounded-2xl overflow-hidden border border-white/10">
            <Image
              src="/hero-cover.png"
              alt="Kana TV"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>

      {/* Values */}
      <AboutValues />

      {/* CTA */}
      <section className="px-6 sm:px-10 lg:px-16 pb-16">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-r from-pink-700/20 via-black to-black p-8">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Partner with Kana TV
          </h3>
          <p className="mt-2 text-white/80 max-w-3xl">
            From brand collaborations to content development, we love building
            meaningful partnerships that create impact. Reach millions of
            viewers across television and digital platforms.
          </p>
          <a
            href="/contact"
            className="inline-block mt-5 px-5 py-3 rounded-xl bg-pink-700/90 hover:bg-pink-700 transition-colors"
          >
            Get in touch
          </a>
        </div>
      </section>
    </main>
  );
}
