import { Store, TrendingUp, Award, Zap } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Retail Signage Solutions | EdgeLuxe for Retail Stores & Shopping Centers",
  description: "Premium EdgeLuxe signage solutions for retail storefronts, shopping centers, and flagship stores. Trimless channel letters and illuminated signage that elevate your brand.",
};

export default function RetailSolutionsPage() {
  const challenges = [
    {
      icon: Store,
      title: "Brand Differentiation",
      description: "Stand out in crowded shopping districts with modern, premium signage that reflects your brand quality.",
    },
    {
      icon: TrendingUp,
      title: "Foot Traffic",
      description: "Eye-catching illuminated signage increases visibility and draws customers from greater distances.",
    },
    {
      icon: Award,
      title: "Premium Positioning",
      description: "Traditional channel letters with visible trim don't match high-end brand aesthetics.",
    },
  ];

  const recommendedProducts = [
    {
      id: "edgeluxe-lp5",
      title: "EdgeLuxe LP5 - Trimless Face-Lit",
      description: "Perfect for luxury retail and flagship stores. Flush-face design with no visible trim creates ultra-modern appearance.",
      features: [
        "Trimless design - premium aesthetic",
        "100% face illumination for maximum impact",
        "Available in brushed stainless or custom finishes",
        "36\"-48\" letter heights for commanding presence",
      ],
      image: "/images/hero-lp5.jpg",
      href: "/products/edgeluxe-lp5",
    },
    {
      id: "edgeluxe-lp11-f",
      title: "EdgeLuxe LP11-F - Face-Lit Cast Acrylic",
      description: "Cost-effective illuminated solution for retail chains and multi-location deployments.",
      features: [
        "IP67 waterproof - no maintenance",
        "Uniform face illumination",
        "Fast production for multiple locations",
        "Consistent brand appearance nationwide",
      ],
      image: "/images/hero-lp11-f.jpg",
      href: "/products/edgeluxe-lp11-f",
    },
    {
      id: "edgeluxe-lp31",
      title: "EdgeLuxe LP3.1 - Halo-Lit Standoff",
      description: "Sophisticated halo effect for upscale boutiques and design-focused retailers.",
      features: [
        "Elegant halo glow effect",
        "Adjustable standoffs for various surfaces",
        "Premium architectural appearance",
        "Multiple depth options for different scales",
      ],
      image: "/images/hero-lp31.jpg",
      href: "/products/edgeluxe-lp31",
    },
  ];

  const projectExamples = [
    {
      title: "Luxury Fashion Flagship",
      location: "Miami Design District",
      product: "LP5 Trimless 36\" Letters",
      result: "Featured in Architectural Digest, client ordered 3 more locations",
    },
    {
      title: "Shopping Center Monument",
      location: "Dallas, TX",
      product: "LP11-F Cast Acrylic Multi-Tenant",
      result: "98% tenant satisfaction, zero maintenance in 2 years",
    },
    {
      title: "Boutique Restaurant Row",
      location: "Toronto, ON",
      product: "LP3.1 Halo-Lit Individual Shops",
      result: "Cohesive upscale appearance, increased foot traffic 35%",
    },
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-28 pb-20 text-neutral-100">
        <div
          className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
          style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
        />

        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vmax] h-[120vmax] rounded-full opacity-20 blur-3xl animate-[spin_40s_linear_infinite]"
            style={{
              background: "conic-gradient(from 0deg, rgba(255,172,64,0.18), rgba(80,170,255,0.18), rgba(255,172,64,0.18))",
            }}
          />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-sm font-semibold mb-6">
              <Store className="w-4 h-4" />
              Retail & Shopping Center Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
                Premium Signage for Retail Excellence
              </span>
            </h1>
            <p className="text-lg md:text-xl text-neutral-200/90 leading-relaxed mb-8">
              EdgeLuxe German-engineered signage elevates your retail brand with modern trimless designs, consistent illumination, and premium finishes that match luxury positioning.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center rounded-xl px-6 py-3 font-semibold text-neutral-900 shadow-lg"
                style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
              >
                Request Quote for Retail Project
              </a>
              <a
                href="/case-studies"
                className="inline-flex items-center rounded-xl px-6 py-3 border border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
              >
                View Retail Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RETAIL CHALLENGES */}
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
          style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
        />

        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
                  Retail Signage Challenges We Solve
                </span>
              </h2>
              <p className="text-lg text-neutral-200/90">
                Modern retail demands signage that matches premium brand positioning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {challenges.map((challenge, idx) => {
                const Icon = challenge.icon;
                return (
                  <div key={idx} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
                    <div className="inline-flex rounded-xl bg-white/10 border border-white/20 p-3 mb-4">
                      <Icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{challenge.title}</h3>
                    <p className="text-neutral-300 leading-relaxed">{challenge.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* RECOMMENDED PRODUCTS */}
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
          style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
        />

        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
                  Recommended Products for Retail
                </span>
              </h2>
              <p className="text-lg text-neutral-200/90">
                EdgeLuxe solutions specifically suited for retail environments
              </p>
            </div>

            <div className="space-y-8">
              {recommendedProducts.map((product, idx) => (
                <div key={product.id} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="aspect-video md:aspect-auto relative bg-neutral-900">
                      <img src={product.image} alt={product.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-8 flex flex-col justify-center">
                      <h3 className="text-2xl font-bold text-white mb-3">{product.title}</h3>
                      <p className="text-neutral-300 mb-6">{product.description}</p>
                      <ul className="space-y-3 mb-6">
                        {product.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="text-sm text-neutral-200 flex items-start">
                            <svg className="w-5 h-5 text-orange-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="flex gap-3">
                        <Link
                          href={`/contact?product=${encodeURIComponent(product.title)}`}
                          className="inline-flex items-center rounded-xl px-5 py-2.5 font-semibold text-neutral-900 shadow-lg"
                          style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
                        >
                          Get Quote
                        </Link>
                        <Link
                          href={product.href}
                          className="inline-flex items-center rounded-xl px-5 py-2.5 border border-white/20 text-white bg-white/5 hover:bg-white/10 transition"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROJECT EXAMPLES */}
      <section className="relative overflow-hidden py-20">
        <div
          className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
          style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
        />

        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
                  Retail Success Stories
                </span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projectExamples.map((project, idx) => (
                <div key={idx} className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                  <h3 className="font-bold text-white mb-2">{project.title}</h3>
                  <div className="text-sm text-neutral-400 mb-3">📍 {project.location}</div>
                  <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold mb-3">
                    {project.product}
                  </div>
                  <p className="text-sm text-neutral-300">{project.result}</p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                href="/case-studies"
                className="inline-flex items-center rounded-xl px-6 py-3 border border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
              >
                View All Case Studies →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-12">
            <Zap className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
                Elevate Your Next Retail Project
              </span>
            </h2>
            <p className="text-lg text-neutral-200/90 mb-8">
              Let our team help you specify the perfect EdgeLuxe solution for your retail client's brand and budget.
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
                href="/compare"
                className="inline-flex items-center rounded-xl px-6 py-3 border border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
              >
                Compare Products
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
