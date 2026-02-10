import Link from "next/link";
import { UtensilsCrossed, MapPin, Users, Star, CheckCircle, ArrowRight, Award, Clock } from "lucide-react";

export const metadata = {
  title: "Restaurant & Hospitality Signage Solutions | EdgeLuxe for Restaurants & Hotels | Sunlite Signs",
  description: "Premium EdgeLuxe signage solutions for restaurants, bars, cafes, and hospitality venues. Create ambiance and drive foot traffic with stunning illuminated signage.",
  keywords: "restaurant signage, hospitality signs, bar signs, cafe signage, restaurant branding, illuminated restaurant signs",
};

export default function RestaurantSolutionsPage() {
  const challenges = [
    {
      icon: MapPin,
      title: "Driving Foot Traffic & Visibility",
      description: "Stand out in competitive dining districts and shopping areas. Your signage must capture attention from passing vehicles and pedestrians to drive customers through the door.",
    },
    {
      icon: UtensilsCrossed,
      title: "Reflecting Your Dining Experience",
      description: "Your exterior signage sets expectations for the dining experience inside. Premium signage attracts premium diners and positions your establishment appropriately.",
    },
    {
      icon: Users,
      title: "Creating Instagrammable Moments",
      description: "Modern diners share their experiences on social media. Stunning signage becomes free marketing when customers photograph and share your restaurant.",
    },
    {
      icon: Clock,
      title: "24/7 Brand Presence",
      description: "Illuminated signage works around the clock, building brand awareness even when you're closed and attracting dinner crowds during evening hours.",
    },
  ];

  const recommendedProducts = [
    {
      id: "edgeluxe-lp3-1",
      title: "EdgeLuxe LP3.1 - Halo-Lit Channel Letters",
      description: "The perfect choice for upscale restaurants, wine bars, and fine dining establishments seeking sophisticated ambiance.",
      features: [
        "Soft halo glow creates warm, inviting atmosphere",
        "Premium aesthetic matches upscale dining experience",
        "Highly photographable - customers share on social media",
        "Energy-efficient LEDs reduce operating costs",
        "Works beautifully with brick, wood, and modern facades",
        "Whisper-quiet operation - no distracting transformer noise",
      ],
      bestFor: "Fine dining restaurants, steakhouses, wine bars, upscale cafes, farm-to-table concepts, boutique hotels",
      realExample: {
        project: "Artisan Bistro - Nashville, TN",
        result: "Halo-lit signage became Instagram backdrop. Restaurant tags in 300+ posts within first 6 months. Owner: 'Best marketing investment we've made.'",
      },
    },
    {
      id: "edgeluxe-lp5",
      title: "EdgeLuxe LP5 - Trimless Face-Lit Letters",
      description: "Ideal for modern restaurants, trendy gastropubs, and contemporary dining concepts that want to project innovation.",
      features: [
        "Trimless design signals modern, cutting-edge dining",
        "100% face illumination ensures visibility from distance",
        "Creates bold, contemporary brand statement",
        "Perfect for Instagram-worthy exterior photos",
        "Seamless integration with modern architecture",
        "Premium appearance justifies premium pricing",
      ],
      bestFor: "Modern restaurants, craft breweries, rooftop bars, fusion cuisine, fast-casual chains, ghost kitchen pickup locations",
      realExample: {
        project: "Fusion Kitchen - Miami Design District",
        result: "Trimless letters perfectly matched innovative menu concept. Featured in 'Miami's Most Instagrammable Restaurants' by local magazine. Reservations up 40%.",
      },
    },
    {
      id: "edgeluxe-lp11-b",
      title: "EdgeLuxe LP11-B - Back-Lit Cabinet Signs",
      description: "Perfect for restaurant chains, quick-service restaurants, and multi-location brands requiring consistent, high-visibility signage.",
      features: [
        "Large format ideal for highway visibility and strip malls",
        "Uniform illumination ensures brand consistency across locations",
        "Weather-resistant for outdoor pylon and monument signs",
        "Cost-effective for multi-location rollouts",
        "Available with digital message integration for specials",
        "Engineered for structural compliance",
      ],
      bestFor: "Restaurant chains, QSR franchises, food courts, shopping center restaurants, highway-visible locations, drive-thru concepts",
      realExample: {
        project: "Regional BBQ Chain - 12 Locations",
        result: "Standardized EdgeLuxe cabinet signs across all locations. Franchise owner reports 'Consistent, professional appearance elevated brand perception and same-store sales.'",
      },
    },
  ];

  const restaurantBenefits = [
    "Weather-resistant construction withstands outdoor elements",
    "Energy-efficient LEDs reduce utility costs by 60%",
    "3-year warranty protects your investment",
    "Low-maintenance design - no constant bulb replacements",
    "Engineered drawings ensure permit approval",
    "Professional installation prevents issues and callbacks",
  ];

  const successMetrics = [
    { label: "Restaurant Projects", value: "600+" },
    { label: "Multi-Location Chains", value: "25+" },
    { label: "Average ROI Timeline", value: "18 months" },
    { label: "Customer Satisfaction", value: "98%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b] text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,122,26,0.08),transparent_50%)]" />
        <div className="max-w-6xl mx-auto relative">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-6">
            <UtensilsCrossed className="w-4 h-4 text-orange-400" />
            <span className="text-sm text-orange-300">Restaurant & Hospitality Solutions</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Drive Diners with
            <span className="block mt-2 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-400 bg-clip-text text-transparent">
              Stunning EdgeLuxe Signage
            </span>
          </h1>

          <p className="text-xl text-neutral-300 mb-8 max-w-3xl leading-relaxed">
            Create an unforgettable first impression with EdgeLuxe signage that captures attention, reflects your culinary excellence, and turns passersby into loyal customers.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
              style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
            >
              Get Restaurant Quote
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

      {/* Restaurant Challenges */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">
            Restaurant Signage Challenges We Solve
          </h2>
          <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
            Hospitality venues face unique challenges. EdgeLuxe signage helps you stand out and attract more customers.
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

      {/* Restaurant Benefits */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 mb-4">
              <Star className="w-4 h-4 text-orange-400" />
              <span className="text-sm text-orange-300">Built for Hospitality</span>
            </div>
            <h2 className="text-4xl font-bold mb-4">Why Restaurant Owners Choose EdgeLuxe</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto">
              EdgeLuxe products are engineered for the demanding hospitality environment with features that maximize your ROI.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {restaurantBenefits.map((benefit, idx) => (
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
            Top EdgeLuxe Products for Restaurants
          </h2>
          <p className="text-neutral-400 text-center mb-12 max-w-2xl mx-auto">
            Our most popular EdgeLuxe solutions for restaurants, bars, cafes, and hospitality venues.
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
                      <h4 className="text-sm font-semibold text-white mb-1">Real Restaurant Project:</h4>
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

      {/* Social Media Impact */}
      <section className="py-20 px-6 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold mb-4">Turn Your Signage Into Free Marketing</h2>
              <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
                Modern EdgeLuxe signage is highly photographable. Customers love sharing stunning signage on Instagram, TikTok, and Facebook - giving you free exposure to thousands of potential diners.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-orange-400 mb-2">73%</div>
                <div className="text-sm text-neutral-400">of diners photograph restaurant exteriors</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-orange-400 mb-2">2.5x</div>
                <div className="text-sm text-neutral-400">more social shares with premium signage</div>
              </div>
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                <div className="text-3xl font-bold text-orange-400 mb-2">$0</div>
                <div className="text-sm text-neutral-400">cost per impression from customer posts</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Attract More Diners?
            </h2>
            <p className="text-neutral-400 mb-8 text-lg">
              Get a custom EdgeLuxe quote with engineered drawings, permit support, and professional installation. Start turning heads and filling tables.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:scale-105"
                style={{ background: "linear-gradient(90deg,#ffb84d,#ff7a1a)" }}
              >
                Get Restaurant Quote
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
