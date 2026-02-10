"use client";

import { useState } from "react";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import BeforeAfterSlider from "../components/BeforeAfterSlider";

// Reference projects data
const references = [
  {
    id: 1,
    title: "Retail Storefront - Trimless Channel Letters",
    image: "/images/references/ref1.jpg",
    beforeImage: "/images/references/ref1-day.jpg",  // Optional: Add day/night comparison
    afterImage: "/images/references/ref1-night.jpg",  // Optional: Add day/night comparison
    category: "Trimless Channel Letters",
    location: "Miami, FL",
  },
  {
    id: 2,
    title: "Corporate Office - Halo Lit Letters",
    image: "/images/references/ref2.jpg",
    category: "Halo Lit Letters",
    location: "Minneapolis, MN",
  },
  {
    id: 3,
    title: "Restaurant Signage - Cast Acrylic",
    image: "/images/references/ref3.jpg",
    category: "Cast Acrylic",
    location: "Toronto, ON",
  },
  {
    id: 4,
    title: "Hotel Exterior - EdgeLuxe LP5",
    image: "/images/references/ref4.jpg",
    category: "Trimless Channel Letters",
    location: "Orlando, FL",
  },
  {
    id: 5,
    title: "Medical Office - Flat Cut Letters",
    image: "/images/references/ref5.jpg",
    category: "Flat Cut Letters",
    location: "Chicago, IL",
  },
  {
    id: 6,
    title: "Shopping Center - Mixed Illumination",
    image: "/images/references/ref6.jpg",
    category: "Mixed Products",
    location: "Dallas, TX",
  },
  {
    id: 7,
    title: "Project Title - Edit This",
    image: "/images/references/ref7.jpg",
    category: "Edit Category",
    location: "City, State",
  },
  {
    id: 8,
    title: "Project Title - Edit This",
    image: "/images/references/ref8.jpg",
    category: "Edit Category",
    location: "City, State",
  },
  {
    id: 9,
    title: "Project Title - Edit This",
    image: "/images/references/ref9.jpg",
    category: "Edit Category",
    location: "City, State",
  },
  {
    id: 10,
    title: "Project Title - Edit This",
    image: "/images/references/ref10.jpg",
    category: "Edit Category",
    location: "City, State",
  },
];

export default function ProjectsGrid() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openImage = (ref, index) => {
    setSelectedImage(ref);
    setCurrentIndex(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % references.length;
    setCurrentIndex(nextIndex);
    setSelectedImage(references[nextIndex]);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + references.length) % references.length;
    setCurrentIndex(prevIndex);
    setSelectedImage(references[prevIndex]);
  };

  return (
    <>
      <section className="relative overflow-hidden py-20">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f1a] via-[#0a0e17] to-[#09090b]" />
        </div>

        <div className="container mx-auto px-6">
          {/* References Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {references.map((ref, index) => (
              <motion.div
                key={ref.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => openImage(ref, index)}
                className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/10 hover:scale-[1.02]"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                  <img
                    src={ref.image}
                    alt={ref.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex items-center gap-2 text-white">
                      <ZoomIn className="w-5 h-5" />
                      <span className="text-lg font-semibold">Click to enlarge</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-semibold mb-3">
                    {ref.category}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">{ref.title}</h3>
                  <p className="text-sm text-neutral-400">{ref.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note about wholesale */}
          <div className="mt-16 max-w-3xl mx-auto text-center">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-8">
              <p className="text-neutral-300 leading-relaxed">
                <strong className="text-white">Wholesale Partner Notice:</strong> As a wholesale manufacturer,
                we work exclusively with sign companies and professionals. The projects shown represent
                installations completed by our valued partners. For wholesale inquiries and pricing,
                please contact our sales team.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Popup Modal with Fancy Animations */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeImage}
          >
            {/* Backdrop with blur */}
            <motion.div
              initial={{ backdropFilter: "blur(0px)" }}
              animate={{ backdropFilter: "blur(12px)" }}
              exit={{ backdropFilter: "blur(0px)" }}
              className="absolute inset-0 bg-black/95"
            />

            {/* Close button - Fancy design */}
            <motion.button
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0, rotate: 180 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={closeImage}
              className="absolute top-6 right-6 z-20 group"
              aria-label="Close"
            >
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />

                {/* Button */}
                <div className="relative rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-md p-3 transition-all duration-300 group-hover:border-orange-500/50 group-hover:bg-white/20 group-hover:scale-110">
                  <X className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.button>

            {/* Navigation arrows */}
            <motion.button
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ delay: 0.1 }}
              onClick={prevImage}
              className="absolute left-6 z-20 group hidden md:block"
              aria-label="Previous image"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                <div className="relative rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-md p-4 transition-all duration-300 group-hover:border-orange-500/50 group-hover:bg-white/20 group-hover:scale-110">
                  <ChevronLeft className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.button>

            <motion.button
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 50, opacity: 0 }}
              transition={{ delay: 0.1 }}
              onClick={nextImage}
              className="absolute right-6 z-20 group hidden md:block"
              aria-label="Next image"
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300" />
                <div className="relative rounded-full bg-gradient-to-br from-white/10 to-white/5 border border-white/20 backdrop-blur-md p-4 transition-all duration-300 group-hover:border-orange-500/50 group-hover:bg-white/20 group-hover:scale-110">
                  <ChevronRight className="w-6 h-6 text-white" />
                </div>
              </div>
            </motion.button>

            {/* Image container with fancy entrance */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0, rotateX: -15 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 15 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative max-w-6xl max-h-[90vh] w-full z-10"
              onClick={(e) => e.stopPropagation()}
              style={{ perspective: "1000px" }}
            >
              {/* Image with border glow */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
                {/* Animated border glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500 rounded-2xl opacity-50 blur-lg animate-[pulse_2s_ease-in-out_infinite]" />

                <div className="relative bg-neutral-900 rounded-2xl overflow-hidden">
                  {/* Show before/after slider if images exist, otherwise show regular image */}
                  {selectedImage.beforeImage && selectedImage.afterImage ? (
                    <div className="p-8">
                      <BeforeAfterSlider
                        beforeImage={selectedImage.beforeImage}
                        afterImage={selectedImage.afterImage}
                        altBefore={`${selectedImage.title} - Daytime`}
                        altAfter={`${selectedImage.title} - Illuminated at night`}
                      />
                    </div>
                  ) : (
                    <img
                      src={selectedImage.image}
                      alt={selectedImage.title}
                      className="w-full h-full object-contain max-h-[80vh]"
                    />
                  )}

                  {/* Info overlay with slide-up animation */}
                  <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
                    className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/95 via-black/80 to-transparent backdrop-blur-sm p-8"
                  >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500/20 to-yellow-500/20 border border-orange-500/40 text-orange-400 text-sm font-semibold mb-3">
                      {selectedImage.category}
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-2 bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                      {selectedImage.title}
                    </h3>
                    <p className="text-lg text-neutral-300">{selectedImage.location}</p>

                    {/* Counter */}
                    <div className="mt-4 text-sm text-neutral-400">
                      {currentIndex + 1} / {references.length}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
