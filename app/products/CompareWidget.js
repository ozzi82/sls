"use client";

import Link from "next/link";
import { ArrowRight, GitCompare } from "lucide-react";

export default function CompareWidget({ currentProduct, similarProducts }) {
  return (
    <div className="mt-16">
      <div className="rounded-2xl border border-neutral-800 bg-gradient-to-br from-neutral-900/80 to-neutral-900/40 backdrop-blur-sm overflow-hidden">
        <div className="p-6 border-b border-neutral-800">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-orange-500/10 border border-orange-500/20">
                  <GitCompare className="w-5 h-5 text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">Compare Similar Products</h2>
              </div>
              <p className="text-neutral-400">
                See how {currentProduct.title} compares to similar EdgeLuxe products
              </p>
            </div>
            <Link
              href="/compare"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-orange-500/10 border border-orange-500/20 text-orange-300 hover:bg-orange-500/20 transition-all"
            >
              Full Comparison Tool
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="p-6">
          <div className="grid md:grid-cols-3 gap-4">
            {similarProducts.slice(0, 3).map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group relative rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 hover:border-orange-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10"
              >
                {/* Product Image */}
                {product.dayImage && (
                  <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden bg-neutral-800">
                    <img
                      src={product.dayImage}
                      alt={product.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Product Info */}
                <div className="mb-3">
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-orange-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-xs text-neutral-500 mb-2">{product.category}</p>
                  <p className="text-sm text-neutral-400 line-clamp-2">
                    {product.description}
                  </p>
                </div>

                {/* Key Specs */}
                {product.specifications && (
                  <div className="space-y-1 mb-4">
                    {Object.entries(product.specifications).slice(0, 2).map(([key, value]) => (
                      <div key={key} className="text-xs">
                        <span className="text-neutral-500">{key}:</span>{" "}
                        <span className="text-neutral-300">{value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <div className="flex items-center justify-between text-sm">
                  <span className="text-orange-400 font-medium group-hover:underline">
                    View Details
                  </span>
                  <ArrowRight className="w-4 h-4 text-orange-400 group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/0 via-orange-500/0 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
              </Link>
            ))}
          </div>

          {/* Mobile CTA */}
          <div className="mt-6 md:hidden">
            <Link
              href="/compare"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold bg-orange-500/10 border border-orange-500/20 text-orange-300 hover:bg-orange-500/20 transition-all"
            >
              Full Comparison Tool
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
