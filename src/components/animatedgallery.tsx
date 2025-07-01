import React, { useState, useEffect } from 'react';
import { Play, Heart, Share2, Eye, ZoomIn, Star, ChevronLeft, ChevronRight, X } from 'lucide-react';
// @ts-ignore
import mistyForest from "../assets/img2.jpg";
import mountainPeak from "../assets/img3.jpg";
import oceanWaves from "../assets/img4.jpg";
import forestPath from "../assets/img5.jpg";
import sunsetLake from "../assets/img1.png";
import valleyView from "../assets/img.png";
import valleyView1 from "../assets/img6.jpg";

 

// Adjust the path as necessary
const AnimatedGallery = () => {
  const [isVisible, setIsVisible] = useState({ gallery: false });
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [likedImages, setLikedImages] = useState(new Set());
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  // Gallery images - first 4 will be displayed as main grid
  const galleryImages = [
    { 
      url: mistyForest,
      title: "Misty Forest",
      category: "Nature",
      views: "2.3k"
    },
    { 
      url: mountainPeak,
      title: "Mountain Peak",
      category: "Landscape",
      views: "1.8k"
    },
    { 
      url: oceanWaves,
      title: "Ocean Waves",
      category: "Seascape",
      views: "3.1k"
    },
    { 
      url: forestPath,
      title: "Forest Path",
      category: "Adventure",
      views: "2.7k"
    },
    { 
      url: sunsetLake,
      title: "Sunset Lake",
      category: "Reflection",
      views: "4.2k"
    },
    { 
      url: valleyView,
      title: "Valley View",
      category: "Vista",
      views: "1.9k"
    },
    { 
      url: valleyView1,
      title: "Valley View",
      category: "Vista",
      views: "1.9k"
    },
  ];

  const mainImages = galleryImages.slice(0, 4);
  const sliderImages = galleryImages.slice(4);
  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(sliderImages.length / itemsPerSlide);

  // Minimum swipe distance
  const minSwipeDistance = 50;

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible({ gallery: true });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  // Touch handlers for swipe functionality
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (modalOpen) {
      if (isLeftSwipe) nextModalImage();
      if (isRightSwipe) prevModalImage();
    } else {
      if (isLeftSwipe) nextSlide();
      if (isRightSwipe) prevSlide();
    }
  };

  // Handle modal functions
  const openModal = (imageIndex) => {
    setModalImageIndex(imageIndex);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  const nextModalImage = () => {
    setModalImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevModalImage = () => {
    setModalImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Handle keyboard navigation in modal
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (modalOpen) {
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') nextModalImage();
        if (e.key === 'ArrowLeft') prevModalImage();
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [modalOpen]);

  const toggleLike = (index) => {
    const newLiked = new Set(likedImages);
    if (newLiked.has(index)) {
      newLiked.delete(index);
    } else {
      newLiked.add(index);
    }
    setLikedImages(newLiked);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const renderImageCard = (image, index, isSlider = false) => (
    <div 
      key={index} 
      className={`group relative overflow-hidden rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer ${
        isVisible.gallery ? 'animate-fade-in-up' : 'opacity-0'
      } ${isSlider ? 'flex-shrink-0' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onMouseEnter={() => setHoveredIndex(isSlider ? `slider-${index}` : index)}
      onMouseLeave={() => setHoveredIndex(null)}
      onClick={() => openModal(isSlider ? index + 4 : index)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image.url} 
          alt={image.title}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover group-hover:scale-110 sm:group-hover:scale-125 transition-transform duration-700 ease-out"
        />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-sm rounded-full p-3 sm:p-4 transform scale-0 group-hover:scale-100 transition-all duration-500 hover:bg-white shadow-lg">
              <ZoomIn className="w-6 h-6 sm:w-8 sm:h-8 text-gray-800" />
            </div>
          </div>
        </div>

        <div className={`absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 ${
          hoveredIndex === (isSlider ? `slider-${index}` : index) ? 'translate-x-full' : ''
        }`}></div>

        <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-transparent group-hover:border-green-400/50 transition-all duration-500"></div>
      </div>

      <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
      <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 animate-bounce"></div>
    </div>
  );

  return (
    <div className="bg-blue-50 ">
      <section 
        id="gallery" 
        className={`py-8 sm:py-10 transition-all duration-1000 transform ${
          isVisible.gallery ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          {/* Animated Header */}
          <div className="text-center mb-8 sm:mb-10 relative">
            <div className="absolute inset-0 blur-3xl -z-10 rounded-full"></div>
            <h2 className={`text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-green-600 via-emerald-500 to-blue-600 bg-clip-text text-transparent transition-all duration-1000 ${
              isVisible.gallery ? 'scale-100 rotate-0' : 'scale-75 rotate-12'
            }`}>
            </h2>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 mb-3 sm:mb-4 leading-tight drop-shadow-2xl">
              Our <span className="text-green-400">Gallery</span>
            </h2>
            <div className={`h-1 w-20 sm:w-32 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-4 sm:mb-6 rounded-full transition-all duration-1000 ${
              isVisible.gallery ? 'scale-100' : 'scale-0'
            }`}></div>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 font-light px-4">Click on any image to view full size</p>
            <div className="flex justify-center space-x-2 mt-4">
              {[1,2,3].map((i) => (
                <div key={i} className={`w-2 h-2 bg-green-400 rounded-full animate-bounce`} style={{animationDelay: `${i * 0.2}s`}}></div>
              ))}
            </div>
          </div>

          {/* Main Featured Gallery - 4 Images */}
          <div className="mb-8 sm:mb-10">
            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12 text-gray-800">Featured Collection</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {mainImages.map((image, index) => renderImageCard(image, index))}
            </div>
          </div>

          {/* More Adventures Slider */}
          <div className="mb-12 sm:mb-16">
            <div className="flex items-center justify-between mb-6 sm:mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">More Adventures</h3>
              <div className="flex space-x-2">
                <button 
                  onClick={prevSlide}
                  className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-green-50 group"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-green-600" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 hover:bg-green-50 group"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600 group-hover:text-green-600" />
                </button>
              </div>
            </div>

            {/* Slider Container with Touch Support */}
            <div 
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div 
                className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                  <div key={slideIndex} className="min-w-full flex gap-4 sm:gap-6">
                    {sliderImages
                      .slice(slideIndex * itemsPerSlide, (slideIndex + 1) * itemsPerSlide)
                      .map((image, imageIndex) => (
                        <div key={imageIndex} className="flex-1">
                          {renderImageCard(image, slideIndex * itemsPerSlide + imageIndex, true)}
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Slider Indicators */}
            <div className="flex justify-center mt-6 sm:mt-8 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-green-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal Lightbox with Touch Support */}
      {modalOpen && (
        <div 
          className="fixed z-[9999] inset-0 bg-black/90 backdrop-blur-sm  flex items-center justify-center p-2 sm:p-4"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative max-w-6xl max-h-full w-full h-full flex items-center justify-center">
            
            {/* Close Button - Always visible, z-[9999] */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-[9999] p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 transform hover:scale-110"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>

            {/* Previous Button - Hidden on small screens for touch navigation */}
            <button
              onClick={prevModalImage}
              className="hidden sm:block absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Next Button - Hidden on small screens for touch navigation */}
            <button
              onClick={nextModalImage}
              className="hidden sm:block absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all duration-300 hover:scale-110"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Main Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <img
                src={galleryImages[modalImageIndex].url}
                alt={galleryImages[modalImageIndex].title}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </div>

            {/* Thumbnail Navigation - Responsive */}
            <div className="absolute bottom-4 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-1 sm:space-x-2 max-w-full overflow-x-auto p-2 scrollbar-hide">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setModalImageIndex(index)}
                  className={`flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                    modalImageIndex === index 
                      ? 'ring-2 ring-white scale-110' 
                      : 'opacity-60 hover:opacity-100'
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Swipe indicator for mobile */}
            <div className="sm:hidden absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white/60 text-xs text-center">
              <div className="flex items-center space-x-2">
                <ChevronLeft className="w-4 h-4" />
                <span>Swipe to navigate</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Prevent text selection on touch devices */
        .group {
          -webkit-user-select: none;
          -moz-user-select: none;
          -ms-user-select: none;
          user-select: none;
        }
      `}</style>
    </div>
  );
};

export default AnimatedGallery;