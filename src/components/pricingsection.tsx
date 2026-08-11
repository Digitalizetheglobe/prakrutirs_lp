import { Zap, Home, CreditCard } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="relative py-16 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"
          }}
        ></div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center space-x-2 bg-green-600/90 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg backdrop-blur-md border border-green-400/30">
            <Zap className="w-4 h-4 text-yellow-300" />
            <span>LIMITED TIME OFFER</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
            Pre-Launch{" "}
            <span className="text-green-400 block md:inline">
              Special Pricing
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-lg">
            Secure your dream property with our exclusive early-bird rates
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-stretch mb-10">
          {/* Rate Card */}
          <div className="group relative flex flex-col justify-between bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:border-green-400/50 hover:bg-white/15 transition-all duration-300 shadow-2xl hover:scale-[1.02]">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/90 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">Per Sqft Rate</h3>
              <div className="mb-6">
                <span className="text-5xl font-black text-green-300 drop-shadow-lg">₹1,699</span>
                <div className="text-gray-200 mt-2 font-medium">per square foot</div>
              </div>
              <div className="h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full opacity-80"></div>
            </div>
          </div>

          {/* Budget Card - Featured */}
          <div className="group relative flex flex-col justify-between bg-white/15 backdrop-blur-md border-2 border-emerald-400/70 rounded-3xl p-8 hover:border-emerald-400 hover:bg-white/20 transition-all duration-300 shadow-2xl hover:scale-[1.02]">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-emerald-500 text-white px-6 py-1.5 rounded-full text-xs md:text-sm font-bold shadow-lg uppercase tracking-wider">
                MOST POPULAR
              </div>
            </div>
            <div className="text-center pt-2">
              <div className="w-16 h-16 bg-emerald-500/90 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <CreditCard className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">Starting Budget</h3>
              <div className="mb-6">
                <span className="text-5xl font-black text-emerald-300 drop-shadow-lg">₹19.50</span>
                <div className="text-gray-200 mt-2 font-medium">Lakhs onwards</div>
              </div>
              <div className="h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full opacity-80"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}