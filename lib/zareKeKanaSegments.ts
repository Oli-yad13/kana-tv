export interface Segment {
  id: string;
  name: string;
  host: string;
  cover: string;
  description: string;
  extendedDescription: string;
  highlights: string[];
  tags: string[];
}

export const zareKeKanaSegments: Segment[] = [
  {
    id: "qetero",
    name: "Qetero",
    host: "Alex (Alemayehu Tadesse)",
    cover: "/segments/qetero.jpg",
    description:
      "Film icon Alemayehu Tadesse reunites legends of Ethiopian cinema in surprising, emotional encounters with archives, behind-the-scenes footage, and playful twists.",
    extendedDescription:
      "Qetero is a nostalgic journey through Ethiopian cinema history. Film icon Alemayehu Tadesse, beloved for his decades of work on screen and stage, brings together the legends who shaped Ethiopian entertainment. Each episode features surprise reunions, archival footage from classic films, and candid conversations about the golden age of Ethiopian cinema. From behind-the-scenes stories to emotional encounters between old colleagues, Qetero celebrates the artistry and legacy of Ethiopia's film industry.",
    highlights: [
      "Reunites Ethiopian cinema legends",
      "Features rare archival footage",
      "Behind-the-scenes stories from classic films",
      "Emotional encounters and surprise moments",
      "Celebrates Ethiopia's film heritage",
    ],
    tags: ["Film", "Nostalgia", "Cinema", "History", "Entertainment"],
  },
  {
    id: "qeleme",
    name: "Qeleme",
    host: "Asres (Asres Bekele)",
    cover: "/segments/qeleme.jpg",
    description:
      "Comedy legend Asres Bekele makes his long-awaited return to television, guiding a rapid-fire knowledge battle between generations.",
    extendedDescription:
      "Qeleme marks the triumphant return of comedy legend Asres Bekele to television. This high-energy segment pits different generations against each other in a rapid-fire trivia battle that tests knowledge across history, pop culture, current events, and Ethiopian traditions. With Asres's signature wit and comedic timing, Qeleme creates hilarious moments while bridging generational divides. The format keeps viewers on their toes with quick questions, surprise challenges, and Asres's playful commentary.",
    highlights: [
      "Comedy legend Asres Bekele's TV comeback",
      "Generational knowledge battles",
      "Rapid-fire trivia format",
      "Mix of history, culture, and current events",
      "Hilarious moments and playful competition",
    ],
    tags: ["Comedy", "Game Show", "Knowledge", "Generations", "Entertainment"],
  },
  {
    id: "yefikir-gebeta",
    name: "Yefikir Gebeta",
    host: "Meski (Meskerem Abera)",
    cover: "/segments/yefikir-gebeta.jpg",
    description:
      "The brilliant and jovial Meskerem Abera turns the kitchen into a stage for love and comedy. Celebrity couples cook in secret while their partners guess who made what.",
    extendedDescription:
      "Yefikir Gebeta transforms cooking into entertainment gold. Host Meskerem Abera, known for her brilliant personality and infectious energy, guides celebrity couples through a unique culinary challenge. Partners cook dishes separately and in secret, then must guess which dish their loved one prepared. The segment blends romance, comedy, cooking, and relationship dynamics into a delightful package. Meski's warm hosting style brings out authentic moments, playful banter, and surprising revelations about how well couples really know each other.",
    highlights: [
      "Celebrity couples cooking challenge",
      "Blind taste testing with relationship twists",
      "Meskerem Abera's brilliant hosting",
      "Blend of romance, comedy, and food",
      "Reveals how well couples know each other",
    ],
    tags: ["Cooking", "Couples", "Comedy", "Romance", "Food"],
  },
  {
    id: "manyawkal",
    name: "Manyawkal",
    host: "Miki (Mikias Fiseha)",
    cover: "/segments/manyawkal.jpg",
    description:
      "With his insider's eye from years in film and commercials, Mikias Fiseha puts actors and celebrities to the test. Using surprising props and unbelievable stories, he teases out who's bluffing and who's telling the truth.",
    extendedDescription:
      "Manyawkal is a game of deception and detection. Mikias Fiseha, with his deep experience in Ethiopian film and commercials, uses his insider knowledge to challenge actors and celebrities. Guests tell stories – some true, some fabricated – and use surprising props to support their tales. Miki's sharp instincts and playful interrogation style create suspenseful moments as he tries to separate truth from fiction. The segment showcases the acting skills of Ethiopia's entertainment elite while keeping viewers guessing until the reveal.",
    highlights: [
      "Truth or bluff celebrity game",
      "Mikias Fiseha's insider perspective",
      "Surprising props and unbelievable stories",
      "Tests acting and deception skills",
      "Suspenseful reveals and playful interrogation",
    ],
    tags: ["Game Show", "Acting", "Truth or Lie", "Entertainment", "Celebrities"],
  },
  {
    id: "report-business",
    name: "Report - Business",
    host: "Kal (Kaleab Hailu)",
    cover: "/segments/report-business.jpg",
    description:
      "Kaleab Hailu delivers a sharp monthly review of Ethiopia's economy, breaking down commodity prices, inflation, and policy changes into easy-to-grasp insights.",
    extendedDescription:
      "Report Business brings economic literacy to Sunday entertainment. Kaleab Hailu, one of Ethiopia's most trusted business voices, distills complex economic concepts into accessible, engaging content. Each monthly segment covers commodity price movements, inflation trends, policy changes, and their real-world impact on Ethiopian families and businesses. Kal's ability to make economics relatable – explaining why coffee prices rose or how currency changes affect daily life – turns dry data into compelling storytelling. It's business news designed for everyone, not just economists.",
    highlights: [
      "Monthly economic review for Ethiopia",
      "Commodity prices and inflation analysis",
      "Policy changes explained clearly",
      "Real-world impact on families and businesses",
      "Complex economics made accessible",
    ],
    tags: ["Business", "Economics", "News", "Education", "Ethiopia"],
  },
  {
    id: "report-entertainment",
    name: "Report - Entertainment",
    host: "Arsema (Arsema Yayihrad)",
    cover: "/segments/report-entertainment.jpg",
    description:
      "Charismatic star Arsema Yayihrad sits down with Ethiopia's entertainers, blending candid stories with glamour.",
    extendedDescription:
      "Report Entertainment brings the glamour and stories of Ethiopian entertainment to Zare Ke Kana. Charismatic host Arsema Yayihrad, herself a star, sits down with actors, musicians, content creators, and entertainment industry figures for candid conversations. Unlike typical red carpet interviews, Report Entertainment digs deeper – exploring creative processes, career journeys, upcoming projects, and the personal stories behind the public personas. Arsema's natural charisma and industry connections create an atmosphere where guests feel comfortable sharing authentic moments.",
    highlights: [
      "Candid celebrity interviews",
      "Behind-the-scenes entertainment stories",
      "Upcoming projects and exclusive reveals",
      "Arsema Yayihrad's charismatic hosting",
      "Personal stories from public figures",
    ],
    tags: ["Entertainment", "Interviews", "Celebrities", "Behind the Scenes", "Glamour"],
  },
  {
    id: "report-sports",
    name: "Report - Sports",
    host: "Faiza",
    cover: "/segments/report-sports.jpg",
    description:
      "Faiza condenses an entire month of local and international sports into a compelling recap with highlights from the field and sharp commentary.",
    extendedDescription:
      "Report Sports delivers a month's worth of sports action in one dynamic segment. Host Faiza curates the most important moments from Ethiopian and international sports – from football leagues to athletics, basketball to emerging sports. The segment combines highlight reels with sharp commentary, analysis of key performances, and context about what these results mean for teams, athletes, and fans. Whether it's Ethiopian runners dominating marathons or local football rivalries heating up, Faiza brings energy and insight to sports storytelling.",
    highlights: [
      "Monthly sports highlights and recap",
      "Local and international coverage",
      "Sharp commentary and analysis",
      "Multiple sports disciplines covered",
      "Context and impact of key moments",
    ],
    tags: ["Sports", "Athletics", "Football", "News", "Highlights"],
  },
  {
    id: "report-tech",
    name: "Report - Tech",
    host: "Joel",
    cover: "/segments/report-tech.jpg",
    description:
      "Tech voice Joel curates the most important innovations shaping Ethiopia and the world. From Silicon Valley breakthroughs to homegrown startups, Report Tech captures how technology is reshaping everyday life.",
    extendedDescription:
      "Report Tech bridges the global and local technology landscapes. Joel, a respected tech voice, curates monthly technology stories that matter to Ethiopians – from Silicon Valley innovations that will reach Africa, to homegrown Ethiopian startups solving local problems. The segment explores how technology is reshaping daily life: mobile money changing commerce, apps connecting farmers to markets, social media transforming communication, and AI entering various industries. Joel makes tech accessible, explaining not just what's new, but why it matters and how it affects viewers' lives.",
    highlights: [
      "Monthly technology news and innovations",
      "Global tech trends and local startups",
      "Real-world impact of technology",
      "Ethiopian tech ecosystem spotlight",
      "Accessible explanations of complex tech",
    ],
    tags: ["Technology", "Innovation", "Startups", "Digital", "Future"],
  },
  {
    id: "sheweda",
    name: "Sheweda",
    host: "Betselot",
    cover: "/segments/sheweda.jpg",
    description:
      "Sheweda takes viewers deep into Ethiopia's most intriguing real-life crime cases. With reconstruction, narration, and context, the segment blends suspense with social commentary.",
    extendedDescription:
      "Sheweda brings true crime storytelling to Ethiopian television with sensitivity and depth. Host Betselot guides viewers through real-life crime cases that captivated Ethiopia, using careful reconstruction, detailed narration, and contextual analysis. Unlike sensationalist crime coverage, Sheweda explores the social factors, human psychology, and systemic issues behind each case. The segment balances suspense with responsibility, showing how crimes unfold while examining broader societal implications. Each story serves as both entertainment and social commentary, prompting reflection on justice, safety, and community.",
    highlights: [
      "Real-life Ethiopian crime cases",
      "Careful reconstruction and narration",
      "Social context and analysis",
      "Responsible true crime storytelling",
      "Blend of suspense and commentary",
    ],
    tags: ["True Crime", "Documentary", "Social Issues", "Investigation", "Society"],
  },
  {
    id: "kana-jams-breaks",
    name: "Kana Jams - Segment Breaks",
    host: "Various Artists",
    cover: "/segments/kana-jams.jpg",
    description:
      "Every break inside Zare Ke Kana is powered by the best of Kana Jams. These live, unedited performances bring raw energy between segments — from legendary artists to fresh new voices.",
    extendedDescription:
      "Kana Jams segment breaks transform transitions into performances. Instead of traditional commercial breaks or filler content, Zare Ke Kana uses curated performances from the extensive Kana Jams archive. These live, unedited musical moments feature Ethiopia's best – from legendary artists to emerging talents, covering genres from traditional to contemporary. Each performance brings raw energy and authenticity, keeping the audience engaged throughout the 5-hour block. It's a celebration of Ethiopian musical excellence that also serves as perfect palate cleansers between the show's diverse segments.",
    highlights: [
      "Live, unedited musical performances",
      "Legendary and emerging Ethiopian artists",
      "Diverse musical genres covered",
      "Raw energy and authenticity",
      "Curated from Kana Jams archive",
    ],
    tags: ["Music", "Live Performance", "Ethiopian Artists", "Entertainment", "Energy"],
  },
];
