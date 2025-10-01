import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{
        fontFamily: "Helvetica, Arial, sans-serif",
        height: "calc(100vh - 4rem)",
      }}
    >
      {/* Hero Image - First page of PDF */}
      <div className="absolute inset-0">
        <Image
          width={1920}
          height={1080}
          src="/hero-page-1.jpg"
          alt="Kana TV 2025 Programming"
          className="w-full h-full object-cover"
        />
        {/* Enhanced gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-black/20 to-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

        {/* Professional visual elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Sophisticated floating elements */}
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-gradient-to-r from-pink-400/30 to-rose-400/30 rounded-full animate-pulse blur-sm"></div>
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-gradient-to-r from-blue-400/40 to-cyan-400/40 rounded-full animate-pulse delay-1000 blur-sm"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 bg-gradient-to-r from-purple-400/35 to-violet-400/35 rounded-full animate-pulse delay-2000 blur-sm"></div>
          <div className="absolute bottom-1/4 right-1/4 w-1.5 h-1.5 bg-gradient-to-r from-pink-400/25 to-red-400/25 rounded-full animate-pulse delay-3000 blur-sm"></div>

          {/* Elegant light rays */}
          <div className="absolute top-0 left-1/4 w-0.5 h-40 bg-gradient-to-b from-pink-400/40 via-white/20 to-transparent transform -rotate-12 blur-sm"></div>
          <div className="absolute top-0 right-1/3 w-0.5 h-32 bg-gradient-to-b from-blue-400/40 via-white/15 to-transparent transform rotate-12 blur-sm"></div>
          <div className="absolute top-1/2 left-1/6 w-0.5 h-24 bg-gradient-to-b from-purple-400/30 via-white/10 to-transparent transform rotate-6 blur-sm"></div>

          {/* Subtle geometric patterns */}
          <div
            className="absolute top-1/6 right-1/6 w-16 h-16 border border-white/10 rounded-full animate-spin"
            style={{ animationDuration: "20s" }}
          ></div>
          <div
            className="absolute bottom-1/6 left-1/6 w-12 h-12 border border-white/8 rounded-full animate-spin"
            style={{ animationDuration: "25s", animationDirection: "reverse" }}
          ></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center px-4 sm:px-6 lg:px-8">
        {/* Left side - Logo and Text content */}
        <div className="text-white max-w-4xl sm:max-w-5xl lg:max-w-6xl relative">
          {/* Logo positioned to overlap with text */}
          <div className="hidden sm:block absolute -top-4 -right-4 z-20">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 opacity-0">
              <Image
                src="/Kana_TV.png"
                alt="Kana TV Logo"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </div>

          <div className="space-y-2 relative z-10">
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight transform hover:scale-105 transition-all duration-700"
              style={{ fontWeight: "900", letterSpacing: "-0.03em" }}
            >
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-white via-gray-50 to-white bg-clip-text text-transparent drop-shadow-2xl">
                  KANA
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-rose-400/20 to-red-400/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
              </span>
            </h1>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight"
              style={{ fontWeight: "900", letterSpacing: "-0.03em" }}
            >
              <span className="relative inline-block group">
                <span className="bg-gradient-to-r from-white to-gray-50 text-black px-4 py-2 rounded-2xl shadow-2xl transform hover:scale-110 hover:rotate-1 transition-all duration-500 inline-block hover:shadow-3xl border border-white/20">
                  CONTENT
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </span>
            </h2>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight transform hover:scale-105 transition-all duration-700"
              style={{ fontWeight: "900", letterSpacing: "-0.03em" }}
            >
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-white via-gray-50 to-white bg-clip-text text-transparent drop-shadow-2xl">
                  UNIVERSE
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-violet-400/20 to-indigo-400/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
              </span>
            </h2>
          </div>
          <div className="mt-6 space-y-4">
            <div className="relative">
              <div
                className="text-xl md:text-2xl lg:text-3xl font-semibold tracking-wide w-full leading-relaxed"
                style={{
                  fontWeight: "600",
                  lineHeight: "1.5",
                  fontFamily: "Helvetica, Arial, sans-serif",
                }}
              >
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-white via-gray-50 to-white bg-clip-text text-transparent drop-shadow-2xl">
                    ETHIOPIA&apos;S ONLY FULL-SPECTRUM TV
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-teal-400/20 blur-lg opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
                </span>
              </div>
              <div className="w-32 h-1 bg-gradient-to-r from-pink-400/60 via-rose-400/40 to-red-400/60 mt-2 rounded-full"></div>
            </div>
            <div className="flex flex-wrap gap-3 text-sm md:text-base lg:text-lg font-bold tracking-wider">
              <span className="relative group bg-gradient-to-r from-pink-500/25 via-rose-500/20 to-red-500/25 backdrop-blur-md text-pink-100 px-4 py-2 rounded-xl border border-pink-400/40 hover:from-pink-500/35 hover:via-rose-500/30 hover:to-red-500/35 hover:text-white transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-pink-500/30 hover:-translate-y-1">
                <span
                  className="relative z-10 font-extrabold"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  ENTERTAIN
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </span>
              <span className="relative group bg-gradient-to-r from-blue-500/25 via-cyan-500/20 to-teal-500/25 backdrop-blur-md text-blue-100 px-4 py-2 rounded-xl border border-blue-400/40 hover:from-blue-500/35 hover:via-cyan-500/30 hover:to-teal-500/35 hover:text-white transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-1">
                <span
                  className="relative z-10 font-extrabold"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  ENGAGE
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </span>
              <span className="relative group bg-gradient-to-r from-purple-500/25 via-violet-500/20 to-indigo-500/25 backdrop-blur-md text-purple-100 px-4 py-2 rounded-xl border border-purple-400/40 hover:from-purple-500/35 hover:via-violet-500/30 hover:to-indigo-500/35 hover:text-white transition-all duration-500 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-1">
                <span
                  className="relative z-10 font-extrabold"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  INSPIRE
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Top right - Hero cover image (hidden on small devices) */}
      <div className="absolute -top-32 -right-32 z-20 hidden sm:block">
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[500px] lg:h-[500px] ">
          <Image
            src="/hero-cover.png"
            alt="Hero Cover"
            fill
            className="object-contain drop-shadow-2xl"
            priority
          />
        </div>
      </div>

      {/* Mobile centered layout */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:hidden">
        <div
          className="text-center text-white w-full"
          style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
        >
          <div className="space-y-2">
            <h1
              className="text-4xl font-black tracking-tight leading-tight"
              style={{ fontWeight: "900", letterSpacing: "-0.03em" }}
            >
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-white via-gray-50 to-white bg-clip-text text-transparent drop-shadow-2xl">
                  KANA
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-rose-400/20 to-red-400/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
              </span>
            </h1>
            <h2
              className="text-4xl font-black tracking-tight leading-tight"
              style={{ fontWeight: "900", letterSpacing: "-0.03em" }}
            >
              <span className="relative inline-block group">
                <span className="bg-gradient-to-r from-white to-gray-50 text-black px-3 py-1 rounded-xl shadow-2xl transform hover:scale-110 hover:rotate-1 transition-all duration-500 inline-block hover:shadow-3xl border border-white/20">
                  CONTENT
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </span>
            </h2>
            <h2
              className="text-4xl font-black tracking-tight leading-tight"
              style={{ fontWeight: "900", letterSpacing: "-0.03em" }}
            >
              <span className="relative inline-block">
                <span className="bg-gradient-to-r from-white via-gray-50 to-white bg-clip-text text-transparent drop-shadow-2xl">
                  UNIVERSE
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 via-violet-400/20 to-indigo-400/20 blur-xl opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
              </span>
            </h2>
          </div>
          <div className="mt-6 space-y-4">
            <div className="relative">
              <p
                className="text-lg font-semibold tracking-wide w-full leading-relaxed"
                style={{
                  fontWeight: "600",
                  lineHeight: "1.5",
                  fontFamily: "Helvetica, Arial, sans-serif",
                }}
              >
                <span className="relative inline-block">
                  <span className="bg-gradient-to-r from-white via-gray-50 to-white bg-clip-text text-transparent drop-shadow-2xl">
                    ETHIOPIA&apos;S ONLY FULL-SPECTRUM TV
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-cyan-400/20 to-teal-400/20 blur-lg opacity-0 hover:opacity-100 transition-opacity duration-700"></div>
                </span>
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400/60 via-rose-400/40 to-red-400/60 mt-2 mx-auto rounded-full"></div>
            </div>
            <div className="flex flex-wrap gap-2 text-sm font-bold tracking-wider justify-center">
              <span className="relative group bg-gradient-to-r from-pink-500/25 via-rose-500/20 to-red-500/25 backdrop-blur-md text-pink-100 px-3 py-1.5 rounded-lg border border-pink-400/40 hover:from-pink-500/35 hover:via-rose-500/30 hover:to-red-500/35 hover:text-white transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-pink-500/30 hover:-translate-y-1">
                <span
                  className="relative z-10 font-extrabold"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  ENTERTAIN
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-red-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-red-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </span>
              <span className="relative group bg-gradient-to-r from-blue-500/25 via-cyan-500/20 to-teal-500/25 backdrop-blur-md text-blue-100 px-3 py-1.5 rounded-lg border border-blue-400/40 hover:from-blue-500/35 hover:via-cyan-500/30 hover:to-teal-500/35 hover:text-white transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-blue-500/30 hover:-translate-y-1">
                <span
                  className="relative z-10 font-extrabold"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  ENGAGE
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-teal-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </span>
              <span className="relative group bg-gradient-to-r from-purple-500/25 via-violet-500/20 to-indigo-500/25 backdrop-blur-md text-purple-100 px-3 py-1.5 rounded-lg border border-purple-400/40 hover:from-purple-500/35 hover:via-violet-500/30 hover:to-indigo-500/35 hover:text-white transition-all duration-500 transform hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-1">
                <span
                  className="relative z-10 font-extrabold"
                  style={{
                    fontFamily: "Helvetica, Arial, sans-serif",
                    letterSpacing: "0.1em",
                  }}
                >
                  INSPIRE
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
