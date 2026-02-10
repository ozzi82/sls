import PrintButton from "./PrintButton";
import { Award, ShieldCheck, Palette, Layers, Info } from "lucide-react";

export const metadata = {
  title: "EdgeLuxe LP1 Flat Cut-Out Letters (FCO) - Technical Specification Sheet | Sunlite Signs",
  description: "Complete technical specifications for EdgeLuxe LP1 non-illuminated flat cut-out letters in wood, aluminum, stainless steel, and acrylic. Custom thickness 1-200mm.",
};

export default function LP1SpecSheet() {
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
              Non-Illuminated Letters
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent print:text-black print:bg-none">
              EdgeLuxe LP1
            </h1>
            <p className="text-2xl text-neutral-300 font-semibold print:text-gray-700">
              Flat Cut-Out Letters (FCO)
            </p>
            <p className="text-neutral-400 mt-3 print:text-gray-600">
              Non-illuminated precision-cut letters in premium materials
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
            The EdgeLuxe LP1 offers precision-cut flat letters in a wide range of premium materials including wood, aluminum, stainless steel, and acrylic. Perfect for dimensional signage where illumination is not required, these letters provide exceptional versatility with thickness options from 1mm to 200mm.
          </p>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <Layers className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5 print:text-orange-600" />
              <div>
                <h3 className="font-semibold text-white mb-1 print:text-black">Multiple Material Options</h3>
                <p className="text-sm text-neutral-400 print:text-gray-600">Wood, aluminum, stainless steel, acrylic, and more</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <Award className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5 print:text-orange-600" />
              <div>
                <h3 className="font-semibold text-white mb-1 print:text-black">Extensive Thickness Range</h3>
                <p className="text-sm text-neutral-400 print:text-gray-600">1mm (0.039") to 200mm (7.87")</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <Palette className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5 print:text-orange-600" />
              <div>
                <h3 className="font-semibold text-white mb-1 print:text-black">Custom Finishes</h3>
                <p className="text-sm text-neutral-400 print:text-gray-600">Acrylic colors, paint, vinyl applications</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <ShieldCheck className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5 print:text-orange-600" />
              <div>
                <h3 className="font-semibold text-white mb-1 print:text-black">No Maintenance Required</h3>
                <p className="text-sm text-neutral-400 print:text-gray-600">Durable materials for long-lasting signage</p>
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
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Material Options</td>
                  <td className="py-3 text-neutral-200 print:text-black">Wood, aluminum, stainless steel, acrylic, and many more</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Thickness Range</td>
                  <td className="py-3 text-neutral-200 print:text-black">1mm (0.039") to 200mm (7.87")</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Minimum Stroke Width</td>
                  <td className="py-3 text-neutral-200 print:text-black">5mm (0.2")</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Minimum Height</td>
                  <td className="py-3 text-neutral-200 print:text-black">10mm (0.4")</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Customization Options</td>
                  <td className="py-3 text-neutral-200 print:text-black">Broad range of acrylic colors, paint, and vinyl</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Cutting Method</td>
                  <td className="py-3 text-neutral-200 print:text-black">Precision CNC routing/laser cutting</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Edge Finish</td>
                  <td className="py-3 text-neutral-200 print:text-black">Smooth, polished, or painted as specified</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Maintenance</td>
                  <td className="py-3 text-neutral-200 print:text-black">No maintenance required</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Certification</td>
                  <td className="py-3 text-neutral-200 print:text-black">UL Listed (when applicable)</td>
                </tr>
                <tr>
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Warranty</td>
                  <td className="py-3 text-neutral-200 print:text-black">3 years comprehensive</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Material Options */}
        <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 print:bg-white print:border print:border-gray-200">
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent print:text-black print:bg-none">
            Material Selection Guide
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <h4 className="font-semibold text-white mb-2 print:text-black">Wood</h4>
              <p className="text-sm text-neutral-400 print:text-gray-600">Natural aesthetic, ideal for interior applications. Available in various wood species and finishes.</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <h4 className="font-semibold text-white mb-2 print:text-black">Aluminum</h4>
              <p className="text-sm text-neutral-400 print:text-gray-600">Lightweight and durable. Excellent for outdoor use with various finish options including brushed, polished, or anodized.</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <h4 className="font-semibold text-white mb-2 print:text-black">Stainless Steel</h4>
              <p className="text-sm text-neutral-400 print:text-gray-600">Premium appearance with superior corrosion resistance. Perfect for high-end applications and coastal environments.</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <h4 className="font-semibold text-white mb-2 print:text-black">Acrylic</h4>
              <p className="text-sm text-neutral-400 print:text-gray-600">Versatile and cost-effective. Available in wide range of colors and can be painted or vinyl-wrapped.</p>
            </div>
          </div>
        </section>

        {/* Applications & Mounting */}
        <section className="grid md:grid-cols-2 gap-6">

          {/* Applications */}
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 print:bg-white print:border print:border-gray-200">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent print:text-black print:bg-none">
              Ideal Applications
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700">Interior lobby and reception signage</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700">Dimensional wall lettering</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700">Office suite numbers and names</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700">Retail store branding elements</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700">Trade show displays and exhibits</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700">Exterior building identification (metal materials)</span>
              </li>
            </ul>
          </div>

          {/* Mounting Options */}
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 print:bg-white print:border print:border-gray-200">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent print:text-black print:bg-none">
              Mounting Methods
            </h3>
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
                <div className="font-semibold text-white print:text-black">Flush Mount</div>
                <div className="text-sm text-neutral-400 print:text-gray-600">Direct attachment to wall with hidden fasteners</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
                <div className="font-semibold text-white print:text-black">Standoff Mount</div>
                <div className="text-sm text-neutral-400 print:text-gray-600">Dimensional spacers for depth and shadow effect</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
                <div className="font-semibold text-white print:text-black">Stud Mount</div>
                <div className="text-sm text-neutral-400 print:text-gray-600">Threaded studs for secure installation</div>
              </div>
              <div className="p-3 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
                <div className="font-semibold text-white print:text-black">Adhesive Mount</div>
                <div className="text-sm text-neutral-400 print:text-gray-600">VHB tape for lightweight letters on smooth surfaces</div>
              </div>
            </div>
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
              <span>Wall surface should be clean, dry, and structurally sound</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 print:text-orange-600">•</span>
              <span>Mounting template provided for accurate letter spacing and alignment</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 print:text-orange-600">•</span>
              <span>Consider wall material when selecting mounting method</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 print:text-orange-600">•</span>
              <span>Heavier letters and thicker materials require mechanical fasteners</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 print:text-orange-600">•</span>
              <span>Allow proper curing time for adhesive-mounted applications</span>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-xl p-6 print:bg-orange-50 print:border print:border-orange-300">
          <h3 className="text-2xl font-bold mb-4 text-white print:text-black">
            Request Your Quote
          </h3>
          <p className="text-neutral-300 mb-6 print:text-gray-700">
            Our team is ready to provide detailed specifications and pricing for your EdgeLuxe LP1 project. We offer 24-48 hour quote turnaround and approximately 21-day delivery.
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
                <li>• Desired letter height and thickness</li>
                <li>• Preferred material (wood, aluminum, steel, acrylic)</li>
                <li>• Finish specifications (paint, vinyl, natural)</li>
                <li>• Mounting method preference</li>
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
