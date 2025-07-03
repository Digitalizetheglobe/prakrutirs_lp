import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Users, Send, Star, Zap, Clock } from 'lucide-react';
import { link } from 'framer-motion/client';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState({ contact: false });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    plotSize: '',
    message: ''
  });
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible({ contact: true });
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Now",
      content: "+91 800 733 7788",
      link: "tel:+918007337788",
      accent: "from-emerald-400 to-cyan-400"
    },
    {
      icon: MapPin,
      title: "Project Location",
      content: "Near Takve, Pune",
      link: "https://maps.app.goo.gl/dVpH5s47ry8QjMe88?g_st=iw",
      accent: "from-purple-400 to-pink-400"
    },
    {
      icon: Users,
      title: "Builder",
      content: "Chirag Khandage",
      subtitle: "Strategic Partner: Rising Spaces",
      accent: "from-orange-400 to-red-400"
    }
  ];

  const plotSizes = [
    { value: "861", label: "861 sqft - Compact Living" },
    { value: "1200", label: "1200 sqft - Modern Comfort" },
    { value: "1500", label: "1500 sqft - Spacious Home" },
    { value: "2000", label: "2000 sqft - Premium Space" },
    { value: "2275", label: "2275 sqft - Luxury Living" }
  ];

  return (
    <section className="relative bg-gray-900 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-cyan-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className={`relative z-10 py-20 px-4 transition-all duration-1000 ${isVisible.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-md rounded-full px-6 py-3 mb-6 border border-white/10">
              <Star className="w-5 h-5 text-yellow-400 animate-spin" />
              <span className="text-white font-medium">Limited Time Offer</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-200 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Reserve your dream plot today. Limited availability, unlimited possibilities.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-6">
              {/* Call Now Card */}
               <div
    className={`group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-white/10 ${
      hoveredCard === 1 ? 'shadow-2xl shadow-cyan-500/20' : ''
    }`}
    onMouseEnter={() => setHoveredCard(1)}
    onMouseLeave={() => setHoveredCard(null)}
  >
              <a
  href="tel:+918007337788"
  className="flex items-start gap-4 group"
  style={{ cursor: 'pointer' }}
>
  <div className="relative p-3 rounded-xl bg-gradient-to-r from-emerald-400 to-cyan-400 group-hover:scale-110 transition-transform duration-300">
    <Phone className="w-6 h-6 text-white" />
    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
  </div>
  <div className="flex-1">
    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
      Call Now
    </h3>
    <span className="text-xl font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
      +91 800 733 7788
    </span>
  </div>
</a>
</div>

              {/* Project Location Card */}
            <a
  href="https://maps.app.goo.gl/dVpH5s47ry8QjMe88?g_st=iw"
  target="_blank"
  rel="noopener noreferrer"
  className="block"
>
  <div
    className={`group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-white/10 ${
      hoveredCard === 1 ? 'shadow-2xl shadow-cyan-500/20' : ''
    }`}
    onMouseEnter={() => setHoveredCard(1)}
    onMouseLeave={() => setHoveredCard(null)}
  >
    <div className="flex items-start gap-4">
      <div className="relative p-3 rounded-xl bg-gradient-to-r from-purple-400 to-pink-400 group-hover:scale-110 transition-transform duration-300">
        <MapPin className="w-6 h-6 text-white" />
        <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
          Project Location
        </h3>
        <p className="text-xl font-bold text-cyan-400 group-hover:text-cyan-300 transition-colors">
          Near Takve, Pune
        </p>
      </div>
    </div>
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
  </div>
</a>



              {/* Builder Card */}
              <div
                className={`group relative p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 cursor-pointer transition-all duration-500 hover:scale-105 hover:bg-white/10 ${hoveredCard === 2 ? 'shadow-2xl shadow-cyan-500/20' : ''}`}
                onMouseEnter={() => setHoveredCard(2)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-start gap-4">
                  <div className="relative p-3 rounded-xl bg-gradient-to-r from-orange-400 to-red-400 group-hover:scale-110 transition-transform duration-300">
                    <Users className="w-6 h-6 text-white" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                      Builder
                    </h3>
                    <div className="text-gray-300 group-hover:text-white transition-colors">
                      <div className="font-medium">Chirag Khandge, Parag Dhore, Sunil Kashid, Vijay Bajare</div>
                      <div className="text-sm text-gray-400 mt-1">Strategic Partner: Rising Spaces</div>
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 to-red-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
              </div>

              {/* Special Offer Banner */}
              <div className="relative p-6 rounded-2xl bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-md border border-yellow-500/30 overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-yellow-400/30 to-orange-400/30 rounded-full blur-xl"></div>
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-5 h-5 text-yellow-400 animate-bounce" />
                    <span className="text-yellow-400 font-semibold">Special Offer</span>
                  </div>
                  <p className="text-white text-sm">
                    Book now and get 10% off on registration fees!
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-500/5 to-purple-500/5 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-500">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Quick Inquiry</h3>
                  </div>

                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="group">
                        <input
                          type="text"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 group-hover:bg-white/15"
                        />
                      </div>
                        <div className="group">
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone Number"
                          value={formData.phone}
                          onChange={(e) => {
                          // Only allow numbers and max 10 digits
                          const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                          setFormData({ ...formData, phone: value });
                          }}
                          pattern="\d{10}"
                          maxLength={10}
                          required
                          inputMode="numeric"
                          autoComplete="tel"
                          className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 group-hover:bg-white/15"
                        />
                        {formData.phone && formData.phone.length !== 10 && (
                          <p className="text-red-400 text-xs mt-1">Enter a valid 10-digit phone number</p>
                        )}
                        </div>
                    </div>

                    <div className="group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 group-hover:bg-white/15"
                      />
                    </div>

                    <div className="group">
                      <select
                        name="plotSize"
                        value={formData.plotSize}
                        onChange={handleInputChange}
                        className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 group-hover:bg-white/15 appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-gray-800 text-white">Select Plot Size</option>
                        {plotSizes.map((size) => (
                          <option key={size.value} value={size.value} className="bg-gray-800 text-white">
                            {size.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="group">
                      <textarea
                        name="message"
                        placeholder="Your Message (Optional)"
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all duration-300 group-hover:bg-white/15 resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="group relative w-full p-4 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <div className="relative flex items-center justify-center gap-2">
                        <Send className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                        <span>Send Inquiry</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/20 to-cyan-500/20 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
              <Clock className="w-4 h-4 text-emerald-400" />
              <span className="text-white text-sm">Response time: Within 2 hours</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;