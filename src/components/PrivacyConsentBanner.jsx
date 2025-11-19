import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Shield } from 'lucide-react';

const PrivacyConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already consented
    const consent = localStorage.getItem('privacyConsent');
    if (!consent) {
      // Show banner after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('privacyConsent', 'accepted');
    localStorage.setItem('privacyConsentDate', new Date().toISOString());
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('privacyConsent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[1000] bg-white shadow-2xl border-t-2 border-green-600 animate-slideUp">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3 flex-1">
            <div className="p-2 bg-green-100 rounded-full mt-1">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                Privacy & Cookie Consent
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                We use cookies and collect personal information to enhance your experience and provide better service. 
                By continuing to use our website, you consent to our{' '}
                <Link 
                  to="/privacy-policy" 
                  className="text-green-600 hover:text-green-700 underline font-semibold"
                >
                  Privacy Policy
                </Link>
                {' '}and{' '}
                <a 
                  href="https://risingspaces.in/terms-conditions" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-700 underline font-semibold"
                >
                  Terms & Conditions
                </a>
                .
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={handleDecline}
              className="px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-colors"
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className="px-6 py-2 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Accept
            </button>
            <button
              onClick={handleDecline}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyConsentBanner;

