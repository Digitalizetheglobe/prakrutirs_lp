import { 
  Wifi, 
  Shield, 
  Car, 
  Trees, 
  Droplets, 
  Zap, 
  Camera, 
  MapPin,
  ChevronRight,
  Sparkles,
  Award,
  Star,
  ArrowUpRight,
  Layers,
  MousePointer
} from "lucide-react";

export default function AmenitiesSection() {
  // Sample amenities data - replace with your actual data
  const amenities = [
    { icon: Wifi, title: "High-Speed Internet", desc: "Fiber optic connectivity for modern living", color: "from-blue-500 to-cyan-500", accent: "blue" },
    { icon: Shield, title: "24/7 Security", desc: "Round-the-clock protection for peace of mind", color: "from-red-500 to-pink-500", accent: "red" },
    { icon: Car, title: "Parking Space", desc: "Dedicated parking for every property", color: "from-purple-500 to-indigo-500", accent: "purple" },
    { icon: Trees, title: "Green Spaces", desc: "Landscaped gardens and recreational areas", color: "from-green-500 to-emerald-500", accent: "green" },
    { icon: Droplets, title: "Water Supply", desc: "Uninterrupted water connection", color: "from-cyan-500 to-blue-500", accent: "cyan" },
    { icon: Zap, title: "Power Backup", desc: "Generator backup for essential services", color: "from-yellow-500 to-orange-500", accent: "yellow" },
    { icon: Camera, title: "CCTV Surveillance", desc: "Advanced monitoring systems", color: "from-indigo-500 to-purple-500", accent: "indigo" },
    { icon: MapPin, title: "Prime Location", desc: "Strategic location with easy accessibility", color: "from-pink-500 to-red-500", accent: "pink" }
  ];

  const additionalFeatures = [
    { emoji: "🚪", title: "Entrance Gate", desc: "Grand entrance with security", gradient: "from-orange-400 to-red-500" },
    { emoji: "🏠", title: "Individual Compound", desc: "Private boundary for each plot", gradient: "from-green-400 to-blue-500" },
    { emoji: "💡", title: "Street Lamps", desc: "Well-lit pathways for safety", gradient: "from-yellow-400 to-orange-500" },
    { emoji: "📛", title: "Name Board", desc: "Personalized identification", gradient: "from-purple-400 to-pink-500" }
  ];

  return (
    <div className="bg-green-50 overflow-hidden">
      <div className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Animated Header */}
        <div className="text-center mb-20">
        <div className="group inline-flex items-center space-x-3 bg-gradient-to-r from-gray-900 to-gray-700 text-white px-8 py-4 rounded-full text-sm font-medium mb-8 hover:from-blue-600 hover:to-purple-600 transition-all duration-500 cursor-pointer hover:scale-105 hover:shadow-2xl">
          <Award className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          <span>WORLD-CLASS AMENITIES</span>
          <Sparkles className="w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
        </div>
        
        <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
          
        </h2>
        <h2 className="text-5xl md:text-5xl font-black text-gray/900 mb-4 leading-tight drop-shadow-2xl">
            Premium <span className=" text-green-400">Amenities</span>
          </h2>
        <p className="text-xl text-gray-600"> Experience luxury living with our thoughtfully designed infrastructure and premium facilities</p>
        </div>
         

       
        </div>

        {/* Animated Amenities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {amenities.map((amenity, index) => (
          <div key={index} className="group relative">
          {/* Animated background layers */}
          <div className={`absolute inset-0 bg-gradient-to-br ${amenity.color} rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 blur-lg scale-110`}></div>
          <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl group-hover:scale-105 transition-transform duration-500"></div>
          
          <div className="relative bg-white rounded-3xl p-8 border-2 border-gray-100 group-hover:border-transparent transition-all duration-500 group-hover:shadow-2xl group-hover:-translate-y-4 h-full">
            {/* Floating icon container */}
            <div className="relative mb-6">
            <div className={`w-16 h-16 bg-gradient-to-br ${amenity.color} rounded-2xl flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}>
              <amenity.icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
            </div>
            
            {/* Floating particles around icon */}
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-opacity duration-300"></div>
            <div className="absolute -bottom-1 -left-1 w-3 h-3 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300" style={{animationDelay: '0.2s'}}></div>
            </div>
            
          <h3
    className={`text-2xl font-bold mb-4 text-gray-900 transition-all duration-300 group-hover:text-gray-900`}
  >
    {amenity.title}
  </h3>


            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300 mb-6">
            {amenity.desc}
            </p>
            
            {/* Animated CTA */}
            {/* <div className="flex items-center text-gray-400 group-hover:text-blue-600 transition-colors duration-300 cursor-pointer">
            <span className="mr-2 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">Explore</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </div> */}
            
            {/* Corner decoration */}
            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <Star className="w-5 h-5 text-yellow-400 animate-spin" style={{animationDuration: '3s'}} />
            </div>
          </div>
          </div>
        ))}
        </div>

        {/* Animated Additional Features */}
        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 animate-gradient-x bg-[length:400%_400%]"></div>
        
        <div className="relative z-10">
          <div className="text-center mb-10">
          <div className="inline-flex items-center space-x-2 mb-4">
            <Layers className="w-6 h-6 text-blue-600 animate-pulse" />
            <h2 className="text-4xl font-bold text-gray-900">Additional Features</h2>
            <Layers className="w-6 h-6 text-purple-600 animate-pulse" style={{animationDelay: '0.5s'}} />
          </div>
          <p className="text-gray-600 text-lg">Every detail crafted for your convenience</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="group text-center">
            <div className="relative mb-6">
              {/* Animated rings */}
              <div className={`absolute inset-0 w-28 h-28 mx-auto bg-gradient-to-r ${feature.gradient} rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300 animate-ping`}></div>
              <div className={`absolute inset-0 w-24 h-24 mx-auto bg-gradient-to-r ${feature.gradient} rounded-full opacity-30 group-hover:opacity-60 transition-opacity duration-300 animate-pulse`}></div>
              
              <div className="relative w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mx-auto group-hover:shadow-2xl group-hover:-translate-y-3 group-hover:rotate-6 transition-all duration-500 border-2 border-gray-100 group-hover:border-white">
              <span className="text-4xl group-hover:scale-125 transition-transform duration-300">{feature.emoji}</span>
              </div>
              
              {/* Success indicator */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-bounce">
              <span className="text-white text-xs font-bold">✓</span>
              </div>
            </div>
            
            <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
              {feature.desc}
            </p>
            </div>
          ))}
          </div>
        </div>
        </div>

        {/* Animated CTA Section */}
        
      </div>
      </div>
      
      <style>{`
      @keyframes gradient-x {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
      }
      .animate-gradient-x {
        animation: gradient-x 3s ease infinite;
      }
      `}</style>
    </div>
  );
}