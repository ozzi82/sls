import JsonLd from "../components/JsonLd";

const SITE = "https://www.sunlitesigns.com";

export const metadata = {
  title: "Wholesale FCO Letters | Flat Cut Out Signs | UL Listed Manufacturing",
  description: "Premium wholesale flat cut out (FCO) letters and signs in acrylic, aluminum, stainless steel, brass, and wood. Custom non-illuminated dimensional signage with 48-hour quotes. Thickness from 1mm to 200mm. Serving sign companies across USA & Canada.",
  keywords: "FCO letters, flat cut out letters, dimensional letters wholesale, non-illuminated letters, acrylic flat cut letters, metal dimensional signs, wholesale sign letters, custom cut out letters, flush mount letters, flat cut signage, dimensional signage manufacturing",
  openGraph: {
    title: "Wholesale FCO Letters | Flat Cut Out Signs Manufacturing",
    description: "Premium FCO letters in acrylic, aluminum, stainless steel & more. 48-hour quotes, 3-week delivery. UL listed manufacturer.",
    url: `${SITE}/fco-letters`,
    type: "website",
  }
};

export default function FCOLettersPage() {
  const fcoSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Flat Cut Out (FCO) Letters",
    brand: { "@type": "Brand", name: "Sunlite Signs" },
    category: "Dimensional Signage",
    description: "Premium flat cut out letters manufactured from acrylic, aluminum, stainless steel, brass, and wood. Non-illuminated dimensional signage with custom finishes and paint matching.",
    url: `${SITE}/fco-letters`,
    image: `${SITE}/images/fco-letters.jpg`,
    manufacturer: {
      "@type": "Organization",
      name: "Sunlite Signs LLC"
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Materials",
        value: "Acrylic, aluminum, stainless steel, brass, wood, PVC"
      },
      {
        "@type": "PropertyValue",
        name: "Thickness Range",
        value: "1mm to 200mm (0.039\" to 7.87\")"
      },
      {
        "@type": "PropertyValue",
        name: "Minimum Stroke Width",
        value: "5mm (0.2\")"
      },
      {
        "@type": "PropertyValue",
        name: "Warranty",
        value: "3 years"
      },
      {
        "@type": "PropertyValue",
        name: "Quote Turnaround",
        value: "24-48 hours"
      },
      {
        "@type": "PropertyValue",
        name: "Production Time",
        value: "~21 days door to door"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are FCO letters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FCO stands for Flat Cut Out. These are non-illuminated dimensional letters and logos cut from flat sheet materials like acrylic, aluminum, stainless steel, brass, or wood. They provide a professional, dimensional appearance without electrical components."
        }
      },
      {
        "@type": "Question",
        name: "What materials are available for FCO letters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We offer FCO letters in acrylic (various colors and thicknesses), aluminum, stainless steel (brushed or polished), brass, wood, and high-density PVC. Each material can be customized with paint, vinyl, or natural finishes."
        }
      },
      {
        "@type": "Question",
        name: "What is the minimum size for FCO letters?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Minimum stroke width is 5mm (0.2 inches) and minimum height is 10mm (0.4 inches). We can produce letters from very small precision cuts up to large-scale dimensional signage."
        }
      },
      {
        "@type": "Question",
        name: "How are FCO letters mounted?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "FCO letters can be flush-mounted directly to the surface, mounted with spacers for added dimension, or installed with threaded studs. We provide detailed mounting templates and installation instructions with every order."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd data={fcoSchema} />
      <JsonLd data={faqSchema} />

      <main className="min-h-screen bg-neutral-950 text-neutral-100">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-neutral-900 to-neutral-950 py-20 mt-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,172,64,0.15),transparent_50%)]" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
                  Wholesale FCO Letters
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-neutral-300 mb-4">
                Premium Flat Cut Out Letters & Dimensional Signage
              </p>
              <p className="text-lg text-neutral-400 max-w-3xl mx-auto">
                Professional non-illuminated dimensional letters manufactured from premium materials.
                UL listed components, 48-hour quote turnaround, 3-week door-to-door delivery across USA & Canada.
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

        {/* Materials & Specifications */}
        <section className="py-16 bg-neutral-950">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent">
                Materials & Options
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {/* Acrylic */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Cast Acrylic</h3>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Thickness: 3mm to 50mm (1/8" to 2")
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Wide color selection
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Clear, frosted, or opaque
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Cost-effective solution
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Perfect for interior applications
                  </li>
                </ul>
              </div>

              {/* Aluminum */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Aluminum</h3>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Thickness: 1mm to 25mm
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Brushed or smooth finish
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Powder coat in any PMS color
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Lightweight & durable
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Weather-resistant for outdoor use
                  </li>
                </ul>
              </div>

              {/* Stainless Steel */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Stainless Steel</h3>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Thickness: 1mm to 10mm
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Brushed, polished, or mirror finish
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Premium architectural appearance
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Exceptional durability
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Corrosion-resistant
                  </li>
                </ul>
              </div>

              {/* Brass */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Brass</h3>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Thickness: 1mm to 6mm
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Polished or antiqued finish
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Classic, upscale aesthetic
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Ideal for plaques & awards
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Traditional professional look
                  </li>
                </ul>
              </div>

              {/* Wood */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">Wood</h3>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Thickness: 6mm to 200mm
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Natural or stained finishes
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Warm, organic appearance
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Perfect for rustic or boutique brands
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Can be painted or vinyl-wrapped
                  </li>
                </ul>
              </div>

              {/* PVC / Foam Board */}
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <h3 className="text-xl font-semibold text-white mb-3">High-Density PVC</h3>
                <ul className="space-y-2 text-sm text-neutral-300">
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Thickness: 3mm to 50mm
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Lightweight & budget-friendly
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Paint or vinyl application
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Great for large-format letters
                  </li>
                  <li className="flex gap-2">
                    <span className="text-orange-400">•</span>
                    Indoor and covered outdoor use
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-neutral-900">
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
                      <td className="px-6 py-4 font-semibold text-white">Thickness Range</td>
                      <td className="px-6 py-4 text-neutral-300">1mm to 200mm (0.039" to 7.87")</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-white">Minimum Stroke Width</td>
                      <td className="px-6 py-4 text-neutral-300">5mm (0.2")</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-white">Minimum Height</td>
                      <td className="px-6 py-4 text-neutral-300">10mm (0.4")</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-white">Cutting Methods</td>
                      <td className="px-6 py-4 text-neutral-300">CNC routing, laser cutting, waterjet</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-white">Finishing Options</td>
                      <td className="px-6 py-4 text-neutral-300">Paint (any PMS color), vinyl, natural, brushed, polished</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-white">Mounting Options</td>
                      <td className="px-6 py-4 text-neutral-300">Flush mount, stud mount, spacer mount with templates</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-white">Quote Turnaround</td>
                      <td className="px-6 py-4 text-neutral-300">24-48 hours</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-white">Production & Delivery</td>
                      <td className="px-6 py-4 text-neutral-300">~21 days door to door</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-white">Warranty</td>
                      <td className="px-6 py-4 text-neutral-300">3 years</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 font-semibold text-white">Certification</td>
                      <td className="px-6 py-4 text-neutral-300">UL Listed components</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Applications & Use Cases */}
        <section className="py-16 bg-neutral-950">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-orange-400 to-white bg-clip-text text-transparent">
                Common Applications
              </span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Lobby Signage</h3>
                <p className="text-sm text-neutral-400">Reception areas, corporate lobbies, office entrances</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Retail Branding</h3>
                <p className="text-sm text-neutral-400">Store fronts, interior walls, window displays</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Wayfinding</h3>
                <p className="text-sm text-neutral-400">Directional signs, room numbers, departmental markers</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-white/5 border border-white/10">
                <h3 className="text-lg font-semibold text-white mb-2">Awards & Plaques</h3>
                <p className="text-sm text-neutral-400">Recognition plaques, donor walls, memorial signage</p>
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
                  What are FCO letters?
                  <span className="text-orange-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-neutral-300">
                  FCO stands for Flat Cut Out. These are non-illuminated dimensional letters and logos cut from flat sheet materials like acrylic, aluminum, stainless steel, brass, or wood. They provide a professional, dimensional appearance without electrical components, making them cost-effective and maintenance-free.
                </p>
              </details>

              <details className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center">
                  What materials are available for FCO letters?
                  <span className="text-orange-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-neutral-300">
                  We offer FCO letters in cast acrylic (various colors and thicknesses), aluminum, stainless steel (brushed or polished), brass, wood, and high-density PVC. Each material can be customized with paint in any PMS color, vinyl application, or natural finishes to match your brand requirements.
                </p>
              </details>

              <details className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center">
                  What is the minimum size for FCO letters?
                  <span className="text-orange-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-neutral-300">
                  Our minimum stroke width is 5mm (0.2 inches) and minimum height is 10mm (0.4 inches). We can produce letters from very small precision cuts for interior applications up to large-scale dimensional signage for building exteriors and monuments.
                </p>
              </details>

              <details className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center">
                  How are FCO letters mounted?
                  <span className="text-orange-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-neutral-300">
                  FCO letters can be flush-mounted directly to the surface with adhesive, mounted with spacers for added dimension and shadow effects, or installed with threaded studs for a floating appearance. We provide detailed 1:1 mounting templates and comprehensive installation instructions with every order.
                </p>
              </details>

              <details className="group rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                <summary className="cursor-pointer font-semibold text-white list-none flex justify-between items-center">
                  What is your quote turnaround time?
                  <span className="text-orange-400 group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="mt-4 text-neutral-300">
                  We provide detailed quotes within 24-48 hours of receiving artwork and specifications. Our quotes include production drawings, material specifications, mounting recommendations, and pricing. Production typically takes ~21 days door to door from approval.
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
