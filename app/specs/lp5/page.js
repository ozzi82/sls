import PrintButton from "./PrintButton";

export const metadata = {
  title: "EdgeLuxe LP5 Trimless Specification Sheet | Sunlite Signs",
  description: "Technical specifications for EdgeLuxe LP5 Trimless Face-Lit Channel Letters",
};

export default function LP5SpecSheet() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b] text-white print:bg-white print:text-black">
      {/* Animated background (hidden on print) */}
      <div className="fixed inset-0 -z-10 print:hidden">
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vmax] h-[120vmax] rounded-full opacity-20 blur-3xl animate-[spin_40s_linear_infinite]"
          style={{
            background: "conic-gradient(from 0deg, rgba(255,172,64,0.18), rgba(80,170,255,0.18), rgba(255,172,64,0.18))",
          }}
        />
      </div>

      {/* Header */}
      <div className="relative overflow-hidden pt-24 print:pt-0">
        {/* Gradient separator line (hidden on print) */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px] md:h-[3px] z-10 print:hidden"
          style={{
            background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)",
          }}
        />

        <div className="py-16 px-6 print:py-8 print:bg-gradient-to-r print:from-orange-500 print:to-orange-600">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div>
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-xs font-semibold mb-4 print:bg-orange-100 print:border-orange-300 print:text-orange-700">
                  TECHNICAL SPECIFICATION SHEET
                </div>
                <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent print:text-black print:bg-none">
                  EdgeLuxe LP5
                </h1>
                <p className="text-xl text-neutral-300 print:text-white">Trimless Face-Lit Channel Letters</p>
              </div>
              <div className="text-left md:text-right">
                <div className="text-3xl font-bold text-white print:text-white">Sunlite Signs</div>
                <div className="text-sm text-neutral-400 print:text-orange-100">Wholesale Manufacturer</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Product Overview */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent print:text-orange-600 print:bg-none print:border-b-2 print:border-orange-200 print:pb-2">
            Product Overview
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-6 print:text-gray-700">
            The EdgeLuxe LP5 represents the pinnacle of modern channel letter design. Featuring German-engineered
            trimless technology, these letters deliver 100% face illumination without visible trim caps, creating
            a seamless, premium aesthetic perfect for luxury retail, corporate offices, and high-end commercial applications.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-white/10 transition-all print:bg-orange-50 print:border print:border-orange-200">
              <div className="font-bold text-orange-400 mb-2 print:text-orange-600">Best For</div>
              <div className="text-sm text-neutral-300 print:text-gray-700">Luxury retail, corporate headquarters, modern architecture</div>
            </div>
            <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-white/10 transition-all print:bg-orange-50 print:border print:border-orange-200">
              <div className="font-bold text-orange-400 mb-2 print:text-orange-600">Visibility</div>
              <div className="text-sm text-neutral-300 print:text-gray-700">100% face illumination, maximum impact 24/7</div>
            </div>
            <div className="relative rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-white/10 transition-all print:bg-orange-50 print:border print:border-orange-200">
              <div className="font-bold text-orange-400 mb-2 print:text-orange-600">Aesthetic</div>
              <div className="text-sm text-neutral-300 print:text-gray-700">Trimless design, ultra-modern, cutting-edge</div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent print:text-orange-600 print:bg-none print:border-b-2 print:border-orange-200 print:pb-2">
            Technical Specifications
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 print:bg-white print:border print:border-gray-200">
              <h3 className="font-bold text-lg mb-4 text-orange-400 print:text-orange-600">Materials & Construction</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-white/10 print:border-gray-200">
                    <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Face Material</td>
                    <td className="py-3 text-neutral-200 print:text-black">3mm or 5mm white acrylic</td>
                  </tr>
                  <tr className="border-b border-white/10 print:border-gray-200">
                    <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Returns</td>
                    <td className="py-3 text-neutral-200 print:text-black">0.040" aluminum coil stock</td>
                  </tr>
                  <tr className="border-b border-white/10 print:border-gray-200">
                    <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Back</td>
                    <td className="py-3 text-neutral-200 print:text-black">0.040" aluminum with gasket seal</td>
                  </tr>
                  <tr className="border-b border-white/10 print:border-gray-200">
                    <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Trim System</td>
                    <td className="py-3 text-neutral-200 print:text-black">Trimless - no visible cap (German technology)</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Finish Options</td>
                    <td className="py-3 text-neutral-200 print:text-black">Any standard RAL or custom color</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 print:bg-white print:border print:border-gray-200">
              <h3 className="font-bold text-lg mb-4 text-orange-400 print:text-orange-600">Dimensions & Sizes</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-white/10 print:border-gray-200">
                    <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Available Depths</td>
                    <td className="py-3 text-neutral-200 print:text-black">50mm, 100mm, 150mm, 200mm</td>
                  </tr>
                  <tr className="border-b border-white/10 print:border-gray-200">
                    <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Letter Heights</td>
                    <td className="py-3 text-neutral-200 print:text-black">4" to 60" (custom sizes available)</td>
                  </tr>
                  <tr className="border-b border-white/10 print:border-gray-200">
                    <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Stroke Width</td>
                    <td className="py-3 text-neutral-200 print:text-black">Minimum 1.5" recommended</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Weight</td>
                    <td className="py-3 text-neutral-200 print:text-black">Varies by size (engineered drawings provided)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 print:bg-white print:border print:border-gray-200">
              <h3 className="font-bold text-lg mb-4 text-orange-400 print:text-orange-600">Electrical Specifications</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-white/10 print:border-gray-200">
                    <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">LED Type</td>
                    <td className="py-3 text-neutral-200 print:text-black">High-output SMD modules</td>
                  </tr>
                  <tr className="border-b border-white/10 print:border-gray-200">
                    <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Color Temperature</td>
                    <td className="py-3 text-neutral-200 print:text-black">6000-6500K (cool white) standard</td>
                  </tr>
                  <tr className="border-b border-white/10 print:border-gray-200">
                    <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Input Voltage</td>
                    <td className="py-3 text-neutral-200 print:text-black">120V or 277V AC</td>
                  </tr>
                  <tr className="border-b border-white/10 print:border-gray-200">
                    <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Power Consumption</td>
                    <td className="py-3 text-neutral-200 print:text-black">~0.5W per linear inch</td>
                  </tr>
                  <tr className="border-b border-white/10 print:border-gray-200">
                    <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Transformer</td>
                    <td className="py-3 text-neutral-200 print:text-black">UL-listed, IP67 rated</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Lifespan</td>
                    <td className="py-3 text-neutral-200 print:text-black">50,000+ hours rated</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 print:bg-white print:border print:border-gray-200">
              <h3 className="font-bold text-lg mb-4 text-orange-400 print:text-orange-600">Certifications & Standards</h3>
              <table className="w-full text-sm">
                <tbody>
                  <tr className="border-b border-white/10 print:border-gray-200">
                    <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">UL Listing</td>
                    <td className="py-3 text-neutral-200 print:text-black">UL 48 Listed (sign enclosure)</td>
                  </tr>
                  <tr className="border-b border-white/10 print:border-gray-200">
                    <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Waterproof Rating</td>
                    <td className="py-3 text-neutral-200 print:text-black">IP67 (fully sealed)</td>
                  </tr>
                  <tr className="border-b border-white/10 print:border-gray-200">
                    <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Wind Load</td>
                    <td className="py-3 text-neutral-200 print:text-black">Engineered per location (drawings included)</td>
                  </tr>
                  <tr className="border-b border-white/10 print:border-gray-200">
                    <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Temperature Range</td>
                    <td className="py-3 text-neutral-200 print:text-black">-40°F to 140°F operating range</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Warranty</td>
                    <td className="py-3 text-neutral-200 print:text-black">3 years parts and labor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Key Features */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent print:text-orange-600 print:bg-none print:border-b-2 print:border-orange-200 print:pb-2">
            Key Features & Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { title: "Trimless Design", desc: "German-engineered trimless technology eliminates visible caps for seamless appearance" },
              { title: "100% Face Illumination", desc: "Maximum visibility with edge-to-edge lighting, no dark spots" },
              { title: "Energy Efficient", desc: "LED technology reduces power consumption by 60% vs. neon" },
              { title: "Weather Resistant", desc: "IP67 waterproof rating, suitable for all climates" },
              { title: "Engineered Drawings", desc: "Professional CAD drawings included for permit approval" },
              { title: "Low Maintenance", desc: "50,000+ hour LED lifespan, minimal service requirements" },
            ].map((feature, idx) => (
              <div key={idx} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-5 hover:bg-white/10 transition-all print:bg-white print:border print:border-gray-200">
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0 print:bg-orange-500"></div>
                <div>
                  <div className="font-bold text-white mb-1 print:text-black">{feature.title}</div>
                  <div className="text-sm text-neutral-400 print:text-gray-700">{feature.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Installation Notes */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent print:text-orange-600 print:bg-none print:border-b-2 print:border-orange-200 print:pb-2">
            Installation Guidelines
          </h2>
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 print:bg-gray-50 print:border print:border-gray-200">
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-neutral-300 print:text-gray-700">
                <span className="font-bold text-orange-400 print:text-orange-600">•</span>
                <span><strong className="text-white print:text-black">Mounting:</strong> Studs welded to back of letters, raceway mounting, or direct-mount options available</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300 print:text-gray-700">
                <span className="font-bold text-orange-400 print:text-orange-600">•</span>
                <span><strong className="text-white print:text-black">Electrical:</strong> Hardwired to building electrical, requires licensed electrician</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300 print:text-gray-700">
                <span className="font-bold text-orange-400 print:text-orange-600">•</span>
                <span><strong className="text-white print:text-black">Permits:</strong> Engineered drawings provided for sign permit applications</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300 print:text-gray-700">
                <span className="font-bold text-orange-400 print:text-orange-600">•</span>
                <span><strong className="text-white print:text-black">Typical Lead Time:</strong> 18-21 days from approved artwork and deposit</span>
              </li>
              <li className="flex items-start gap-3 text-neutral-300 print:text-gray-700">
                <span className="font-bold text-orange-400 print:text-orange-600">•</span>
                <span><strong className="text-white print:text-black">Shipping:</strong> Carefully packaged in custom crates, freight shipping required</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 print:bg-orange-50 print:border print:border-orange-200">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent print:text-orange-600 print:bg-none">
            Request a Quote
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-neutral-300 mb-4 print:text-gray-700">
                Get wholesale pricing and custom specifications for your project. Our team provides 24-48 hour quotes with complete technical details.
              </p>
              <div className="space-y-2 text-sm">
                <div className="text-neutral-300 print:text-gray-700"><strong className="text-white print:text-black">EAST:</strong> +1 (689) 294-0912</div>
                <div className="text-neutral-300 print:text-gray-700"><strong className="text-white print:text-black">WEST:</strong> +1 (651) 230-2827</div>
                <div className="text-neutral-300 print:text-gray-700"><strong className="text-white print:text-black">Email:</strong> hello@sunlitesigns.com</div>
                <div className="text-neutral-300 print:text-gray-700"><strong className="text-white print:text-black">Website:</strong> www.sunlitesigns.com</div>
              </div>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/10 p-5 print:bg-white print:border print:border-orange-200">
              <div className="font-bold mb-3 text-white print:text-black">What We Need for Quote:</div>
              <ul className="text-sm space-y-2 text-neutral-300 print:text-gray-700">
                <li>• Letter text and font (or vector artwork)</li>
                <li>• Desired letter height</li>
                <li>• Preferred depth (50mm, 100mm, 150mm, 200mm)</li>
                <li>• Return color finish</li>
                <li>• Mounting method (stud, raceway, direct)</li>
                <li>• Installation location (for wind load calculations)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 p-6 text-center text-sm text-neutral-400 mt-12 print:border-t print:border-gray-300 print:text-gray-600">
        <p>© {new Date().getFullYear()} Sunlite Signs LLC. All specifications subject to change. This is a technical reference document.</p>
        <p className="mt-2">Wholesale manufacturer serving sign companies across USA and Canada.</p>
      </div>

      {/* Print Button (client component, auto-hidden on print) */}
      <PrintButton />
    </div>
  );
}
