import { ArrowRight, Zap, Home, CreditCard } from "lucide-react";

export default function PricingSection() {
  return (
    <section className="relative py-10 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')"
          }}
        ></div>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/70"></div>
        {/* Green overlay to match the nature theme */}
        {/* <div className="absolute inset-0 bg-green-900/40"></div> */}
      </div>
      
      <div className="container mx-auto px-6 relative z-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-green-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
            <Zap className="w-4 h-4" />
            <span>LIMITED TIME OFFER</span>
          </div>
          <h2 className="text-5xl md:text-5xl font-black text-white mb-4 leading-tight drop-shadow-2xl">
            Pre-Launch
            <span className="block text-green-400">
              Special Pricing
            </span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto drop-shadow-lg">
            Secure your dream property with our exclusive early-bird rates
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid lg:grid-cols-3 gap-10 mb-20">
          {/* Rate Card */}
          <div className="group relative">
            {/* <div className="absolute inset-0 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div> */}
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Home className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">Per Sqft Rate</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black text-green-300 drop-shadow-lg">₹1,199</span>
                  <div className="text-gray-200 mt-2">per square foot</div>
                </div>
                <div className="h-1 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Budget Card - Featured */}
          <div className="group relative transform lg:scale-110">
            {/* <div className="absolute inset-0 bg-emerald-500 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div> */}
            <div className="relative bg-white/15 backdrop-blur-lg border-2 border-emerald-400/60 rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  MOST POPULAR
                </div>
              </div>
              <div className="text-center pt-4">
                <div className="w-16 h-16 bg-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CreditCard className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">Starting Budget</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black text-emerald-300 drop-shadow-lg">14.50</span>
                  <div className="text-gray-200 mt-2">Lacs onwards</div>
                </div>
                <div className="h-1 bg-emerald-500 rounded-full"></div>
              </div>
            </div>
          </div>

          {/* Infrastructure Card */}
          <div className="group relative">
            {/* <div className="absolute inset-0 bg-teal-600 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div> */}
            <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 hover:transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">Infrastructure</h3>
                <div className="mb-6">
                  <span className="text-5xl font-black text-teal-300 drop-shadow-lg">₹99K</span>
                  <div className="text-gray-200 mt-2">One-time cost</div>
                </div>
                <div className="h-1 bg-teal-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        {/* <div className="text-center mt-12">
          <button className="group relative inline-flex items-center space-x-3 bg-green-500 text-white px-12 py-4 rounded-full text-lg font-bold hover:shadow-2xl hover:shadow-green-500/50 transform hover:scale-105 transition-all duration-300 shadow-xl hover:bg-green-600">
            <span>Reserve Your Plot Today</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </button>
        </div> */}
      </div>
    </section>
  );
}