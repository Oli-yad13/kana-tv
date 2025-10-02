import type { Metadata } from "next";
import Header from "@/components/Header";
import AboutHero from "@/components/AboutHero";
import ProgrammingPillars from "@/components/ProgrammingPillars";
import DigitalReach from "@/components/DigitalReach";
import ContentStats from "@/components/ContentStats";
import KanaWarehouse from "@/components/KanaWarehouse";

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

      {/* Content Statistics */}
      <ContentStats />

      {/* Programming Pillars */}
      <ProgrammingPillars />

      {/* Digital Reach */}
      <DigitalReach />

      {/* Kana Warehouse */}
      <KanaWarehouse />

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

