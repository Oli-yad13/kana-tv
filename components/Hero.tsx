export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="/9.jpg"
          alt="Kana TV Hero"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="text-center text-white px-4">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-6">
            KANA TV
          </h1>
          <p className="text-xl md:text-3xl font-light mb-8">
            Ethiopia's #1 Entertainment Channel
          </p>
          <button className="bg-pink-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-700 transition-colors">
            Explore Shows
          </button>
        </div>
      </div>
    </section>
  )
}