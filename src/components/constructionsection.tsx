import React, { useState, useEffect } from 'react';
import { ZoomIn, ChevronLeft, ChevronRight, X, ChevronDown, ChevronUp, MapPin, Image as ImageIcon, Video as VideoIcon } from 'lucide-react';
import progressVideo from '../assets/VID-20260803-WA0022 (1).mp4';

// Dynamically import all images from the newupload folder
const imageModules = import.meta.glob('../assets/newupload/*.{png,jpg,jpeg,webp}', { eager: true });

// Sort by filename keys to keep a consistent display order
const progressImages = Object.entries(imageModules)
  .sort(([pathA], [pathB]) => pathA.localeCompare(pathB))
  .map(([_, mod]: any) => mod.default);

export default function ConstructionSection() {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');
  const [showAll, setShowAll] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Show first 8 images initially, show all if expanded
  const visibleImages = showAll ? progressImages : progressImages.slice(0, 8);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % progressImages.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + progressImages.length) % progressImages.length);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  // Touch handlers for swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const minSwipeDistance = 50;

    if (distance > minSwipeDistance) {
      nextImage(); // Swipe left -> next
    } else if (distance < -minSwipeDistance) {
      prevImage(); // Swipe right -> prev
    }
  };

  return (
    <section id="construction" className="relative py-20 bg-gradient-to-b from-gray-50 to-green-50/30 overflow-hidden">
      {/* Decorative leafy elements */}
      <div className="absolute top-10 left-5 w-64 h-64 bg-green-200/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-5 w-80 h-80 bg-teal-200/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4 leading-tight">
            Site Development
            <span className="block text-green-700">Progress Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Witness the rapid transformation of Prakriti. We are actively shaping the plots, preparing internal road networks, standardizing utility infrastructure, and rolling out landscape greens.
          </p>
        </div>

        {/* 2 Tabs: Photos & Videos */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 bg-gray-200/80 rounded-full border border-gray-300/60 shadow-inner">
            <button
              onClick={() => setActiveTab('photos')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer ${
                activeTab === 'photos'
                  ? 'bg-green-700 text-white shadow-md'
                  : 'text-gray-700 hover:text-green-800'
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Photos</span>
            </button>
            <button
              onClick={() => setActiveTab('videos')}
              className={`flex items-center space-x-2 px-6 py-2.5 rounded-full font-bold text-sm transition-all duration-300 cursor-pointer ${
                activeTab === 'videos'
                  ? 'bg-green-700 text-white shadow-md'
                  : 'text-gray-700 hover:text-green-800'
              }`}
            >
              <VideoIcon className="w-4 h-4" />
              <span>Videos</span>
            </button>
          </div>
        </div>

        {/* TAB 1: PHOTOS */}
        {activeTab === 'photos' && (
          <>
            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
              {visibleImages.map((imgUrl, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden bg-white rounded-2xl border border-green-100 shadow-md hover:shadow-xl hover:border-green-300 transition-all duration-500 transform hover:-translate-y-1 cursor-pointer"
                  onClick={() => openLightbox(index)}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden aspect-[4/3] bg-gray-100">
                    <img
                      src={imgUrl}
                      alt={`Prakriti Site Update ${index + 1}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-between p-4">
                      <div className="self-end bg-white/20 backdrop-blur-md text-white rounded-full p-2.5 shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-500">
                        <ZoomIn className="w-5 h-5" />
                      </div>
                      <div className="text-white">
                        <p className="text-xs font-semibold uppercase tracking-wider text-green-300">Development Stage</p>
                        <h4 className="text-sm font-bold">Prakriti Plot #{index + 1}</h4>
                      </div>
                    </div>
                  </div>

                  {/* Bottom Info Bar */}
                  <div className="p-4 flex items-center justify-between bg-white">
                    <div className="flex items-center space-x-1.5 text-gray-500 text-xs">
                      <MapPin className="w-3.5 h-3.5 text-green-600" />
                      <span>Takve, Pune</span>
                    </div>
                    <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-200/40">
                      On-Site
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {progressImages.length > 8 && (
              <div className="text-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="inline-flex items-center space-x-2 px-8 py-3.5 bg-green-700 hover:bg-green-800 text-white font-bold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
                >
                  <span>{showAll ? 'Show Less' : `View All ${progressImages.length} Updates`}</span>
                  {showAll ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                </button>
              </div>
            )}
          </>
        )}

        {/* TAB 2: VIDEOS */}
        {activeTab === 'videos' && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl p-4 md:p-6 border border-green-100 shadow-xl overflow-hidden">
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
                <video
                  src={progressVideo}
                  controls
                  controlsList="nodownload"
                  className="w-full h-full object-contain"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-4 mt-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 border-t border-gray-100">
                <div>
                  <h4 className="text-lg font-bold text-gray-900">Site Development Video Tour</h4>
                  <p className="text-sm text-gray-500">Real-time video footage of ground progress & layout development</p>
                </div>
                <div className="flex items-center space-x-1.5 text-xs text-green-700 bg-green-50 px-3.5 py-1.5 rounded-full border border-green-200 font-medium">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Prakriti Site, Pune</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex items-center justify-center select-none"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            className="absolute top-5 right-5 z-[100000] text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors cursor-pointer"
            onClick={closeLightbox}
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Left Arrow */}
          <button
            className="absolute left-4 md:left-8 z-[100000] text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image Container with gestures */}
          <div
            className="relative max-w-[90%] max-h-[80%] flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={progressImages[currentIndex]}
              alt={`Prakriti Site Update Fullscreen ${currentIndex + 1}`}
              className="max-w-full max-h-[75vh] object-contain rounded-lg shadow-2xl border border-white/10"
            />
            {/* Meta Info under image */}
            <div className="mt-4 text-center text-white">
              <p className="text-sm font-semibold text-green-400">Site Development Update</p>
              <h3 className="text-base font-bold mt-0.5">Plot Area Progress — Photo {currentIndex + 1} of {progressImages.length}</h3>
            </div>
          </div>

          {/* Right Arrow */}
          <button
            className="absolute right-4 md:right-8 z-[100000] text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
}
