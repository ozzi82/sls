import PrintButton from "./PrintButton";
import { Award, ShieldCheck, Zap, Droplet, Info } from "lucide-react";

export const metadata = {
  title: "EdgeLuxe LP3.1 Halo-Lit Standoff Mount - Technical Specification Sheet | Sunlite Signs",
  description: "Complete technical specifications for EdgeLuxe LP3.1 fabricated stainless steel halo-lit channel letters with standoff mount. UL Listed, IP67 waterproof, 3-year warranty.",
};

export default function LP31SpecSheet() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b] text-white print:bg-white print:text-black">
      {/* Animated Background (hidden on print) */}
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
        <div className="py-16 px-6 print:py-8 print:bg-gradient-to-r print:from-orange-500 print:to-orange-600">
          <div className="max-w-5xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-4 print:bg-orange-100 print:border-orange-300 print:text-orange-800">
              Fabricated Channel Letters
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent print:text-black print:bg-none">
              EdgeLuxe LP3.1
            </h1>
            <p className="text-2xl text-neutral-300 font-semibold print:text-gray-700">
              Halo-Lit Standoff Mount Channel Letters
            </p>
            <p className="text-neutral-400 mt-3 print:text-gray-600">
              Fabricated stainless steel letters with halo illumination from the back using standoff spacers
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-12 print:py-6 space-y-8">

        {/* Product Overview */}
        <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 print:bg-white print:border print:border-gray-200">
          <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent print:text-black print:bg-none">
            Product Overview
          </h2>
          <p className="text-neutral-300 leading-relaxed mb-6 print:text-gray-700">
            The EdgeLuxe LP3.1 features fabricated stainless steel construction with elegant halo illumination. Standoff spacers create a stunning backlit glow effect on the wall, perfect for upscale architectural applications requiring sophisticated lighting.
          </p>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <Award className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5 print:text-orange-600" />
              <div>
                <h3 className="font-semibold text-white mb-1 print:text-black">Halo Illumination with Standoffs</h3>
                <p className="text-sm text-neutral-400 print:text-gray-600">Creates elegant wall glow effect with depth</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <ShieldCheck className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5 print:text-orange-600" />
              <div>
                <h3 className="font-semibold text-white mb-1 print:text-black">Premium Stainless Steel</h3>
                <p className="text-sm text-neutral-400 print:text-gray-600">Fabricated construction for durability</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5 print:text-orange-600" />
              <div>
                <h3 className="font-semibold text-white mb-1 print:text-black">Serviceable LEDs</h3>
                <p className="text-sm text-neutral-400 print:text-gray-600">Easy maintenance and long-term serviceability</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <Droplet className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5 print:text-orange-600" />
              <div>
                <h3 className="font-semibold text-white mb-1 print:text-black">Custom Color Matching</h3>
                <p className="text-sm text-neutral-400 print:text-gray-600">Any PMS color, vinyls, or translucent acrylics</p>
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 print:bg-white print:border print:border-gray-200">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent print:text-black print:bg-none">
            Technical Specifications
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody className="divide-y divide-white/10 print:divide-gray-200">
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Construction Material</td>
                  <td className="py-3 text-neutral-200 print:text-black">Fabricated Stainless Steel</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Illumination Type</td>
                  <td className="py-3 text-neutral-200 print:text-black">Halo from back with standoff spacers</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Available Depths</td>
                  <td className="py-3 text-neutral-200 print:text-black">30mm (1.2"), 50mm (2"), 80mm (3.1"), 100mm (3.9")</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Minimum Stroke Width</td>
                  <td className="py-3 text-neutral-200 print:text-black">15mm (0.6") for stability and even illumination</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Minimum Height</td>
                  <td className="py-3 text-neutral-200 print:text-black">50mm (2")</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Customization Options</td>
                  <td className="py-3 text-neutral-200 print:text-black">Any PMS color, vinyls or pigmented translucent acrylics for colorful halo effects</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">LED Type</td>
                  <td className="py-3 text-neutral-200 print:text-black">High-efficiency LED modules</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Maintenance</td>
                  <td className="py-3 text-neutral-200 print:text-black">Serviceable LEDs for easy maintenance</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Certification</td>
                  <td className="py-3 text-neutral-200 print:text-black">UL Listed components</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Warranty</td>
                  <td className="py-3 text-neutral-200 print:text-black">3 years comprehensive</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Dimensions & Applications */}
        <section className="grid md:grid-cols-2 gap-6">

          {/* Depth Options */}
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 print:bg-white print:border print:border-gray-200">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent print:text-black print:bg-none">
              Available Depths
            </h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
                <div className="font-semibold text-white print:text-black">30mm (1.2")</div>
                <div className="text-sm text-neutral-400 print:text-gray-600">Compact halo effect</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
                <div className="font-semibold text-white print:text-black">50mm (2")</div>
                <div className="text-sm text-neutral-400 print:text-gray-600">Standard architectural depth</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
                <div className="font-semibold text-white print:text-black">80mm (3.1")</div>
                <div className="text-sm text-neutral-400 print:text-gray-600">Enhanced depth for larger letters</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
                <div className="font-semibold text-white print:text-black">100mm (3.9")</div>
                <div className="text-sm text-neutral-400 print:text-gray-600">Maximum dimensional presence</div>
              </div>
            </div>
          </div>

          {/* Best Applications */}
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 print:bg-white print:border print:border-gray-200">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent print:text-black print:bg-none">
              Ideal Applications
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700">Corporate lobby signage with architectural presence</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700">High-end retail store branding</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700">Hotel and hospitality entrance signage</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700">Professional office suites</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700">Upscale restaurant branding</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700">Building directory and wayfinding</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Installation Notes */}
        <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 print:bg-white print:border print:border-gray-200">
          <div className="flex items-start gap-3 mb-4">
            <Info className="w-6 h-6 text-orange-400 flex-shrink-0 print:text-orange-600" />
            <div>
              <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent print:text-black print:bg-none">
                Installation Guidelines
              </h3>
            </div>
          </div>
          <ul className="space-y-2 ml-9 text-neutral-300 print:text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-orange-400 print:text-orange-600">•</span>
              <span>Standoff spacers provide clearance for halo illumination effect</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 print:text-orange-600">•</span>
              <span>Wall surface should be clean, flat, and structurally sound</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 print:text-orange-600">•</span>
              <span>Electrical connections through back of letters - coordinate with electrician</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 print:text-orange-600">•</span>
              <span>Mounting template provided for accurate installation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 print:text-orange-600">•</span>
              <span>UL Listed components require licensed electrician for final connection</span>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-xl p-6 print:bg-orange-50 print:border print:border-orange-300">
          <h3 className="text-2xl font-bold mb-4 text-white print:text-black">
            Request Your Quote
          </h3>
          <p className="text-neutral-300 mb-6 print:text-gray-700">
            Our team is ready to provide detailed specifications and pricing for your EdgeLuxe LP3.1 project. We offer 24-48 hour quote turnaround and approximately 21-day delivery.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="font-semibold text-orange-400 mb-2 print:text-orange-600">Contact Information</div>
              <div className="space-y-2 text-neutral-300 print:text-gray-700">
                <div><strong className="text-white print:text-black">EAST:</strong> +1 (689) 294-0912</div>
                <div><strong className="text-white print:text-black">WEST:</strong> +1 (949) 407-8941</div>
                <div><strong className="text-white print:text-black">Email:</strong> hello@sunlitesigns.com</div>
                <div><strong className="text-white print:text-black">Web:</strong> www.sunlitesigns.com</div>
              </div>
            </div>

            <div>
              <div className="font-semibold text-orange-400 mb-2 print:text-orange-600">Quote Requirements</div>
              <ul className="space-y-1 text-sm text-neutral-300 print:text-gray-700">
                <li>• Letter design or font selection</li>
                <li>• Desired letter height</li>
                <li>• Preferred depth (30mm, 50mm, 80mm, 100mm)</li>
                <li>• Color specifications (PMS, vinyl, or acrylic)</li>
                <li>• Quantity and installation location</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <div className="text-center text-sm text-neutral-500 print:text-gray-500 pb-8">
          <p>© {new Date().getFullYear()} Sunlite Signs LLC. All rights reserved.</p>
          <p className="mt-1">EdgeLuxe is a trademark of Sunlite Signs LLC. Specifications subject to change without notice.</p>
        </div>

      </div>

      <PrintButton />
    </div>
  );
}
