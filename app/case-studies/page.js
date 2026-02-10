import { FileText, TrendingUp, CheckCircle, Quote } from "lucide-react";
import Image from "next/image";

export const metadata = {
  title: "Case Studies | Real EdgeLuxe Project Success Stories",
  description: "Explore detailed case studies of successful EdgeLuxe signage installations. See how sign companies solved complex challenges with our trimless channel letters and cast acrylic products.",
};

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      id: 1,
      title: "Luxury Retail Flagship Store - Miami Design District",
      client: "Premium Signs Miami",
      location: "Miami, FL",
      productUsed: "EdgeLuxe LP5 Trimless Channel Letters",
      image: "/images/references/ref1.jpg",
      challenge:
        "High-end fashion retailer required ultra-modern signage that matched their minimalist brand aesthetic. Traditional channel letters with visible trim didn't align with their premium positioning. Strict building code requirements for wind load ratings in Miami.",
      solution:
        "Specified EdgeLuxe LP5 100mm depth trimless channel letters in custom brushed stainless finish. German-engineered flush-face design eliminated all visible trim. UL-listed components met Miami-Dade wind load requirements. Provided engineered drawings with structural calculations for permit approval.",
      results: [
        "Permit approved on first submission with engineered drawings",
        "Zero callbacks - installation went perfectly with provided patterns",
        "Client immediately ordered signage for 3 additional locations",
        "Featured in Architectural Digest as example of modern retail design",
      ],
      stats: {
        letterHeight: '36"',
        totalLetters: "12 letters",
        turnaround: "18 days from approval",
        warranty: "3 years",
      },
      testimonial: {
        quote:
          "The EdgeLuxe trimless letters were exactly what our luxury client needed. The flush face design is flawless, and the engineering support made the permit process smooth. This is now our go-to product for high-end retail.",
        author: "Carlos Rodriguez",
        title: "Owner, Premium Signs Miami",
      },
    },
    {
      id: 2,
      title: "Medical Campus Wayfinding System - 15 Building Complex",
      client: "Coastal Signage Solutions",
      location: "San Diego, CA",
      productUsed: "EdgeLuxe LP11-B Halo-Lit Cast Acrylic",
      image: "/images/references/ref3.jpg",
      challenge:
        "Large medical campus needed cohesive wayfinding across 15 buildings with varying architectural styles. Required 24/7 visibility for emergency services. Budget constraints meant choosing between illuminated quality signage OR comprehensive coverage - not both.",
      solution:
        "Recommended EdgeLuxe LP11-B back-lit cast acrylic letters - premium appearance at competitive pricing. IP67 waterproof sealing eliminated maintenance concerns. Standardized on 20mm depth for all buildings. Created modular template system for 200+ individual signs enabling efficient fabrication.",
      results: [
        "Delivered comprehensive wayfinding for entire campus within budget",
        "Zero maintenance issues after 2 years of 24/7 operation",
        "Emergency responders reported 40% faster navigation times",
        "Campus expansion ordered additional 50 signs - same specification",
      ],
      stats: {
        totalSigns: "200+ individual signs",
        buildings: "15 buildings",
        turnaround: "6 weeks total project",
        warranty: "3 years",
      },
      testimonial: {
        quote:
          "The LP11-B cast acrylic gave us the illuminated quality our client demanded at a price point that let us cover the entire campus. Two years later with zero service calls - this product delivers.",
        author: "Jennifer Chen",
        title: "Project Manager, Coastal Signage Solutions",
      },
    },
    {
      id: 3,
      title: "Restaurant Chain Rebrand - 12 Locations Nationwide",
      client: "SignCraft Industries",
      location: "Multiple Locations - USA & Canada",
      productUsed: "EdgeLuxe LP3.1 Halo-Lit Standoff Letters",
      image: "/images/references/ref2.jpg",
      challenge:
        "National restaurant chain rebranding required consistent appearance across 12 locations with different mounting surfaces (brick, stone, metal panels, stucco). Tight timeline - 4 weeks to manufacture all locations. Each location had unique letter sizing due to varying building widths.",
      solution:
        "EdgeLuxe LP3.1 halo-lit letters with adjustable standoff systems accommodated all surface types. Standardized on 50mm depth across all locations for brand consistency. Pre-programmed LED modules ensured identical color temperature nationwide. Created custom sizing for each location while maintaining proportional halo glow.",
      results: [
        "All 12 locations completed within 4-week timeline",
        "Perfect brand consistency across diverse building types",
        "Modular standoff system reduced installation time by 30%",
        "Client awarded us their ongoing maintenance contract",
      ],
      stats: {
        locations: "12 locations",
        totalLetters: "140+ letters",
        turnaround: "28 days all locations",
        warranty: "3 years",
      },
      testimonial: {
        quote:
          "Managing 12 simultaneous installations across the country could have been a nightmare. The consistent quality and detailed installation documentation from Sunlite made it smooth. Every location looks perfect.",
        author: "David Martinez",
        title: "VP Operations, SignCraft Industries",
      },
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-16 text-neutral-100">
        <div
          className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
          style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
        />

        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vmax] h-[120vmax] rounded-full opacity-20 blur-3xl animate-[spin_40s_linear_infinite]"
            style={{
              background: "conic-gradient(from 0deg, rgba(255,172,64,0.18), rgba(80,170,255,0.18), rgba(255,172,64,0.18))",
            }}
          />
        </div>

        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
              EdgeLuxe Case Studies
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-200/90 leading-relaxed">
            Real projects. Real challenges. Real results. See how sign companies nationwide succeed with EdgeLuxe German-engineered signage.
          </p>
        </div>
      </section>

      {/* CASE STUDIES */}
      {caseStudies.map((study, index) => (
        <section key={study.id} className="relative overflow-hidden py-16">
          {index > 0 && (
            <div
              className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
              style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
            />
          )}

          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
          </div>

          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="mb-12">
                <div className="inline-block px-4 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold mb-4">
                  {study.productUsed}
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">{study.title}</h2>
                <div className="flex flex-wrap gap-4 text-neutral-300">
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4 text-orange-400" />
                    <span>{study.client}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span>📍</span>
                    <span>{study.location}</span>
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="rounded-2xl overflow-hidden border border-white/10 mb-12">
                <div className="relative aspect-video bg-neutral-900">
                  <img src={study.image} alt={study.title} className="w-full h-full object-cover" />
                </div>
              </div>

              {/* Challenge */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 mb-8">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5" />
                  The Challenge
                </h3>
                <p className="text-neutral-200 leading-relaxed">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 mb-8">
                <h3 className="text-xl font-bold text-orange-400 mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  The Solution
                </h3>
                <p className="text-neutral-200 leading-relaxed">{study.solution}</p>
              </div>

              {/* Results */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 mb-8">
                <h3 className="text-xl font-bold text-orange-400 mb-4">Results & Impact</h3>
                <ul className="space-y-3">
                  {study.results.map((result, idx) => (
                    <li key={idx} className="text-neutral-200 flex items-start">
                      <svg className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{result}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {Object.entries(study.stats).map(([key, value]) => (
                  <div key={key} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-4 text-center">
                    <div className="text-2xl font-bold text-white mb-1">{value}</div>
                    <div className="text-xs text-neutral-400 capitalize">{key.replace(/([A-Z])/g, " $1").trim()}</div>
                  </div>
                ))}
              </div>

              {/* Testimonial */}
              <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/10 to-yellow-500/10 backdrop-blur-xl p-8 relative">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-orange-400/20" />
                <p className="text-lg text-neutral-100 leading-relaxed mb-6 italic relative z-10">"{study.testimonial.quote}"</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-semibold text-white">{study.testimonial.author}</div>
                  <div className="text-sm text-neutral-400">{study.testimonial.title}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA SECTION */}
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
          style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
        />

        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-12">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
                Ready to Create Your Success Story?
              </span>
            </h2>
            <p className="text-lg text-neutral-200/90 mb-8">
              Let our team help you deliver exceptional results for your clients with EdgeLuxe German-engineered signage.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center rounded-xl px-6 py-3 font-semibold text-neutral-900 shadow-lg"
                style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
              >
                Request Wholesale Quote
              </a>
              <a
                href="/projects"
                className="inline-flex items-center rounded-xl px-6 py-3 border border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
              >
                View Project Gallery
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
