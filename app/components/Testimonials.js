"use client";

import { Star, Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Mike Johnson",
      company: "Premium Signs LLC",
      location: "Miami, FL",
      rating: 5,
      quote: "The EdgeLuxe LP5 trimless letters exceeded our expectations. Clean install, zero callbacks. Our client loves the modern look.",
      project: "Retail Storefront - 24\" Face-Lit Letters",
    },
    {
      name: "Sarah Chen",
      company: "Coastal Signage Co.",
      location: "San Diego, CA",
      rating: 5,
      quote: "Fast turnaround and professional drawings made this an easy project. The IP67 waterproof rating gives us confidence for outdoor installs.",
      project: "Restaurant Halo-Lit Installation",
    },
    {
      name: "David Martinez",
      company: "Metro Signs & Graphics",
      location: "Toronto, ON",
      rating: 5,
      quote: "We've been using Sunlite for 3 years now. UL listed components and 3-year warranty gives our clients peace of mind. Consistently quality products.",
      project: "Medical Office Cast Acrylic",
    },
  ];

  return (
    <section className="relative overflow-hidden py-20">
      {/* top separator line */}
      <div
        className="absolute inset-x-0 top-0 h-[2px] md:h-[3px] z-10"
        style={{ background: "linear-gradient(90deg,#ffb84d 0%,#ff7a1a 40%,#ffb84d 70%,#ffd27a 100%)" }}
      />

      {/* background */}
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
              Trusted by Sign Companies Nationwide
            </span>
          </h2>
          <p className="text-lg text-neutral-200/90">
            Hear from the professionals who rely on EdgeLuxe quality for their most demanding projects.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 shadow-lg hover:bg-white/8 transition-all duration-300 group relative"
            >
              {/* Quote icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-orange-400" />
              </div>

              {/* Rating stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, starIdx) => (
                  <Star key={starIdx} className="w-5 h-5 fill-orange-400 text-orange-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-neutral-200 leading-relaxed mb-6 relative z-10">
                "{testimonial.quote}"
              </p>

              {/* Project tag */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold">
                  {testimonial.project}
                </span>
              </div>

              {/* Author info */}
              <div className="border-t border-white/10 pt-4">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-sm text-neutral-400">{testimonial.company}</div>
                <div className="text-xs text-neutral-500">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-1">500+</div>
            <div className="text-sm text-neutral-300">Projects Completed</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-1">98%</div>
            <div className="text-sm text-neutral-300">On-Time Delivery</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-1">3 Years</div>
            <div className="text-sm text-neutral-300">Product Warranty</div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 text-center">
            <div className="text-3xl font-bold text-white mb-1">UL Listed</div>
            <div className="text-sm text-neutral-300">All Components</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/projects"
            className="inline-flex items-center rounded-xl px-6 py-3 border border-white/20 text-white bg-white/5 backdrop-blur-md hover:bg-white/10 transition"
          >
            View Our Project Portfolio →
          </a>
        </div>
      </div>
    </section>
  );
}
