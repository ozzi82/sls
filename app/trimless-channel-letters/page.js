
import JsonLd from "../components/JsonLd";

const SITE = "https://www.sunlitesigns.com";

export const metadata = {
  title: "Wholesale Trimless Channel Letters | Flush Face LED Signage | UL Listed Manufacturing",
  description: "Premium wholesale trimless channel letters with flush acrylic face and no visible trim. UL listed LED components, face-lit, halo-lit, or combination illumination. Stainless steel or aluminum construction. 48-hour quotes, 3-week delivery across USA & Canada.",
  keywords: "trimless channel letters wholesale, flush face channel letters, seamless channel letters, low profile channel letters, modern channel letters, LED channel letters UL listed, architectural channel letters, premium channel letters, custom channel letters wholesale, face-lit channel letters",
  openGraph: {
    title: "Wholesale Trimless Channel Letters | Flush Face LED Signage Manufacturing",
    description: "Premium trimless channel letters with no visible trim. UL listed LEDs, 48-hour quotes, 3-week delivery.",
    url: `${SITE}/trimless-channel-letters`,
    type: "website",
  }
};

export default function Page() {
  const trimlessSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Trimless Channel Letters",
    brand: { "@type": "Brand", name: "Sunlite Signs" },
    category: "LED Channel Letter Signage",
    description: "Premium trimless channel letters featuring flush acrylic face with no visible trim. UL listed LED illumination with face-lit, halo-lit, or combination lighting options. Precision-fabricated from stainless steel or aluminum.",
    url: `${SITE}/trimless-channel-letters`,
    image: `${SITE}/images/trimless-channel-letters.jpg`,
    manufacturer: {
      "@type": "Organization",
      name: "Sunlite Signs LLC"
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Construction",
        value: "Stainless steel or aluminum with flush acrylic face"
      },
      {
        "@type": "PropertyValue",
        name: "Illumination Options",
        value: "Face-lit, halo-lit, combination"
      },
      {
        "@type": "PropertyValue",
        name: "LED Type",
        value: "UL listed LED modules"
      },
      {
        "@type": "PropertyValue",
        name: "Minimum Stroke Width",
        value: "15mm (0.6\")"
      },
      {
        "@type": "PropertyValue",
        name: "Depths Available",
        value: "30mm, 50mm, 80mm, 100mm"
      },
      {
        "@type": "PropertyValue",
        name: "Warranty",
        value: "3 years"
      },
      {
        "@type": "PropertyValue",
        name: "Certification",
        value: "UL Listed"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What makes channel letters trimless?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trimless channel letters feature a flush acrylic face with no visible plastic or metal trim cap. The face is precision step-routed to sit flush with the letter returns, creating clean, modern edges without any visible seams or trim pieces."
        }
      },
      {
        "@type": "Question",
        name: "What illumination options are available?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trimless channel letters can be face-lit for front illumination, halo-lit for a backlit glow effect, or combination-lit with both face and halo illumination. All options use UL listed LED modules with serviceable components and 3-year warranty."
        }
      },
      {
        "@type": "Question",
        name: "What materials are used for trimless channel letters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trimless channel letters are fabricated from thick-gauge stainless steel or aluminum returns and backs, welded together for structural integrity. The face is precision step-routed cast acrylic. Letters can be powder coated in any PMS color or finished with brushed, polished, or painted surfaces."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd data={trimlessSchema} />
      <JsonLd data={faqSchema} />

      <main className="min-h-screen bg-neutral-950 text-neutral-100">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-950 py-20 mt-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,172,64,0.15),transparent_50%)]" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
                  Trimless Channel Letters
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-4">
                Premium Flush-Face LED Channel Letters
              </p>
              <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
                Modern, seamless channel letters with no visible trim. UL listed LED components, precision-fabricated stainless steel or aluminum construction. 48-hour quote turnaround, 3-week door-to-door delivery across USA & Canada.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold text-neutral-900"
                  style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
                >
                  Request Wholesale Quote
                </a>
                <a
                  href="/products"
                  className="inline-flex items-center justify-center rounded-xl px-8 py-4 border border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
                >
                  View All Products
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-neutral-950">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent">
                Key Features
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">True Trimless Design</h3>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Flush acrylic face with no visible trim
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Precision step-routed for seamless appearance
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Clean, modern aesthetic
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    No cap trim pieces or visible seams
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">UL Listed LEDs</h3>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    UL certified LED modules and power supplies
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Uniform illumination with even light distribution
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Serviceable LED components
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    3-year comprehensive warranty
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Premium Construction</h3>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Thick-gauge stainless steel or aluminum
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Welded returns and backs for strength
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Powder coat in any PMS color
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Brushed, polished, or painted finishes
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Illumination Options */}
        <section className="py-16 bg-neutral-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent">
                Illumination Options
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Face-Lit</h3>
                <p className="text-neutral-300 text-sm mb-4">
                  Front illumination with LEDs behind the acrylic face for bright, even glow. Perfect for maximum visibility and impact.
                </p>
                <div className="text-orange-400 font-semibold">EdgeLuxe LP 5</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Halo-Lit</h3>
                <p className="text-neutral-300 text-sm mb-4">
                  Back illumination creating a halo glow effect around the letters. Sophisticated, upscale appearance for premium applications.
                </p>
                <div className="text-orange-400 font-semibold">EdgeLuxe LP 3.1 & LP 3.2</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center">
                <h3 className="text-xl font-semibold text-white mb-3">Combination</h3>
                <p className="text-neutral-300 text-sm mb-4">
                  Both face and halo illumination for maximum impact day and night. Dual lighting creates dramatic dimensional effect.
                </p>
                <div className="text-orange-400 font-semibold">Custom Configuration</div>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-neutral-950">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent">
                Technical Specifications
              </span>
            </h2>

            <div className="max-w-4xl mx-auto rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-6 py-4 font-semibold text-white">Construction Materials</td>
                      <td className="px-6 py-4 text-neutral-300">Stainless steel or aluminum with flush acrylic face</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-white">Available Depths</td>
                      <td className="px-6 py-4 text-neutral-300">30mm (1.2"), 50mm (2"), 80mm (3.1"), 100mm (3.9")</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-white">Minimum Stroke Width</td>
                      <td className="px-6 py-4 text-neutral-300">15mm (0.6") for stability and even illumination</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-white">Minimum Height</td>
                      <td className="px-6 py-4 text-neutral-300">50mm (2")</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-white">Finish Options</td>
                      <td className="px-6 py-4 text-neutral-300">Powder coat (any PMS color), brushed, polished, painted</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-white">LED Components</td>
                      <td className="px-6 py-4 text-neutral-300">UL listed modules and power supplies, serviceable</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-white">Mounting</td>
                      <td className="px-6 py-4 text-neutral-300">Stud or rail with 1:1 templates and detailed plans</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-white">Quote Turnaround</td>
                      <td className="px-6 py-4 text-neutral-300">24-48 hours with production drawings</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-white">Production & Delivery</td>
                      <td className="px-6 py-4 text-neutral-300">~21 days door to door</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-white">Warranty</td>
                      <td className="px-6 py-4 text-neutral-300">3 years comprehensive</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-white">Certification</td>
                      <td className="px-6 py-4 text-neutral-300">UL Listed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 bg-neutral-900">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent">
                Frequently Asked Questions
              </span>
            </h2>

            <div className="max-w-3xl mx-auto space-y-6">
              <details className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center">
                  What makes channel letters trimless?
                  <span className="text-orange-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-neutral-300">
                  Trimless channel letters feature a flush acrylic face with no visible plastic or metal trim cap. The face is precision step-routed to sit flush with the letter returns, creating clean, modern edges without any visible seams or trim pieces. This creates a sleek, contemporary appearance that distinguishes them from traditional channel letters with visible trim caps.
                </p>
              </details>

              <details className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center">
                  What illumination options are available?
                  <span className="text-orange-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-neutral-300">
                  Trimless channel letters can be face-lit for front illumination, halo-lit for a backlit glow effect, or combination-lit with both face and halo illumination. All options use UL listed LED modules with serviceable components and 3-year warranty. Face-lit provides maximum brightness and visibility, halo-lit offers a sophisticated upscale look, and combination provides the best of both.
                </p>
              </details>

              <details className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center">
                  What materials are used for trimless channel letters?
                  <span className="text-orange-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-neutral-300">
                  Trimless channel letters are fabricated from thick-gauge stainless steel or aluminum returns and backs, welded together for structural integrity and durability. The face is precision step-routed cast acrylic. Letters can be powder coated in any PMS color or finished with brushed, polished, or painted surfaces to match your exact branding requirements.
                </p>
              </details>

              <details className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center">
                  Are trimless channel letters suitable for outdoor use?
                  <span className="text-orange-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-neutral-300">
                  Yes, trimless channel letters are designed for outdoor commercial applications. They're constructed with weather-resistant materials, welded seams for water-tightness, and UL listed electrical components rated for outdoor use. The powder-coated or brushed metal finishes resist fading, corrosion, and environmental damage, making them ideal for storefront signage, building identification, and architectural applications.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-neutral-950">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent">
                  Ready to Get Started?
                </span>
              </h2>
              <p className="text-lg text-neutral-300 mb-8">
                Request a wholesale quote today. 48-hour turnaround, 3-week delivery, 3-year warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-8 py-4 font-semibold text-neutral-900"
                  style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
                >
                  Request Quote
                </a>
                <a
                  href="tel:+16892940912"
                  className="inline-flex items-center justify-center rounded-xl px-8 py-4 border border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
                >
                  Call: (689) 294-0912
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
