"use client";

import ReactCompareImage from "react-compare-image";

export default function BeforeAfterSlider({ beforeImage, afterImage, altBefore, altAfter }) {
  return (
    <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
      <ReactCompareImage
        leftImage={beforeImage}
        rightImage={afterImage}
        leftImageAlt={altBefore || "Before installation"}
        rightImageAlt={altAfter || "After installation (nighttime)"}
        sliderLineColor="#ff7a1a"
        sliderLineWidth={3}
        handleSize={40}
        handle={
          <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-400 to-yellow-300 border-4 border-white shadow-xl flex items-center justify-center">
            <svg className="w-5 h-5 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        }
      />
      <div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm">
        Before (Day)
      </div>
      <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-lg text-white text-sm">
        After (Night)
      </div>
    </div>
  );
}
