"use client";

import { Shield, Award, Clock, Truck } from "lucide-react";

export default function TrustBar() {
  const trustItems = [
    {
      icon: Shield,
      label: "UL Listed",
      sublabel: "Certified Components",
    },
    {
      icon: Award,
      label: "500+ Projects",
      sublabel: "Across USA & Canada",
    },
    {
      icon: Clock,
      label: "3-Year Warranty",
      sublabel: "On All Products",
    },
    {
      icon: Truck,
      label: "21-Day Delivery",
      sublabel: "From Approval",
    },
  ];

  return (
    <section className="relative overflow-hidden py-8 border-y border-white/10 bg-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex flex-col items-center text-center gap-2 group"
              >
                <div className="relative">
                  {/* Icon with glow effect */}
                  <div className="absolute inset-0 rounded-full bg-orange-400/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative rounded-full bg-white/10 border border-white/20 p-3 group-hover:border-orange-400/50 transition-colors">
                    <Icon className="w-6 h-6 text-orange-400" />
                  </div>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm md:text-base">
                    {item.label}
                  </div>
                  <div className="text-neutral-400 text-xs md:text-sm">
                    {item.sublabel}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
