"use client";

import { useState, useEffect } from "react";
import { Check, X, Info } from "lucide-react";
import { getAllProducts } from "../config/site";

export default function ProductComparison() {
  // Set page title
  useEffect(() => {
    document.title = "Product Comparison Tool | Compare EdgeLuxe Signage | Sunlite Signs";
  }, []);
  const allProducts = getAllProducts();
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Toggle product selection (max 4)
  const toggleProduct = (product) => {
    if (selectedProducts.find(p => p.id === product.id)) {
      setSelectedProducts(selectedProducts.filter(p => p.id !== product.id));
    } else if (selectedProducts.length < 4) {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  const isSelected = (productId) => selectedProducts.find(p => p.id === productId);

  // Comparison attributes
  const comparisonAttributes = [
    { key: "category", label: "Category", type: "text" },
    { key: "price", label: "Pricing", type: "text" },
    { key: "illumination", label: "Illumination Type", type: "spec", specKey: "Illumination" },
    { key: "materials", label: "Materials", type: "spec", specKey: "Materials" },
    { key: "depth", label: "Depth Options", type: "spec", specKey: "Depths" },
    { key: "customization", label: "Customization", type: "spec", specKey: "Customization" },
    { key: "minHeight", label: "Minimum Height", type: "spec", specKey: "Minimum Height" },
    { key: "sealing", label: "Waterproofing", type: "spec", specKey: "Sealing" },
    { key: "maintenance", label: "Maintenance", type: "spec", specKey: "Maintenance" },
    { key: "warranty", label: "Warranty", type: "spec", specKey: "Warranty" },
    { key: "certification", label: "Certification", type: "spec", specKey: "Certification" },
  ];

  const getAttributeValue = (product, attribute) => {
    if (attribute.type === "text") {
      return product[attribute.key] || "—";
    } else if (attribute.type === "spec") {
      return product.specifications?.[attribute.specKey] || "—";
    }
    return "—";
  };

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
              Compare EdgeLuxe Products
            </span>
          </h1>
          <p className="text-lg md:text-xl text-neutral-200/90 leading-relaxed">
            Select up to 4 products to compare features, specifications, and find the perfect solution for your project.
          </p>
        </div>
      </section>

      {/* PRODUCT SELECTOR */}
      <section className="relative overflow-hidden py-12">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6">
              Select Products to Compare {selectedProducts.length > 0 && `(${selectedProducts.length}/4)`}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {allProducts.map((product) => (
                <button
                  key={product.id}
                  onClick={() => toggleProduct(product)}
                  disabled={!isSelected(product.id) && selectedProducts.length >= 4}
                  className={`relative rounded-xl border-2 p-4 text-left transition-all duration-300 ${
                    isSelected(product.id)
                      ? "border-orange-400 bg-orange-500/10"
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/8"
                  } ${!isSelected(product.id) && selectedProducts.length >= 4 ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {isSelected(product.id) && (
                    <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-orange-400 flex items-center justify-center">
                      <Check className="w-4 h-4 text-neutral-900" />
                    </div>
                  )}

                  <div className="text-sm font-semibold text-white mb-1 pr-8">{product.title}</div>
                  <div className="text-xs text-neutral-400">{product.category}</div>
                </button>
              ))}
            </div>

            {selectedProducts.length >= 4 && (
              <div className="mt-4 text-center text-sm text-orange-400">
                Maximum 4 products selected. Deselect a product to choose another.
              </div>
            )}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      {selectedProducts.length > 0 && (
        <section className="relative overflow-hidden py-12">
          <div
            className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
            style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
          />

          <div className="absolute inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
          </div>

          <div className="container mx-auto px-6">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-2xl font-bold text-white mb-6">Feature Comparison</h2>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      <th className="sticky left-0 z-20 bg-[#0a0e17] border border-white/10 p-4 text-left text-white font-semibold min-w-[200px]">
                        Feature
                      </th>
                      {selectedProducts.map((product) => (
                        <th key={product.id} className="border border-white/10 p-4 min-w-[250px] bg-white/5">
                          <div className="text-white font-semibold mb-2">{product.title}</div>
                          <div className="text-xs text-neutral-400 font-normal">{product.category}</div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonAttributes.map((attribute, idx) => (
                      <tr key={attribute.key} className={idx % 2 === 0 ? "bg-white/5" : ""}>
                        <td className="sticky left-0 z-10 bg-[#0a0e17] border border-white/10 p-4 text-white font-medium">
                          {attribute.label}
                        </td>
                        {selectedProducts.map((product) => (
                          <td key={`${product.id}-${attribute.key}`} className="border border-white/10 p-4 text-neutral-200 text-sm">
                            {getAttributeValue(product, attribute)}
                          </td>
                        ))}
                      </tr>
                    ))}

                    {/* Features */}
                    <tr>
                      <td className="sticky left-0 z-10 bg-[#0a0e17] border border-white/10 p-4 text-white font-medium">
                        Key Features
                      </td>
                      {selectedProducts.map((product) => (
                        <td key={`${product.id}-features`} className="border border-white/10 p-4">
                          <ul className="space-y-2">
                            {product.features.map((feature, idx) => (
                              <li key={idx} className="text-sm text-neutral-200 flex items-start">
                                <Check className="w-4 h-4 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </td>
                      ))}
                    </tr>

                    {/* Badges */}
                    <tr className="bg-white/5">
                      <td className="sticky left-0 z-10 bg-[#0a0e17] border border-white/10 p-4 text-white font-medium">
                        Product Badges
                      </td>
                      {selectedProducts.map((product) => (
                        <td key={`${product.id}-badges`} className="border border-white/10 p-4">
                          {product.badges && product.badges.length > 0 ? (
                            <div className="flex flex-wrap gap-2">
                              {product.badges.map((badge, idx) => (
                                <span
                                  key={idx}
                                  className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400"
                                >
                                  {badge}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <span className="text-neutral-400">—</span>
                          )}
                        </td>
                      ))}
                    </tr>

                    {/* CTAs */}
                    <tr>
                      <td className="sticky left-0 z-10 bg-[#0a0e17] border border-white/10 p-4 text-white font-medium">
                        Actions
                      </td>
                      {selectedProducts.map((product) => (
                        <td key={`${product.id}-actions`} className="border border-white/10 p-4">
                          <div className="flex flex-col gap-2">
                            <a
                              href={`/contact?product=${encodeURIComponent(product.title)}`}
                              className="inline-flex items-center justify-center px-4 py-2 font-semibold text-neutral-900 rounded-xl hover:scale-105 transition-transform shadow-lg text-center"
                              style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
                            >
                              Get Quote
                            </a>
                            <a
                              href={product.href}
                              className="inline-flex items-center justify-center px-4 py-2 bg-white/10 border border-white/30 text-white font-medium rounded-xl hover:bg-white/20 transition text-center"
                            >
                              View Details
                            </a>
                          </div>
                        </td>
                      ))}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* HELP SECTION */}
      <section className="relative overflow-hidden py-20">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
        </div>

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-12">
            <Info className="w-12 h-12 text-orange-400 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
                Need Help Choosing?
              </span>
            </h2>
            <p className="text-lg text-neutral-200/90 mb-8">
              Our technical team can help you select the perfect EdgeLuxe product for your specific project requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="inline-flex items-center rounded-xl px-6 py-3 font-semibold text-neutral-900 shadow-lg"
                style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
              >
                Contact Our Team
              </a>
              <a
                href="/resources"
                className="inline-flex items-center rounded-xl px-6 py-3 border border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
              >
                View Technical Resources
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
