import Link from "next/link";
import { Building2, Users, Briefcase, TrendingUp, CheckCircle, ArrowRight, Award, Zap } from "lucide-react";

export const metadata = {
  title: "Corporate & Office Signage Solutions | EdgeLuxe for Professional Buildings | Sunlite Signs",
  description: "Premium EdgeLuxe signage solutions for corporate offices, business centers, and professional buildings. Elevate your brand presence with modern, sophisticated signage.",
  keywords: "corporate signage, office building signs, professional signage, business center signs, lobby signs, corporate branding",
};

export default function CorporateSolutionsPage() {
  const challenges = [
    {
      icon: Building2,
      title: "Professional Brand Presence",
      description: "Corporate offices need signage that reflects their brand sophistication and creates strong first impressions with clients and partners.",
    },
    {
      icon: Users,
      title: "Multi-Tenant Building Coordination",
      description: "Office buildings with multiple tenants require cohesive signage systems that accommodate various brands while maintaining building standards.",
    },
    {
      icon: Briefcase,
      title: "Compliance with Building Codes",
      description: "Commercial properties must meet specific building codes, landlord requirements, and municipal regulations for exterior signage.",
    },
    {
      icon: TrendingUp,
      title: "ROI & Longevity",
      description: "Corporate investments require durable, low-maintenance signage that maintains premium appearance for years without callbacks or replacements.",
    },
  ];

  const recommendedProducts = [
    {
      id: "edgeluxe-lp5",
      title: "EdgeLuxe LP5 - Trimless Face-Lit Letters",
      description: "The top choice for Fortune 500 companies, law firms, and high-end corporate offices seeking cutting-edge design.",
      features: [
        "Trimless design projects innovation and sophistication",
        "100% face illumination ensures brand visibility 24/7",
        "Seamless integration with modern glass architecture",
        "Precision-engineered for perfect alignment",
        "Premium appearance differentiates your brand",
        "Engineered drawings for building permit approval",
      ],
      bestFor: "Executive office suites, corporate headquarters, professional services (law, consulting, finance), tech companies",
      realExample: {
        project: "Tech Startup HQ - Austin, TX",
        result: "Trimless letters in lobby created 'wow factor' for investors and recruits. CEO noted signage mentioned in 40% of new hire feedback surveys.",
      },
    },
    {
      id: "edgeluxe-lp3-1",
      title: "EdgeLuxe LP3.1 - Halo-Lit Channel Letters",
      description: "Perfect for professional offices seeking sophisticated, understated elegance with superior craftsmanship.",
      features: [
        "Soft halo glow creates refined, upscale aesthetic",
        "Ideal for professional service firms (legal, accounting, medical)",
        "Energy-efficient LEDs reduce operating costs",
        "Whisper-quiet operation (no transformer noise)",
        "Complements traditional and modern architecture",
        "Premium materials ensure longevity",
      ],
      bestFor: "Law firms, accounting practices, financial advisors, medical offices, consulting firms, multi-tenant office buildings",
      realExample: {
        project: "Regional Law Firm - Charlotte, NC",
        result: "Halo-lit lobby sign perfectly matched the firm's established reputation. Managing partner: 'Exactly the sophisticated presence we wanted to project.'",
      },
    },
    {
      id: "edgeluxe-lp11-b",
      title: "EdgeLuxe LP11-B - Back-Lit Cabinet Signs",
      description: "Ideal for multi-tenant office buildings, business parks, and corporate campuses requiring high-visibility wayfinding.",
      features: [
        "Large format capability for multiple tenant names",
        "Uniform illumination for consistent brand presentation",
        "Modular design allows easy tenant updates",
        "Weather-resistant for outdoor monument signs",
        "Engineered for structural compliance",
        "Available with digital message integration",
      ],
      bestFor: "Multi-tenant office buildings, business park monuments, corporate campus directories, parking wayfinding",
      realExample: {
        project: "Corporate Office Park - Dallas, TX",
        result: "Monument sign with 12 tenant panels. Property manager reports faster tenant leasing: 'Professional signage elevated perceived property value.'",
      },
    },
  ];

  const corporateBenefits = [
    "Engineered drawings ensure first-time permit approval",
    "3-year warranty protects your investment",
    "Energy-efficient LEDs reduce operational costs by 60%",
    "Low-maintenance design minimizes ongoing expenses",
    "UL-listed components meet building code requirements",
    "Professional installation prevents callbacks and issues",
  ];

  const successMetrics = [
    { label: "Corporate Projects", value: "800+" },
    { label: "Fortune 500 Clients", value: "15+" },
    { label: "Permit Approval Rate", value: "First submission" },
    { label: "Average Warranty Claims", value: "<1%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,122,26,0.08),transparent_50%)]" />
        <div className="max-w-6xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <Building2 className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-300">Corporate & Office Solutions</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Elevate Your Corporate Brand with
            <span className="block mt-2 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 bg-clip-text text-transparent">
              Premium EdgeLuxe Signage
            </span>
          </h1>

          <p className="text-xl text-neutral-300 mb-8 max-w-3xl leading-relaxed">
            Make a powerful first impression with EdgeLuxe signage engineered for professional environments. From Fortune 500 headquarters to boutique office suites, create a brand presence that reflects your excellence.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
              style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
            >
              Get Corporate Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/compare"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              Compare Products
            </Link>
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-12 px-6 border-y border-white/10 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {successMetrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-orange-400 mb-2">{metric.value}</div>
                <div className="text-sm text-neutral-400">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Challenges */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Corporate Signage Challenges We Solve
          </h2>
          <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
            Professional environments demand signage that meets strict standards while elevating brand presence.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, idx) => {
              const Icon = challenge.icon;
              return (
                <div
                  key={idx}
                  className="relative group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-orange-500/10 border border-orange-500/20">
                      <Icon className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                      <p className="text-neutral-400 leading-relaxed">{challenge.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Benefits */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
              <Zap className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-300">Built for Business</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Why Corporate Clients Choose EdgeLuxe</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              EdgeLuxe products are engineered for the demands of professional environments with features that protect your investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {corporateBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Top EdgeLuxe Products for Corporate Environments
          </h2>
          <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
            Our most popular EdgeLuxe solutions for corporate offices, professional buildings, and business centers.
          </p>

          <div className="space-y-8">
            {recommendedProducts.map((product, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{product.title}</h3>
                    <p className="text-neutral-400">{product.description}</p>
                  </div>
                  <Link
                    href={`/products/${product.id}`}
                    className="px-6 py-2 rounded-lg text-sm font-semibold bg-orange-500/10 border border-orange-500/20 text-orange-300 hover:bg-orange-500/20 transition-all whitespace-nowrap"
                  >
                    View Details
                  </Link>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-neutral-400 mb-3">KEY FEATURES:</h4>
                  <div className="grid md:grid-cols-2 gap-2">
                    {product.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6 p-4 rounded-xl bg-orange-500/5 border border-orange-500/10">
                  <h4 className="text-sm font-semibold text-orange-300 mb-2">BEST FOR:</h4>
                  <p className="text-sm text-neutral-300">{product.bestFor}</p>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-1">Real Corporate Project:</h4>
                      <p className="text-sm text-neutral-400 mb-2">{product.realExample.project}</p>
                      <p className="text-sm text-neutral-300">{product.realExample.result}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Elevate Your Corporate Brand?
            </h2>
            <p className="text-neutral-400 mb-8 text-lg">
              Get a custom EdgeLuxe quote with engineered drawings, building code compliance verification, and professional installation.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
                style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
              >
                Get Corporate Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
