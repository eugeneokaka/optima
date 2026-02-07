import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-optima-orange text-xl font-bold">O</div>
              <span className="text-2xl font-bold">Optima<span className="text-optima-green text-sm block font-normal">Solar Systems</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              We provide affordable, premium solar panels and installation in Ghana. Order from the UK/abroad for your home in Ghana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-optima-orange">Quick Links</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} /> Home</a></li>
              <li><a href="#residential" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} /> Residential Solar</a></li>
              <li><a href="#commercial" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} /> Commercial Solar</a></li>
              <li><a href="#irrigation" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} /> Pumps & Irrigation</a></li>
              <li><a href="#payg" className="hover:text-white transition-colors flex items-center gap-2"><ArrowRight size={14} /> PAYG Financing</a></li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-optima-orange">Serving Ghana</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-center gap-2"><MapPin size={16} className="text-optima-green" /> Accra</li>
              <li className="flex items-center gap-2"><MapPin size={16} className="text-optima-green" /> Kumasi</li>
              <li className="flex items-center gap-2"><MapPin size={16} className="text-optima-green" /> Takoradi</li>
              <li className="flex items-center gap-2"><MapPin size={16} className="text-optima-green" /> Cape Coast</li>
              <li className="flex items-center gap-2"><MapPin size={16} className="text-optima-green" /> Tamale</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-6 text-optima-orange">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <Phone className="text-optima-green shrink-0 mt-1" />
                <div>
                   <p className="text-sm text-gray-400">Call / WhatsApp</p>
                   <p className="font-bold text-lg">+233 30 824 9900</p>
                   <p className="font-bold text-lg">+233 50 502 3472</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <Mail className="text-optima-green shrink-0 mt-1" />
                <div>
                   <p className="text-sm text-gray-400">Email Us</p>
                   <p className="font-bold cursor-pointer hover:text-optima-orange">info@optimasolarsystems.com</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Optima Solar Systems. All rights reserved.</p>
          <p>Installs in Ghana • Orders from UK</p>
        </div>
      </div>
    </footer>
  );
}
