// app/about/page.js
import { CheckCircle, Users, Shield, Clock, Award, Factory, Truck } from "lucide-react";

export const metadata = {
  title: "About | Sunlite Signs",
  description:
    "25 years of innovation in wholesale signage manufacturing. German-engineered design with US operations in Florida and Minnesota. Serving 1,000+ sign companies across North America.",
};

export default function AboutPage() {

  const capabilities = [
    {
      icon: <Factory className="w-8 h-8" />,
      title: "German-Engineered Design",
      description:
        "R&D and quality standards developed in Germany, bringing European precision to North American markets.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "US Operations",
      description:
        "Strategic operations in Florida and Minnesota, providing fast turnaround and personalized service across North America.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Standards",
      description:
        "Rigorous quality control and testing ensure consistent, reliable products meeting UL safety standards.",
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Nationwide Shipping",
      description:
        "Fast, secure shipping to all 50 states and Canada with ~21 day delivery and tracking.",
    },
  ];

  const quality = [
    { icon: <Shield className="w-8 h-8 text-orange-400" />, title: "UL Listed", text: "All LED components meet UL safety standards" },
    { icon: <Award className="w-8 h-8 text-orange-400" />, title: "German Engineered", text: "European design and quality standards" },
    { icon: <Clock className="w-8 h-8 text-orange-400" />, title: "3 Year Warranty", text: "Comprehensive warranty coverage" },
    { icon: <CheckCircle className="w-8 h-8 text-orange-400" />, title: "100% QC", text: "Every product tested before shipment" },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Sunlite Signs Manufacturing",
    mainEntity: {
      "@type": "Organization",
      name: "Sunlite Signs",
      areaServed: ["US", "CA"],
      url: "https://www.sunlitesigns.com",
      logo: "https://www.sunlitesigns.com/logo.png",
    },
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100">
      {/* JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-20">
        {/* top separator line */}
        <div
          className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
          style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
        />
        {/* liquid background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vmax] h-[140vmax] rounded-full opacity-20 blur-3xl animate-[spin_40s_linear_infinite]"
            style={{
              background:
                "conic-gradient(from 0deg, rgba(255,172,64,0.18), rgba(80,170,255,0.18), rgba(255,172,64,0.18))",
            }}
          />
          <div
            className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full blur-3xl opacity-25"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,172,64,0.22), rgba(255,172,64,0.00) 60%)",
            }}
          />
          <div
            className="absolute -bottom-28 -right-20 w-[460px] h-[460px] rounded-full blur-3xl opacity-20"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(80,170,255,0.20), rgba(80,170,255,0.00) 60%)",
            }}
          />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
                About Sunlite Signs Manufacturing
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-300">
              25 years of innovation in wholesale signage manufacturing. Trusted by sign companies
              across North America for quality, reliability, and exceptional service.
            </p>

            {/* glass stat chips */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { label: "Years", value: "25+" },
                { label: "Partners", value: "1,000+" },
                { label: "Coverage", value: "US & CA" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl bg-white/5 border border-white/10 backdrop-blur-md py-3 text-center"
                >
                  <div className="text-xl font-bold text-white">{s.value}</div>
                  <div className="text-xs text-neutral-300">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          {/* Story card */}
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.06] backdrop-blur-xl p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Story</h2>
            <p className="text-lg text-neutral-300 mb-6">
              Founded in 1999 with German engineering heritage, Sunlite Signs brings European precision
              and quality standards to the North American sign industry through our EdgeLuxe product line.
            </p>
            <p className="text-lg text-neutral-300 mb-6">
              With R&D rooted in German engineering excellence, we expanded to US operations in Florida and Minnesota in 2023,
              pioneering innovations like true trimless channel letters and advanced LED integration systems.
            </p>
            <p className="text-lg text-neutral-300 mb-8">
              Today, we serve over 1,000 sign companies across the USA, Canada, and Europe, combining German design
              standards with responsive service and fast turnaround times.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
              <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-4xl font-bold text-white mb-2">1999</div>
                <div className="text-sm text-neutral-300">Founded</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-4xl font-bold text-white mb-2">2023</div>
                <div className="text-sm text-neutral-300">US Operations</div>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="text-4xl font-bold text-white mb-2">1,000+</div>
                <div className="text-sm text-neutral-300">Partners Worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="relative overflow-hidden py-20">
        {/* top separator line */}
        <div
          className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
          style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
        />
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Manufacturing Excellence</h2>
            <p className="text-xl text-neutral-300 max-w-4xl mx-auto">
              Advanced equipment, skilled craftspeople, and rigorous quality control ensure
              every product meets the highest industry standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((c) => (
              <div
                key={c.title}
                className="rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
              >
                <div className="text-orange-400 mb-4">{c.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{c.title}</h3>
                <p className="text-neutral-300">{c.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALITY & CERTIFICATIONS */}
      <section className="relative overflow-hidden py-20">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-white mb-4">Quality & Certifications</h2>
            <p className="text-xl text-neutral-300">
              Our commitment to quality is backed by industry certifications and rigorous testing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {quality.map((q) => (
              <div key={q.title} className="text-center">
                <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-white/8 border border-white/15 backdrop-blur-md">
                  {q.icon}
                </div>
                <h3 className="font-semibold text-white mb-1">{q.title}</h3>
                <p className="text-sm text-neutral-300">{q.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
