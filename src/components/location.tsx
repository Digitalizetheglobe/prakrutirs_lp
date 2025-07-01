import React, { useState, useEffect } from 'react';
import { MapPin, TreePine, Car, Home, Phone, Navigation, Clock, Star, ArrowRight, Map, Calendar, Shield, Zap } from 'lucide-react';

const EnhancedLocation = () => {
  const [isVisible, setIsVisible] = useState({ location: false });
  const [hoveredAdvantage, setHoveredAdvantage] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible({ location: true });
    }, 300);

    // Update time every minute
    const timeInterval = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => {
      clearTimeout(timer);
      clearInterval(timeInterval);
    };
  }, []);

  const locationAdvantages = [
    {
      icon: MapPin,
      title: "Strategic Location",
      description: "Near Takve with excellent connectivity",
      details: "Prime location with easy access to major highways and city centers",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TreePine,
      title: "Natural Environment",
      description: "Surrounded by greenery and fresh air",
      details: "Pristine natural surroundings with 80% green cover",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: Car,
      title: "Easy Accessibility",
      description: "Well-connected roads and transport",
      details: "Multiple transport options including buses and cabs",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Home,
      title: "Peaceful Living",
      description: "Away from city noise and pollution",
      details: "Serene environment with minimal noise pollution",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const nearbyPlaces = [
    { name: "Takve Village", distance: "2 km", time: "5 min", type: "village" },
    { name: "Main Highway", distance: "5 km", time: "10 min", type: "road" },
    { name: "Pune City", distance: "45 km", time: "1 hr", type: "city" },
    { name: "Airport", distance: "50 km", time: "1.2 hr", type: "airport" }
  ];

  return (
    <div className=" bg-gradient-to-br from-slate-50 via-green-50 to-blue-50">
      <section 
        id="location" 
        className={`py-20 transition-all duration-1000 transform ${
          isVisible.location ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Animated Header */}
          <div className="text-center mb-20 relative">
            <div className="absolute inset-0 blur-3xl -z-10 rounded-full"></div>
           
            <h2 className="text-5xl md:text-5xl font-black text-gray/900 mb-4 leading-tight drop-shadow-2xl">
 Prime <span className=" text-green-400"> Location</span>
          </h2>
            <div className={`h-1 w-32 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6 rounded-full transition-all duration-1000 ${
              isVisible.location ? 'scale-100' : 'scale-0'
            }`}></div>
            <p className="text-2xl text-gray-600 font-light">Near Takve - Close yet away from chaos!</p>
            
            {/* Floating location pin animation */}
            <div className="relative mt-8">
              <div className="absolute left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Location Advantages */}
            <div className={`transition-all duration-1000 ${
              isVisible.location ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0'
            }`}>
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-2 text-gray-800">Location Advantages</h3>
                <p className="text-gray-600">Discover why this location is perfect for your dream home</p>
              </div>

              <div className="space-y-6">
                {locationAdvantages.map((advantage, index) => {
                  const IconComponent = advantage.icon;
                  return (
                    <div 
                      key={index}
                      className={`group relative overflow-hidden bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer ${
                        isVisible.location ? 'animate-fade-in-up' : 'opacity-0'
                      }`}
                      style={{ animationDelay: `${index * 0.15}s` }}
                      onMouseEnter={() => setHoveredAdvantage(index)}
                      onMouseLeave={() => setHoveredAdvantage(null)}
                    >
                      {/* Background gradient overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${advantage.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}></div>
                      
                      {/* Content */}
                      <div className="relative flex items-start space-x-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-r ${advantage.color} shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-lg mb-2 text-gray-800 group-hover:text-gray-900">{advantage.title}</h4>
                          <p className="text-gray-600 mb-2">{advantage.description}</p>
                          
                          {/* Expandable details */}
                          <div className={`overflow-hidden transition-all duration-500 ${
                            hoveredAdvantage === index ? 'max-h-20 opacity-100' : 'max-h-0 opacity-0'
                          }`}>
                            <p className="text-sm text-gray-500 italic pt-2 border-t border-gray-100">
                              {advantage.details}
                            </p>
                          </div>
                        </div>
                        
                        {/* Arrow indicator */}
                        <div className={`transform transition-all duration-300 ${
                          hoveredAdvantage === index ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
                        }`}>
                          <ArrowRight className="w-5 h-5 text-gray-400" />
                        </div>
                      </div>

                      {/* Animated border */}
                      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-200 transition-all duration-500"></div>
                      
                      {/* Floating particles */}
                      <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-green-400 to-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 animate-pulse"></div>
                    </div>
                  );
                })}
              </div>

              {/* Nearby Places Quick Info */}
              <div className="mt-8 bg-white rounded-2xl p-6 shadow-lg">
                <h4 className="font-bold text-lg mb-4 flex items-center">
                  <Navigation className="w-5 h-5 mr-2 text-green-600" />
                  Nearby Distances
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {nearbyPlaces.map((place, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                      <span className="text-sm font-medium text-gray-700">{place.name}</span>
                      <div className="text-right">
                        <div className="text-sm font-bold text-green-600">{place.distance}</div>
                        <div className="text-xs text-gray-500">{place.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Interactive Visit Section */}
            <div className={`transition-all duration-1000 ${
              isVisible.location ? 'translate-x-0 opacity-100' : 'translate-x-12 opacity-0'
            }`}>
              
              {/* Map and Contact Card */}
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                
                {/* Background decorative elements */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/30 to-blue-200/30 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-200/30 to-pink-200/30 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative">
                  <h3 className="text-3xl font-bold mb-6 text-gray-800 flex items-center">
                    <Map className="w-8 h-8 mr-3 text-green-600" />
                    Visit Our Location
                  </h3>

                  {/* Address Card */}
                  <div className="bg-white p-6 rounded-2xl mb-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-bold text-lg text-gray-800">Address</span>
                    </div>
                    <p className="text-gray-600 mb-6 text-lg">Near Takve, Pune</p>
                    
                    {/* Interactive map button */}
                    <a 
                      href="https://maps.app.goo.gl/dVpH5s47ry8QjMe88" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300 group-hover:from-green-700 group-hover:to-emerald-700"
                    >
                      <MapPin className="w-5 h-5" />
                      <span>View on Maps</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Visit Scheduling */}
                  <div className="space-y-6">
                    
                    {/* Current time display */}
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-4 rounded-xl border border-blue-100">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <Clock className="w-4 h-4 text-blue-600" />
                          <span className="text-sm font-medium text-gray-700">Current Time</span>
                        </div>
                        <span className="text-sm font-bold text-blue-600">
                          {currentTime.toLocaleTimeString('en-IN', { 
                            hour: '2-digit', 
                            minute: '2-digit',
                            timeZone: 'Asia/Kolkata'
                          })}
                        </span>
                      </div>
                    </div>

                    {/* Visit stats */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center bg-white p-4 rounded-xl shadow-sm border">
                        <div className="text-2xl font-bold text-green-600">150+</div>
                        <div className="text-xs text-gray-600">Happy Visitors</div>
                      </div>
                      <div className="text-center bg-white p-4 rounded-xl shadow-sm border">
                        <div className="text-2xl font-bold text-blue-600">24/7</div>
                        <div className="text-xs text-gray-600">Available</div>
                      </div>
                      <div className="text-center bg-white p-4 rounded-xl shadow-sm border">
                        <div className="text-2xl font-bold text-purple-600">5★</div>
                        <div className="text-xs text-gray-600">Rating</div>
                      </div>
                    </div>

                    {/* Call to action */}
                    <div className="text-center bg-gradient-to-r from-gray-50 to-white p-6 rounded-2xl border border-gray-100">
                      <p className="text-gray-600 mb-4 text-lg">Ready to visit? Call us for site visit arrangement</p>
                      <div className="space-y-3">
                        <a 
                          href="tel:+918007337788" 
                          className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group"
                        >
                          <Phone className="w-5 h-5 animate-pulse" />
                          <span>Schedule Visit</span>
                          <Calendar className="w-5 h-5 transform group-hover:rotate-12 transition-transform" />
                        </a>
                        <p className="text-sm text-gray-500">Free site visit • No obligations • Expert guidance</p>
                      </div>
                    </div>

                    {/* Trust indicators */}
                    <div className="flex items-center justify-center space-x-6 pt-4">
                      <div className="flex items-center space-x-1">
                        <Shield className="w-4 h-4 text-green-600" />
                        <span className="text-xs text-gray-600">Verified</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Zap className="w-4 h-4 text-yellow-600" />
                        <span className="text-xs text-gray-600">Quick Response</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-purple-600 fill-current" />
                        <span className="text-xs text-gray-600">Top Rated</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
      `}</style>
    </div>
  );
};

export default EnhancedLocation;