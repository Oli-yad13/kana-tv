'use client'

export default function Marquee() {
  const shows = [
    'YEWEF GOJO',
    'LIJES',
    'ZARE KE KANA',
    'EZEL',
    'MUHTEŞEM YÜZYIL',
    'KARA PARA AŞK',
    'HULET LIB',
    'SINIBIT',
    'WERAJ ALE',
    'MEGENAGNA',
  ]

  return (
    <section className="relative bg-black py-8 overflow-hidden">
      {/* Marquee Container */}
      <div className="flex whitespace-nowrap">
        {/* First set */}
        <div className="animate-marquee flex items-center">
          {shows.map((show, index) => (
            <div key={`1-${index}`} className="inline-flex items-center mx-8">
              <span className="text-white text-2xl md:text-4xl font-black tracking-wider">
                {show}
              </span>
              <span className="text-pink-500 text-3xl mx-8">★</span>
            </div>
          ))}
        </div>
        {/* Second set for seamless loop */}
        <div className="animate-marquee flex items-center" aria-hidden="true">
          {shows.map((show, index) => (
            <div key={`2-${index}`} className="inline-flex items-center mx-8">
              <span className="text-white text-2xl md:text-4xl font-black tracking-wider">
                {show}
              </span>
              <span className="text-pink-500 text-3xl mx-8">★</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </section>
  )
}