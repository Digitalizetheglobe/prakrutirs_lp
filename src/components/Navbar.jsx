import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, Menu, X } from 'lucide-react';
import logo from '../assets/1_Black.png'; // update path to your logo
import { submitLead } from '../services/leadService';

export default function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formLoading, setFormLoading] = useState(false);
  const [formError, setFormError] = useState('');
  const [form, setForm] = useState({ name: '', number: '', email: '', message: '' });
  const [isRobotChecked, setIsRobotChecked] = useState(false);
  const [isConsentChecked, setIsConsentChecked] = useState(false);

  // Helper to allow only digits in number input
  const handleNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-digits
    setForm(f => ({ ...f, number: value }));
  };

  // Helper to check if number is valid (10 digits)
  const isNumberValid = form.number.length === 10;

  // Helper to check if email contains "gmail.com"
  const isEmailValid = form.email.toLowerCase().includes('gmail.com');

  // Handle form submission with API
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate required fields: name, number, and email
    if (!form.name.trim() || !isNumberValid || !isEmailValid) return;

    setFormLoading(true);
    setFormError('');

    try {
      await submitLead({
        name: form.name,
        phone: form.number,
        email: form.email,
        message: form.message,
        formSource: 'Navbar Modal Enquiry',
      });

      setFormSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setIsModalOpen(false);
        setFormSuccess(false);
        setFormLoading(false);
        setForm({ name: '', number: '', email: '', message: '' });
        setIsRobotChecked(false);
        setIsConsentChecked(false);
      }, 2000);

    } catch (error) {
      console.error('Form Submission Error:', error);
      setFormError('Failed to send enquiry. Please try again or call us directly.');
      setFormLoading(false);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-[999] shadow-md">
        <div className="container mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center shrink-0">
            <img
              src={logo}
              alt="Prakriti Logo"
              className="h-10 md:h-12 lg:h-16 w-auto object-contain"
              style={{ maxWidth: '130px' }}
            />
          </div>

          {/* Desktop & Tablet Links */}
          <div className="hidden md:flex items-center space-x-2 md:space-x-3 lg:space-x-6 text-xs md:text-sm lg:text-base font-medium whitespace-nowrap">
            <a href="#about" className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap">About</a>
            <a href="#layout" className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap">Plot Layout</a>
            <a href="#amenities" className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap">Amenities</a>
            <a href="#gallery" className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap">Gallery</a>
            <a href="#construction" className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap">Site Progress</a>
            <a href="#location" className="text-gray-700 hover:text-green-600 transition-colors whitespace-nowrap">Location</a>
          </div>

          {/* Enquire Button (Desktop & Tablet) */}
          <a
            className="hidden md:inline-flex items-center justify-center text-white px-3 md:px-4 lg:px-6 py-1.5 md:py-2 rounded-full hover:shadow-lg transform hover:scale-105 transition-all text-xs md:text-sm lg:text-base font-semibold cursor-pointer whitespace-nowrap shrink-0"
            style={{ backgroundColor: '#004d1f' }}
            onClick={() => setIsModalOpen(true)}
            role="button"
            tabIndex={0}
          >
            Enquire Now!
          </a>

          {/* Mobile Controls */}
          <div className="flex items-center space-x-2 md:hidden">
            <a
              className="text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-sm transition-all cursor-pointer whitespace-nowrap"
              style={{ backgroundColor: '#004d1f' }}
              onClick={() => setIsModalOpen(true)}
              role="button"
              tabIndex={0}
            >
              Enquire Now!
            </a>
            <button
              className="text-gray-800 p-1.5 focus:outline-none rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-800" /> : <Menu className="w-6 h-6 text-gray-800" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-lg shadow-2xl border-t border-gray-100 px-6 py-5 space-y-3.5 transition-all">
            <a href="#about" className="block text-gray-800 font-medium hover:text-green-600 border-b border-gray-100 pb-2 transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>About</a>
            <a href="#layout" className="block text-gray-800 font-medium hover:text-green-600 border-b border-gray-100 pb-2 transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>Plot Layout</a>
            <a href="#amenities" className="block text-gray-800 font-medium hover:text-green-600 border-b border-gray-100 pb-2 transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>Amenities</a>
            <a href="#gallery" className="block text-gray-800 font-medium hover:text-green-600 border-b border-gray-100 pb-2 transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>Gallery</a>
            <a href="#construction" className="block text-gray-800 font-medium hover:text-green-600 border-b border-gray-100 pb-2 transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>Site Progress</a>
            <a href="#location" className="block text-gray-800 font-medium hover:text-green-600 border-b border-gray-100 pb-2 transition-colors text-sm" onClick={() => setIsMobileMenuOpen(false)}>Location</a>
            <a
              className="w-full text-center block text-white font-semibold py-2.5 rounded-full shadow-md transition-all cursor-pointer text-sm mt-2"
              style={{ backgroundColor: '#004d1f' }}
              onClick={() => {
                setIsModalOpen(true);
                setIsMobileMenuOpen(false);
              }}
              role="button"
              tabIndex={0}
            >
              Enquire Now!
            </a>
          </div>
        )}
      </nav>

      {/* MODAL */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-black bg-opacity-50 px-4"
          onClick={(e) => {
            if (e.target === e.currentTarget && !formLoading) {
              setIsModalOpen(false);
              setFormError('');
              setFormSuccess(false);
              setIsRobotChecked(false);
              setIsConsentChecked(false);
            }
          }}
        >
          <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-md relative animate-fadeIn">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 text-2xl font-bold"
              onClick={() => {
                setIsModalOpen(false);
                setFormError('');
                setFormSuccess(false);
                setIsRobotChecked(false);
                setIsConsentChecked(false);
              }}
              aria-label="Close"
              disabled={formLoading}
            >
              &times;
            </button>
            
            {formSuccess ? (
              <div className="flex flex-col items-center justify-center pt-8 pb-6">
                <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-bold mb-2 text-green-700">Enquiry Sent!</h3>
                <p className="text-gray-600 text-center">Thank you for your interest. We'll get in touch soon.</p>
              </div>
            ) : (
              <form className="space-y-6 pt-2 pb-2" onSubmit={handleSubmit}>
                <h3 className="text-2xl font-bold mb-4 text-green-700">Enquire Now</h3>
                
                {formError && (
                  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                    {formError}
                  </div>
                )}

                <div>
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder:text-black"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    required
                    disabled={formLoading}
                  />
                </div>
                
                <div>
                  <input
                    type="tel"
                    placeholder="Number"
                    maxLength={10}
                    pattern="\d{10}"
                    className={`w-full border ${isNumberValid || form.number.length === 0 ? 'border-gray-300' : 'border-red-500'} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder:text-black`}
                    value={form.number}
                    onChange={handleNumberChange}
                    required
                    disabled={formLoading}
                  />
                  {!isNumberValid && form.number.length > 0 && (
                    <p className="text-red-500 text-xs mt-1">Please enter a valid 10-digit number.</p>
                  )}
                </div>
                
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className={`w-full border ${isEmailValid || form.email.length === 0 ? 'border-gray-300' : 'border-red-500'} rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder:text-black`}
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    
                    disabled={formLoading}
                  />
                  {!isEmailValid && form.email.length > 0 && (
                    <p className="text-red-500 text-xs mt-1">Email must contain "gmail.com".</p>
                  )}
                </div>
                
                <div>
                  <textarea
                    rows={2}
                    placeholder="Message"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 placeholder:text-black"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    
                    disabled={formLoading}
                  />
                </div>
                
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="consent-checkbox"
                    checked={isConsentChecked}
                    onChange={e => setIsConsentChecked(e.target.checked)}
                    className="mt-1 mr-2 w-4 h-4 text-[#00274d] border-gray-300 rounded focus:ring-2 focus:ring-green-400"
                    required
                  />
                  <label htmlFor="consent-checkbox" className="text-sm text-gray-700">
                    Yes, I consent to the{' '}
                    <Link 
                      to="/privacy-policy" 
                      className="text-[#00274d] hover:text-[#00444d] underline"
                    >
                      Privacy Policy
                    </Link>
                    {' '}and{' '}
                    <a 
                      href="https://risingspaces.in/terms-conditions" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#00274d] hover:text-[#00444d] underline"
                    >
                      Terms and Conditions
                    </a>
                    .
                  </label>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={!form.name.trim() || !isNumberValid || !isEmailValid || !isConsentChecked || formLoading}
                >
                  {formLoading ? 'Sending...' : 'Submit'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}