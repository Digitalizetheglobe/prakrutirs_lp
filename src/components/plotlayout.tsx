import { useState } from 'react';
import { ZoomIn, X } from 'lucide-react';
import plotLayoutImg from '../assets/IMG-20260710-WA0008.jpg.jpeg';

export default function PlotLayout() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="layout" className="py-16 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Decorative Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:16px_16px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Heading */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 bg-green-600/20 border border-green-500/30 text-green-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-4 backdrop-blur-md">
            <span>MASTER PLAN</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Plot <span className="text-green-400">Layout</span>
          </h2>
          <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto">
            Explore the master plan layout of Prakriti. Click on the layout map to view full size.
          </p>
        </div>

        {/* Plot Layout Image Container */}
        <div className="max-w-5xl mx-auto">
          <div 
            className="group relative bg-gray-900/80 border border-white/10 rounded-3xl p-3 md:p-5 shadow-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-green-500/50 hover:shadow-green-900/20"
            onClick={() => setIsModalOpen(true)}
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img 
                src={plotLayoutImg} 
                alt="Prakriti Plot Layout Plan" 
                className="w-full h-auto object-contain max-h-[700px] mx-auto rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
              />
              
              {/* Overlay Hover Hint */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center rounded-xl backdrop-blur-[2px]">
                <span className="inline-flex items-center gap-2 bg-green-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <ZoomIn className="w-4 h-4" /> Click to Zoom Layout
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[1000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn"
          onClick={() => setIsModalOpen(false)}
        >
          <button 
            className="absolute top-6 right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 rounded-full p-3 transition-colors z-50 cursor-pointer"
            onClick={() => setIsModalOpen(false)}
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
          <div 
            className="max-w-7xl max-h-[90vh] overflow-auto p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={plotLayoutImg} 
              alt="Prakriti Plot Layout Plan Full View" 
              className="max-w-full h-auto max-h-[85vh] object-contain mx-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
