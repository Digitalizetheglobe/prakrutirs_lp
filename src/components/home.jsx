import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, TreePine, Shield, Droplets, Zap, Home, Car, Users, Star, ChevronDown, Play, CheckCircle, ArrowRight, Instagram, Facebook, Twitter, TrendingUp, Leaf, Award, Clock, Trees } from 'lucide-react';
import PricingSection from './pricingsection';
import AmenitiesSection from './amenitiessection';
import AnimatedGallery from './animatedgallery';
import EnhancedLocation from './location';
import SimpleFAQ from './faq';
import ContactSection from './contactsection';
import logo from '../assets/1_Black.png'; // Update the path if your logo is different
import logof from '../assets/1_White.png'; // Update the path if your logo is different
import Navbar from './Navbar';

const PrakritiLanding = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState('overview');
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({ name: '', number: '', email: '', message: '' });
  const [formSuccess, setFormSuccess] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    // Auto-cycle through features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <Leaf size={24} />,
      title: "Prime Natural Location",
      description: "Nestled in pristine surroundings with lush greenery, clean air, and peaceful environment away from city chaos.",
      color: '#197B73'
    },
    {
      icon: <Shield size={24} />,
      title: "Secure Investment",
      description: "Government approved plots with clear titles, proper documentation, and legal compliance for your peace of mind.",
      color: '#004d1f'
    },
    {
      icon: <TrendingUp size={24} />,
      title: "High Appreciation Potential",
      description: "Strategic location with excellent connectivity and infrastructure development ensuring strong future returns.",
      color: '#9ABC54'
    },
    {
      icon: <Users size={24} />,
      title: "Community Living",
      description: "Join a like-minded community of nature lovers and weekend retreat enthusiasts in a well-planned development.",
      color: '#8DE08B'
    }
  ];

  const specs = [
    {
      icon: <Home size={16} />,
      label: "Plot Sizes",
      value: "1200-2400 sq ft"
    },
    {
      icon: <MapPin size={16} />,
      label: "Total Plots",
      value: "150+"
    },
    {
      icon: <Car size={16} />,
      label: "Road Width",
      value: "20-30 ft"
    },
    {
      icon: <Clock size={16} />,
      label: "Possession",
      value: "Immediate"
    },
    {
      icon: <Trees size={16} />,
      label: "Green Cover",
      value: "60%+"
    },
    {
      icon: <Droplets size={16} />,
      label: "Water Supply",
      value: "Borewell"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const amenities = [
    { icon: Shield, title: "24/7 Security", desc: "Round-the-clock security for peace of mind" },
    { icon: Droplets, title: "Swimming Pool", desc: "Premium swimming pool facilities" },
    { icon: Home, title: "Club House", desc: "Modern clubhouse for community activities" },
    { icon: TreePine, title: "Landscaping", desc: "Beautiful roadside plantation and green spaces" },
    { icon: Zap, title: "Utilities", desc: "Water & electricity provision ready" },
    { icon: Car, title: "Internal Roads", desc: "Well-planned internal road network" }
  ];

  const faqs = [
    { q: "What is the total project area?", a: "The project spans across 5 acres with 81 premium NA plots." },
    { q: "What are the available plot sizes?", a: "Plot sizes range from 861 to 2275 sqft net area to suit different needs." },
    { q: "What is the booking process?", a: "₹1 Lac booking amount, 20% within 15 days, and 70% bank loan available." },
    { q: "What approvals does the project have?", a: "The project is sanctioned by PMRDA with all necessary approvals." },
    { q: "What is the maintenance cost?", a: "Very affordable at ₹1 per sqft per month." }
  ];

  // Mock components for sections not provided
 

 


 
  

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section - Clean, No Background Animation */}
     <section id="hero" className="relative min-h-screen flex flex-col justify-between">
  {/* Static Background Image */}
  <div className="absolute inset-0 z-0">
    <img 
      src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1200&h=800&fit=crop" 
      alt="Prakriti" 
      className="w-full h-full object-cover" 
    />
  </div>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

  {/* Top-right Content */}
 

<div className="flex flex-col md:flex-row items-center justify-start gap-8  px-4 md:px-[100px] pt-24 md:pt-40 z-50">

  {/* Left Block - Welcome */}
  <div className="text-center md:text-left space-y-6">
    <h2 className="text-4xl md:text-6xl font-bold drop-shadow-lg text-white leading-tight">
      Welcome to <br /><span className="text-green-300">PRAKRITI</span>
    </h2>
    <p className="text-base md:text-2xl drop-shadow-lg max-w-xl text-white mx-auto md:mx-0">
      Your Gateway to Peaceful Living in Nature's Embrace
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
      <a href="#contact"
        className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg"
      >
        Explore Plots
      </a>
      <a href="#gallery"
        className="px-6 py-3 bg-transparent border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-green-600 transition-all duration-300"
      >
        View Gallery
      </a>
    </div>
  </div>

  {/* Divider */}
  <div className="hidden md:block h-[250px] w-[2px] bg-white/40 rounded-full"></div>
  <div className="block md:hidden w-full h-[2px] bg-white/40 my-8 rounded-full"></div>

  {/* Right Block - Plot Info */}
  <div className="text-center md:text-left space-y-4">
    <h2 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg text-white leading-snug">
      1 NA plot.<br />
      Nayi kahani.<br />
      Naya safar!
    </h2>
    <p className="text-base md:text-2xl font-semibold text-green-200 drop-shadow-md">
      Apna plot, apna peace — <span className="italic font-bold">Launching Soon!</span>
    </p>
   <a
  href="tel:8007337788"
  className="text-sm md:text-base cursor-pointer font-bold bg-green-900 text-white px-6 py-3 rounded-full inline-block shadow-lg"
>
  +91 8007337788 &nbsp; | &nbsp; Mau - Kanhe Phata
</a>

  </div>

</div>

  {/* Divider */}
  <div className="w-16 h-1 bg-white rounded-full opacity-30 mx-auto mb-6 md:mb-0"></div>
</section>


      {/* About Section */}
      <section id="about" className="relative overflow-hidden bg-white">
        <div className="relative z-10 container mx-auto px-6 py-10">
          
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-block">
             
                <h2 className="text-5xl md:text-5xl font-black text-gray/900 mb-4 leading-tight drop-shadow-2xl">
            About<span className=" text-green-400"> Prakriti</span>
          </h2>
              <div className="flex items-center justify-center space-x-2 text-2xl">
                <span className="text-gray-600 font-light">Nature's Paradise Awaits</span>
              </div>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mt-8 leading-relaxed">
              Where <span className="font-semibold text-green-600">Nature's Beauty</span> meets 
              <span className="font-semibold text-green-700"> Smart Investment</span> for your 
              <span className="font-semibold text-teal-700"> Perfect Weekend Escape</span>
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Main Content Grid */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              
              {/* Features Section */}
              <div className="space-y-8">
                <h3 className="text-4xl font-bold text-gray-800 mb-8 flex items-center">
                  <span className="text-green-600">
                    Why Choose Prakriti?
                  </span>
                </h3>
                
                <div className="grid gap-6">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className={`group relative p-6 rounded-2xl border transition-all duration-500 cursor-pointer transform hover:scale-105 ${
                        activeFeature === index
                          ? 'bg-green-50 border-green-200 shadow-2xl'
                          : 'bg-gray-50 border-gray-200 hover:bg-green-25 hover:border-green-300'
                      }`}
                      onMouseEnter={() => setActiveFeature(index)}
                    >
                      <div className="flex items-start space-x-4">
                        <div 
                          className="p-3 rounded-xl text-white shadow-lg transform transition-transform group-hover:rotate-12" 
                          style={{backgroundColor: feature.color}}
                        >
                          {feature.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className={`text-xl font-bold mb-2 transition-colors ${
                            activeFeature === index ? 'text-green-600' : 'text-gray-800'
                          }`}>
                            {feature.title}
                          </h4>
                          <p className="text-gray-600 leading-relaxed">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                      
                      {/* Active indicator */}
                      {activeFeature === index && (
                        <div className="absolute left-0 top-0 bottom-0 w-1 rounded-r-full bg-green-500"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Specifications Section */}
            <div className="space-y-8 px-4 md:px-0">
  {/* Project Specifications Section */}
  <div className="relative">
    <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-100 to-teal-100 opacity-50 blur-xl"></div>
    <div className="relative bg-gradient-to-br from-green-50 to-teal-50 rounded-3xl p-6 md:p-8 border border-green-200 shadow-lg">
      
      <div className="text-center mb-6 md:mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">Project Specifications</h3>
        <div className="w-20 md:w-24 h-1 mx-auto rounded-full bg-green-500"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {specs.map((spec, index) => (
          <div
            key={index}
            className="group bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-green-200 hover:border-green-300 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className="p-2 rounded-lg text-white bg-teal-600">
                {spec.icon}
              </div>
              <div className="font-semibold text-gray-600 text-sm leading-tight">
                {spec.label}
              </div>
            </div>
            <div className="text-xl md:text-2xl font-bold text-green-600">
              {spec.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>

  {/* CTA Section */}
  <div className="text-center p-6 md:p-8 rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-teal-50">
    <h4 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
      Ready to Invest in Your Future?
    </h4>
    <p className="text-gray-600 mb-6 text-sm md:text-base">
      Join the smart investors who've already discovered Prakriti
    </p>
    <a
      href="#contact"
      className="inline-block px-6 md:px-8 py-3 md:py-4 text-white font-bold rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl bg-teal-600 hover:bg-teal-700"
    >
      Explore Plots Now
    </a>
  </div>
</div>

            </div>
          </div>
        </div>
      </section>
      
      <PricingSection/>
      <section id="amenities">
        <AmenitiesSection/>
      </section>
      

      <section id="gallery">
        <AnimatedGallery/>
      </section>
      
      <section id="location">
      <EnhancedLocation/>
      </section>
      <SimpleFAQ/>
      <section id='contact' >
      <ContactSection/>
      </section>
      
   
     
        <footer className="bg-gray-900 text-white py-12 border-t-4 border-white/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img
              src={logof}
              alt="Pawna Lake Villas Logo"
              className="h-[140px] w-auto "
            />
           
            <p className="text-gray-400 mb-4">
              Your gateway to peaceful living in nature's embrace. Premium NA plots with world-class amenities.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Project</a></li>
              <li><a href="#amenities" className="hover:text-white transition-colors">Amenities</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#location" className="hover:text-white transition-colors">Location</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Project Info</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Builder: Chirag Khandage</li>
              <li>Partner: Rising Spaces</li>
              <li>Authority: PMRDA</li>
              <li>Total Area: 5 Acres</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <div className="flex items-center space-x-2">
            <Phone className="w-4 h-4" />
            <span>+91 800 733 7788</span>
              </div>
              <div className="flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>Near Takve, Pune</span>
              </div>
              <div className="flex items-center space-x-2">
            <Mail className="w-4 h-4" />
            <span>info@prakriti.com</span>
              </div>
            </div>
          </div>
            </div>
            
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Prakriti. All rights reserved. | Crafted with care by 
                    <a 
                        href="https://digitalizetheglobe.com/" 
                        className="text-[#d84a48] hover:text-white transition ml-1"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Digitalize The Globe
                    </a>.</p>
          <div className="mt-2 text-sm">
            🌿 EK NA PLOT, EK NAYI KAHANI, EK NAYA SAFAR 🌿
          </div>
            </div>
          </div>
        </footer>

        {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href="tel:8378966777"
          className="flex items-center justify-center text-white w-14 h-14 rounded-full shadow-lg transform hover:scale-110 transition duration-300"
          style={{backgroundColor: '#004d1f'}}
          aria-label="Call Now"
        >
          <Phone size={24} />
        </a>
      </div>
    </div>
  );
};

export default PrakritiLanding;