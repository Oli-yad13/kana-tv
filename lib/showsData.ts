import { ShowMeta } from "@/components/ShowCard";

export interface ShowCategory {
  id: string;
  title: string;
  description: string;
  shows: ShowMeta[];
}

export const showCategories: ShowCategory[] = [
  {
    id: "dubbed-dramas",
    title: "Dubbed Dramas",
    description: "World-class Turkish, Brazilian, Korean & Indian content - 3hrs/day, 5 days a week. Ethiopia's most watched programming block.",
    shows: [
      {
        id: "black-money-love",
        title: "Black Money Love (Kara Para Aşk)",
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
        title: "Yewef Gojo (Brave and Beautiful)",
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
        title: "Zemecha (Bitter Lands)",
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
        title: "Yebeteseb Chewata (My Home My Destiny)",
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
    ],
  },
  {
    id: "original-local-content",
    title: "Original Local Content",
    description: "Investment in Ethiopian storytelling - occasional, but impactful hits.",
    shows: [
      {
        id: "lijes",
        title: "Lijes",
        cover: "/shows/lijes.jpg",
        genre: "Drama",
        dubbed: false,
      },
    ],
  },
  {
    id: "kana-cinema",
    title: "Kana Cinema",
    description: "Ethiopian movies and occasional dubbed Hollywood hits - 3 hours every weekend.",
    shows: [
      {
        id: "kana-cinema",
        title: "Kana Cinema",
        cover: "/shows/kana-cinema.jpg",
        genre: "Movies",
        dubbed: false,
      },
    ],
  },
  {
    id: "news-business-economics",
    title: "News, Business & Economics",
    description: "Shaping Ethiopia's economic narrative",
    shows: [
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
    ],
  },
  {
    id: "history-documentaries-wildlife",
    title: "History + Bios Documentaries & Wildlife",
    description: "Global discovery through a local voice",
    shows: [
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
    ],
  },
  {
    id: "music-entertainment-events",
    title: "Music, Entertainment & Events",
    description: "Discovering & showcasing Ethiopian talent",
    shows: [
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
    ],
  },
  {
    id: "health-lifestyle-social",
    title: "Health, Lifestyle & Social Issues",
    description: "Addressing what matters most",
    shows: [
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
    ],
  },
  {
    id: "flagship-big-studio",
    title: "Flagship Big Studio Local Content",
    description: "Premium multi-segment 5HR block programming launched June 2025",
    shows: [
      {
        id: "zare-ke-kana",
        title: "Zare Ke Kana",
        cover: "/shows/zare-ke-kana.jpg",
        genre: "Variety",
        dubbed: false,
      },
    ],
  },
  {
    id: "kids-amharic-cartoons",
    title: "Kids Amharic Cartoons",
    description: "Weekend kids block - 2 hours weekly animated content adapted in Amharic",
    shows: [
      {
        id: "shinshin",
        title: "Shinshin",
        cover: "/27.jpg",
        genre: "Kids",
        dubbed: false,
      },
    ],
  },
];

// Flatten all shows for easy access
export const allShows: ShowMeta[] = showCategories.flatMap(
  (category) => category.shows
);
