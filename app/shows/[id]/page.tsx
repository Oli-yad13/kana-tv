import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import { type ShowMeta } from "@/components/ShowCard";
import Link from "next/link";

// Static data for demo; replace with real data source later
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

export function generateStaticParams() {
  return allShows.map((s) => ({ id: s.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const show = allShows.find((s) => s.id === id);
  return {
    title: show ? `${show.title} | Kana TV` : "Show | Kana TV",
    description: show
      ? `${show.title} – ${show.genre} on Kana TV.`
      : "Show detail on Kana TV.",
  };
}

export default async function ShowDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const show = allShows.find((s) => s.id === id);
  if (!show) {
    return (
      <main className="min-h-screen bg-black text-white p-8">
        <Header />
        <div className="px-6 sm:px-10 lg:px-16 py-16">
          <p>Show not found.</p>
          <Link
            href="/shows"
            className="underline"
            style={{ color: "#A80563" }}
          >
            Back to shows
          </Link>
        </div>
      </main>
    );
  }

  // Map of show id -> YouTube playlist with specific video and list
  const playlistMap: Record<string, { videoId: string; listId: string }> = {
    "yewef-gojo": {
      videoId: "9JkorLBxCTo",
      listId: "PLvPKAwHJTVU6HLzBkmgIZfYD5NLezHPzy",
    },
    lijes: {
      videoId: "ABC123DEF456",
      listId: "PLvPKAwHJTVU6HLzBkmgIZfYD5NLezHPzy",
    },
    "zare-ke-kana": {
      videoId: "XYZ789GHI012",
      listId: "PLvPKAwHJTVU6HLzBkmgIZfYD5NLezHPzy",
    },
    megenagna: {
      videoId: "MNO345PQR678",
      listId: "PLvPKAwHJTVU6HLzBkmgIZfYD5NLezHPzy",
    },
    ezel: {
      videoId: "STU901VWX234",
      listId: "PLvPKAwHJTVU6HLzBkmgIZfYD5NLezHPzy",
    },
    "kana-jams": {
      videoId: "YZA567BCD890",
      listId: "PLvPKAwHJTVU6HLzBkmgIZfYD5NLezHPzy",
    },
  };
  const playlistId = playlistMap[show.id];

  // Rich details for the right-side panel
  const details: Record<
    string,
    { description: string; year: string; episodes?: number; tags: string[] }
  > = {
    "yewef-gojo": {
      description:
        "A gripping drama exploring family, loyalty, and the choices that shape destinies.",
      year: "2025",
      episodes: 24,
      tags: ["Drama", "Family", "Dubbed"],
    },
    lijes: {
      description:
        "An emotional journey through friendship and resilience set against modern Addis.",
      year: "2025",
      episodes: 16,
      tags: ["Drama", "Relationships", "Dubbed"],
    },
    "zare-ke-kana": {
      description:
        "A weekly variety spotlight featuring talent, culture, and unforgettable moments.",
      year: "2025",
      episodes: 12,
      tags: ["Variety", "Culture", "Entertainment"],
    },
    megenagna: {
      description:
        "Talks that matter—honest conversations with voices shaping today and tomorrow.",
      year: "2025",
      episodes: 20,
      tags: ["Talk Show", "Interviews", "Society"],
    },
    ezel: {
      description:
        "A celebrated Turkish drama brought to life in Amharic—betrayal, revenge, and redemption.",
      year: "2025",
      episodes: 30,
      tags: ["Drama", "Thriller", "Dubbed"],
    },
    "kana-jams": {
      description:
        "Music, performance, and backstage vibes from Ethiopia's vibrant artists.",
      year: "2025",
      episodes: 14,
      tags: ["Music", "Performance", "Entertainment"],
    },
  };
  const info = details[show.id];

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src={show.cover}
          alt={show.title}
          width={1920}
          height={1080}
          className="h-[45vh] w-full object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 flex items-end px-6 sm:px-10 lg:px-16 pb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              {show.title}
            </h1>
            <div className="mt-2 inline-flex items-center gap-2">
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
        </div>
      </section>

      {/* Playlist + Description */}
      <section className="px-6 sm:px-10 lg:px-16 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Playlist */}
          <div className="lg:col-span-2">
            {playlistId ? (
              <div
                className="relative w-full"
                style={{ aspectRatio: "16 / 9" }}
              >
                <iframe
                  src={`https://www.youtube.com/embed/${playlistId.videoId}?list=${playlistId.listId}`}
                  title={`${show.title} playlist`}
                  className="absolute inset-0 h-full w-full rounded-2xl border border-white/10"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="text-white/80">Playlist not available yet.</div>
            )}
            <div className="mt-4 text-white/70 text-sm">
              Watch directly on&nbsp;
              <a
                href={`https://www.youtube.com/watch?v=${playlistId.videoId}&list=${playlistId.listId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "#A80563" }}
              >
                YouTube
              </a>
              .
            </div>
          </div>

          {/* Right: Info */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h2 className="text-xl font-semibold">About the show</h2>
              {info?.description && (
                <p className="mt-3 text-white/80 leading-relaxed">
                  {info.description}
                </p>
              )}
              <dl className="mt-5 grid grid-cols-2 gap-3 text-sm">
                {info?.year && (
                  <div>
                    <dt className="text-white/60">Year</dt>
                    <dd className="text-white">{info.year}</dd>
                  </div>
                )}
                <div>
                  <dt className="text-white/60">Genre</dt>
                  <dd className="text-white">{show.genre}</dd>
                </div>
                <div>
                  <dt className="text-white/60">Dubbed</dt>
                  <dd className="text-white">{show.dubbed ? "Yes" : "No"}</dd>
                </div>
                {info?.episodes && (
                  <div>
                    <dt className="text-white/60">Episodes</dt>
                    <dd className="text-white">{info.episodes}</dd>
                  </div>
                )}
              </dl>
              {info?.tags?.length ? (
                <div className="mt-5 flex flex-wrap gap-2">
                  {info.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
              <div className="mt-6">
                <Link
                  href="/shows"
                  className="underline"
                  style={{ color: "#A80563" }}
                >
                  ← Back to all shows
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
