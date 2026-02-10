// app/products/ProductsGrid.js
import Link from "next/link";
import Image from "next/image";
import { getAllProducts } from "../config/site";

export default function ProductGrid({ title = "Our Products", subtitle }) {
  const list = getAllProducts();

  return (
    <section className="relative py-20 bg-neutral-950 overflow-hidden">
      {/* top separator line */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
        style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
      />

      {/* liquid-glass background */}
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
        {/* optional heading */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
                  {title}
                </span>
              </h2>
            )}
            {subtitle && <p className="mt-3 text-neutral-300 max-w-3xl mx-auto">{subtitle}</p>}
          </div>
        )}

        {/* Product Categories */}
        <div className="space-y-16">
          {/* Fabricated Channel Letters */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-orange-400 pl-4">
              Fabricated Channel Letters
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {list.filter(p => p.category === "Fabricated Channel Letters").map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>

          {/* Cast Block Acrylic */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-orange-400 pl-4">
              Cast Block Acrylic Letters
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {list.filter(p => p.category === "Cast Block Acrylic").map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>

          {/* Cabinet Signs */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-orange-400 pl-4">
              Cabinet Signs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {list.filter(p => p.category === "Cabinet Signs").map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }) {
  return (
    <div className="relative group rounded-2xl overflow-hidden border border-white/20 bg-white/10 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300">
      <div className="aspect-video overflow-hidden relative">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
          quality={75}
        />
      </div>

      <div className="p-6 relative z-10">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-white">{product.title}</h3>
        </div>
        <p className="text-sm text-neutral-300 mb-4">{product.description}</p>
        <p className="text-orange-400 font-semibold mb-4">{product.price}</p>

        <ul className="space-y-1 mb-4">
          {product.features.slice(0, 3).map((f, idx) => (
            <li key={idx} className="text-xs text-neutral-300 flex items-center">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full mr-2" />
              {f}
            </li>
          ))}
        </ul>

        <Link
          href={`/products/${product.id}`}
          className="w-full inline-flex items-center justify-center px-4 py-2 bg-orange-500 text-white font-medium rounded hover:bg-orange-600 transition"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}
