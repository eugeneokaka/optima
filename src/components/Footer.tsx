import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 mb-16 justify-between">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-optima-orange text-xl font-bold">O</div>
              <span className="text-2xl font-bold">Optima<span className="text-optima-green text-sm block font-normal">Solar Systems</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We provide affordable, premium solar panels and installation. Order from anywhere for your home or business.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-optima-orange">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Phone className="text-optima-green shrink-0 mt-1" />
                <div>
                   <p className="text-sm text-gray-400">Call / WhatsApp</p>
                   <p className="font-bold text-lg">+254 102 378 507</p>
                   <p className="font-bold text-lg">0752 813 176</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="text-optima-green shrink-0 mt-1" />
                <div>
                   <p className="text-sm text-gray-400">Email Us</p>
                   <a href="mailto:info@optimasolar.co.ke" className="font-bold cursor-pointer hover:text-optima-orange">info@optimasolar.co.ke</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="text-optima-green shrink-0 mt-1" />
                 <div>
                   <p className="text-sm text-gray-400 mb-2">Visit Us</p>
                   <div className="w-full h-48 rounded-lg overflow-hidden mb-2 border border-gray-700">
                     <iframe 
                       src="https://maps.google.com/maps?q=-1.3276461,36.7890244&t=&z=15&ie=UTF8&iwloc=&output=embed"
                       width="100%" 
                       height="100%" 
                       style={{ border: 0 }} 
                       allowFullScreen 
                       loading="lazy" 
                       referrerPolicy="no-referrer-when-downgrade"
                     ></iframe>
                   </div>
                   <a 
                     href="https://maps.app.goo.gl/QrmWxmacZTWif6hP9" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="text-sm font-bold cursor-pointer hover:text-optima-orange flex items-center gap-1"
                   >
                     View Larger Map
                   </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Optima Solar Systems. All rights reserved.</p>
          <p>Professional Installations Countrywide</p>
        </div>
      </div>
    </footer>
  );
}
