import Header from '@/components/Header'
import Hero from '@/components/Hero'
import TrendingMarquee from '@/components/TrendingMarquee'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <TrendingMarquee />
    </main>
  )
}