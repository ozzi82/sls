"use client";

import { Zap, Shield, Award, Target } from "lucide-react";

export default function WhyEdgeLuxe() {
  const features = [
    {
      icon: Zap,
      title: "German Engineering",
      description: "Precision-engineered designs from Germany, manufactured with exacting quality standards for superior performance.",
    },
    {
      icon: Target,
      title: "Trimless Technology",
      description: "Patented flush-face design eliminates visible trim for a sleek, modern aesthetic that stands out.",
    },
    {
      icon: Shield,
      title: "UL Listed Components",
      description: "All electrical components are UL certified, meeting the highest safety standards for commercial installations.",
    },
    {
      icon: Award,
      title: "IP67 Waterproof",
      description: "Complete weather resistance rated to IP67, ensuring reliable operation in all outdoor conditions.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20">
      {/* top separator line */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
        style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
      />

      {/* background glows */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vmax] h-[140vmax] rounded-full opacity-20 blur-3xl animate-[spin_40s_linear_infinite]"
          style={{
            background: "conic-gradient(from 0deg, rgba(255,172,64,0.18), rgba(80,170,255,0.18), rgba(255,172,64,0.18))",
          }}
        />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-orange-400 via-yellow-300 to-white bg-clip-text text-transparent">
              Why EdgeLuxe Technology?
            </span>
          </h2>
          <p className="text-lg text-neutral-200/90">
            Discover what sets our German-engineered signage apart from traditional channel letters.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-white/6 backdrop-blur-xl p-6 shadow-[0_8px_30px_rgba(0,0,0,0.35)] hover:bg-white/8 transition-all duration-300 group"
              >
                <div className="mb-4">
                  <div className="inline-flex rounded-xl bg-white/10 border border-white/20 p-3 group-hover:border-orange-400/50 transition-colors">
                    <Icon className="w-6 h-6 text-orange-400" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-neutral-300 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href="/about/edgeluxe-technology"
            className="inline-flex items-center rounded-xl px-6 py-3 border border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
          >
            Learn More About Our Technology →
          </a>
        </div>
      </div>
    </section>
  );
}
