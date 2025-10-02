import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import { zareKeKanaSegments } from "@/lib/zareKeKanaSegments";

export function generateStaticParams() {
  return zareKeKanaSegments.map((segment) => ({
    segmentId: segment.id,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ segmentId: string }>;
}): Promise<Metadata> {
  const { segmentId } = await params;
  const segment = zareKeKanaSegments.find((s) => s.id === segmentId);
  return {
    title: segment ? `${segment.name} | Zare Ke Kana | Kana TV` : "Segment | Kana TV",
    description: segment
      ? segment.description
      : "Zare Ke Kana segment on Kana TV.",
  };
}

export default async function SegmentPage({
  params,
}: {
  params: Promise<{ segmentId: string }>;
}) {
  const { segmentId } = await params;
  const segment = zareKeKanaSegments.find((s) => s.id === segmentId);

  if (!segment) {
    return (
      <main className="min-h-screen bg-black text-white p-8">
        <Header />
        <div className="px-6 sm:px-10 lg:px-16 py-16">
          <p>Segment not found.</p>
          <Link
            href="/shows/zare-ke-kana"
            className="underline"
            style={{ color: "#A80563" }}
          >
            Back to Zare Ke Kana
          </Link>
        </div>
      </main>
    );
  }

  const defaultVideoId = "ZLoNDBKoMkQ";

  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src={segment.cover}
          alt={segment.name}
          width={1920}
          height={1080}
          className="h-[45vh] w-full object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 flex items-end px-6 sm:px-10 lg:px-16 pb-8">
          <div>
            <div className="text-pink-700 text-sm font-semibold mb-2">
              ZARE KE KANA SEGMENT
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              {segment.name}
            </h1>
            <div className="mt-2 text-lg text-white/90">
              Hosted by {segment.host}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-6 sm:px-10 lg:px-16 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Video */}
          <div className="lg:col-span-2">
            <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
              <iframe
                src={`https://www.youtube.com/embed/${defaultVideoId}`}
                title={`${segment.name} video`}
                className="absolute inset-0 h-full w-full rounded-2xl border border-white/10"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="mt-4 text-white/70 text-sm">
              Watch directly on{" "}
              <a
                href={`https://www.youtube.com/watch?v=${defaultVideoId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "#A80563" }}
              >
                YouTube
              </a>
              {" "}or visit{" "}
              <a
                href="https://www.youtube.com/@KanaTelevision"
                target="_blank"
                rel="noopener noreferrer"
                className="underline"
                style={{ color: "#A80563" }}
              >
                Kana TV Channel
              </a>
              .
            </div>

            {/* Extended Description */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-4">About the Segment</h2>
              <p className="text-white/80 leading-relaxed">
                {segment.extendedDescription}
              </p>
            </div>
          </div>

          {/* Right: Info */}
          <aside className="lg:col-span-1">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h2 className="text-xl font-semibold mb-4">Segment Details</h2>

              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="text-white/60 mb-1">Host</dt>
                  <dd className="text-white text-lg">{segment.host}</dd>
                </div>
                <div>
                  <dt className="text-white/60 mb-1">Part of</dt>
                  <dd className="text-white">
                    <Link
                      href="/shows/zare-ke-kana"
                      className="underline hover:text-pink-700 transition-colors"
                    >
                      Zare Ke Kana
                    </Link>
                  </dd>
                </div>
              </dl>

              {/* Highlights */}
              {segment.highlights.length > 0 && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h3 className="text-lg font-semibold mb-3">Highlights</h3>
                  <ul className="space-y-2">
                    {segment.highlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-white/80 text-sm"
                      >
                        <span className="text-pink-700 mt-0.5">✓</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Tags */}
              {segment.tags.length > 0 && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <h3 className="text-lg font-semibold mb-3">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {segment.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6 pt-6 border-t border-white/10">
                <Link
                  href="/shows/zare-ke-kana"
                  className="underline text-sm"
                  style={{ color: "#A80563" }}
                >
                  ← Back to Zare Ke Kana
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
