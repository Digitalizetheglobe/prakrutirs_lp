import React, { useState, useEffect, useCallback, useRef } from "react";
import {
  Shield,
  Car,
  Trees,
  Droplets,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Award,
  Star,
  Layers,
  Pause,
  Play
} from "lucide-react";

export default function AmenitiesSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(4);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const amenities = [
    {
      icon: Shield,
      title: "24/7 Security",
      desc: "Round-the-clock protection for peace of mind",
      color: "from-red-500 to-pink-500",
      bgGlow: "bg-red-500/10",
      accent: "text-red-500",
      badge: "Security"
    },
    {
      icon: Car,
      title: "Parking Space",
      desc: "Dedicated parking for every property",
      color: "from-purple-500 to-indigo-500",
      bgGlow: "bg-purple-500/10",
      accent: "text-purple-500",
      badge: "Parking"
    },
    {
      icon: Trees,
      title: "Green Spaces",
      desc: "Landscaped gardens and recreational areas",
      color: "from-green-500 to-emerald-500",
      bgGlow: "bg-green-500/10",
      accent: "text-green-500",
      badge: "Nature"
    },
    {
      icon: Droplets,
      title: "Water Supply",
      desc: "Uninterrupted water connection",
      color: "from-cyan-500 to-blue-500",
      bgGlow: "bg-cyan-500/10",
      accent: "text-cyan-500",
      badge: "24/7 Water"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      desc: "Strategic location with easy accessibility",
      color: "from-pink-500 to-red-500",
      bgGlow: "bg-pink-500/10",
      accent: "text-pink-500",
      badge: "Prime Hub"
    }
  ];

  const additionalFeatures = [
    { emoji: "🚪", title: "Entrance Gate", desc: "Grand architectural entrance with security cabin", gradient: "from-orange-400 to-red-500" },
    { emoji: "🏠", title: "Individual Compound", desc: "Clearly demarcated private boundaries for each plot", gradient: "from-green-400 to-blue-500" },
    { emoji: "💡", title: "Street Lamps", desc: "Energy-efficient LED lighting for all pathways", gradient: "from-yellow-400 to-orange-500" },
    { emoji: "📛", title: "Name Board", desc: "Personalized identification signage for each plot", gradient: "from-purple-400 to-pink-500" }
  ];

  // Update items per view on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else if (window.innerWidth < 1280) {
        setItemsPerView(3);
      } else {
        setItemsPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = Math.max(0, amenities.length - itemsPerView);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  // Autoplay functionality
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (diff > minSwipeDistance) {
      nextSlide();
    } else if (diff < -minSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  return (
    <section className="bg-gradient-to-b from-green-50/70 via-white to-green-50/50 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Animated Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2.5 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 shadow-xl hover:scale-105 transition-all duration-300">
            <Award className="w-4 h-4 text-yellow-400" />
            <span>WORLD-CLASS INFRASTRUCTURE</span>
            <Sparkles className="w-4 h-4 text-emerald-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Premium <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">Amenities</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Experience elevated living with thoughtfully engineered infrastructure, premium conveniences, and nature-inspired spaces.
          </p>
        </div>

        {/* Carousel Container */}
        <div
          className="relative mb-20 group/carousel"
          onMouseEnter={() => setIsPlaying(false)}
          onMouseLeave={() => setIsPlaying(true)}
        >
          {/* Navigation Controls Header */}
          <div className="flex items-center justify-between mb-6 px-2">
            <div className="flex items-center space-x-2 text-sm text-gray-500">
              <span className="font-semibold text-gray-800">
                {String(currentIndex + 1).padStart(2, "0")}
              </span>
              <span>/</span>
              <span>{String(maxIndex + 1).padStart(2, "0")}</span>
              <span className="hidden sm:inline text-xs text-gray-400 ml-2">
                (Swipe or click arrows to explore)
              </span>
            </div>

            <div className="flex items-center space-x-3">
              {/* Play / Pause Toggle */}
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause autoplay" : "Start autoplay"}
                className="p-2.5 rounded-full bg-white border border-gray-200 text-gray-600 hover:text-green-600 hover:border-green-400 hover:shadow-md transition-all duration-200"
                title={isPlaying ? "Pause autoplay" : "Start autoplay"}
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
              </button>

              {/* Prev Button */}
              <button
                onClick={prevSlide}
                aria-label="Previous slide"
                className="p-2.5 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-green-600 hover:text-white hover:border-green-600 shadow-sm hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="p-2.5 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-green-600 hover:text-white hover:border-green-600 shadow-sm hover:shadow-lg transition-all duration-200 active:scale-95"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Track Wrapper */}
          <div
            className="overflow-hidden rounded-3xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex transition-transform duration-700 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {amenities.map((amenity, index) => {
                const IconComponent = amenity.icon;
                return (
                  <div
                    key={index}
                    className="flex-shrink-0 px-3"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <div className="group relative h-full bg-white rounded-3xl p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-400 flex flex-col justify-between overflow-hidden">
                      {/* Top Accent Gradient Bar */}
                      <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${amenity.color} opacity-80 group-hover:h-2 transition-all duration-300`}></div>

                      {/* Ambient Glow Background */}
                      <div className={`absolute -right-12 -top-12 w-32 h-32 rounded-full ${amenity.bgGlow} blur-2xl group-hover:scale-150 transition-all duration-500`}></div>

                      <div>
                        {/* Header Row inside card */}
                        <div className="flex items-center justify-between mb-6">
                          <div className={`w-14 h-14 bg-gradient-to-br ${amenity.color} rounded-2xl flex items-center justify-center text-white shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                            <IconComponent className="w-7 h-7" />
                          </div>
                          <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200/60">
                            {amenity.badge}
                          </span>
                        </div>

                        {/* Title & Description */}
                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-green-700 transition-colors duration-200">
                          {amenity.title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {amenity.desc}
                        </p>
                      </div>

                      {/* Card Footer Indicator */}
                      <div className="pt-6 mt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
                        <span className="flex items-center space-x-1">
                          <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
                          <span className="font-medium text-gray-600">Verified Amenity</span>
                        </span>
                        <span className="text-emerald-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Included
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Pagination */}
          <div className="flex items-center justify-center space-x-2 mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "w-8 bg-gradient-to-r from-green-600 to-emerald-500 shadow-sm"
                    : "w-2.5 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Animated Additional Features */}
        <div className="relative bg-gradient-to-br from-white via-green-50/30 to-emerald-50/40 rounded-3xl p-8 sm:p-12 border border-green-100 shadow-md overflow-hidden">
          <div className="relative z-10">
            <div className="text-center mb-10">
              <div className="inline-flex items-center space-x-2 mb-3">
                <Layers className="w-5 h-5 text-emerald-600 animate-pulse" />
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Additional Infrastructure Features
                </h3>
                <Layers className="w-5 h-5 text-green-600 animate-pulse" />
              </div>
              <p className="text-gray-600 text-sm sm:text-base">
                Every minute detail planned to provide a worry-free lifestyle
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-6 border border-gray-100 hover:border-green-300 hover:shadow-lg transition-all duration-300 text-center flex flex-col items-center"
                >
                  <div className="relative mb-5">
                    <div className={`w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 text-3xl`}>
                      {feature.emoji}
                    </div>
                  </div>

                  <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-green-700 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}