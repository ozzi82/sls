import PrintButton from "./PrintButton";
import { Award, ShieldCheck, Zap, Droplet, Info, Lightbulb } from "lucide-react";

export const metadata = {
  title: "EdgeLuxe LP11 Series Cast Block Acrylic - Technical Specification Sheet | Sunlite Signs",
  description: "Complete technical specifications for EdgeLuxe LP11 series cast block acrylic letters with embedded LEDs. IP67 waterproof, UL Listed, 3-year warranty. 9 illumination options including conical profile.",
};

export default function LP11SeriesSpecSheet() {
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
              Cast Block Acrylic Letters
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 bg-clip-text text-transparent print:text-black print:bg-none">
              EdgeLuxe LP11 Series
            </h1>
            <p className="text-2xl text-neutral-300 font-semibold print:text-gray-700">
              Cast Block Acrylic with Embedded LEDs
            </p>
            <p className="text-neutral-400 mt-3 print:text-gray-600">
              IP67 waterproof, maintenance-free illuminated letters in 9 lighting configurations
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
            The EdgeLuxe LP11 series features premium cast block acrylic construction with embedded LED modules. Each letter is epoxy-sealed for IP67 waterproofing, providing maintenance-free operation in any environment. Available in 8 distinct illumination configurations to match your design vision.
          </p>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <Droplet className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5 print:text-orange-600" />
              <div>
                <h3 className="font-semibold text-white mb-1 print:text-black">IP67 Waterproof Sealed</h3>
                <p className="text-sm text-neutral-400 print:text-gray-600">Epoxy-sealed for complete protection</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <ShieldCheck className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5 print:text-orange-600" />
              <div>
                <h3 className="font-semibold text-white mb-1 print:text-black">No Maintenance Required</h3>
                <p className="text-sm text-neutral-400 print:text-gray-600">High water and dust-proof construction</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <Zap className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5 print:text-orange-600" />
              <div>
                <h3 className="font-semibold text-white mb-1 print:text-black">Embedded LED Modules</h3>
                <p className="text-sm text-neutral-400 print:text-gray-600">Uniform illumination with optimal heat dissipation</p>
              </div>
            </div>
            <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <Award className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5 print:text-orange-600" />
              <div>
                <h3 className="font-semibold text-white mb-1 print:text-black">9 Illumination Options</h3>
                <p className="text-sm text-neutral-400 print:text-gray-600">Face, halo, conical, combination, and specialty lighting</p>
              </div>
            </div>
          </div>
        </section>

        {/* Illumination Options */}
        <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 print:bg-white print:border print:border-gray-200">
          <div className="flex items-start gap-3 mb-6">
            <Lightbulb className="w-6 h-6 text-orange-400 flex-shrink-0 mt-1 print:text-orange-600" />
            <div>
              <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent print:text-black print:bg-none">
                9 Illumination Configurations
              </h2>
              <p className="text-neutral-300 print:text-gray-700">Choose the perfect lighting effect for your application</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">

            {/* LP11-F */}
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-white print:text-black">LP11-F</h3>
                <span className="text-xs px-2 py-1 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30 print:bg-orange-100 print:text-orange-700 print:border-orange-300">Face-Lit</span>
              </div>
              <p className="text-sm text-neutral-400 mb-2 print:text-gray-600">Embedded LEDs for uniform face lighting</p>
              <div className="text-xs text-neutral-500 print:text-gray-500">Standard 30mm (1.2") depth</div>
            </div>

            {/* LP11-B */}
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-white print:text-black">LP11-B</h3>
                <span className="text-xs px-2 py-1 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30 print:bg-orange-100 print:text-orange-700 print:border-orange-300">Halo-Lit</span>
              </div>
              <p className="text-sm text-neutral-400 mb-2 print:text-gray-600">Halo illumination with standoff spacers</p>
              <div className="text-xs text-neutral-500 print:text-gray-500">15mm, 20mm, or 30mm depth options</div>
            </div>

            {/* LP11-FB */}
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-white print:text-black">LP11-FB</h3>
                <span className="text-xs px-2 py-1 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30 print:bg-orange-100 print:text-orange-700 print:border-orange-300">Face & Halo</span>
              </div>
              <p className="text-sm text-neutral-400 mb-2 print:text-gray-600">Combined face and halo lighting</p>
              <div className="text-xs text-neutral-500 print:text-gray-500">30mm depth for maximum visibility</div>
            </div>

            {/* LP11-BS */}
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-white print:text-black">LP11-BS</h3>
                <span className="text-xs px-2 py-1 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30 print:bg-orange-100 print:text-orange-700 print:border-orange-300">Back & Side</span>
              </div>
              <p className="text-sm text-neutral-400 mb-2 print:text-gray-600">Partial back side-lit flush-mount</p>
              <div className="text-xs text-neutral-500 print:text-gray-500">30mm depth, elegant side glow</div>
            </div>

            {/* LP11-FS */}
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-white print:text-black">LP11-FS</h3>
                <span className="text-xs px-2 py-1 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30 print:bg-orange-100 print:text-orange-700 print:border-orange-300">Front & Side</span>
              </div>
              <p className="text-sm text-neutral-400 mb-2 print:text-gray-600">Partial front side-lit flush-mount</p>
              <div className="text-xs text-neutral-500 print:text-gray-500">30mm depth, modern edge lighting</div>
            </div>

            {/* LP11-S */}
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-white print:text-black">LP11-S</h3>
                <span className="text-xs px-2 py-1 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30 print:bg-orange-100 print:text-orange-700 print:border-orange-300">Full Side-Lit</span>
              </div>
              <p className="text-sm text-neutral-400 mb-2 print:text-gray-600">Full side-lit illumination</p>
              <div className="text-xs text-neutral-500 print:text-gray-500">30mm depth, distinctive edge glow</div>
            </div>

            {/* LP11-N */}
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-white print:text-black">LP11-N</h3>
                <span className="text-xs px-2 py-1 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30 print:bg-orange-100 print:text-orange-700 print:border-orange-300">Faux Neon</span>
              </div>
              <p className="text-sm text-neutral-400 mb-2 print:text-gray-600">Routed to simulate neon glass tube</p>
              <div className="text-xs text-neutral-500 print:text-gray-500">30mm depth, authentic neon appearance</div>
            </div>

            {/* LP11-C */}
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-white print:text-black">LP11-C</h3>
                <span className="text-xs px-2 py-1 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30 print:bg-orange-100 print:text-orange-700 print:border-orange-300">Conical Profile</span>
              </div>
              <p className="text-sm text-neutral-400 mb-2 print:text-gray-600">Face-lit with conical profile for narrow strokes</p>
              <div className="text-xs text-neutral-500 print:text-gray-500">12mm back tapering to 3mm face, dimensional letters</div>
            </div>

            {/* LP11-Custom */}
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-lg font-bold text-white print:text-black">Custom Options</h3>
                <span className="text-xs px-2 py-1 rounded bg-orange-500/20 text-orange-300 border border-orange-500/30 print:bg-orange-100 print:text-orange-700 print:border-orange-300">Contact Us</span>
              </div>
              <p className="text-sm text-neutral-400 mb-2 print:text-gray-600">Need a specific lighting configuration?</p>
              <div className="text-xs text-neutral-500 print:text-gray-500">We can create custom illumination solutions</div>
            </div>

          </div>
        </section>

        {/* Technical Specifications */}
        <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 print:bg-white print:border print:border-gray-200 print:page-break-before-always">
          <h2 className="text-2xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent print:text-black print:bg-none">
            Technical Specifications
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody className="divide-y divide-white/10 print:divide-gray-200">
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Material</td>
                  <td className="py-3 text-neutral-200 print:text-black">Cast block acrylic</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Available Depths</td>
                  <td className="py-3 text-neutral-200 print:text-black">
                    15mm (0.6"), 20mm (0.79"), 30mm (1.2") depending on model
                  </td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Minimum Stroke Width</td>
                  <td className="py-3 text-neutral-200 print:text-black">12mm (0.47") for stability and even illumination</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Minimum Height</td>
                  <td className="py-3 text-neutral-200 print:text-black">50mm (2")</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">LED Type</td>
                  <td className="py-3 text-neutral-200 print:text-black">High-efficiency embedded LED modules</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Power Supply</td>
                  <td className="py-3 text-neutral-200 print:text-black">12V DC (transformer required, not included)</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Sealing Method</td>
                  <td className="py-3 text-neutral-200 print:text-black">Epoxy-sealed for IP67 waterproofing and heat dissipation</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">IP Rating</td>
                  <td className="py-3 text-neutral-200 print:text-black">IP67 (dust-tight, waterproof)</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Customization</td>
                  <td className="py-3 text-neutral-200 print:text-black">Painted in any PMS color with color matching options for vinyls or pigmented translucent acrylics</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Operating Temperature</td>
                  <td className="py-3 text-neutral-200 print:text-black">-40°F to 140°F (-40°C to 60°C)</td>
                </tr>
                <tr className="border-b border-white/10 print:border-gray-200">
                  <td className="py-3 font-semibold text-neutral-400 print:text-gray-700">Maintenance</td>
                  <td className="py-3 text-neutral-200 print:text-black">No maintenance required - sealed construction</td>
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

        {/* Depth Options Comparison */}
        <section className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 print:bg-white print:border print:border-gray-200">
          <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent print:text-black print:bg-none">
            Depth Selection Guide
          </h3>
          <div className="space-y-3">
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-white print:text-black">15mm (0.6")</h4>
                <span className="text-xs text-neutral-500 print:text-gray-500">Available on LP11-B</span>
              </div>
              <p className="text-sm text-neutral-400 print:text-gray-600">Compact profile for interior applications, minimal standoff clearance</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-white print:text-black">20mm (0.79")</h4>
                <span className="text-xs text-neutral-500 print:text-gray-500">Available on LP11-B</span>
              </div>
              <p className="text-sm text-neutral-400 print:text-gray-600">Mid-range depth providing good light diffusion and halo effect</p>
            </div>
            <div className="p-4 rounded-lg bg-white/5 border border-white/10 print:bg-gray-50 print:border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-white print:text-black">30mm (1.2")</h4>
                <span className="text-xs text-neutral-500 print:text-gray-500">Standard on all models</span>
              </div>
              <p className="text-sm text-neutral-400 print:text-gray-600">Standard depth for optimal durability, light diffusion, and heat dissipation</p>
            </div>
          </div>
        </section>

        {/* Applications */}
        <section className="grid md:grid-cols-2 gap-6">

          {/* Best Applications */}
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 print:bg-white print:border print:border-gray-200">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent print:text-black print:bg-none">
              Ideal Applications
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700">Outdoor storefront signage (IP67 waterproof)</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700">Building identification and directory signs</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700">Shopping mall and retail center signage</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700">Hospital and medical facility wayfinding</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700">Restaurant exterior branding</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700">Parking garage navigation and numbering</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700">Any environment requiring maintenance-free signage</span>
              </li>
            </ul>
          </div>

          {/* Advantages */}
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 print:bg-white print:border print:border-gray-200">
            <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent print:text-black print:bg-none">
              Key Advantages
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700"><strong className="text-white print:text-black">Truly Waterproof:</strong> IP67 rating ensures operation in rain, snow, or high humidity</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700"><strong className="text-white print:text-black">Zero Maintenance:</strong> Sealed construction eliminates servicing needs</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700"><strong className="text-white print:text-black">Uniform Illumination:</strong> Embedded LEDs provide consistent lighting</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700"><strong className="text-white print:text-black">Cost-Effective:</strong> Lower total cost of ownership vs. traditional neon</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700"><strong className="text-white print:text-black">Energy Efficient:</strong> LED technology reduces power consumption</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0 print:bg-orange-600" />
                <span className="text-neutral-300 print:text-gray-700"><strong className="text-white print:text-black">Versatile Design:</strong> 8 illumination options for any aesthetic</span>
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
              <span>LP11-B (halo-lit) requires standoff spacers for clearance - typically 10-20mm</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 print:text-orange-600">•</span>
              <span>All other models can be flush-mounted or standoff-mounted</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 print:text-orange-600">•</span>
              <span>12V DC transformer required (not included) - size based on total wattage</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 print:text-orange-600">•</span>
              <span>Mounting template provided for accurate installation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 print:text-orange-600">•</span>
              <span>UL Listed components require licensed electrician for final connection</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-400 print:text-orange-600">•</span>
              <span>No field servicing possible due to epoxy sealing - ensure proper voltage</span>
            </li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="rounded-xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-orange-600/5 backdrop-blur-xl p-6 print:bg-orange-50 print:border print:border-orange-300">
          <h3 className="text-2xl font-bold mb-4 text-white print:text-black">
            Request Your Quote
          </h3>
          <p className="text-neutral-300 mb-6 print:text-gray-700">
            Our team is ready to provide detailed specifications and pricing for your EdgeLuxe LP11 series project. We offer 24-48 hour quote turnaround and approximately 21-day delivery.
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
                <li>• Preferred illumination type (F, B, FB, BS, FS, S, N, C)</li>
                <li>• Depth preference (15mm, 20mm, or 30mm)</li>
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
