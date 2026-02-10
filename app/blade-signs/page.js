import Link from "next/link";
import ProductHero from "../products/ProductHero";
import FAQ from "../components/FAQ";
import JsonLd from "../components/JsonLd";

const SITE = "https://www.sunlitesigns.com";

export const metadata = {
  title: "Wholesale Blade Signs | Custom Projecting Signs | UL Listed LED Illumination",
  description:
    "Premium wholesale blade signs & projecting signage for retail corridors, shopping centers, and commercial streetscapes. Double-sided visibility with optional LED illumination. UL listed components, 48-hour quotes, 3-week delivery across USA & Canada.",
  keywords: "blade signs wholesale, projecting signs, double-sided blade signs, illuminated blade signs, retail corridor signage, architectural projecting signs, custom blade signs, LED blade signs, commercial projecting signage, perpendicular wall signs",
  openGraph: {
    title: "Wholesale Blade Signs | Custom Projecting Signs Manufacturing",
    description:
      "Premium blade signs for retail and commercial corridors. Double-sided, optional LED, UL listed. 48-hour quotes.",
    url: `${SITE}/blade-signs`,
    type: "website",
    images: [`${SITE}/og/blade-signs.png`],
  },
  alternates: { canonical: `${SITE}/blade-signs` },
};

export default function Page() {
  const product = {
    id: "blade-signs",
    title: "Architectural Blade Signs",
    description:
      "Premium blade signs engineered for retail corridors and streetscapes. Double-sided visibility with optional LED illumination.",
    image: "/images/references/ref1.jpg",
    chips: ["Double-sided", "Optional LED", "Architectural finishes"],
    specs: {
      Orientation: "Perpendicular wall-mount",
      Illumination: "None / edge-lit / panel-lit",
      Faces: "Acrylic / metal with graphics",
      Mounting: "Wall plates or brackets",
      Finish: "Painted / powder / brushed metal",
      Warranty: "3 years",
    },
    bullets: [
      "Excellent corridor/street visibility",
      "Durable brackets and hardware",
      "Lighting options for night visibility",
      "Custom shapes and sizes available",
    ],
  };

  const bladeSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Blade Signs & Projecting Signs",
    brand: { "@type": "Brand", name: "Sunlite Signs" },
    category: "Architectural Projecting Signage",
    description: "Premium double-sided blade signs and projecting signage for retail corridors, shopping centers, and commercial streetscapes. Available with optional UL listed LED illumination.",
    url: `${SITE}/blade-signs`,
    image: `${SITE}/images/references/ref1.jpg`,
    manufacturer: {
      "@type": "Organization",
      name: "Sunlite Signs LLC"
    },
    additionalProperty: [
      {
        "@type": "PropertyValue",
        name: "Orientation",
        value: "Perpendicular wall-mount"
      },
      {
        "@type": "PropertyValue",
        name: "Visibility",
        value: "Double-sided"
      },
      {
        "@type": "PropertyValue",
        name: "Illumination Options",
        value: "Non-illuminated, edge-lit, face-lit, halo-lit"
      },
      {
        "@type": "PropertyValue",
        name: "Materials",
        value: "Aluminum, stainless steel, acrylic"
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
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What are blade signs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Blade signs, also called projecting signs, are mounted perpendicular to building walls. They extend outward from the facade to provide excellent visibility from both directions along corridors, streets, or walkways. They're ideal for retail environments, shopping centers, and commercial streetscapes."
        }
      },
      {
        "@type": "Question",
        name: "What illumination options are available for blade signs?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Blade signs can be non-illuminated, edge-lit with LED strips around the perimeter, face-lit with internal LEDs for glowing graphics, or halo-lit for a backlit glow effect. All illuminated options use UL listed LED components with 3-year warranty."
        }
      },
      {
        "@type": "Question",
        name: "What sizes can blade signs be manufactured in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Blade signs are custom-manufactured to your specifications. Common sizes range from 12 inches to 48 inches in height and 12 inches to 60 inches in projection from the wall. Custom shapes including rectangular, circular, and custom die-cut shapes are available."
        }
      }
    ]
  };

  return (
    <>
      <JsonLd data={bladeSchema} />
      <JsonLd data={faqSchema} />

      <main className="min-h-screen bg-neutral-950 text-neutral-100">
        <ProductHero product={product} />

      <section className="relative py-14">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl md:text-3xl font-bold mb-3">Overview</h2>
            <p className="text-neutral-300">{product.description}</p>
            <ul className="mt-5 space-y-2">
              {product.bullets.map((b, i) => (
                <li key={i} className="text-neutral-300">• {b}</li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link
                href={`/contact?product=${encodeURIComponent(product.title)}`}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-neutral-900"
                style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
              >
                Request Quote
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 border border-white/15 text-white bg-white/5 hover:bg-white/10 transition"
              >
                Back to Products
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.35)]">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Key Specifications</h2>
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {Object.entries(product.specs).map(([k, v]) => (
                <div key={k}>
                  <dt className="text-sm text-neutral-400">{k}</dt>
                  <dd className="text-neutral-200 font-medium">{v}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 text-sm text-neutral-400">Mounting drawings provided as needed.</p>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <FAQ withSchema={false} maxItems={3} title="Questions about blade signs" />
      </section>
    </main>
    </>
  );
}
