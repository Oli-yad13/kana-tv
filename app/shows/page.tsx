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
  // Dubbed Dramas
  {
    id: "black-money-love",
    title: "Black Money Love",
    cover: "/shows/black-money-love.jpg",
    genre: "Drama",
    dubbed: true,
  },
  {
    id: "ashabi-kehf",
    title: "Aşhabi Kehf",
    cover: "/shows/ashabi-kehf.jpg",
    genre: "Drama",
    dubbed: true,
  },
  {
    id: "brave-woman",
    title: "Brave Woman",
    cover: "/shows/brave-woman.jpg",
    genre: "Drama",
    dubbed: true,
  },
  {
    id: "hagadires",
    title: "Hagadireş",
    cover: "/shows/hagadires.jpg",
    genre: "Drama",
    dubbed: true,
  },
  {
    id: "ezel",
    title: "Ezel",
    cover: "/29.jpg",
    genre: "Drama",
    dubbed: true,
  },
  {
    id: "yewef-gojo",
    title: "Yewef Gojo",
    cover: "/yewef gojo.jpg",
    genre: "Drama",
    dubbed: true,
  },
  {
    id: "hanim",
    title: "Hanım",
    cover: "/yewef gojo.jpg",
    genre: "Drama",
    dubbed: true,
  },
  {
    id: "gullizar",
    title: "Güllizar",
    cover: "/yewef gojo.jpg",
    genre: "Drama",
    dubbed: true,
  },
  {
    id: "zemecha",
    title: "Zemecha",
    cover: "/yewef gojo.jpg",
    genre: "Drama",
    dubbed: true,
  },
  {
    id: "family-secrets",
    title: "Family Secrets",
    cover: "/yewef gojo.jpg",
    genre: "Drama",
    dubbed: true,
  },
  {
    id: "yebeteseb-chewata",
    title: "Yebeteseb Chewata",
    cover: "/yewef gojo.jpg",
    genre: "Drama",
    dubbed: true,
  },
  {
    id: "muhtesem",
    title: "Muhteşem",
    cover: "/yewef gojo.jpg",
    genre: "Drama",
    dubbed: true,
  },

  // Original Local Content
  {
    id: "lijes",
    title: "Lijes",
    cover: "/shows/lijes.jpg",
    genre: "Drama",
    dubbed: false,
  },

  // Movies
  {
    id: "kana-cinema",
    title: "Kana Cinema",
    cover: "/shows/kana-cinema.jpg",
    genre: "Movies",
    dubbed: false,
  },

  // News, Business & Economics
  {
    id: "shaqela",
    title: "#Shaqela",
    cover: "/28.jpg",
    genre: "Business",
    dubbed: false,
  },
  {
    id: "ceos",
    title: "CEOs",
    cover: "/shows/ceos.jpg",
    genre: "Business",
    dubbed: false,
  },
  {
    id: "zena-kimsha",
    title: "Zena Kimsha",
    cover: "/28.jpg",
    genre: "News",
    dubbed: false,
  },

  // Documentaries
  {
    id: "kana-passport",
    title: "Kana Passport",
    cover: "/shows/kana-passport.jpg",
    genre: "Documentary",
    dubbed: false,
  },
  {
    id: "yetiheb-afta",
    title: "Yetiheb Afta (Masters at Work)",
    cover: "/27.jpg",
    genre: "Documentary",
    dubbed: false,
  },

  // Music & Entertainment
  {
    id: "kana-jams",
    title: "KanaJams",
    cover: "/zare ke kana.jpg",
    genre: "Music",
    dubbed: false,
  },
  {
    id: "zeta-max",
    title: "Zeta Max",
    cover: "/zare ke kana.jpg",
    genre: "Entertainment",
    dubbed: false,
  },
  {
    id: "jamcast",
    title: "JamCast",
    cover: "/zare ke kana.jpg",
    genre: "Music",
    dubbed: false,
  },
  {
    id: "megenagna",
    title: "Megenagna",
    cover: "/28.jpg",
    genre: "Talk Show",
    dubbed: false,
  },

  // Health & Lifestyle
  {
    id: "kesira-benuka",
    title: "Kesira Benuka",
    cover: "/shows/kesira-benuka.jpg",
    genre: "Talk Show",
    dubbed: false,
  },
  {
    id: "hiwote",
    title: "Hiwote",
    cover: "/shows/hiwote.jpg",
    genre: "Health",
    dubbed: false,
  },

  // Flagship: Zare Ke Kana
  {
    id: "zare-ke-kana",
    title: "Zare Ke Kana",
    cover: "/shows/zare-ke-kana.jpg",
    genre: "Variety",
    dubbed: false,
  },

  // Kids Programming
  {
    id: "shinshin",
    title: "Shinshin",
    cover: "/27.jpg",
    genre: "Kids",
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
