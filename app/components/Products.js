import Link from "next/link";
import Image from "next/image";
import { getFeaturedProducts } from "../config/site";

export default function Products() {
  // Load featured products for homepage (max 4)
  const productsData = getFeaturedProducts();
  return (
    <section id="products" className="py-20 bg-neutral-950 relative overflow-hidden">
      {/* Rounded, drifting background orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="liquid-blob animate-blob-1"
          style={{
            top: "20%", left: "35%", width: "620px", height: "620px",
            background: "radial-gradient(circle at 50% 50%, rgba(255,172,64,0.25), rgba(255,172,64,0.0) 60%)",
          }}
        />
        <div
          className="liquid-blob animate-blob-2 anim-delay-1500"
          style={{
            bottom: "-160px", left: "-160px", width: "520px", height: "520px",
            background: "radial-gradient(circle at 50% 50%, rgba(64,181,255,0.22), rgba(64,181,255,0.0) 60%)",
          }}
        />
        <div
          className="liquid-blob animate-blob-3 anim-delay-3000"
          style={{
            top: "-80px", right: "-80px", width: "320px", height: "320px",
            background: "radial-gradient(circle at 50% 50%, rgba(255,214,102,0.20), rgba(255,214,102,0.0) 60%)",
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Products</h2>
          <p className="text-xl text-neutral-400 max-w-3xl mx-auto">
            Explore our most popular signage solutions designed to elevate your business presence.
          </p>
        </div>

        {/* Featured products grid - 4 products */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {productsData.map((p, i) => (
            <div
              key={i}
              className="relative group rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              {/* Card liquid blobs */}
              <div className="absolute inset-0 pointer-events-none">
                <div
                  className="liquid-blob animate-blob-1"
                  style={{
                    top: "20%", left: "10%", width: "220px", height: "220px",
                    background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.25), rgba(255,255,255,0) 60%)",
                  }}
                />
                <div
                  className="liquid-blob animate-blob-2 anim-delay-1500"
                  style={{
                    bottom: "10%", right: "8%", width: "180px", height: "180px",
                    background: "radial-gradient(circle at 50% 50%, rgba(255,164,80,0.20), rgba(255,164,80,0) 60%)",
                  }}
                />
                <div
                  className="liquid-blob animate-blob-3 anim-delay-3000"
                  style={{
                    top: "10%", right: "25%", width: "140px", height: "140px",
                    background: "radial-gradient(circle at 50% 50%, rgba(90,170,255,0.18), rgba(90,170,255,0) 60%)",
                  }}
                />
              </div>

              <div className="aspect-video overflow-hidden relative">
                <Image
                  src={p.image}
                  alt={`${p.title} wholesale signage`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 20vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  quality={75}
                />
              </div>

              <div className="p-6 relative z-10">
                {/* Badges */}
                {p.badges && p.badges.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-3">
                    {p.badges.map((badge, badgeIdx) => (
                      <span
                        key={badgeIdx}
                        className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400"
                      >
                        {badge}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                  <span className="text-orange-400 font-semibold text-lg whitespace-nowrap ml-2">{p.price}</span>
                </div>

                {/* Category tag */}
                {p.category && (
                  <div className="mb-3">
                    <span className="inline-block text-xs text-neutral-400 font-medium">
                      {p.category}
                    </span>
                  </div>
                )}

                <p className="text-neutral-300 text-sm mb-4">{p.description}</p>

                <ul className="space-y-2 mb-6">
                  {p.features.map((f, idx) => (
                    <li key={idx} className="text-sm text-neutral-300 flex items-start">
                      <svg className="w-4 h-4 text-orange-400 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex gap-2">
                  <Link
                    href={`/contact?product=${encodeURIComponent(p.title)}`}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2.5 font-semibold text-neutral-900 rounded-xl hover:scale-105 transition-transform shadow-lg"
                    style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
                    aria-label={`Get quote for ${p.title}`}
                  >
                    Get Quote
                  </Link>
                  <Link
                    href={p.href}
                    className="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-white/10 border border-white/30 text-white font-medium rounded-xl hover:bg-white/20 transition"
                    aria-label={`View details for ${p.title}`}
                  >
                    Details
                  </Link>
                </div>
              </div>

              {/* Subtle halo on hover */}
              <div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    "radial-gradient(80% 80% at 50% 50%, rgba(255,172,64,0.14) 0%, rgba(255,172,64,0.07) 40%, rgba(255,172,64,0) 70%)",
                }}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="inline-flex items-center px-10 py-4 bg-orange-500 text-white text-lg rounded hover:bg-orange-600 transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
