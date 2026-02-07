import Link from 'next/link';
import { Battery, Zap, ChevronRight, Globe } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-optima-blue to-blue-900 text-white overflow-hidden pt-20">
      <div className="absolute inset-0 bg-black/20" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-optima-orange/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-optima-green/20 rounded-full blur-3xl" />

      <div className="container-custom relative z-10 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 animate-slide-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
            <Zap className="text-optima-orange fill-optima-orange" size={20} />
            <span className="font-semibold text-sm tracking-wide uppercase">Trusted Solar Energy Solutions</span>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            Reliable Power <br />
            <span className="text-optima-orange">24/7, Anytime.</span>
          </h1>
          
          <p className="text-xl text-blue-100 max-w-xl leading-relaxed">
            Power your home or business with premium solar solutions. 
            Flexible <strong>Pay-As-You-Go</strong> plans and comprehensive solar insurance available. 
            Seamless installation countrywide.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="#contact" className="btn-primary text-center flex items-center justify-center gap-2 group">
              Get a Free Quote
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
            <Link href="#products" className="btn-secondary text-center">
              View Solar Plans
            </Link>
          </div>

          <div className="pt-8 flex flex-col gap-4 text-sm font-medium text-blue-200">
             <div className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-white/10 max-w-md">
                <Globe className="text-optima-green shrink-0" size={24} />
                <div>
                   <span className="text-white font-bold block">International Orders Accepted</span>
                   <span className="text-xs opacity-80">Seamless service for customers worldwide.</span>
                </div>
             </div>
             
             <div className="flex items-center gap-8">
                <div className="flex items-center gap-2">
                  <Battery className="text-optima-green" />
                  <span>Longi, Jinko & BYD Systems</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-optima-green animate-pulse" />
                  <span>Serving You Countrywide</span>
                </div>
             </div>
          </div>
        </div>

        <div className="relative animate-fade-in delay-200 hidden lg:block">
           {/* Abstract representation of a solar home/installation */}
           <div className="relative w-full h-[500px] bg-gradient-to-tr from-white/5 to-white/20 rounded-2xl backdrop-blur-md border border-white/10 p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500 flex flex-col justify-between">
              
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-center opacity-40 rounded-2xl mix-blend-overlay"></div>

              <div className="relative z-10 p-6 bg-black/40 backdrop-blur-md rounded-xl border border-white/10 self-start">
                  <h3 className="text-white font-bold text-lg">Solar for Homes</h3>
                  <p className="text-gray-300 text-sm">3kW - 10kW Systems</p>
              </div>

               <div className="relative z-10 self-end">
                  <div className="bg-white text-optima-blue p-4 rounded-xl shadow-xl flex items-center gap-4 max-w-xs">
                     <div className="bg-green-100 p-3 rounded-full">
                       <Zap className="text-optima-green" size={24} />
                     </div>
                     <div>
                       <p className="text-xs font-bold uppercase text-gray-500">Monthly Savings</p>
                       <p className="text-lg font-bold">Cut Bills by 80%</p>
                     </div>
                  </div>
               </div>
           </div>
        </div>
      </div>
    </section>
  );
}
