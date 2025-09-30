import type { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Kana TV",
  description:
    "Get in touch with the Kana TV team for partnerships, press, and support.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Header />

      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <Image
          src="/hero-page-1.jpg"
          alt="Contact Kana TV"
          width={1920}
          height={1080}
          className="h-[35vh] w-full object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        <div className="absolute inset-0 flex items-center px-6 sm:px-10 lg:px-16">
          <div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight">
              Contact us
            </h1>
            <p className="mt-3 text-white/80 max-w-2xl">
              Partnerships, media, careers, or general inquiries—we’d love to
              hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Info + Form */}
      <section className="px-6 sm:px-10 lg:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info cards */}
          <div className="space-y-4 lg:col-span-1">
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h2 className="text-xl font-semibold">General</h2>
              <p className="mt-2 text-white/70">info@kanatv.et</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h2 className="text-xl font-semibold">Press</h2>
              <p className="mt-2 text-white/70">press@kanatv.et</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h2 className="text-xl font-semibold">Partnerships</h2>
              <p className="mt-2 text-white/70">partners@kanatv.et</p>
            </div>
            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h2 className="text-xl font-semibold">Follow</h2>
              <p className="mt-2 text-white/70">YouTube: @KanaTelevision</p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 rounded-2xl bg-white/5 border border-white/10 p-6">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
