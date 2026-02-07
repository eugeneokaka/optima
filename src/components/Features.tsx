import { Truck, ShieldCheck, Wallet, Globe, Sun, Zap } from 'lucide-react';

const features = [
  {
    icon: <Wallet className="w-8 h-8 text-optima-blue" />,
    title: "Flexible PAYG Financing",
    description: "Start your solar journey with a small deposit and pay the rest in affordable monthly installments."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-optima-green" />,
    title: "Comprehensive Insurance",
    description: "Protect your investment with full solar insurance coverage, exclusive to Optima Solar Systems."
  },
  {
    icon: <Globe className="w-8 h-8 text-optima-orange" />,
    title: "Order from UK/Abroad",
    description: "Living abroad? Order from the UK and we'll professionally install it at your home in Ghana."
  },
  {
    icon: <Zap className="w-8 h-8 text-yellow-500" />,
    title: "24/7 Reliable Power",
    description: "Say goodbye to 'Dumsor' and unstable grids. Enjoy uninterrupted power day and night."
  }
];

export default function Features() {
  return (
    <section id="payg" className="py-24 bg-zinc-50 scroll-mt-24">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-optima-blue font-bold text-3xl md:text-4xl mb-4">Why Choose Optima?</h2>
          <p className="text-gray-600 text-lg">
            We are one of Ghana's most trusted solar companies, offering premium products from Longi, Jinko, and BYD.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
              <div className="mb-6 bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Irrigation & Commercial Callout */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
            <div className="bg-optima-blue rounded-3xl p-8 md:p-12 relative overflow-hidden text-white flex flex-col justify-center">
              <div className="relative z-10">
                <Sun className="mb-6 text-optima-orange w-12 h-12" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Solar Water Pumps & Irrigation</h3>
                <p className="text-blue-100 mb-8 max-w-sm">
                  Empower your agribusiness. Save money on fuel and ensure reliable water supply for farms.
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 text-white font-bold hover:gap-3 transition-all">
                  Learn More <Truck size={18} />
                </a>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            </div>

             <div className="bg-gray-900 rounded-3xl p-8 md:p-12 relative overflow-hidden text-white flex flex-col justify-center">
              <div className="relative z-10">
                <Zap className="mb-6 text-optima-green w-12 h-12" />
                <h3 className="text-2xl md:text-3xl font-bold mb-4">Commercial Solutions</h3>
                <p className="text-gray-400 mb-8 max-w-sm">
                  Reduce operational costs for offices, hotels, and schools. Systems from 5kW to 50kW available.
                </p>
                <a href="#contact" className="inline-flex items-center gap-2 text-white font-bold hover:gap-3 transition-all">
                  Get a Business Quote <Truck size={18} />
                </a>
              </div>
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-optima-orange/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>
        </div>
      </div>
    </section>
  );
}
