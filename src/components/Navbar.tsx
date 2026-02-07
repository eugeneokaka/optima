import Link from 'next/link';
import { Phone, Menu, X, Sun } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Phone number from the website: +233 (0) 50 502 3472
  const phoneNumber = "+233 50 502 3472";

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm transition-all duration-300">
      <div className="container-custom">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <Sun className="w-10 h-10 text-optima-orange animate-spin-slow group-hover:text-amber-500 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 bg-optima-green rounded-full opacity-80" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-bold text-optima-blue tracking-tight">Optima</span>
              <span className="text-xs font-semibold text-optima-green uppercase tracking-wider">Solar Systems</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 xl:gap-8">
            {/* <Link href="#home" className="text-gray-700 hover:text-optima-blue font-medium transition-colors">Home</Link> */}
            {/* <Link href="#residential" className="text-gray-700 hover:text-optima-blue font-medium transition-colors">Residential</Link>
            <Link href="#commercial" className="text-gray-700 hover:text-optima-blue font-medium transition-colors">Business</Link>
            <Link href="#irrigation" className="text-gray-700 hover:text-optima-blue font-medium transition-colors">Irrigation</Link> */}
          
            <Link href="#contact" className="btn-primary flex items-center gap-2">
              <Phone size={18} />
              <span>{phoneNumber}</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-optima-blue transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg animate-fade-in">
          <div className="flex flex-col p-4 space-y-4">
            <Link href="#home" className="text-lg font-medium text-gray-800 p-2 hover:bg-gray-50 rounded" onClick={() => setIsOpen(false)}>Home</Link>
            <Link href="#residential" className="text-lg font-medium text-gray-800 p-2 hover:bg-gray-50 rounded" onClick={() => setIsOpen(false)}>Residential</Link>
            <Link href="#commercial" className="text-lg font-medium text-gray-800 p-2 hover:bg-gray-50 rounded" onClick={() => setIsOpen(false)}>Business</Link>
            <Link href="#irrigation" className="text-lg font-medium text-gray-800 p-2 hover:bg-gray-50 rounded" onClick={() => setIsOpen(false)}>Irrigation</Link>
             <Link href="#payg" className="text-lg font-medium text-gray-800 p-2 hover:bg-gray-50 rounded" onClick={() => setIsOpen(false)}>Financing</Link>
            <Link href="#contact" className="btn-primary w-full flex justify-center items-center gap-2 text-center" onClick={() => setIsOpen(false)}>
              <Phone size={18} />
              Call Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
