import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Hero Image - First page of PDF */}
      <div className="absolute inset-0">
        <Image
          width={1920}
          height={1080}
          src="/hero-page-1.jpg"
          alt="Kana TV 2025 Programming"
          className="w-full h-full object-cover object-left"
        />
        {/* Texture overlay */}
        <div className="absolute inset-0">
          <Image
            width={1920}
            height={1080}
            src="/4.png"
            alt="Texture overlay"
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 h-full flex items-start pt-48 px-8 sm:px-12 lg:px-16">
        {/* Left side - Logo and Text content */}
        <div className="text-white max-w-4xl sm:max-w-5xl lg:max-w-6xl">
          {/* Logo on top (hidden on small devices) */}
          <div className="hidden sm:block mb-6">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56">
              <Image
                src="/Kana_TV.png"
                alt="Kana TV Logo"
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>

          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none mb-6 drop-shadow-2xl">
            KANA
          </h1>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-4 drop-shadow-2xl">
            <span className="bg-white text-black px-2">CONTENT</span>
          </h2>
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8 drop-shadow-2xl">
            UNIVERSE
          </h2>
          <p className="text-xl md:text-3xl lg:text-4xl font-light tracking-wide drop-shadow-lg w-full">
            ETHIOPIA&apos;S ONLY FULL-SPECTRUM TV — WHERE WE ENTERTAIN, ENGAGE,
            INSPIRE
          </p>
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
        <div className="text-center text-white w-full">
          <h1 className="text-7xl font-black tracking-tighter leading-none mb-2 drop-shadow-2xl">
            KANA
          </h1>
          <h2 className="text-7xl font-black tracking-tight mb-2 drop-shadow-2xl">
            <span className="bg-white text-black px-4 py-2">CONTENT</span>
          </h2>
          <h2 className="text-7xl font-black tracking-tight mb-8 drop-shadow-2xl">
            UNIVERSE
          </h2>
          <p className="text-xl font-light tracking-wide drop-shadow-lg w-full">
            ETHIOPIA&apos;S ONLY FULL-SPECTRUM TV — WHERE WE ENTERTAIN, ENGAGE,
            INSPIRE
          </p>
        </div>
      </div>
    </section>
  );
}
