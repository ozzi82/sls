import Link from "next/link";
import { Heart, Users, Shield, CheckCircle, ArrowRight, Building2, Clock, Award } from "lucide-react";

export const metadata = {
  title: "Healthcare & Medical Signage Solutions | EdgeLuxe for Hospitals & Medical Centers | Sunlite Signs",
  description: "Premium EdgeLuxe signage solutions for healthcare facilities, hospitals, medical centers, and clinics. ADA-compliant, hygienic, and professional wayfinding systems.",
  keywords: "healthcare signage, medical center signs, hospital wayfinding, ADA compliant signs, medical facility signage, clinic signs",
};

export default function HealthcareSolutionsPage() {
  const challenges = [
    {
      icon: Users,
      title: "Patient Wayfinding & Navigation",
      description: "Complex facilities require clear, intuitive wayfinding to reduce patient stress and improve arrival times to appointments.",
    },
    {
      icon: Shield,
      title: "ADA Compliance & Accessibility",
      description: "Healthcare facilities must meet strict ADA requirements for tactile signs, braille, contrast ratios, and mounting heights.",
    },
    {
      icon: Heart,
      title: "Professional & Calming Aesthetic",
      description: "Signage must project professionalism and trust while creating a calming, welcoming environment for patients and visitors.",
    },
    {
      icon: Building2,
      title: "Hygienic & Easy-to-Clean Materials",
      description: "Medical environments require non-porous, smooth surfaces that can withstand frequent cleaning and disinfection protocols.",
    },
  ];

  const recommendedProducts = [
    {
      id: "edgeluxe-lp11-b",
      title: "EdgeLuxe LP11-B - Back-Lit Cabinet Signs",
      description: "Ideal for hospital campuses, medical centers, and large healthcare facilities requiring high-visibility wayfinding.",
      features: [
        "Uniform illumination for 24/7 visibility",
        "Weather-resistant for outdoor campus signage",
        "Large format capability for directional signage",
        "Clean, smooth acrylic faces - easy to sanitize",
        "Available with emergency backup lighting",
        "Engineered for code compliance",
      ],
      bestFor: "Main building identification, parking wayfinding, campus directories, emergency department markers",
      realExample: {
        project: "Regional Medical Campus - San Diego",
        result: "200+ signs installed across 12-building campus with zero callbacks. Clear wayfinding reduced patient late arrivals by 18%.",
      },
    },
    {
      id: "edgeluxe-lp3-1",
      title: "EdgeLuxe LP3.1 - Halo-Lit Channel Letters",
      description: "Perfect for medical office buildings, specialty clinics, and outpatient centers seeking sophisticated entrance signage.",
      features: [
        "Soft halo glow - calming, welcoming aesthetic",
        "Premium appearance builds patient trust",
        "Energy-efficient LEDs reduce operating costs",
        "Non-porous aluminum construction - hygienic",
        "Whisper-quiet operation (no transformer hum)",
        "Meets healthcare facility lighting requirements",
      ],
      bestFor: "Main entrance identification, specialty clinic names, medical office buildings, outpatient centers",
      realExample: {
        project: "Cardiology Specialists - Phoenix",
        result: "Halo-lit letters created premium first impression. Practice reported 23% increase in positive online reviews mentioning 'professional appearance.'",
      },
    },
    {
      id: "edgeluxe-lp5",
      title: "EdgeLuxe LP5 - Trimless Face-Lit Letters",
      description: "Best choice for modern healthcare facilities, surgical centers, and high-end medical practices prioritizing cutting-edge design.",
      features: [
        "Trimless design - ultra-modern aesthetic",
        "100% face illumination for maximum visibility",
        "Seamless integration with modern architecture",
        "Precision-engineered for perfect alignment",
        "Easy-to-clean smooth surfaces",
        "Premium appearance differentiates your practice",
      ],
      bestFor: "Luxury medical spas, cosmetic surgery centers, executive health centers, modern hospital expansions",
      realExample: {
        project: "Aesthetic Medicine Institute - Beverly Hills",
        result: "Trimless letters perfectly matched the facility's luxury positioning. Featured in Medical Spa Magazine's 'Best Designed Practices 2024.'",
      },
    },
  ];

  const complianceFeatures = [
    "ADA-compliant tactile lettering and braille available",
    "Contrast ratios meet or exceed ADA requirements",
    "Proper mounting heights for accessibility",
    "Non-glare finishes prevent visual interference",
    "Engineered structural drawings for permit approval",
    "UL-listed electrical components meet healthcare codes",
  ];

  const successMetrics = [
    { label: "Healthcare Projects", value: "500+" },
    { label: "ADA Compliance Rate", value: "100%" },
    { label: "Average Install Time", value: "14 days" },
    { label: "Permit Approval Rate", value: "First submission" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,122,26,0.08),transparent_50%)]" />
        <div className="max-w-6xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <Heart className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-300">Healthcare & Medical Solutions</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Premium EdgeLuxe Signage for
            <span className="block mt-2 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 bg-clip-text text-transparent">
              Healthcare Facilities
            </span>
          </h1>

          <p className="text-xl text-neutral-300 mb-8 max-w-3xl leading-relaxed">
            Create a professional, welcoming environment with ADA-compliant EdgeLuxe signage. Engineered for healthcare's unique requirements: accessibility, hygiene, durability, and patient comfort.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
              style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
            >
              Get Healthcare Quote
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

      {/* Healthcare Challenges */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Healthcare Signage Challenges We Solve
          </h2>
          <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
            Medical facilities face unique signage requirements. EdgeLuxe products are engineered to meet every challenge.
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

      {/* ADA Compliance Features */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
              <Shield className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-300">100% ADA Compliant</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Built for Healthcare Compliance</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              Every EdgeLuxe sign meets or exceeds ADA requirements with engineered drawings for guaranteed permit approval.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {complianceFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10"
              >
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-neutral-300 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended Products */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Top EdgeLuxe Products for Healthcare
          </h2>
          <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
            Our most popular EdgeLuxe solutions for hospitals, medical centers, and healthcare facilities.
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
                      <h4 className="text-sm font-semibold text-white mb-1">Real Healthcare Project:</h4>
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
              Ready to Elevate Your Healthcare Facility?
            </h2>
            <p className="text-neutral-400 mb-8 text-lg">
              Get a custom EdgeLuxe quote with engineered drawings, ADA compliance verification, and installation support.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
                style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
              >
                Get Healthcare Quote
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
