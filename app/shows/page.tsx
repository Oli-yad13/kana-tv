import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import { type ShowMeta } from "@/components/ShowCard";
import ShowsClient from "@/components/ShowsClient";

export const metadata: Metadata = {
  title: "Shows | Kana TV",
  description: "Browse Kana TV shows with filters including Dubbed and genre.",
};

const allShows: ShowMeta[] = [
  {
    id: "yewef-gojo",
    title: "Yewef Gojo",
    cover: "/yewef gojo.jpg",
    genre: "Drama",
    dubbed: true,
  },
  {
    id: "lijes",
    title: "Lijes",
    cover: "/lijes.png",
    genre: "Drama",
    dubbed: true,
  },
  {
    id: "zare-ke-kana",
    title: "Zare Ke Kana",
    cover: "/27.jpg",
    genre: "Variety",
    dubbed: false,
  },
  {
    id: "megenagna",
    title: "Megenagna",
    cover: "/28.jpg",
    genre: "Talk Show",
    dubbed: false,
  },
  { id: "ezel", title: "Ezel", cover: "/29.jpg", genre: "Drama", dubbed: true },
  {
    id: "kana-jams",
    title: "Kana Jams",
    cover: "/zare ke kana.jpg",
    genre: "Music",
    dubbed: false,
  },
];

export default function ShowsPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/hero-page-1.jpg"
          alt="Browse Shows"
          width={1920}
          height={1080}
          className="h-[35vh] w-full object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Shows
            </h1>
            <p className="mt-3 text-white/80 max-w-2xl">
              Explore Kana TV programming. Filter by genre and toggle Dubbed.
            </p>
          </div>
        </div>
      </section>

      {/* Client-side filters and grid with Featured section */}
      <ShowsClient shows={allShows} />
    </main>
  );
}
