import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import Link from "next/link";
import { allShows } from "@/lib/showsData";
import { zareKeKanaSegments } from "@/lib/zareKeKanaSegments";

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

  // Default video for all shows
  const defaultVideoId = "ZLoNDBKoMkQ";

  // Map of show id -> YouTube playlist with specific video and list
  const playlistMap: Record<string, { videoId: string; listId?: string }> = {};

  // Use default video for all shows for now
  const playlistId = playlistMap[show.id] || { videoId: defaultVideoId };

  // Rich details for the right-side panel
  const details: Record<
    string,
    {
      description: string;
      year: string;
      episodes?: number;
      tags: string[];
      segments?: Array<{ name: string; description: string }>;
    }
  > = {
    "black-money-love": {
      description:
        "A gripping Turkish drama about love, betrayal, and the dangerous world of money.",
      year: "2025",
      tags: ["Drama", "Thriller", "Dubbed", "Turkish"],
    },
    "ashabi-kehf": {
      description:
        "A powerful story exploring faith, history, and timeless human connections.",
      year: "2025",
      tags: ["Drama", "Historical", "Dubbed"],
    },
    "brave-woman": {
      description:
        "An inspiring tale of a woman's courage and resilience against all odds.",
      year: "2025",
      tags: ["Drama", "Empowerment", "Dubbed", "Turkish"],
    },
    "hagadires": {
      description:
        "An emotional Turkish drama exploring family bonds and destiny.",
      year: "2025",
      tags: ["Drama", "Family", "Dubbed", "Turkish"],
    },
    ezel: {
      description:
        "A celebrated Turkish drama brought to life in Amharic—betrayal, revenge, and redemption.",
      year: "2025",
      episodes: 30,
      tags: ["Drama", "Thriller", "Dubbed", "Turkish"],
    },
    "yewef-gojo": {
      description:
        "A heartfelt drama about love, ambition, and the beauty of life's challenges.",
      year: "2025",
      tags: ["Drama", "Romance", "Dubbed", "Turkish"],
    },
    hanim: {
      description:
        "A compelling Turkish series about power, family, and tradition.",
      year: "2025",
      tags: ["Drama", "Family", "Dubbed", "Turkish"],
    },
    gullizar: {
      description:
        "A romantic drama exploring love across social boundaries.",
      year: "2025",
      tags: ["Drama", "Romance", "Dubbed", "Turkish"],
    },
    "zemecha": {
      description:
        "An epic tale of family feuds, love, and revenge in rural Turkey.",
      year: "2025",
      tags: ["Drama", "Family", "Dubbed", "Turkish"],
    },
    "family-secrets": {
      description:
        "Uncover hidden truths in this gripping family drama.",
      year: "2025",
      tags: ["Drama", "Mystery", "Dubbed", "Turkish"],
    },
    "yebeteseb-chewata": {
      description:
        "A touching story about finding home, love, and purpose.",
      year: "2025",
      tags: ["Drama", "Family", "Dubbed", "Turkish"],
    },
    muhtesem: {
      description:
        "A magnificent Turkish drama series.",
      year: "2025",
      tags: ["Drama", "Dubbed", "Turkish"],
    },
    lijes: {
      description:
        "Investment in Ethiopian storytelling - occasional, but impactful hits. When Kana invests, it matters. Lijes (2025) became a nationwide phenomenon, even driving diaspora audiences on YouTube.",
      year: "2025",
      tags: ["Drama", "Ethiopian", "Original", "Cultural"],
    },
    "kana-cinema": {
      description:
        "Ethiopian movies and occasional dubbed Hollywood hits. 3 hours every weekend dedicated to movies. Mix of Ethiopian catalogue films and new releases, plus occasional dubbed Hollywood blockbusters.",
      year: "2025",
      tags: ["Movies", "Ethiopian", "Hollywood", "Weekend"],
    },
    shaqela: {
      description:
        "Ethiopia's flagship business show hosted by Kaleab Hailu, one of Ethiopia's most loved business voices. Complex made simple: Economics concepts in accessible formats. Featured 150+ young Ethiopian entrepreneurs.",
      year: "2025",
      tags: ["Business", "Economics", "Entrepreneurship", "Education"],
    },
    ceos: {
      description:
        "Executive interview series inspired by 'Comedians in Cars' & 'Carpool Karaoke' but for CEOs. Unique format: Early morning drives through Addis Ababa. Kaleab drives with Ethiopia's top CEOs for intimate 30-minute conversations.",
      year: "2025",
      tags: ["Business", "Interviews", "Leadership", "Executive"],
    },
    "zena-kimsha": {
      description:
        "7-minute bit-size news capsules inserted into captive primetime viewing slots. Focus on Ethiopia with selected global highlights. Launched in 2016 as the first short-form news on Ethiopian TV.",
      year: "2016",
      tags: ["News", "Short-form", "Ethiopia", "Current Events"],
    },
    "kana-passport": {
      description:
        "Amharic-adapted international documentaries. Educational entertainment excellence. Unique positioning: Only National Geographic/Discovery-style content in Ethiopian TV. Content range: Tibetan plains to Pacific Ocean, Lalibela heritage sites, educational science and more.",
      year: "2017",
      tags: ["Documentary", "Educational", "Wildlife", "Culture", "Nat Geo Style"],
    },
    "yetiheb-afta": {
      description:
        "Masters at Work (Yetiheb Afta) follows Ethiopia's finest — surgeons, coders, athletes, gymnasts, entrepreneurs — in their craft. 30-minute documentaries in professional, no-host format. Day-in-the-life storytelling approach.",
      year: "2025",
      tags: ["Documentary", "Ethiopian Excellence", "Profiles", "Inspirational"],
    },
    "kana-jams": {
      description:
        "Ethiopia's premier music platform. Live performances with no studio edits. Platform for emerging and established artists. Audience participation: Interactive performances with live audience. Evergreen content that gets rewatched and replayed.",
      year: "2025",
      tags: ["Music", "Live Performance", "Ethiopian Artists", "Entertainment"],
    },
    "zeta-max": {
      description:
        "Premium 15-minute event recap hosted by Arsema Yayihrad. Combines video highlights, interviews, and commentary. Professional on-location production with 24-48 hour delivery. Major wins: Unilever Vaseline launch, W Concert coverage.",
      year: "2025",
      tags: ["Entertainment", "Events", "Recap", "Culture"],
    },
    jamcast: {
      description:
        "Artist podcast series hosted by Melat Belayneh. Deep conversations: Musical journeys, personal lives, industry insights. Exclusive content: Upcoming releases and untold stories. Cultural commentary: Artists' perspectives on Ethiopian music scene.",
      year: "2025",
      tags: ["Music", "Podcast", "Interviews", "Artists"],
    },
    megenagna: {
      description:
        "Entertainment talk show hosted by Mikias, a seasoned actor & theatre artist. Deep dive interviews beyond surface-level entertainment coverage. Diverse guests: TikTokers, content creators, entertainment legends. Investigative approach: Stories that don't surface in typical interviews.",
      year: "2025",
      tags: ["Talk Show", "Entertainment", "Interviews", "Culture"],
    },
    "kesira-benuka": {
      description:
        "Respectfully provocative talk show targeting Gen Z and Millennials. Dynamic host panel: Israel (the authentic thinker), Eyob (the relatable family man), Misrak (the idealistic society advocate), Mulugal (the audience favorite). Critical topics: Child marriage, gender inequality, mental health, addiction, generational divides, cost of living. Over 208 episodes and growing.",
      year: "2025",
      tags: ["Talk Show", "Gen Z", "Millennials", "Social Issues", "Youth"],
    },
    hiwote: {
      description:
        "Health that matters to society hosted by Misrak. Covers NCDs, addiction, resilience of health workers. 300+ episodes. Preferred partner for NGOs & public health orgs looking to showcase impact stories.",
      year: "2025",
      tags: ["Health", "Social Impact", "Public Health", "Education"],
    },
    "zare-ke-kana": {
      description:
        "Premium multi-segment 5HR block programming launched June 2025. A complete 5-hour entertainment ecosystem. No other Sunday tent-pole program in Ethiopia delivers this much variety, depth, and family appeal in a single block.",
      year: "2025",
      tags: ["Variety", "Entertainment", "Multi-segment", "Sunday Block", "Family"],
      segments: [
        {
          name: "Qetero / Alex",
          description: "Film icon Alemayehu Tadesse reunites legends of Ethiopian cinema in surprising, emotional encounters with archives, behind-the-scenes footage, and playful twists.",
        },
        {
          name: "Qeleme / Asres",
          description: "Comedy legend Asres Bekele makes his long-awaited return to television, guiding a rapid-fire knowledge battle between generations.",
        },
        {
          name: "Yefikir Gebeta / Meski",
          description: "The brilliant and jovial Meskerem Abera turns the kitchen into a stage for love and comedy. Celebrity couples cook in secret while their partners guess who made what.",
        },
        {
          name: "Manyawkal / Miki",
          description: "With his insider's eye from years in film and commercials, Mikias Fiseha puts actors and celebrities to the test. Using surprising props and unbelievable stories, he teases out who's bluffing and who's telling the truth.",
        },
        {
          name: "Report - Business / Kal",
          description: "Kaleab Hailu delivers a sharp monthly review of Ethiopia's economy, breaking down commodity prices, inflation, and policy changes into easy-to-grasp insights.",
        },
        {
          name: "Report - Entertainment / Arsema",
          description: "Charismatic star Arsema Yayihrad sits down with Ethiopia's entertainers, blending candid stories with glamour.",
        },
        {
          name: "Report - Sports / Faiza",
          description: "Faiza condenses an entire month of local and international sports into a compelling recap with highlights from the field and sharp commentary.",
        },
        {
          name: "Report - Tech / Joel",
          description: "Tech voice Joel curates the most important innovations shaping Ethiopia and the world. From Silicon Valley breakthroughs to homegrown startups, Report Tech captures how technology is reshaping everyday life.",
        },
        {
          name: "Sheweda / Betselot",
          description: "Sheweda takes viewers deep into Ethiopia's most intriguing real-life crime cases. With reconstruction, narration, and context, the segment blends suspense with social commentary.",
        },
        {
          name: "Kana Jams - Segment Breaks",
          description: "Every break inside Zare Ke Kana is powered by the best of Kana Jams. These live, unedited performances bring raw energy between segments — from legendary artists to fresh new voices.",
        },
      ],
    },
    shinshin: {
      description:
        "Weekend kids block. 2 hours weekly animated content adapted in Amharic. Carefully curated kids content that is educational and entertaining. Non-monetizable under regulations, but Kana invests to keep kids and families included.",
      year: "2025",
      tags: ["Kids", "Animation", "Educational", "Family", "Weekend"],
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
            <div
              className="relative w-full"
              style={{ aspectRatio: "16 / 9" }}
            >
              <iframe
                src={`https://www.youtube.com/embed/${playlistId.videoId}${playlistId.listId ? `?list=${playlistId.listId}` : ''}`}
                title={`${show.title} video`}
                className="absolute inset-0 h-full w-full rounded-2xl border border-white/10"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <div className="mt-4 text-white/70 text-sm">
              Watch directly on{" "}
              <a
                href={`https://www.youtube.com/watch?v=${playlistId.videoId}${playlistId.listId ? `&list=${playlistId.listId}` : ''}`}
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

      {/* Segments Section - Only for Zare Ke Kana */}
      {show.id === "zare-ke-kana" && (
        <section className="px-6 sm:px-10 lg:px-16 pb-16">
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight mb-3">
              Show Segments
            </h2>
            <p className="text-white/70">
              A complete 5-hour entertainment ecosystem with 10 unique segments
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {zareKeKanaSegments.map((segment, index) => (
              <Link
                key={segment.id}
                href={`/shows/zare-ke-kana/segments/${segment.id}`}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 hover:border-pink-700/50 transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="rounded-full bg-pink-700/20 text-pink-700 w-8 h-8 flex items-center justify-center shrink-0 text-sm font-semibold group-hover:bg-pink-700 group-hover:text-white transition-colors">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-pink-700 transition-colors">
                      {segment.name}
                    </h3>
                    <p className="text-white/60 text-xs mb-2">
                      Host: {segment.host}
                    </p>
                    <p className="text-white/70 text-sm leading-relaxed">
                      {segment.description}
                    </p>
                    <div className="mt-3 text-pink-700 text-sm font-medium group-hover:underline">
                      Learn more →
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
