"use client";

import { useState } from "react";
import Image from "next/image";

export default function ImageSlider({ dayImage, nightImage, productTitle }) {
  const [on, setOn] = useState(false);
  const hasNight = Boolean(nightImage);

  return (
    <div className="relative w-full">
      <div
        className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900/60 shadow transition-all hover:shadow-hero"
        onMouseEnter={() => hasNight && setOn(true)}
        onMouseLeave={() => hasNight && setOn(false)}
        onClick={() => hasNight && setOn((v) => !v)}
        role="button"
        aria-label="Toggle day and night view"
        tabIndex={0}
        onKeyDown={(e) => {
          if (!hasNight) return;
          if (e.key === "Enter" || e.key === " ") setOn((v) => !v);
        }}
      >
        {/* Day image */}
        <Image
          src={dayImage}
          alt={`${productTitle} - Day View`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          className="object-cover"
          priority
          quality={85}
        />

        {/* Night image (crossfade) */}
        {hasNight && (
          <Image
            src={nightImage}
            alt={`${productTitle} - Night View`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            className={`object-cover transition-opacity duration-500 ease-in-out ${
              on ? "opacity-100" : "opacity-0"
            }`}
            quality={85}
          />
        )}

        {/* Instruction badge */}
        {hasNight && (
          <div className="absolute bottom-3 right-3 rounded-lg bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur-sm opacity-80 group-hover:opacity-100 transition-opacity z-10">
            Hover or tap to see illuminated
          </div>
        )}
      </div>
    </div>
  );
}
