export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden mt-[1px]">
      {/* Hero Image - First page of PDF */}
      <div className="absolute inset-0">
        <img
          src="/hero-page-1.jpg"
          alt="Kana TV 2025 Programming"
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-4">
        <div className="text-center text-white max-w-6xl">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-none mb-8 drop-shadow-2xl">
            KANA
          </h1>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 drop-shadow-2xl">
            CONTENT
          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight mb-12 drop-shadow-2xl">
            UNIVERSE
          </h2>
          <p className="text-lg md:text-2xl lg:text-3xl font-light tracking-wide drop-shadow-lg max-w-4xl mx-auto">
            ETHIOPIA'S ONLY FULL-SPECTRUM TV — WHERE WE ENTERTAIN, ENGAGE, INSPIRE
          </p>
        </div>
      </div>
    </section>
  )
}