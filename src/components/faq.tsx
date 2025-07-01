import React, { useState } from 'react';
import { ChevronDown, Search, Phone, Mail } from 'lucide-react';

const SimpleFAQ = () => {
  const [openItems, setOpenItems] = useState(new Set([0]));
  const [searchTerm, setSearchTerm] = useState('');
   const [isVisible, setIsVisible] = useState({ location: false });
  const faqs = [
    {
      q: "What is the best time to visit Prakriti?",
      a: "The best time to visit is during monsoon season (June-September) for waterfalls and post-monsoon (October-February) for pleasant weather."
    },
    {
      q: "How do I reach Prakriti Nature Camp?",
      a: "We're located 45km from the nearest railway station. We provide pickup services and detailed directions upon booking."
    },
    {
      q: "What activities are included?",
      a: "Our packages include nature walks, waterfall rappelling, rock climbing, bird watching, photography sessions, and campfire evenings."
    },
    {
      q: "What should I pack?",
      a: "Pack comfortable trekking shoes, quick-dry clothing, rain gear, sunscreen, and personal medications. We provide camping equipment and meals."
    },
    {
      q: "Are there accommodation options?",
      a: "Yes! We offer eco-friendly cottages, traditional tents, and luxury glamping with organic meals and basic amenities."
    },
    {
      q: "Is it safe for children and elderly?",
      a: "Absolutely! We have age-appropriate activities and easy trails with experienced guides ensuring safety at all times."
    },
    {
      q: "What is your cancellation policy?",
      a: "Full refund if cancelled 7 days before, 50% refund for 3-7 days prior, no refund for same-day cancellations."
    },
    {
      q: "Do you provide vegetarian meals?",
      a: "Yes! We specialize in organic, locally-sourced vegetarian cuisine. Vegan and special dietary requirements can be accommodated."
    }
  ];

  const [showAll, setShowAll] = useState(false);

  const filteredFaqs = faqs.filter(faq => 
    faq.q.toLowerCase().includes(searchTerm.toLowerCase()) || 
    faq.a.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const visibleFaqs = showAll ? filteredFaqs : filteredFaqs.slice(0, 4);

  const toggleItem = (index) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
         
             <h2 className="text-5xl md:text-5xl font-black text-gray/900 mb-4 leading-tight drop-shadow-2xl">
  Frequently Asked <span className=" text-green-400"> Questions</span>
          </h2>
           <div className={`h-1 w-32 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mb-6 rounded-full transition-all duration-1000 ${
              isVisible.location ? 'scale-100' : 'scale-0'
            }`}></div>
          <p className="text-gray-600 text-lg">
            Get answers to all your questions about Prakriti Nature Camp
          </p>
        </div>

        {/* Search */}
       

        {/* FAQ Items */}
        <div className="space-y-4">
          {visibleFaqs.map((faq, index) => {
            const isOpen = openItems.has(index);
            return (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-gray-200">
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left focus:outline-none focus:ring-2 focus:ring-green-500 rounded-lg"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-800 pr-4">
                      {faq.q}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Show More/Less Button */}
        {filteredFaqs.length > 4 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-md"
            >
              {showAll ? 'Show Less' : `Show ${filteredFaqs.length - 4} More Questions`}
            </button>
          </div>
        )}

        {filteredFaqs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No questions found. Try a different search term.</p>
          </div>
        )}

        {/* Contact Section */}
        {/* <div className="mt-16 bg-green-600 rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
          <p className="text-lg mb-6 opacity-90">
            Our team is here to help you plan your perfect nature getaway
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center space-x-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              <Phone className="w-5 h-5" />
              <span>Call Now</span>
            </button>
            <button className="flex items-center justify-center space-x-2 bg-green-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-800 transition-colors">
              <Mail className="w-5 h-5" />
              <span>Email Us</span>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default SimpleFAQ;