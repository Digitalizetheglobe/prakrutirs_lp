import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Lock, Eye, FileText, Mail, Phone } from 'lucide-react';
import Navbar from '../components/Navbar';
import logo from '../assets/1_Black.png';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Add or update robots meta tag for privacy policy page
    let robotsMeta = document.querySelector('meta[name="robots"]');
    if (robotsMeta) {
      robotsMeta.setAttribute('content', 'noindex, nofollow');
    } else {
      robotsMeta = document.createElement('meta');
      robotsMeta.setAttribute('name', 'robots');
      robotsMeta.setAttribute('content', 'noindex, nofollow');
      document.head.appendChild(robotsMeta);
    }

    // Update canonical URL for privacy policy page
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', 'https://codenameprakriti.com/privacy-policy');
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', 'https://codenameprakriti.com/privacy-policy');
      document.head.appendChild(canonicalLink);
    }

    // Cleanup: restore default robots tag and canonical URL when component unmounts
    return () => {
      const metaTag = document.querySelector('meta[name="robots"]');
      if (metaTag) {
        metaTag.setAttribute('content', 'index, follow');
      }
      const canonical = document.querySelector('link[rel="canonical"]');
      if (canonical) {
        canonical.setAttribute('href', 'https://codenameprakriti.com');
      }
    };
  }, []);
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-green-100 rounded-full">
                <Shield className="w-12 h-12 text-green-600" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-gray-600 text-lg">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          {/* Content */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8">
            
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Lock className="w-6 h-6 mr-2 text-green-600" />
                Introduction
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Prakriti, we are committed to protecting your privacy and ensuring the security of your personal information. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our 
                website or interact with our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our website, you consent to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <Eye className="w-6 h-6 mr-2 text-green-600" />
                Information We Collect
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Personal Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We may collect personal information that you voluntarily provide to us when you:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 ml-4">
                    <li>Fill out enquiry forms on our website</li>
                    <li>Contact us via email or phone</li>
                    <li>Subscribe to our newsletter or updates</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    This information may include your name, email address, phone number, postal address, and any other 
                    information you choose to provide.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Automatically Collected Information</h3>
                  <p className="text-gray-700 leading-relaxed">
                    When you visit our website, we may automatically collect certain information about your device, including:
                  </p>
                  <ul className="list-disc list-inside text-gray-700 mt-2 space-y-1 ml-4">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on pages</li>
                    <li>Referring website addresses</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <FileText className="w-6 h-6 mr-2 text-green-600" />
                How We Use Your Information
              </h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We use the information we collect for various purposes, including:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>To respond to your enquiries and provide customer service</li>
                <li>To send you information about our projects, promotions, and updates</li>
                <li>To improve our website and user experience</li>
                <li>To analyze website usage and trends</li>
                <li>To comply with legal obligations</li>
                <li>To protect our rights and prevent fraud</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information Sharing and Disclosure</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                We do not sell, trade, or rent your personal information to third parties. We may share your information 
                only in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>With service providers who assist us in operating our website and conducting our business</li>
                <li>When required by law or to respond to legal process</li>
                <li>To protect our rights, property, or safety, or that of our users</li>
                <li>In connection with a merger, acquisition, or sale of assets</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information 
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over 
                the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Request correction of inaccurate or incomplete information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to or restrict the processing of your information</li>
                <li>Withdraw consent at any time where we rely on consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-gray-700 leading-relaxed">
                We may use cookies and similar tracking technologies to track activity on our website and store certain 
                information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. 
                However, if you do not accept cookies, you may not be able to use some portions of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Third-Party Links</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices 
                or content of these external sites. We encourage you to review the privacy policies of any third-party 
                sites you visit.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Children's Privacy</h2>
              <p className="text-gray-700 leading-relaxed">
                Our website is not intended for children under the age of 18. We do not knowingly collect personal 
                information from children. If you believe we have collected information from a child, please contact us 
                immediately.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the 
                new Privacy Policy on this page and updating the "Last updated" date. You are advised to review this 
                Privacy Policy periodically for any changes.
              </p>
            </section>

            <section className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or wish to exercise your rights, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-gray-700">
                  <Mail className="w-5 h-5 mr-3 text-green-600" />
                  <a href="mailto:info@prakriti.com" className="hover:text-green-600 transition-colors">
                    info@prakriti.com
                  </a>
                </div>
                <div className="flex items-center text-gray-700">
                  <Phone className="w-5 h-5 mr-3 text-green-600" />
                  <a href="tel:+918007337788" className="hover:text-green-600 transition-colors">
                    +91 800 733 7788
                  </a>
                </div>
              </div>
            </section>

          </div>

          {/* Back to Home Link */}
          <div className="text-center mt-8">
            <Link
              to="/"
              className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 border-t-4 border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Prakriti. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;

