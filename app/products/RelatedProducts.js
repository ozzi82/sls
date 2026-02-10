"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function RelatedProducts({ products, currentProductId }) {
  // Filter out current product
  const relatedProducts = products.filter(p => p.id !== currentProductId).slice(0, 3);

  if (relatedProducts.length === 0) return null;

  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white mb-3">
          <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent">
            You May Also Like
          </span>
        </h2>
        <p className="text-neutral-400 text-lg">
          Explore other EdgeLuxe products that might fit your needs
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            className="group relative rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-sm overflow-hidden hover:border-orange-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10"
          >
            {/* Product Image */}
            {product.dayImage && (
              <div className="relative w-full h-48 overflow-hidden bg-neutral-800">
                <img
                  src={product.dayImage}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badges overlay */}
                {product.badges && product.badges.length > 0 && (
                  <div className="absolute top-3 right-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-neutral-900/90 border border-neutral-700 text-neutral-200 backdrop-blur-sm">
                      {product.badges[0]}
                    </span>
                  </div>
                )}
              </div>
            )}

            {/* Product Content */}
            <div className="p-6">
              {/* Category */}
              <div className="mb-3">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border border-orange-500/40 text-orange-300">
                  {product.category}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-orange-400 transition-colors">
                {product.title}
              </h3>
              <p className="text-sm text-neutral-400 mb-4 line-clamp-2">
                {product.description}
              </p>

              {/* Key Features */}
              {product.features && product.features.length > 0 && (
                <div className="space-y-2 mb-5">
                  {product.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-neutral-300 line-clamp-1">{feature}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* CTA */}
              <Link
                href={`/products/${product.id}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg w-full justify-center text-sm font-semibold bg-orange-500/10 border border-orange-500/20 text-orange-300 hover:bg-orange-500/20 transition-all group-hover:scale-105"
              >
                View Details
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Hover glow effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </div>
        ))}
      </div>

      {/* View All Products CTA */}
      <div className="mt-8 text-center">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold border border-neutral-700 text-white hover:bg-neutral-800 transition-all"
        >
          View All Products
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
